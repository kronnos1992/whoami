import styled from "styled-components";
import type { ReactNode } from "react";

const TagEl = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.28rem 0.65rem;
  border-radius: 9999px;
  background: var(--gradient-accent-soft);
  border: 1px solid var(--color-border);
  color: var(--color-textSecondary);
  white-space: nowrap;
`;

export function Tag({ children }: { children: ReactNode }) {
  return <TagEl>{children}</TagEl>;
}
