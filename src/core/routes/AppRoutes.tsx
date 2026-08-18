import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routeConfig } from "./routeConfig";
import { MainLayout } from "@/core/layout";
import HomePage from "@/modules/home";

const TerminalPage = lazy(() => import("@/modules/terminal"));
const ProjectsPage = lazy(() => import("@/modules/projects"));
const SkillsPage = lazy(() => import("@/modules/skills"));
const AboutPage = lazy(() => import("@/modules/about"));
const ContactPage = lazy(() => import("@/modules/contact"));
const NotFoundPage = lazy(() => import("@/modules/not-found"));

function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "40vh",
        color: "var(--color-textSecondary)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.9rem",
      }}
    >
      A carregar módulo…
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routeConfig.home.path} element={<HomePage />} />
          <Route path={routeConfig.terminal.path} element={<TerminalPage />} />
          <Route path={routeConfig.projects.path} element={<ProjectsPage />} />
          <Route path={routeConfig.skills.path} element={<SkillsPage />} />
          <Route path={routeConfig.about.path} element={<AboutPage />} />
          <Route path={routeConfig.contact.path} element={<ContactPage />} />

          <Route
            path="/profile"
            element={<Navigate to={routeConfig.about.path} replace />}
          />
          <Route
            path="/system-log"
            element={<Navigate to={routeConfig.home.path} replace />}
          />

          <Route path={routeConfig.notFound.path} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
