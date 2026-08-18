import { useEffect, useRef } from "react";
import styled from "styled-components";
import type { TerminalEntry } from "../types/terminal.types";

type Props = {
  history: TerminalEntry[];
};

const Output = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.88rem;
  line-height: 1.6;
`;

const Line = styled.div<{ $type: TerminalEntry["type"] }>`
  white-space: pre-wrap;
  word-break: break-word;
  color: ${({ $type }) => {
    switch ($type) {
      case "input":
        return "var(--color-text)";
      case "success":
        return "var(--color-success)";
      case "error":
        return "var(--color-error)";
      case "info":
        return "var(--color-secondary)";
      default:
        return "var(--color-textSecondary)";
    }
  }};

  &::selection {
    background: var(--color-primary);
    color: #fff;
  }
`;

export function TerminalOutput({ history }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight });
  }, [history]);

  return (
    <Output ref={ref} aria-live="polite">
      {history.map((entry) => (
        <Line key={entry.id} $type={entry.type}>
          {Array.isArray(entry.content)
            ? entry.content.join("\n")
            : entry.content}
        </Line>
      ))}
    </Output>
  );
}
