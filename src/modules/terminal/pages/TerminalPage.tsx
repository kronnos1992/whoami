import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTerminal } from "../hooks/useTermal";
import { TerminalOutput } from "../components/TerminalOutput";
import { CommandInput } from "../components/TerminalInput";
import { useI18n } from "@/core/i18n";

const Shell = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 64px - 3.5rem);
  min-height: 420px;
  border-radius: 16px;
  overflow: hidden;
  background: #0d0c14;
  color: #e6e4f2;
  border: 1px solid var(--color-border);
  box-shadow: var(--color-shadow);

  @media (max-width: 768px) {
    height: calc(100dvh - 64px - 2.5rem);
    min-height: 360px;
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #17151f;
  border-bottom: 1px solid #262238;

  .dots {
    display: flex;
    gap: 0.45rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .dot.red { background: #f87171; }
  .dot.yellow { background: #fbbf24; }
  .dot.green { background: #34d399; }

  .title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: #868098;
    margin-left: 0.75rem;
    letter-spacing: 0.04em;
  }
`;

const StatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.25rem;
  background: #17151f;
  border-top: 1px solid #262238;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #868098;

  span:last-child {
    color: var(--color-primary);
  }
`;

export default function TerminalPage() {
  const { t, tr } = useI18n();
  const { history, execute, handleHistory } = useTerminal();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    <Shell ref={containerRef} tabIndex={-1} aria-label={t("ui.terminal.srLabel")}>
      <h1 className="sr-only">{t("ui.terminal.srHeading")}</h1>
      <TitleBar aria-hidden="true">
        <span className="dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </span>
        <span className="title">{t("ui.terminal.titleBar")}</span>
      </TitleBar>

      <TerminalOutput history={history} />

      <div style={{ padding: "0 1.25rem 1rem" }}>
        <CommandInput onEnter={execute} onHistory={handleHistory} />
      </div>

      <StatusBar aria-hidden="true">
        <span>
          {tr("ui.terminal.statusCount", { count: String(history.length) })}
        </span>
        <span>{t("ui.terminal.statusVersion")}</span>
      </StatusBar>
    </Shell>
  );
}
