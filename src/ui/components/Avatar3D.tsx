import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

const CanvasBox = styled.div`
  position: absolute;
  inset: 0;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
    cursor: grab;
    outline: none;

    &:active {
      cursor: grabbing;
    }

    &:focus-visible {
      box-shadow: inset 0 0 0 2px var(--color-primary);
    }
  }
`;

const ACCENT = 0x8b5cf6;
const STICKER_OFFSET = 0;
const ROTATION_SPEED = 0.0024;
const DRAG_FACTOR = 0.006;
const INERTIA_FACTOR = 0.0025;
const PRISM_RADIUS = 0.9;
const PRISM_HALF_HEIGHT = 0.6;
const INITIALS = "JC";

interface Face {
  centroid: THREE.Vector3;
  shape: THREE.Shape;
}

function normalizeShapeUVs(geometry: THREE.ShapeGeometry) {
  const pos = geometry.getAttribute("position");
  const uv = geometry.getAttribute("uv");
  if (!pos || !uv) return;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < pos.count; i += 1) {
    minX = Math.min(minX, pos.getX(i));
    maxX = Math.max(maxX, pos.getX(i));
    minY = Math.min(minY, pos.getY(i));
    maxY = Math.max(maxY, pos.getY(i));
  }
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  for (let i = 0; i < uv.count; i += 1) {
    uv.setXY(i, (pos.getX(i) - minX) / spanX, (pos.getY(i) - minY) / spanY);
  }
  uv.needsUpdate = true;
}

function makeSolid(color: number, opacity = 1) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
  });
}

function makeInitialsTexture(text: string) {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `700 ${size * 0.38}px system-ui, -apple-system, sans-serif`;
  ctx.fillText(text, size / 2, size / 2 + size * 0.02);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeFaceShape(verts: THREE.Vector3[]): Face {
  const centroid = new THREE.Vector3();
  verts.forEach((vertex) => centroid.add(vertex));
  centroid.divideScalar(verts.length);

  const u = verts[1].clone().sub(verts[0]).normalize();
  const v = new THREE.Vector3().crossVectors(centroid.clone().normalize(), u);

  const pts: Array<[number, number]> = verts.map((vertex) => {
    const offset = vertex.clone().sub(centroid);
    return [offset.dot(u), offset.dot(v)];
  });

  let area = 0;
  for (let i = 0; i < pts.length; i += 1) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % pts.length];
    area += x1 * y2 - x2 * y1;
  }
  const ordered = area >= 0 ? pts : [...pts].reverse();

  const shape = new THREE.Shape();
  ordered.forEach(([x, y], index) => {
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();

  return { centroid, shape };
}

function applySpin(
  quaternion: THREE.Quaternion,
  rotY: number,
  rotX: number,
) {
  const q = new THREE.Quaternion();
  const Y_AXIS = new THREE.Vector3(0, 1, 0);
  const X_AXIS = new THREE.Vector3(1, 0, 0);
  q.setFromAxisAngle(Y_AXIS, rotY);
  quaternion.premultiply(q);
  q.setFromAxisAngle(X_AXIS, rotX);
  quaternion.premultiply(q);
}

export function Avatar3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    let renderer: THREE.WebGLRenderer | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let scene: THREE.Scene | null = null;
    let group: THREE.Group | null = null;
    let raf = 0;
    let disposed = false;
    let paused = prefersReduced || document.hidden;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    const textures: THREE.Texture[] = [];
    const materials: THREE.Material[] = [];
    const disposables: Array<() => void> = [];
    const disposeAll = () => {
      disposed = true;
      disposables.forEach((fn) => fn());
    };

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
    camera.position.set(0, 0, 2.6);
    camera.lookAt(0, 0, 0);

    group = new THREE.Group();
    scene.add(group);

    const angles = Array.from({ length: 6 }, (_, k) => (k * Math.PI) / 3);
    const ringTop = angles.map(
      (a) => new THREE.Vector3(PRISM_RADIUS * Math.cos(a), PRISM_RADIUS * Math.sin(a), PRISM_HALF_HEIGHT),
    );
    const ringBottom = angles.map(
      (a) => new THREE.Vector3(PRISM_RADIUS * Math.cos(a), PRISM_RADIUS * Math.sin(a), -PRISM_HALF_HEIGHT),
    );

    const faces: Face[] = [];
    faces.push(makeFaceShape(ringTop));
    faces.push(makeFaceShape(ringBottom));
    for (let k = 0; k < 6; k += 1) {
      const next = (k + 1) % 6;
      faces.push(
        makeFaceShape([ringTop[k], ringTop[next], ringBottom[next], ringBottom[k]]),
      );
    }

    const initialsTexture = makeInitialsTexture(INITIALS);
    if (initialsTexture) {
      initialsTexture.anisotropy = renderer?.capabilities.getMaxAnisotropy() ?? 1;
      textures.push(initialsTexture);
    }

    faces.forEach((face) => {
      const material = initialsTexture
        ? new THREE.MeshBasicMaterial({ map: initialsTexture, transparent: true, depthWrite: false })
        : makeSolid(ACCENT, 1);
      materials.push(material);

      const geometry = new THREE.ShapeGeometry(face.shape);
      normalizeShapeUVs(geometry);
      const sticker = new THREE.Mesh(geometry, material);

      const offset = face.centroid.length() + STICKER_OFFSET;
      sticker.position.copy(face.centroid).normalize().multiplyScalar(offset);

      const q = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        face.centroid.clone().normalize(),
      );
      sticker.quaternion.copy(q);

      group.add(sticker);
    });

    const resize = () => {
      if (!renderer || !camera || !mount) return;
      const rect = mount.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const io = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting || prefersReduced || document.hidden;
      },
      { threshold: 0.15 },
    );
    io.observe(mount);

    const onVisibility = () => {
      paused = document.hidden || prefersReduced;
    };
    document.addEventListener("visibilitychange", onVisibility);

    const el = renderer.domElement;
    const pointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velocityX = 0;
      velocityY = 0;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
    };
    const pointerMove = (e: PointerEvent) => {
      if (!dragging || !group) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      applySpin(group.quaternion, dx * DRAG_FACTOR, dy * DRAG_FACTOR);
      velocityY = dx * INERTIA_FACTOR;
      velocityX = dy * INERTIA_FACTOR;
    };
    const pointerUp = () => {
      dragging = false;
    };
    el.addEventListener("pointerdown", pointerDown);
    el.addEventListener("pointermove", pointerMove);
    el.addEventListener("pointerup", pointerUp);
    el.addEventListener("pointercancel", pointerUp);
    el.addEventListener("pointerleave", pointerUp);

    el.tabIndex = 0;
    const onKey = (e: KeyboardEvent) => {
      let rotY = 0;
      let rotX = 0;
      if (e.key === "ArrowLeft") {
        rotY = -0.35;
        velocityY = -0.012;
      } else if (e.key === "ArrowRight") {
        rotY = 0.35;
        velocityY = 0.012;
      } else if (e.key === "ArrowUp") {
        rotX = 0.35;
        velocityX = 0.012;
      } else if (e.key === "ArrowDown") {
        rotX = -0.35;
        velocityX = -0.012;
      } else {
        return;
      }
      e.preventDefault();
      if (group) applySpin(group.quaternion, rotY, rotX);
    };
    el.addEventListener("keydown", onKey);

    const tick = () => {
      if (disposed) return;
      raf = requestAnimationFrame(tick);

      if (group) {
        if (dragging) {
          velocityX *= 0.9;
          velocityY *= 0.9;
        } else if (paused) {
          velocityX *= 0.94;
          velocityY *= 0.94;
        } else if (Math.abs(velocityX) > 0.0001 || Math.abs(velocityY) > 0.0001) {
          applySpin(group.quaternion, velocityY, velocityX);
          velocityX *= 0.92;
          velocityY *= 0.92;
        } else {
          applySpin(group.quaternion, ROTATION_SPEED, ROTATION_SPEED * 0.25);
        }
      }
      renderer?.render(scene, camera);
    };
    tick();

    disposables.push(() => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      el.removeEventListener("pointerdown", pointerDown);
      el.removeEventListener("pointermove", pointerMove);
      el.removeEventListener("pointerup", pointerUp);
      el.removeEventListener("pointercancel", pointerUp);
      el.removeEventListener("pointerleave", pointerUp);
      el.removeEventListener("keydown", onKey);
      textures.forEach((t) => t.dispose());
      materials.forEach((m) => m.dispose());
      group?.clear();
      renderer?.dispose();
      if (renderer?.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    });

    return disposeAll;
  }, []);

  return <CanvasBox ref={mountRef} aria-hidden="true" />;
}
