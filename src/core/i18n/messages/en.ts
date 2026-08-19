import type {
  CertificationMap,
  EducationMap,
  ExperienceMap,
  ProfileContent,
  ProjectMap,
  SkillGroupLabels,
  StatEntry,
} from "./content.types";

const en = {
  ui: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      terminal: "Terminal",
    },
    header: {
      online: "System online",
      offline: "Offline mode",
      themeGroup: "Theme mode",
      themeLight: "Light theme",
      themeSystem: "System theme",
      themeDark: "Dark theme",
      goHome: "Go to home",
      openTerminal: "Open interactive terminal",
      openMenu: "Open navigation menu",
      closeMenu: "Close menu",
      menu: "Menu",
      close: "Close",
      navDialog: "Navigation menu",
      social: "{label}: {username}",
      chooseLanguage: "Choose language",
    },
    sidebar: {
      label: "Primary navigation",
      terminal: "~/jkc-terminal",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      openTerminal: "Open terminal",
      rights: "© {year} {name}. All rights reserved.",
      madeBy: "Designed and built by Jaime",
      tagline: "{title} · Full Stack · Data & DevOps",
    },
    common: {
      skipToContent: "Skip to content",
      viewProjects: "View projects",
      talkToMe: "Talk to me",
      cv: "CV",
      allProjects: "View all projects",
      allSkills: "View all skills",
      readFullStory: "Read my full story",
      seeSkills: "View skills",
      workTogether: "Let's work together",
      letTalk: "Let's talk",
      featuredBadge: "Featured",
      openCode: "View {name} code on GitHub",
      openDemo: "Open demo of {name}",
      filterProjects: "Filter projects",
      filters: {
        all: "All",
        featured: "Featured",
        backend: "Backend",
        web: "Web & Frontend",
        data: "Data & Cloud",
        devops: "DevOps",
      },
      resultCount: "{count} project{plural}",
      empty: "No projects found for this filter.",
      inProduction: "In production",
      otherProjects: "Other projects",
      prodSection: "Projects in production",
      otherSection: "Other projects",
    },
    boot: {
      fallback: "Initializing system...",
      skip: "Skip intro →",
      steps: {
        initializing: "Initializing kernel…",
        loadingConfig: "Loading system configuration…",
        mountingModules: "Mounting modules: UI, themes, routes…",
        loadingProfile: "Loading profile: {name}…",
        ready: "System ready. Welcome!",
      },
    },
    terminal: {
      srLabel: "Interactive terminal",
      srHeading: "Interactive portfolio terminal",
      titleBar: "jkc@os: ~/terminal — zsh",
      statusCount: "NORMAL {count} entries",
      statusVersion: "JKC OS v1.0 — Luanda, Angola",
      inputLabel: "Terminal command",
      placeholder: "type 'help' to get started",
      bannerTitle: "JKC OS Terminal — {role}",
      bannerHint: "Type 'help' to see the available commands.",
      helpTitle: "AVAILABLE COMMANDS:",
      helpList: {
        help: "Shows this list of commands",
        banner: "Shows the welcome banner",
        whoami: "Information about me",
        about: "Opens the 'About' page",
        projects: "Opens the projects page",
        skills: "Opens the skills page",
        contact: "Opens the contact page",
        social: "Shows my social networks",
        theme: "Switches the theme (light/dark/system)",
        bio: "Shows a summary of my career",
        skillsList: "Lists my technical skills",
        date: "Shows the current date and time",
        echo: "Echoes the text",
        clear: "Clears the terminal",
        exit: "Goes back to the home page",
      },
      helpTip: "Tip: use the ↑/↓ arrows to browse the history.",
      whoamiLabels: {
        name: "name",
        role: "role",
        location: "location",
        email: "email",
        summary: "summary",
      },
      opening: "Opening the '{module}' module…",
      themeSet: "Theme set to '{theme}'.",
      themeUsage: "Usage: theme <light|dark|system>",
      bioExp: "+10 years in software engineering and IT management",
      bioRole: "Information Systems Manager",
      bioRoles: "Full Stack · Database Manager · Project Manager",
      projectsTitle: "FEATURED PROJECTS:",
      projectsHint: "Run 'projects' to see all of them on the site.",
      sudo: "jaimito is not in the sudoers file. This incident will be reported. (just kidding 😄)",
      jkcOnline: "JKC dev system online. Everything is running smoothly!",
      notFound: "Command not found: '{cmd}'. Type 'help' to see the commands.",
    },
    chat: {
      title: "AI Assistant",
      subtitle: "Ask about me",
      open: "Open chat",
      close: "Close chat",
      placeholder: "Type your message…",
      error: "Sorry, something went wrong. Please try again.",
      suggestions: {
        skills: "What are your skills?",
        experience: "What is your experience?",
        projects: "What are your projects?",
        contact: "How can I contact you?",
      },
    },
  },
  pages: {
    hero: {
      hi: "Hi, I'm",
      tagline: "I build systems that move businesses.",
      comment: "+10 years of impact",
    },
    home: {
      aboutKicker: "About me",
      aboutTitle: "Technology with purpose, code with impact",
      factLocation: "— based in Angola, working for the world.",
      factExperience: "of experience in software engineering and IT management.",
      factLearning: "in Architecture, Data, Cloud and AI.",
      factLearningStrong: "Continuous learning",
      factPractice: "— Clean Architecture, CI/CD and security.",
      factPracticeStrong: "International best practices",
      skillsKicker: "Skills",
      skillsTitle: "A complete stack, end to end",
      skillsSub:
        "From backend and data to frontend and DevOps — technologies I use to deliver production systems.",
      projectsKicker: "Portfolio",
      projectsTitle: "Featured projects",
      projectsSub:
        "Systems I built that are generating real impact for businesses.",
      clientsKicker: "Clients",
      clientsTitle: "Brands and institutions that trust my work",
      clientsSub:
        "Companies and institutions I have collaborated with and helped deliver real value in technology.",
      journeyKicker: "Career",
      journeyTitle: "My professional journey",
      journeySub:
        "A path of continuous growth — from developer to technology leadership.",
      ctaTitle: "Let's build something extraordinary?",
      ctaText:
        "I'm available for new challenges and collaborations. If you're looking for a technical leader and engineer for your next big project, talk to me.",
    },
    about: {
      kicker: "About me",
      title: "Engineer, leader and lifelong learner",
      subtitle:
        "A technology professional who combines software engineering, data and leadership to build production systems with real impact.",
      sectionNav: "Page sections",
      overview: "Overview",
      stats: "By the numbers",
      journey: "Journey",
      valuesLabel: "Values",
      contact: "Contact",
      avatarFallback: "JC",
      avatarAlt: "Photo of Jaime Kiala Coxi",
      years: "+10 years",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      timelineLabel: "Certification timeline",
      values: [
        {
          title: "Measurable impact",
          text: "Every system must solve a real problem and deliver verifiable value to the business.",
        },
        {
          title: "International quality",
          text: "Clean Architecture, testing, CI/CD and security by design — global standards.",
        },
        {
          title: "Continuous learning",
          text: "Cloud, data, AI and new architectures are part of my day-to-day life.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your project",
      subtitle: "Fill in the form or contact me directly — I reply quickly.",
      email: "Email",
      location: "Location",
      github: "GitHub",
      linkedin: "LinkedIn",
      name: "Name",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      subjectPlaceholder: "Message subject",
      messagePlaceholder: "Tell me about your project…",
      sending: "Preparing…",
      send: "Send message",
      success:
        "Message sent successfully! Thank you for reaching out — I'll reply soon.",
      failed:
        "Could not send the message. Please try again or write directly to {email}.",
      mailSubject: "Portfolio — contact from {name}",
    },
    projects: {
      titleA: "Projects",
      titleB: "delivered",
      sub: "A selection of production systems, prototypes and learning projects that show how I work — from architecture to delivery.",
    },
    skills: {
      kicker: "Technical skills",
      title: "Technologies I build and operate with",
      subtitle:
        "A solid command of software engineering, data and infrastructure — always aligned with international best practices.",
    },
    notFound: {
      title: "Error: page not found",
      message:
        "The route you're looking for doesn't exist in this system. Check the address or go back to a familiar place.",
      home: "Back to home",
      terminal: "Terminal",
    },
  },
  data: {
    profile: {
      title: "Information Systems Manager",
      roles: [
        "Information Systems Manager",
        "Full Stack Developer",
        "Database Manager",
        "Project Manager",
      ],
      availability: "Available for new challenges",
      summary:
        "Information Systems Manager and software engineer with more than 10 years designing, building and operating critical systems in the insurance sector. Combining software architecture (.NET, React, Go), database management, infrastructure and agile management practices, I lead technical teams and turn business processes into robust, secure and high-performance platforms.",
      about: [
        "I am an Information Technology professional whose career spans software development, database management, infrastructure and corporate systems leadership. I worked at Guarda-Oceânica (electronic and IT security), at ZSeguros (development and support) and at Royal Seguros, where I grew from Senior Programming Technician and Database Manager to Information Systems Manager — coordinating infrastructure, IT projects and the digital strategy.",
        "I believe in technology that solves real problems. I work with a modern stack — C#/.NET, React, Go, SQL Server, NoSQL, Docker and virtualisation — and apply international best practices: Clean Architecture, REST APIs and microservices, SCRUM/Kanban and security by design. I enjoy mentoring teams, automating processes and delivering measurable value.",
      ],
      languages: ["Portuguese", "English", "Spanish", "Lingala"],
    } satisfies ProfileContent,
    stats: [
      { value: "+10", label: "Years of experience" },
      { value: "+25", label: "Projects delivered" },
      { value: "+10", label: "Systems in production" },
      { value: "8", label: "Technologies mastered" },
    ] as StatEntry[],
    skillGroups: {
      backend: "Backend & Architecture",
      data: "Data & Infrastructure",
      frontend: "Frontend & Mobile",
      devops: "Management & DevOps",
    } as SkillGroupLabels,
    experiences: {
      "gestor-si-royal": {
        role: "Information Systems Manager",
        highlights: [
          "Management of the technology infrastructure, ensuring the efficiency, availability and security of all systems.",
          "Coordination of the development, update and maintenance of corporate information systems.",
          "Planning and monitoring of IT projects, ensuring deadlines, budgets and quality standards.",
          "Management of information security risks, the IT budget and vendor negotiations.",
          "Assessment of emerging technologies (AI and cloud) and alignment of IT with the business strategy.",
        ],
      },
      "tecnico-senior-royal": {
        role: "Senior Programming Technician and Database Manager",
        highlights: [
          "Leadership of the development of new commercial insurance products integrated with the management system.",
          "Full-stack cycle: database modelling, robust APIs and quotation and claims interfaces.",
          "34% reduction in report processing time through automation of critical workflows.",
          "Integration of new products without service interruption and improved database performance.",
          "Mentoring of junior developers and promotion of quality best practices.",
        ],
      },
      "programador-zseguros": {
        role: "Junior Programmer and HelpDesk",
        highlights: [
          "Participation in the lifecycle of insurance management projects (ZSeguros App, ZRecruitment, ZNotification, ZReclama).",
          "Development in C#, .NET and VB with modern, responsive interfaces in Visual Studio.",
          "Technical support and HelpDesk, ensuring system stability and user support.",
        ],
      },
      "tecnico-guarda-oceanica": {
        role: "Electronic and IT Security Technician",
        highlights: [
          "Maintenance of computer equipment (computers, printers, switches, routers).",
          "Installation and configuration of operating systems, applications and user training.",
          "Assembly of CCTV systems, automated gates, electric fences and fire detection.",
          "Continuous monitoring and execution of security backups.",
        ],
      },
    } as ExperienceMap,
    education: {
      ista: {
        title: "Computer Engineering",
        detail:
          "Bachelor's degree with skills in Programming, Computer Networks and Databases.",
      },
      "formacoes-tecnicas": {
        title: "Specialised Technical Training",
        detail:
          "Software development, databases, project management and DevOps.",
      },
    } as EducationMap,
    certifications: {
      okr: { title: "OKR Foundation Course", issuer: "OKR Institute" },
      mackenzie: {
        title: "Remote Team Management",
        issuer: "Universidade Presbiteriana Mackenzie",
      },
      lean: {
        title: "Lean Six Sigma — Yellow Belt",
        issuer: "FM2S Formação e Consultoria",
      },
      shst: {
        title: "Occupational Health, Hygiene and Safety",
        issuer: "General Labour Inspectorate, Angola",
      },
      csharp: {
        title: "Foundational C# with Microsoft",
        issuer: "Free Code Camp",
      },
      macoratti: {
        title: "C#, .NET Core and SQL Server Programming",
        issuer: "Macoratti",
      },
      udemy: {
        title: "FullStack Programming: Node.js and React.js",
        issuer: "Udemy",
      },
      php: {
        title: "PHP from Zero to Professional",
        issuer: "João Ribeiro Academy",
      },
    } as CertificationMap,
    projects: {
      "zseguros-app": {
        description:
          "Application for ZSeguros group customers: policy consultation, claims, renewal and contacts.",
      },
      zrecruitment: {
        description:
          "Recruitment platform: job openings, applications, profile screening and hiring process management.",
      },
      znotification: {
        description:
          "Central notification service (SMS, email and push) for the ZSeguros group platforms.",
      },
      zreclama: {
        description:
          "Complaints and customer service portal: registration, tracking, escalation and resolution.",
      },
      "mona-seguros": {
        description:
          "Integrated insurance management system: policies, claims, complaints, brokers and accounting.",
        longDescription:
          "Modular insurance management platform built on microservices with Clean Architecture, Repository Pattern and Unit of Work. Integrates MassTransit/RabbitMQ for messaging, Serilog for observability and Ocelot as the API Gateway.",
      },
      "storm-app": {
        description:
          "Fleet management CRM: registration of students/tutors, drivers, vehicles, routes, finances and reports.",
        longDescription:
          "CRM based on microservices with CQRS + Event Sourcing, .NET 8 with Clean Architecture, API Gateway and SQL Server/PostgreSQL persistence. Event queue with RabbitMQ/Kafka/Azure Service Bus and a React.js frontend plus mobile apps.",
      },
      "siades-api": {
        description:
          "Blood administration and distribution API: management of doctors, donors, blood groups, hospitals and requests.",
      },
      "pambala-business": {
        description:
          "Full marketplace with product listings, cart, checkout, PayPal payments, login and an admin view.",
      },
      informista: {
        description:
          "News platform where registered users read content, comment and publish posts.",
      },
      nextbala: {
        description:
          "Order management system with a financial module roadmap, dashboards and WhatsApp/print automation.",
      },
      "monasmart-api": {
        description:
          "Backend API with PostgreSQL persistence for business platforms.",
      },
      goportunities: {
        description:
          "Go backend for opportunity management, studying best practices with Clean Architecture.",
      },
      "wezila-lp": {
        description:
          "Wezila corporate landing page with a product page and carousels in Blazor/C#.",
      },
      "balangola-lp": {
        description:
          "Balangola corporate landing page with a product page and carousels in Blazor/C#.",
      },
      "devops-pipelines": {
        description:
          "Collection of CI/CD pipelines, scripts and automations for continuous delivery.",
      },
      "k8s-demo": {
        description:
          "Kubernetes container orchestration demos: deployments, services and infrastructure.",
      },
      whoami: {
        description:
          "Personal portfolio website with multilingual AI chatbot, interactive terminal and Cloudflare Pages auto-deploy.",
      },
    } as ProjectMap,
    educationFacts: [
      "Bachelor's in Computer Engineering (ISTA)",
      "Specialised technical IT training",
      "Specialisations in Architecture and Data",
      "Continuous learning and certifications",
    ],
    careerFacts: [
      "Developer",
      "Database Manager",
      "Project Manager",
      "Information Systems Manager",
    ],
  },
};

export default en;
