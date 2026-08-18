import type { ReactNode } from "react";
import { SystemProvider } from "./system/system.provider";

interface AppProvidersProps {
    children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
    return (
        <SystemProvider>
            {children}
        </SystemProvider>
    );
}