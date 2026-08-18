import { useI18n } from "@/core/i18n";
import {
  profile as staticProfile,
  stats as staticStats,
  skillGroups as staticSkillGroups,
  experiences as staticExperiences,
  education as staticEducation,
  certifications as staticCertifications,
  projects as staticProjects,
} from "@/data/profile.data";

export function useLocalizedData() {
  const { m } = useI18n();

  const profile = { ...staticProfile, ...m.data.profile };
  const skillGroups = staticSkillGroups.map((group) => ({
    ...group,
    label: m.data.skillGroups[group.id as keyof typeof m.data.skillGroups],
  }));
  const experiences = staticExperiences.map((exp) => ({
    ...exp,
    ...m.data.experiences[exp.id as keyof typeof m.data.experiences],
  }));
  const education = staticEducation.map((item) => ({
    ...item,
    ...m.data.education[item.id as keyof typeof m.data.education],
  }));
  const certifications = staticCertifications.map((cert) => ({
    ...cert,
    ...m.data.certifications[cert.id as keyof typeof m.data.certifications],
  }));
  const projects = staticProjects.map((project) => ({
    ...project,
    ...m.data.projects[project.id as keyof typeof m.data.projects],
  }));
  const featuredProjects = projects.filter((project) => project.featured);

  return {
    profile,
    stats: staticStats.map((stat, index) => ({
      ...stat,
      label: m.data.stats[index]?.label ?? stat.label,
    })),
    skillGroups,
    experiences,
    education,
    certifications,
    projects,
    featuredProjects,
    educationFacts: m.data.educationFacts,
    careerFacts: m.data.careerFacts,
  };
}
