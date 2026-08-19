export type ExperienceId =
  | "gestor-si-royal"
  | "tecnico-senior-royal"
  | "programador-zseguros"
  | "tecnico-guarda-oceanica";

export type EducationId = "ista" | "formacoes-tecnicas";

export type CertificationId =
  | "okr"
  | "mackenzie"
  | "lean"
  | "shst"
  | "csharp"
  | "macoratti"
  | "udemy"
  | "php";

export type ProjectId =
  | "zseguros-app"
  | "zrecruitment"
  | "znotification"
  | "zreclama"
  | "mona-seguros"
  | "storm-app"
  | "siades-api"
  | "pambala-business"
  | "informista"
  | "nextbala"
  | "monasmart-api"
  | "goportunities"
  | "wezila-lp"
  | "balangola-lp"
  | "devops-pipelines"
  | "k8s-demo"
  | "whoami";

export interface ExperienceContent {
  role: string;
  highlights: string[];
}

export interface EducationContent {
  title: string;
  detail: string;
}

export interface CertificationContent {
  title: string;
  issuer: string;
}

export interface ProjectContent {
  description: string;
  longDescription?: string;
}

export type ExperienceMap = Record<ExperienceId, ExperienceContent>;
export type EducationMap = Record<EducationId, EducationContent>;
export type CertificationMap = Record<CertificationId, CertificationContent>;
export type ProjectMap = Record<ProjectId, ProjectContent>;

export interface SkillGroupLabels {
  backend: string;
  data: string;
  frontend: string;
  devops: string;
  ai: string;
}

export interface ProfileContent {
  title: string;
  roles: string[];
  availability: string;
  summary: string;
  about: string[];
  languages: string[];
}

export interface StatEntry {
  value: string;
  label: string;
}
