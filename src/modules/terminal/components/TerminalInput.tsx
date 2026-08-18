import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useI18n } from "@/core/i18n";

type Props = {
  onEnter: (value: string) => void;
  onHistory: (direction: "up" | "down", current: string) => string;
};

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Prompt = styled.span`
  color: var(--color-primary);
  font-weight: 600;
  white-space: nowrap;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  caret-color: var(--color-primary);

  &::placeholder {
    color: var(--color-textMuted);
  }
`;

export function CommandInput({ onEnter, onHistory }: Props) {
  const { t } = useI18n();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEnter(value);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setValue((current) => onHistory("up", current));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setValue((current) => onHistory("down", current));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Prompt aria-hidden="true">jkc@os:~$</Prompt>
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label={t("ui.terminal.inputLabel")}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        placeholder={t("ui.terminal.placeholder")}
      />
    </Form>
  );
}
