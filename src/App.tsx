import { BrowserRouter } from "react-router-dom";

import { BootScreen } from "@/core/boot/BootScreen";
import { AppRoutes } from "@/core/routes/AppRoutes";
import { ThemeProvider, GlobalStyles } from "@/core/theme";
import { SystemProvider } from "@/core/providers";
import { I18nProvider } from "@/core/i18n";

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <GlobalStyles />

        <SystemProvider>
          <BrowserRouter>
            <BootScreen>
              <AppRoutes />
            </BootScreen>
          </BrowserRouter>
        </SystemProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}
