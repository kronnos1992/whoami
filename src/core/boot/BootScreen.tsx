import { useEffect, useState } from "react";
import { useBootSequence } from "./useBootSequence";
import { TerminalAnimation } from "@/ui/animations/TerminalAnimation";
import { useI18n } from "@/core/i18n";

interface BootScreenProps {
  children: React.ReactNode;
}

export function BootScreen({ children }: BootScreenProps) {
  const { currentStep, progress, isComplete } = useBootSequence();
  const { t, tr } = useI18n();
  const [showContent, setShowContent] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [skipped, setSkipped] = useState(false);

  // Controla a transição suave para o conteúdo
  useEffect(() => {
    if (isComplete || skipped) {
      const fadeTimer = setTimeout(() => setFadingOut(true), 0);
      const showTimer = setTimeout(() => setShowContent(true), 500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(showTimer);
      };
    }
  }, [isComplete, skipped]);

  if (!showContent) {
    return (
      <div className={`boot-screen ${fadingOut ? "fade-out" : ""}`}>
        <div className="boot-container">
          {!fadingOut && <TerminalAnimation />}

          <div className="boot-messages">
            <pre className="boot-message">
              {currentStep?.messageKey
                ? tr(currentStep.messageKey, { name: "Jaime Kiala Coxi" })
                : t("ui.boot.fallback")}
            </pre>

            <div className="boot-progress">
              <div
                className="boot-progress-bar"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>

            <div className="boot-meta">
              <span>JKC OS</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <button
              type="button"
              className="boot-skip"
              onClick={() => setSkipped(true)}
            >
              {t("ui.boot.skip")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
