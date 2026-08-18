import type { ReactNode } from "react";
import styled from "styled-components";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const SectionEl = styled.section`
  padding: 4.5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export function Section({ id, children, className }: SectionProps) {
  return (
    <SectionEl id={id} className={className}>
      {children}
    </SectionEl>
  );
}
