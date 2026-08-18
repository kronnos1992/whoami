import { useState, type FormEvent } from "react";
import styled from "styled-components";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/ui/components/BrandIcons";
import { profile, socials } from "@/data/profile.data";
import { contactConfig, contactConfigReady } from "@/core/configs/contact.config";
import { Section, SectionHeading, Reveal } from "@/ui/components";
import { useI18n } from "@/core/i18n";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  color: var(--color-text);
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateX(6px);
    color: var(--color-text);
  }

  .icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: var(--gradient-accent-soft);
    border: 1px solid var(--color-border);
    display: grid;
    place-items: center;
    color: var(--color-primary);
    flex-shrink: 0;
  }

  strong {
    display: block;
    font-size: 0.95rem;
  }

  span {
    font-size: 0.82rem;
    color: var(--color-textMuted);
  }
`;

const Form = styled.form`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: var(--color-shadow);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-textSecondary);
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    border-radius: 12px;
    border: 1px solid var(--color-border);
    background: var(--color-bgAlt);
    color: var(--color-text);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-textMuted);
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-glow);
  }
`;

const Submit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  border: none;
  background: var(--gradient-accent);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 12px 32px -12px var(--color-glow);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px -12px var(--color-glow);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Success = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: color-mix(in srgb, var(--color-success) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-success) 35%, transparent);
  color: var(--color-success);
  font-size: 0.92rem;

  svg {
    flex-shrink: 0;
  }
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: color-mix(in srgb, var(--color-error) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-error) 35%, transparent);
  color: var(--color-error);
  font-size: 0.92rem;

  svg {
    flex-shrink: 0;
  }
`;

export default function ContactPage() {
  const { t, tr } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const infoLinks = [
    {
      icon: Mail,
      label: t("pages.contact.email"),
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: MapPin,
      label: t("pages.contact.location"),
      value: profile.location,
      href: "https://www.google.com/maps/place/Luanda",
    },
    {
      icon: GithubIcon,
      label: t("pages.contact.github"),
      value: "kronnos1992",
      href: socials.find((s) => s.label === "GitHub")?.href ?? "https://github.com",
    },
    {
      icon: LinkedinIcon,
      label: t("pages.contact.linkedin"),
      value: "Jaime Kiala Coxi",
      href:
        socials.find((s) => s.label === "LinkedIn")?.href ??
        "https://www.linkedin.com",
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("mensagem") ?? "");
    const subject =
      String(data.get("assunto") ?? "").trim() ||
      tr("pages.contact.mailSubject", { name });

    if (!contactConfigReady) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: contactConfig.accessKey,
          name,
          email,
          subject,
          message,
        }),
      });

      if (!res.ok) throw new globalThis.Error("submit failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <Section>
      <SectionHeading
        as="h1"
        kicker={t("pages.contact.kicker")}
        title={t("pages.contact.title")}
        subtitle={t("pages.contact.subtitle")}
      />

      <Grid>
        <Reveal>
          <Info>
            {infoLinks.map((link) => (
              <InfoCard
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <link.icon size={20} aria-hidden="true" />
                </span>
                <span>
                  <strong>{link.label}</strong>
                  <span>{link.value}</span>
                </span>
              </InfoCard>
            ))}
          </Info>
        </Reveal>

        <Reveal delay={0.1}>
          <Form onSubmit={handleSubmit}>
            <Field>
              <label htmlFor="nome">{t("pages.contact.name")}</label>
              <input id="nome" name="nome" type="text" required autoComplete="name" placeholder={t("pages.contact.namePlaceholder")} />
            </Field>

            <Field>
              <label htmlFor="email">{t("pages.contact.email")}</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder={t("pages.contact.emailPlaceholder")} />
            </Field>

            <Field>
              <label htmlFor="assunto">{t("pages.contact.subject")}</label>
              <input id="assunto" name="assunto" type="text" placeholder={t("pages.contact.subjectPlaceholder")} />
            </Field>

            <Field>
              <label htmlFor="mensagem">{t("pages.contact.message")}</label>
              <textarea id="mensagem" name="mensagem" rows={5} required placeholder={t("pages.contact.messagePlaceholder")} />
            </Field>

            {status === "sent" && (
              <Success role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                {tr("pages.contact.success", { email: profile.email })}
              </Success>
            )}

            {status === "error" && (
              <Error role="alert">
                <AlertCircle size={18} aria-hidden="true" />
                {tr("pages.contact.failed", { email: profile.email })}
              </Error>
            )}

            <Submit type="submit" disabled={status === "sending"}>
              <Send size={17} aria-hidden="true" />
              {status === "sending" ? t("pages.contact.sending") : t("pages.contact.send")}
            </Submit>
          </Form>
        </Reveal>
      </Grid>
    </Section>
  );
}
