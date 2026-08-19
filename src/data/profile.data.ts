export const profile = {
  name: "Jaime Kiala Coxi",
  firstName: "Jaime",
  monogram: "JK",
  location: "Rangel, Luanda, Angola",
  email: "jaimecoxi21@gmail.com",
  phone: "+244 929 774 155",
  yearsExperience: "+10",
};

export const stats = [
  { value: "+10", label: "Anos de experiência" },
  { value: "+25", label: "Projetos entregues" },
  { value: "+10", label: "Sistemas em produção" },
  { value: "8", label: "Stack's dominadas" },
];

export interface Social {
  label: string;
  username: string;
  href: string;
}

export const socials: Social[] = [
  { label: "GitHub", username: "kronnos1992", href: "https://github.com/kronnos1992" },
  {
    label: "LinkedIn",
    username: "jaime-coxi",
    href: "https://www.linkedin.com/in/jaime-coxi-406689191/",
  },
  { label: "Email", username: "jaimecoxi21@gmail.com", href: "mailto:jaimecoxi21@gmail.com" },
];

export type SkillLevel = "advanced" | "intermediate" | "foundation";

export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    label: "Backend & Arquitetura",
    icon: "server",
    skills: [
      { name: "C# / .NET", level: 95 },
      { name: "ASP.NET Core / Web APIs", level: 92 },
      { name: "Clean Architecture", level: 90 },
      { name: "API REST / Microserviços", level: 90 },
      { name: "Go", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "PHP (Laravel Livewire)", level: 75 },
    ],
  },
  {
    id: "data",
    label: "Dados & Infraestrutura",
    icon: "database",
    skills: [
      { name: "SQL Server / SSMS", level: 92 },
      { name: "MongoDB (NoSQL)", level: 85 },
      { name: "CosmosDB (NoSQL)", level: 75 },
      { name: "Power BI / BI", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Windows Server / Hyper-V / Proxmox", level: 80 },
      { name: "Administração MS 365", level: 80 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    icon: "layout",
    skills: [
      { name: "React / TypeScript", level: 90 },
      { name: "Angular", level: 75 },
      { name: "Blazor WASM", level: 75 },
      { name: "Styled Components", level: 85 },
      { name: "HTML / CSS / JavaScript", level: 90 },
    ],
  },
  {
    id: "devops",
    label: "Gestão & DevOps",
    icon: "terminal",
    skills: [
      { name: "SCRUM / Kanban", level: 88 },
      { name: "Gestão de Projetos de TI", level: 85 },
      { name: "Git / Bitbucket / CI-CD", level: 85 },
      { name: "Segurança da Informação", level: 78 },
      { name: "Gestão de Equipas Remotas", level: 80 },
      { name: "Mentoria de Equipas", level: 85 },
    ],
  },
  {
    id: "ai",
    label: "Inteligência Artificial",
    icon: "brain",
    skills: [
      { name: "Cloudflare Workers AI", level: 80 },
      { name: "LLMs (Llama, GPT, DeepSeek)", level: 82 },
      { name: "Prompt Engineering", level: 85 },
      { name: "AI Agents & Chatbots", level: 78 },
      { name: "RAG (Retrieval-Augmented Generation)", level: 72 },
      { name: "Machine Learning Fundamentals", level: 70 },
    ],
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "gestor-si-royal",
    role: "Gestor de Sistemas de Informação",
    company: "Royal Seguros SA",
    period: "2024 — 2025",
    highlights: [
      "Gestão da infraestrutura tecnológica, assegurando eficiência, disponibilidade e segurança de todos os sistemas.",
      "Coordenação do desenvolvimento, atualização e manutenção dos sistemas de informação corporativos.",
      "Planeamento e monitoramento de projetos de TI, garantindo prazos, orçamentos e padrões de qualidade.",
      "Gestão de riscos de segurança da informação, orçamento de TI e negociação com fornecedores.",
      "Avaliação de tecnologias emergentes (IA e cloud) e alinhamento da TI à estratégia de negócio.",
    ],
  },
  {
    id: "tecnico-senior-royal",
    role: "Técnico Sénior de Programação e Gestor de Bases de Dados",
    company: "Royal Seguros SA",
    period: "2023 — 2024",
    highlights: [
      "Liderança do desenvolvimento de novos produtos de seguros comerciais integrados ao sistema de gestão.",
      "Ciclo completo full-stack: modelagem de bases de dados, APIs robustas e interfaces de cotação e sinistros.",
      "Redução de 34% no tempo de processamento de relatórios através de automação de fluxos críticos.",
      "Integração de novos produtos sem interrupção dos serviços e melhoria da performance dos bancos de dados.",
      "Mentoria de desenvolvedores júniores e disseminação de boas práticas de qualidade.",
    ],
  },
  {
    id: "programador-zseguros",
    role: "Programador Júnior e HelpDesk",
    company: "ZSeguros",
    period: "2020 — 2022",
    highlights: [
      "Participação no ciclo de vida de projetos de gestão de seguros (ZSeguros App, ZRecruitment, ZNotification, ZReclama).",
      "Desenvolvimento em C#, .NET e VB com interfaces modernas e responsivas no Visual Studio.",
      "Suporte técnico e HelpDesk, garantindo estabilidade dos sistemas e atendimento aos utilizadores.",
    ],
  },
  {
    id: "tecnico-guarda-oceanica",
    role: "Técnico de Segurança Eletrónica e Informática",
    company: "Guarda-Oceânica",
    period: "2013 — 2016",
    highlights: [
      "Manutenção de equipamentos informáticos (computadores, impressoras, switches, roteadores).",
      "Instalação e configuração de sistemas operacionais, aplicativos e treinamento de utilizadores.",
      "Montagem de sistemas de CCTV, portões automatizados, cercas elétricas e deteção de incêndios.",
      "Monitoramento contínuo e execução de backups de segurança.",
    ],
  },
];

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  detail: string;
}

export const education: Education[] = [
  {
    id: "ista",
    title: "Engenharia Informática",
    institution: "Instituto Superior Técnico de Angola (ISTA)",
    period: "2018 — 2023",
    detail: "Bacharel com competências em Programação, Redes de Computadores e Bases de Dados.",
  },
  {
    id: "formacoes-tecnicas",
    title: "Formações Técnicas Especializadas",
    institution: "Certificações & Bootcamps",
    period: "Contínuo",
    detail: "Desenvolvimento de software, bases de dados, gestão de projetos e DevOps.",
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  { id: "okr", title: "OKR Foundation Course", issuer: "OKR Institute", year: "2023" },
  { id: "mackenzie", title: "Gestão de Equipes Remotas", issuer: "Universidade Presbiteriana Mackenzie", year: "2023" },
  { id: "lean", title: "Lean Six Sigma — Yellow Belt", issuer: "FM2S Formação e Consultoria", year: "2023" },
  { id: "shst", title: "Segurança, Higiene e Saúde no Trabalho", issuer: "Inspecção Geral do Trabalho, Angola", year: "2024" },
  { id: "csharp", title: "Foundational C# with Microsoft", issuer: "Free Code Camp", year: "2025" },
  { id: "macoratti", title: "Programação C#, .NET Core e SQL Server", issuer: "Macoratti", year: "2020" },
  { id: "udemy", title: "Programação FullStack Node.js e React.js", issuer: "Udemy", year: "2020" },
  { id: "php", title: "PHP do Zero ao Profissional", issuer: "João Ribeiro Academy", year: "2020" },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: string;
  featured?: boolean;
  origin?: "zseguros";
  year?: string;
  status: "production" | "prototype" | "learning";
}

export const projects: Project[] = [
  {
    id: "zseguros-app",
    name: "ZSEGUROS APP",
    description:
      "Aplicação para clientes do grupo ZSeguros: consulta de apólices, sinistros, renovação e contactos.",
    tags: ["React", ".NET", "SQL Server", "Seguros"],
    category: "Web",
    featured: true,
    origin: "zseguros",
    status: "production",
  },
  {
    id: "zrecruitment",
    name: "ZRECRUITMENT",
    description:
      "Plataforma de recrutamento: vagas, candidaturas, triagem de perfis e gestão do processo de contratação.",
    tags: ["Web", "Gestão de Recursos Humanos", "Backend"],
    category: "Web",
    featured: true,
    origin: "zseguros",
    status: "production",
  },
  {
    id: "znotification",
    name: "ZNOTIFICATION",
    description:
      "Serviço central de notificações (SMS, email e push) para as plataformas do grupo ZSeguros.",
    tags: ["Backend", "Notificações", "API"],
    category: "Backend",
    featured: true,
    origin: "zseguros",
    status: "production",
  },
  {
    id: "zreclama",
    name: "ZRECLAMA",
    description:
      "Portal de reclamações e atendimento ao cliente: registo, acompanhamento, escalonamento e resolução.",
    tags: ["Web", "Atendimento ao Cliente", "Gestão"],
    category: "Web",
    featured: true,
    origin: "zseguros",
    status: "production",
  },
  {
    id: "mona-seguros",
    name: "Mona-Seguros",
    description:
      "Sistema integrado de gestão de seguros: apólices, sinistros, reclamações, corretores e contabilidade.",
    longDescription:
      "Plataforma modular de gestão de seguros construída sobre microserviços com Clean Architecture, Repository Pattern e Unit of Work. Integra MassTransit/RabbitMQ para mensageria, Serilog para observabilidade e Ocelot como API Gateway.",
    tags: [".NET", "Microservices", "Clean Architecture", "RabbitMQ", "Ocelot", "SQL Server"],
    category: "Sistemas de Gestão",
    featured: true,
    status: "production",
  },
  {
    id: "storm-app",
    name: "SIFRO CRM",
    description:
      "CRM de gestão de frotas: registo de alunos/tutores, condutores, viaturas, rotas, finanças e relatórios.",
    longDescription:
      "CRM baseado em microserviços com CQRS + Event Sourcing, .NET 8 com Clean Architecture, API Gateway e persistência em SQL Server/PostgreSQL. Fila de eventos com RabbitMQ/Kafka/Azure Service Bus e frontend React.js + apps móveis.",
    tags: [".NET 8", "CQRS", "Event Sourcing", "React", "React Native", "Azure"],
    category: "CRM & Logística",
    featured: true,
    status: "production",
  },
  {
    id: "siades-api",
    name: "SIADES-AO",
    description:
      "API de administração e distribuição de sangue: gestão de médicos, dadores, grupos sanguíneos, hospitais e pedidos.",
    tags: ["API", "Gestão de Saúde", "Dados", "Negócios"],
    category: "Saúde",
    featured: true,
    status: "production",
  },
  {
    id: "pambala-business",
    name: "Pambala Marketplace",
    description:
      "Marketplace completo com listagem de produtos, carrinho, checkout, pagamentos PayPal, login e visão de admin.",
    tags: ["Node.js", "Express", "React", "Redux", "MongoDB", "JWT", "PayPal"],
    category: "E-commerce",
    status: "production",
  },
  {
    id: "informista",
    name: "Informista",
    description:
      "Plataforma de notícias onde utilizadores registados leem conteúdo, comentam e publicam posts.",
    tags: ["Portal de Notícias", "Backend", "Autenticação"],
    category: "Conteúdo & Mídia",
    status: "production",
  },
  {
    id: "nextbala",
    name: "NextBala",
    description:
      "Sistema de gestão de pedidos com roadmap de módulo financeiro, dashboards e automação WhatsApp/impressão.",
    tags: ["Gestão de Pedidos", "Dashboard", "Automação"],
    category: "Negócios",
    status: "production",
  },
  {
    id: "monasmart-api",
    name: "MonaSmart API",
    description: "API backend com persistência PostgreSQL para plataformas de negócio.",
    tags: [".NET", "PostgreSQL", "API"],
    category: "Backend",
    status: "production",
  },
  {
    id: "goportunities",
    name: "Gopportunities",
    description:
      "Backend em Go para gestão de oportunidades, estudando boas práticas com Clean Architecture.",
    tags: ["Go", "Clean Architecture", "API"],
    category: "Backend",
    status: "learning",
  },
  {
    id: "wezila-lp",
    name: "Wezila Landing Page",
    description:
      "Landing page institucional da Wezila com página de produtos e carrosséis em Blazor/C#.",
    tags: ["Blazor", "ASP.NET Core", "Landing Page"],
    category: "Web",
    status: "production",
  },
  {
    id: "balangola-lp",
    name: "Balangola Landing Page",
    description:
      "Landing page institucional da Balangola com página de produtos e carrosséis em Blazor/C#.",
    tags: ["Blazor", "ASP.NET Core", "Landing Page"],
    category: "Web",
    status: "production",
  },
  {
    id: "devops-pipelines",
    name: "DevOps Pipelines",
    description:
      "Colecção de pipelines de CI/CD, scripts e automações para entrega contínua.",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    category: "DevOps",
    status: "learning",
  },
  {
    id: "k8s-demo",
    name: "Kubernetes Demo",
    description:
      "Demonstrações de orquestração de containers com Kubernetes: deployments, serviços e infraestrutura.",
    tags: ["Kubernetes", "Docker", "Cloud"],
    category: "DevOps",
    status: "learning",
  },
  {
    id: "whoami",
    name: "WHOAMI — Portfolio",
    description:
      "Portfolio pessoal com chatbot AI multilíngue, terminal interativo e deploy automático em Cloudflare Pages.",
    tags: ["React", "TypeScript", "Cloudflare Workers AI", "Styled Components", "i18n"],
    category: "Web",
    featured: true,
    status: "production",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export interface ProfileImage {
  src: string;
  alt: string;
}

export const profileImages: ProfileImage[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Fotografia de Jaime Kiala Coxi",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Jaime Kiala Coxi em contexto profissional",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Jaime Kiala Coxi em apresentação",
  },
];

export const educationFacts = [
  "Bacharel em Engenharia Informática (ISTA)",
  "Formações técnicas especializadas em TI",
  "Especializações em Arquitetura e Dados",
  "Aprendizagem contínua e certificações",
];

export const careerFacts = [
  "Desenvolvedor",
  "Gestor de Bases de Dados",
  "Gestor de Projetos",
  "Gestor de Sistemas de Informação",
];

export interface Client {
  id: string;
  name: string;
  monogram: string;
  logo?: string;
}

export const clients: Client[] = [
  { id: "cgmapro", name: "CGMAPRO", monogram: "CG" },
  {
    id: "providencia-royal",
    name: "Providência Royal Seguros",
    monogram: "PRS",
    logo: "/images/clients/providencia-royal.webp",
  },
  { id: "sacaya", name: "A. Sacaya e Filhos", monogram: "ASF" },
  { id: "balangola", name: "Balangola Internacional", monogram: "BI" },
  { id: "kilamba-drinks", name: "Kilamba Drinks", monogram: "KD" },
  {
    id: "monait",
    name: "MONAIT — Comércio e Prestação de Serviços, SA",
    monogram: "MT",
    logo: "/images/clients/monait.png",
  },
  { id: "ibmsa", name: "IBMSA", monogram: "IB" },
  {
    id: "ista",
    name: "ISTA — Instituto Superior Técnico de Angola",
    monogram: "ISTA",
    logo: "/images/clients/ista.jpg",
  },
  { id: "kanukos", name: "Kanukos do Miramar", monogram: "KM" },
  {
    id: "triunfal",
    name: "Triunfal",
    monogram: "TR",
    logo: "/images/clients/triunfal.jpeg",
  },
];
