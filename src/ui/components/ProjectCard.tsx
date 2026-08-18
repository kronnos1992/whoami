import styled from "styled-components";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/data/profile.data";
import { Tag } from "./Tag";
import { useI18n } from "@/core/i18n";

const Card = styled(motion.article)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg, 20px);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--color-primary);
    box-shadow: var(--color-shadow);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--gradient-accent-soft);
  border: 1px solid var(--color-border);
  display: grid;
  place-items: center;
  color: var(--color-primary);
`;

const CardLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LinkIcon = styled.a`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-textMuted);
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
`;

const CardDesc = styled.p`
  color: var(--color-textSecondary);
  font-size: 0.93rem;
  line-height: 1.6;
  flex: 1;
`;

const FeaturedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-primary);
  background: var(--gradient-accent-soft);
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  border: 1px solid var(--color-border);

  svg {
    width: 12px;
    height: 12px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t, tr } = useI18n();
  const githubUrl = `https://github.com/kronnos1992/${project.id}`;

  return (
    <Card
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <CardTop>
        <IconBox>
          <FolderGit2 size={20} aria-hidden="true" />
        </IconBox>
        <CardLinks>
          <LinkIcon
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tr("ui.common.openCode", { name: project.name })}
            title="GitHub"
          >
            <GithubIcon size={16} />
          </LinkIcon>
          {project.featured && (
            <LinkIcon
              href="#"
              aria-label={tr("ui.common.openDemo", { name: project.name })}
              title={t("ui.common.featuredBadge")}
            >
              <ExternalLink aria-hidden="true" />
            </LinkIcon>
          )}
        </CardLinks>
      </CardTop>

      <div>
        <CardTitle>{project.name}</CardTitle>
        {project.featured && (
          <FeaturedBadge style={{ marginTop: "0.5rem" }}>
            <Sparkles aria-hidden="true" /> {t("ui.common.featuredBadge")}
          </FeaturedBadge>
        )}
      </div>

      <CardDesc>{project.description}</CardDesc>

      <Tags>
        {project.tags.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </Card>
  );
}
