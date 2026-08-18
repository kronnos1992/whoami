import { createContext } from "react";
import type { SystemState } from "./system.types";

interface SystemContextType {
    state: SystemState;
    setModule: (module: SystemState["currentModule"]) => void;
    setBootCompleted: (value: boolean) => void;
}

export const SystemContext = createContext<SystemContextType | null>(null);