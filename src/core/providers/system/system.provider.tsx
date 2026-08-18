import { useState } from "react";
import { SystemContext } from "./system.context";
import type { SystemState } from "./system.types";

export function SystemProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<SystemState>({
        bootCompleted: false,
        currentModule: "boot",
        status: "booting",
    });

    const setModule = (module: SystemState["currentModule"]) => {
        setState((prev) => ({
            ...prev,
            currentModule: module,
        }));
    };

    const setBootCompleted = (value: boolean) => {
        setState((prev) => ({
            ...prev,
            bootCompleted: value,
            status: value ? "online" : "booting",
        }));
    };

    return (
        <SystemContext.Provider
            value={{
                state,
                setModule,
                setBootCompleted,
            }}
        >
            {children}
        </SystemContext.Provider>
    );
}