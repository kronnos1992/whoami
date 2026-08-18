export type SystemModule =
    | "boot"
    | "dashboard"
    | "terminal"
    | "profile"
    | "projects"
    | "skills"
    | "system-log";

export type SystemStatus = "booting" | "online" | "error";

export interface SystemState {
    bootCompleted: boolean;
    currentModule: SystemModule;
    status: SystemStatus;
}