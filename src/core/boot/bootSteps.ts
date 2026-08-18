import type { UiKey } from "@/core/i18n";

export interface BootStep {
  id: string;
  messageKey: UiKey;
  duration: number; // ms
  action?: () => Promise<void>;
}

export const bootSteps: BootStep[] = [
  {
    id: "initializing",
    messageKey: "ui.boot.steps.initializing",
    duration: 450,
  },
  {
    id: "loading-config",
    messageKey: "ui.boot.steps.loadingConfig",
    duration: 550,
  },
  {
    id: "mounting-modules",
    messageKey: "ui.boot.steps.mountingModules",
    duration: 500,
  },
  {
    id: "loading-profile",
    messageKey: "ui.boot.steps.loadingProfile",
    duration: 600,
  },
  {
    id: "ready",
    messageKey: "ui.boot.steps.ready",
    duration: 350,
  },
];
