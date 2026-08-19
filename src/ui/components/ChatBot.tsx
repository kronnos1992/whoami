import { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useI18n } from "@/core/i18n";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 90;
  display: ${({ $open }) => ($open ? "block" : "none")};

  @media (min-width: 769px) {
    display: none;
  }
`;

const Widget = styled.div<{ $open: boolean }>`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    inset: 0;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
`;

const ToggleButton = styled.button<{ $open: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  border: none;
  background: var(--gradient-accent);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 8px 32px -4px var(--color-glow);
  transition: all 0.25s ease;
  align-self: flex-end;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px -4px var(--color-glow);
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${({ $open }) => ($open ? "rotate(90deg)" : "rotate(0)")};
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 1.25rem;
    right: 1.25rem;
    width: 52px;
    height: 52px;
    border-radius: 14px;
  }
`;

const ChatWindow = styled.div<{ $open: boolean }>`
  position: absolute;
  bottom: calc(100% + 12px);
  right: 0;
  width: 400px;
  max-height: 560px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  box-shadow: 0 20px 60px -12px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transform: translateY(${({ $open }) => ($open ? "0" : "8px")});
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;

  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--gradient-accent);
  color: #fff;
  flex-shrink: 0;
`;

const HeaderIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
  flex-shrink: 0;
`;

const HeaderInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 0.95rem;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 0.72rem;
    opacity: 0.85;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 280px;
  max-height: 380px;

  @media (max-width: 768px) {
    max-height: calc(100vh - 140px);
  }
`;

const Msg = styled.div<{ $from: "user" | "assistant" }>`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  max-width: 85%;
  align-self: ${({ $from }) => ($from === "user" ? "flex-end" : "flex-start")};
  animation: ${fadeIn} 0.3s ease;
`;

const Avatar = styled.div<{ $from: "user" | "assistant" }>`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  background: ${({ $from }) =>
    $from === "user" ? "var(--gradient-accent-soft)" : "var(--color-bgAlt)"};
  color: ${({ $from }) =>
    $from === "user" ? "var(--color-primary)" : "var(--color-textSecondary)"};
  border: 1px solid var(--color-border);
`;

const Bubble = styled.div<{ $from: "user" | "assistant" }>`
  padding: 0.65rem 0.9rem;
  border-radius: 14px;
  font-size: 0.85rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;

  background: ${({ $from }) =>
    $from === "user" ? "var(--gradient-accent-soft)" : "var(--color-bgAlt)"};
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-bottom-right-radius: ${({ $from }) => ($from === "user" ? "4px" : "14px")};
  border-bottom-left-radius: ${({ $from }) => ($from === "assistant" ? "4px" : "14px")};
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 0.3rem;
  padding: 0.65rem 0.9rem;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-textMuted);
    animation: ${pulse} 1.2s infinite;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;

const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0 1rem 0.5rem;
`;

const Suggestion = styled.button`
  padding: 0.35rem 0.7rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-textSecondary);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: var(--gradient-accent-soft);
  }
`;

const InputArea = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
  flex-shrink: 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.65rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-bgAlt);
  color: var(--color-text);
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: var(--color-textMuted);
  }

  &:focus {
    border-color: var(--color-primary);
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: var(--gradient-accent);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
  box-shadow: 0 4px 16px -4px var(--color-glow);

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LANG_MAP: Record<string, string> = {
  pt: "Portuguese",
  en: "English",
  fr: "French",
  es: "Spanish",
  zh: "Chinese",
};

function detectLang(text: string): string {
  if (/[\u4e00-\u9fff]/.test(text)) return "Chinese";
  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(text)) return "Japanese";
  if (/[\uac00-\ud7af]/.test(text)) return "Korean";
  if (/[\u0600-\u06ff]/.test(text)) return "Arabic";
  if (/[\u0900-\u097f]/.test(text)) return "Hindi";
  if (/[\u0400-\u04ff]/.test(text)) return "Russian";
  return "English";
}

export function ChatBot() {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const suggestions = [
    t("ui.chat.suggestions.skills"),
    t("ui.chat.suggestions.experience"),
    t("ui.chat.suggestions.projects"),
    t("ui.chat.suggestions.contact"),
  ];

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const userMsg: Message = { role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setLoading(true);

      const langName = LANG_MAP[locale] ?? detectLang(trimmed);
      const langHint = `\n\n[IMPORTANT: The user is writing in ${langName}. You MUST respond in ${langName}.]`;

      const allMessages = [
        ...messages,
        userMsg,
        { role: "user" as const, content: langHint },
      ];

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: allMessages }),
        });

        if (!res.ok) throw new Error("Chat request failed");

        const data = (await res.json()) as { response?: string };
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response ?? "..." },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: t("ui.chat.error"),
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading, locale, t],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      <Overlay $open={open} onClick={() => setOpen(false)} />
      <Widget $open={open}>
        <ChatWindow $open={open}>
          <Header>
            <HeaderIcon>
              <Bot size={20} />
            </HeaderIcon>
            <HeaderInfo>
              <h3>{t("ui.chat.title")}</h3>
              <p>{t("ui.chat.subtitle")}</p>
            </HeaderInfo>
            <CloseButton
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("ui.chat.close")}
            >
              <X size={16} />
            </CloseButton>
          </Header>

          <Messages>
            {messages.length === 0 && !loading && (
              <Suggestions>
                {suggestions.map((s) => (
                  <Suggestion key={s} type="button" onClick={() => send(s)}>
                    {s}
                  </Suggestion>
                ))}
              </Suggestions>
            )}

            {messages.map((msg, i) => (
              <Msg key={i} $from={msg.role}>
                <Avatar $from={msg.role}>
                  {msg.role === "user" ? (
                    <User size={14} />
                  ) : (
                    <Bot size={14} />
                  )}
                </Avatar>
                <Bubble $from={msg.role}>{msg.content}</Bubble>
              </Msg>
            ))}

            {loading && (
              <Msg $from="assistant">
                <Avatar $from="assistant">
                  <Bot size={14} />
                </Avatar>
                <TypingIndicator>
                  <span />
                  <span />
                  <span />
                </TypingIndicator>
              </Msg>
            )}

            <div ref={messagesEnd} />
          </Messages>

          <InputArea onSubmit={handleSubmit}>
            <Input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("ui.chat.placeholder")}
              disabled={loading}
              autoComplete="off"
            />
            <SendButton type="submit" disabled={loading || !input.trim()}>
              <Send size={16} />
            </SendButton>
          </InputArea>
        </ChatWindow>

        <ToggleButton
          $open={open}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? t("ui.chat.close") : t("ui.chat.open")}
        >
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </ToggleButton>
      </Widget>
    </>
  );
}
