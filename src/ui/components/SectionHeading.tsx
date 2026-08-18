import type { ReactNode } from "react";
import styled from "styled-components";

interface SectionHeadingProps {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

const Wrapper = styled.div<{ $align: "left" | "center" }>`
  margin-bottom: 2.5rem;
  text-align: ${({ $align }) => $align};

  ${({ $align }) =>
    $align === "center" &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const Kicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: var(--gradient-accent-soft);
  border: 1px solid var(--color-border);
  padding: 0.35rem 0.8rem;
  border-radius: 9999px;
  margin-bottom: 1rem;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-primary);
    box-shadow: 0 0 8px var(--color-glow);
  }
`;

const Title = styled.h2`
  margin-bottom: 0.75rem;
`;const Subtitle = styled.p`
  max-width: 640px;
  color: var(--color-textSecondary);
  font-size: 1.05rem;
`;

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const TitleTag = as;
  return (
    <Wrapper $align={align}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <Title as={TitleTag}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
}
