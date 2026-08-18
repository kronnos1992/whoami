import { useState, useEffect } from "react";
import { bootSteps, type BootStep } from "./bootSteps";

interface BootState {
    currentStep: BootStep | null;
    progress: number;
    isComplete: boolean;
}

export function useBootSequence() {
    const [state, setState] = useState<BootState>({
        currentStep: null,
        progress: 0,
        isComplete: false,
    });

    useEffect(() => {
        let mounted = true;

        const runBoot = async () => {
            const total = bootSteps.length;

            for (let i = 0; i < total; i++) {
                if (!mounted) return;

                const step = bootSteps[i];

                setState(prev => ({
                    ...prev,
                    currentStep: step,
                    progress: Math.round(((i + 1) / total) * 100),
                }));

                if (step.action) {
                    await step.action();
                }

                await new Promise(resolve => setTimeout(resolve, step.duration));
            }

            if (mounted) {
                setState({
                    currentStep: null,
                    progress: 100,
                    isComplete: true,
                });
            }
        };

        runBoot();

        return () => {
            mounted = false;
        };
    }, []);

    return state;
}