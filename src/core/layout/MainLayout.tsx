import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContentArea } from "./ContentArea";
import { ScrollToTop } from "./ScrollToTop";
import { useI18n } from "@/core/i18n";

const Shell = styled.div`
  display: flex;
  min-height: 100dvh;
  background:
    radial-gradient(1200px 600px at 80% -10%, var(--color-glow) 0%, transparent 55%),
    radial-gradient(900px 500px at -10% 110%, rgba(34, 211, 238, 0.08) 0%, transparent 55%),
    var(--color-bg);
`;

const RightPanel = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: color-mix(in srgb, var(--color-bg) 85%, transparent);
`;

export function MainLayout() {
  const { t } = useI18n();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t("ui.common.skipToContent")}
      </a>
      <ScrollToTop />
      <Shell>
        <Sidebar />
        <RightPanel>
          <Header />
          <ContentArea id="conteudo">
            <Outlet />
          </ContentArea>
          <Footer />
        </RightPanel>
      </Shell>
    </>
  );
}
