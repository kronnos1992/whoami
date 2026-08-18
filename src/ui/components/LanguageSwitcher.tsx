import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Globe, Check } from "lucide-react";
import { locales, useI18n } from "@/core/i18n";

const Wrap = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-textSecondary);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

const Menu = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 190px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  box-shadow: var(--color-shadow);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transform: translateY(${({ $open }) => ($open ? "0" : "-6px")});
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 60;
`;

const Option = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  border: none;
  background: ${({ $active }) =>
    $active ? "var(--gradient-accent-soft)" : "transparent"};
  color: var(--color-text);
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: var(--color-bgAlt);
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .short {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--color-textMuted);
  }

  .check {
    color: var(--color-primary);
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.35rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.5rem 0;
  border-radius: 10px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "var(--color-primary)" : "var(--color-border)"};
  background: ${({ $active }) =>
    $active ? "var(--gradient-accent-soft)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-textSecondary)"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const label = t("ui.header.chooseLanguage");

  return (
    <Wrap ref={ref} className={className}>
      <Trigger
        type="button"
        data-testid="language-switcher"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        title={label}
      >
        <Globe size={17} aria-hidden="true" />
      </Trigger>
      <Menu $open={open} role="menu">
        {locales.map((item) => {
          const active = item.code === locale;
          return (
            <Option
              key={item.code}
              type="button"
              role="menuitemradio"
              aria-checked={active}
              $active={active}
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
            >
              <span>
                {item.label}
                <span className="short">{item.short}</span>
              </span>
              {active && <Check size={15} aria-hidden="true" className="check" />}
            </Option>
          );
        })}
      </Menu>
    </Wrap>
  );
}

export function LanguageTabs({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <Tabs
      className={className}
      role="group"
      aria-label={t("ui.header.chooseLanguage")}
    >
      {locales.map((item) => {
        const active = item.code === locale;
        return (
          <Tab
            key={item.code}
            type="button"
            $active={active}
            aria-pressed={active}
            onClick={() => setLocale(item.code)}
          >
            {item.short}
          </Tab>
        );
      })}
    </Tabs>
  );
}
