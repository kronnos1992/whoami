import styled from "styled-components";
import {
  Building2,
  Shield,
  HardHat,
  Globe,
  CupSoda,
  Store,
  Boxes,
  GraduationCap,
  Fish,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading, Reveal } from "@/ui/components";
import { clients } from "@/data/profile.data";
import { useI18n } from "@/core/i18n";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ClientCard = styled(Reveal)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.25rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
  }
`;

const Logo = styled.span`
  width: 120px;
  height: 120px;
  border-radius: 24px;
  background: var(--gradient-accent-soft);
  border: 1px solid var(--color-border);
  display: grid;
  place-items: center;
  color: var(--color-primary);
  overflow: hidden;

  svg {
    width: 48px;
    height: 48px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0.5rem;
    display: block;
    box-sizing: border-box;
    background: var(--color-surface);
  }
`;

const Name = styled.strong`
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-text);
  line-height: 1.35;
  display: block;
`;

const clientIcons: Record<string, LucideIcon> = {
  cgmapro: Building2,
  "providencia-royal": Shield,
  sacaya: HardHat,
  balangola: Globe,
  "kilamba-drinks": CupSoda,
  monait: Store,
  ibmsa: Boxes,
  ista: GraduationCap,
  kanukos: Fish,
};

export function ClientsSection() {
  const { t } = useI18n();

  return (
    <Section id="clientes">
      <SectionHeading
        kicker={t("pages.home.clientsKicker")}
        title={t("pages.home.clientsTitle")}
        subtitle={t("pages.home.clientsSub")}
      />

      <Grid>
        {clients.map((client, index) => {
          const Icon = clientIcons[client.id] ?? Building2;
          return (
            <ClientCard key={client.id} delay={index * 0.06}>
              {client.logo ? (
                <Logo>
                  <img src={client.logo} alt={client.name} />
                </Logo>
              ) : (
                <Logo aria-hidden="true">
                  <Icon />
                </Logo>
              )}
              <Name>{client.name}</Name>
            </ClientCard>
          );
        })}
      </Grid>
    </Section>
  );
}
