import styled from "styled-components";
import { Home, Terminal } from "lucide-react";
import { ButtonLink } from "@/ui/components";
import { useI18n } from "@/core/i18n";

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 2rem 0;
`;

const Code = styled.div`
  font-family: var(--font-mono);
  font-size: clamp(5rem, 16vw, 9rem);
  font-weight: 700;
  line-height: 1;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.05em;
`;

const Message = styled.p`
  color: var(--color-textSecondary);
  max-width: 460px;
  font-size: 1.05rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <Wrapper>
      <Code aria-hidden="true">404</Code>
      <h1>{t("pages.notFound.title")}</h1>
      <Message>{t("pages.notFound.message")}</Message>
      <Actions>
        <ButtonLink to="/">
          <Home size={16} aria-hidden="true" /> {t("pages.notFound.home")}
        </ButtonLink>
        <ButtonLink to="/terminal" variant="ghost">
          <Terminal size={16} aria-hidden="true" /> {t("pages.notFound.terminal")}
        </ButtonLink>
      </Actions>
    </Wrapper>
  );
}
