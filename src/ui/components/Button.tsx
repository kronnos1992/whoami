import styled from "styled-components";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface ButtonLinkProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  className?: string;
}

const ButtonEl = styled.span<{ $variant: "primary" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  background: ${({ $variant }) =>
    $variant === "primary" ? "var(--gradient-accent)" : "transparent"};
  color: ${({ $variant }) => ($variant === "primary" ? "#fff" : "var(--color-text)")};
  border-color: ${({ $variant }) =>
    $variant === "primary" ? "transparent" : "var(--color-borderStrong)"};
  box-shadow: ${({ $variant }) =>
    $variant === "primary" ? "0 10px 30px -10px var(--color-glow)" : "none"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px -12px var(--color-glow);
  }
`;

export function ButtonLink({
  to,
  href,
  onClick,
  children,
  variant = "primary",
  type = "button",
  className,
}: ButtonLinkProps) {
  const base = (
    <ButtonEl $variant={variant} className={className}>
      {children}
    </ButtonEl>
  );

  if (to) {
    return <Link to={to}>{base}</Link>;
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {base}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className}>
      {base}
    </button>
  );
}
