import type {
  CertificationMap,
  EducationMap,
  ExperienceMap,
  ProfileContent,
  ProjectMap,
  SkillGroupLabels,
  StatEntry,
} from "./content.types";

const es = {
  ui: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Sobre mí",
      contact: "Contacto",
      terminal: "Terminal",
    },
    header: {
      online: "Sistema en línea",
      offline: "Modo sin conexión",
      themeGroup: "Modo de tema",
      themeLight: "Tema claro",
      themeSystem: "Tema del sistema",
      themeDark: "Tema oscuro",
      goHome: "Ir al inicio",
      openTerminal: "Abrir terminal interactivo",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú",
      menu: "Menú",
      close: "Cerrar",
      navDialog: "Menú de navegación",
      social: "{label}: {username}",
      chooseLanguage: "Elegir idioma",
    },
    sidebar: {
      label: "Navegación principal",
      terminal: "~/jkc-terminal",
    },
    footer: {
      navigation: "Navegación",
      contact: "Contacto",
      openTerminal: "Abrir terminal",
      rights: "© {year} {name}. Todos los derechos reservados.",
      madeBy: "Diseñado y construido por Jaime",
      tagline: "{title} · Full Stack · Data & DevOps",
    },
    common: {
      skipToContent: "Saltar al contenido",
      viewProjects: "Ver proyectos",
      talkToMe: "Háblame",
      cv: "CV",
      allProjects: "Ver todos los proyectos",
      allSkills: "Ver todas las habilidades",
      readFullStory: "Conocer toda mi historia",
      seeSkills: "Ver habilidades",
      workTogether: "Trabajemos juntos",
      letTalk: "Hablemos",
      featuredBadge: "Destacado",
      openCode: "Ver el código de {name} en GitHub",
      openDemo: "Abrir demostración de {name}",
      filterProjects: "Filtrar proyectos",
      filters: {
        all: "Todos",
        featured: "Destacados",
        backend: "Backend",
        web: "Web & Frontend",
        data: "Datos & Cloud",
        devops: "DevOps",
      },
      resultCount: "{count} proyecto{plural}",
      empty: "Ningún proyecto encontrado con este filtro.",
      inProduction: "En producción",
      otherProjects: "Otros proyectos",
      prodSection: "Proyectos en producción",
      otherSection: "Otros proyectos",
    },
    boot: {
      fallback: "Inicializando sistema...",
      skip: "Saltar introducción →",
      steps: {
        initializing: "Inicializando kernel…",
        loadingConfig: "Cargando configuración del sistema…",
        mountingModules: "Montando módulos: UI, temas, rutas…",
        loadingProfile: "Cargando perfil: {name}…",
        ready: "Sistema listo. ¡Bienvenido!",
      },
    },
    terminal: {
      srLabel: "Terminal interactivo",
      srHeading: "Terminal interactivo del portafolio",
      titleBar: "jkc@os: ~/terminal — zsh",
      statusCount: "NORMAL {count} entradas",
      statusVersion: "JKC OS v1.0 — Luanda, Angola",
      inputLabel: "Comando del terminal",
      placeholder: "escribe 'help' para comenzar",
      bannerTitle: "JKC OS Terminal — {role}",
      bannerHint: "Escribe 'help' para ver los comandos disponibles.",
      helpTitle: "COMANDOS DISPONIBLES:",
      helpList: {
        help: "Muestra esta lista de comandos",
        banner: "Muestra el banner de bienvenida",
        whoami: "Información sobre mí",
        about: "Abre la página 'Sobre mí'",
        projects: "Abre la página de proyectos",
        skills: "Abre la página de habilidades",
        contact: "Abre la página de contacto",
        social: "Muestra mis redes sociales",
        theme: "Cambia el tema (light/dark/system)",
        bio: "Muestra un resumen de mi carrera",
        skillsList: "Lista mis habilidades técnicas",
        date: "Muestra la fecha y hora actuales",
        echo: "Repite el texto",
        clear: "Limpia el terminal",
        exit: "Vuelve al inicio",
      },
      helpTip: "Consejo: usa las flechas ↑/↓ para navegar por el historial.",
      whoamiLabels: {
        name: "nombre",
        role: "función",
        location: "ubicación",
        email: "email",
        summary: "resumen",
      },
      opening: "Abriendo el módulo '{module}'…",
      themeSet: "Tema configurado como '{theme}'.",
      themeUsage: "Uso: theme <light|dark|system>",
      bioExp: "+10 años en ingeniería y gestión de TI",
      bioRole: "Gestor de Sistemas de Información",
      bioRoles: "Full Stack · Gestor de Bases de Datos · Gestor de Proyectos",
      projectsTitle: "PROYECTOS DESTACADOS:",
      projectsHint: "Ejecuta 'projects' para ver todos en el sitio.",
      sudo: "jaimito no está en el archivo sudoers. Este incidente será reportado. (es broma 😄)",
      jkcOnline: "Sistema de desarrollo JKC en línea. ¡Todo funciona bien!",
      notFound: "Comando no encontrado: '{cmd}'. Escribe 'help' para ver los comandos.",
    },
    chat: {
      title: "Asistente IA",
      subtitle: "Pregúntame sobre mí",
      open: "Abrir chat",
      close: "Cerrar chat",
      placeholder: "Escribe tu mensaje…",
      error: "Lo siento, algo salió mal. Inténtalo de nuevo.",
      suggestions: {
        skills: "¿Cuáles son tus habilidades?",
        experience: "¿Cuál es tu experiencia?",
        projects: "¿Cuáles son tus proyectos?",
        contact: "¿Cómo puedo contactarte?",
      },
    },
  },
  pages: {
    hero: {
      hi: "Hola, soy",
      tagline: "Construyo sistemas que mueven negocios.",
      comment: "+10 años de impacto",
    },
    home: {
      aboutKicker: "Sobre mí",
      aboutTitle: "Tecnología con propósito, código con impacto",
      factLocation: "— con base en Angola, trabajando para el mundo.",
      factExperience: "de experiencia en ingeniería y gestión de TI.",
      factLearning: "en Arquitectura, Datos, Cloud e IA.",
      factLearningStrong: "Aprendizaje continuo",
      factPractice: "— Clean Architecture, CI/CD y seguridad.",
      factPracticeStrong: "Buenas prácticas internacionales",
      skillsKicker: "Habilidades",
      skillsTitle: "Un stack completo, de punta a punta",
      skillsSub:
        "Del backend y los datos al frontend y DevOps — tecnologías con las que entrego sistemas en producción.",
      projectsKicker: "Portafolio",
      projectsTitle: "Proyectos destacados",
      projectsSub:
        "Sistemas que construí y que están generando un impacto real en los negocios.",
      clientsKicker: "Clientes",
      clientsTitle: "Marcas e instituciones que confían en mi trabajo",
      clientsSub:
        "Empresas e instituciones con las que he colaborado y a las que he ayudado a entregar valor real en tecnología.",
      journeyKicker: "Carrera",
      journeyTitle: "Mi evolución profesional",
      journeySub:
        "Una trayectoria de crecimiento continuo — de desarrollador a liderazgo tecnológico.",
      ctaTitle: "¿Construyamos algo extraordinario?",
      ctaText:
        "Estoy disponible para nuevos desafíos y colaboraciones. Si buscas un líder técnico e ingeniero para tu próximo gran proyecto, háblame.",
    },
    about: {
      kicker: "Sobre mí",
      title: "Ingeniero, líder y aprendiz permanente",
      subtitle:
        "Un profesional de la tecnología que combina ingeniería de software, datos y liderazgo para construir sistemas de producción con impacto real.",
      sectionNav: "Secciones de la página",
      overview: "Resumen",
      stats: "En cifras",
      journey: "Trayectoria",
      valuesLabel: "Valores",
      contact: "Contacto",
      avatarFallback: "JC",
      avatarAlt: "Foto de Jaime Kiala Coxi",
      years: "+10 años",
      experience: "Experiencia",
      education: "Formación",
      certifications: "Certificaciones",
      timelineLabel: "Línea de tiempo de certificaciones",
      values: [
        {
          title: "Impacto medible",
          text: "Cada sistema debe resolver un problema real y entregar valor verificable al negocio.",
        },
        {
          title: "Calidad internacional",
          text: "Clean Architecture, pruebas, CI/CD y seguridad por diseño — estándares globales.",
        },
        {
          title: "Aprendizaje continuo",
          text: "El cloud, los datos, la IA y las nuevas arquitecturas forman parte de mi día a día.",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos de tu proyecto",
      subtitle: "Completa el formulario o contáctame directamente — respondo rápido.",
      email: "Email",
      location: "Ubicación",
      github: "GitHub",
      linkedin: "LinkedIn",
      name: "Nombre",
      subject: "Asunto",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@ejemplo.com",
      subjectPlaceholder: "Asunto del mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto…",
      sending: "Preparando…",
      send: "Enviar mensaje",
      success:
        "¡Mensaje enviado con éxito! Gracias por contactarme — responderé pronto.",
      failed:
        "No se pudo enviar el mensaje. Inténtalo de nuevo o escribe directamente a {email}.",
      mailSubject: "Portafolio — contacto de {name}",
    },
    projects: {
      titleA: "Proyectos",
      titleB: "entregados",
      sub: "Una selección de sistemas en producción, prototipos y proyectos de aprendizaje que muestran mi forma de trabajar — de la arquitectura a la entrega.",
    },
    skills: {
      kicker: "Habilidades técnicas",
      title: "Tecnologías con las que construyo y opero",
      subtitle:
        "Dominio sólido de ingeniería de software, datos e infraestructura — siempre alineado con las buenas prácticas internacionales.",
    },
    notFound: {
      title: "Error: página no encontrada",
      message:
        "La ruta que buscas no existe en este sistema. Verifica la dirección o vuelve a un lugar conocido.",
      home: "Volver al inicio",
      terminal: "Terminal",
    },
  },
  data: {
    profile: {
      title: "Gestor de Sistemas de Información",
      roles: [
        "Gestor de Sistemas de Información",
        "Desarrollador Full Stack",
        "Gestor de Bases de Datos",
        "Gestor de Proyectos",
      ],
      availability: "Disponible para nuevos desafíos",
      summary:
        "Gestor de Sistemas de Información e ingeniero de software con más de 10 años diseñando, construyendo y operando sistemas críticos en el sector de seguros. Combinando arquitectura de software (.NET, React, Go), gestión de bases de datos, infraestructura y prácticas de gestión ágil, lidero equipos técnicos y transformo procesos de negocio en plataformas robustas, seguras y de alto rendimiento.",
      about: [
        "Soy un profesional de Tecnología de la Información cuya carrera abarca desarrollo de software, gestión de bases de datos, infraestructura y liderazgo de sistemas corporativos. Trabajé en Guarda-Oceânica (seguridad electrónica e informática), en ZSeguros (desarrollo y soporte) y en Royal Seguros, donde evolucioné de Técnico Senior de Programación y Gestor de Bases de Datos a Gestor de Sistemas de Información — coordinando infraestructura, proyectos de TI y la estrategia digital.",
        "Creo en la tecnología que resuelve problemas reales. Trabajo con un stack moderno — C#/.NET, React, Go, SQL Server, NoSQL, Docker y virtualización — y aplico buenas prácticas internacionales: Clean Architecture, APIs REST y microservicios, SCRUM/Kanban y seguridad por diseño. Disfruto mentorizando equipos, automatizando procesos y entregando valor medible.",
      ],
      languages: ["Portugués", "Inglés", "Español", "Lingala"],
    } satisfies ProfileContent,
    stats: [
      { value: "+10", label: "Años de experiencia" },
      { value: "+25", label: "Proyectos entregados" },
      { value: "+10", label: "Sistemas en producción" },
      { value: "8", label: "Stacks dominados" },
    ] as StatEntry[],
    skillGroups: {
      backend: "Backend & Arquitectura",
      data: "Datos & Infraestructura",
      frontend: "Frontend & Mobile",
      devops: "Gestión & DevOps",
    } as SkillGroupLabels,
    experiences: {
      "gestor-si-royal": {
        role: "Gestor de Sistemas de Información",
        highlights: [
          "Gestión de la infraestructura tecnológica, asegurando eficiencia, disponibilidad y seguridad de todos los sistemas.",
          "Coordinación del desarrollo, actualización y mantenimiento de los sistemas de información corporativos.",
          "Planificación y seguimiento de proyectos de TI, garantizando plazos, presupuestos y estándares de calidad.",
          "Gestión de riesgos de seguridad de la información, del presupuesto de TI y de la negociación con proveedores.",
          "Evaluación de tecnologías emergentes (IA y cloud) y alineación de la TI con la estrategia de negocio.",
        ],
      },
      "tecnico-senior-royal": {
        role: "Técnico Senior de Programación y Gestor de Bases de Datos",
        highlights: [
          "Liderazgo del desarrollo de nuevos productos de seguros comerciales integrados al sistema de gestión.",
          "Ciclo full-stack completo: modelado de bases de datos, APIs robustas e interfaces de cotización y siniestros.",
          "Reducción del 34 % en el tiempo de procesamiento de informes mediante la automatización de flujos críticos.",
          "Integración de nuevos productos sin interrupción del servicio y mejora del rendimiento de las bases de datos.",
          "Mentoría de desarrolladores júnior y difusión de buenas prácticas de calidad.",
        ],
      },
      "programador-zseguros": {
        role: "Programador Júnior y HelpDesk",
        highlights: [
          "Participación en el ciclo de vida de proyectos de gestión de seguros (ZSeguros App, ZRecruitment, ZNotification, ZReclama).",
          "Desarrollo en C#, .NET y VB con interfaces modernas y responsivas en Visual Studio.",
          "Soporte técnico y HelpDesk, garantizando la estabilidad de los sistemas y la atención a los usuarios.",
        ],
      },
      "tecnico-guarda-oceanica": {
        role: "Técnico de Seguridad Electrónica e Informática",
        highlights: [
          "Mantenimiento de equipos informáticos (computadoras, impresoras, switches, routers).",
          "Instalación y configuración de sistemas operativos, aplicaciones y capacitación de usuarios.",
          "Instalación de sistemas de CCTV, portones automatizados, cercas eléctricas y detección de incendios.",
          "Monitoreo continuo y ejecución de copias de seguridad.",
        ],
      },
    } as ExperienceMap,
    education: {
      ista: {
        title: "Ingeniería Informática",
        detail:
          "Bachillerato con competencias en Programación, Redes de Computadoras y Bases de Datos.",
      },
      "formacoes-tecnicas": {
        title: "Formaciones técnicas especializadas",
        detail:
          "Desarrollo de software, bases de datos, gestión de proyectos y DevOps.",
      },
    } as EducationMap,
    certifications: {
      okr: { title: "OKR Foundation Course", issuer: "OKR Institute" },
      mackenzie: {
        title: "Gestión de Equipos Remotos",
        issuer: "Universidade Presbiteriana Mackenzie",
      },
      lean: {
        title: "Lean Six Sigma — Yellow Belt",
        issuer: "FM2S Formação e Consultoria",
      },
      shst: {
        title: "Seguridad, Higiene y Salud en el Trabajo",
        issuer: "Inspección General del Trabajo, Angola",
      },
      csharp: {
        title: "Foundational C# with Microsoft",
        issuer: "Free Code Camp",
      },
      macoratti: {
        title: "Programación C#, .NET Core y SQL Server",
        issuer: "Macoratti",
      },
      udemy: {
        title: "Programación FullStack Node.js y React.js",
        issuer: "Udemy",
      },
      php: {
        title: "PHP desde cero hasta profesional",
        issuer: "João Ribeiro Academy",
      },
    } as CertificationMap,
    projects: {
      "zseguros-app": {
        description:
          "Aplicación para clientes del grupo ZSeguros: consulta de pólizas, siniestros, renovación y contactos.",
      },
      zrecruitment: {
        description:
          "Plataforma de reclutamiento: vacantes, postulaciones, triaje de perfiles y gestión del proceso de contratación.",
      },
      znotification: {
        description:
          "Servicio central de notificaciones (SMS, email y push) para las plataformas del grupo ZSeguros.",
      },
      zreclama: {
        description:
          "Portal de reclamos y atención al cliente: registro, seguimiento, escalamiento y resolución.",
      },
      "mona-seguros": {
        description:
          "Sistema integrado de gestión de seguros: pólizas, siniestros, reclamos, corredores y contabilidad.",
        longDescription:
          "Plataforma modular de gestión de seguros construida sobre microservicios con Clean Architecture, Repository Pattern y Unit of Work. Integra MassTransit/RabbitMQ para mensajería, Serilog para observabilidad y Ocelot como API Gateway.",
      },
      "storm-app": {
        description:
          "CRM de gestión de flotas: registro de alumnos/tutores, conductores, vehículos, rutas, finanzas e informes.",
        longDescription:
          "CRM basado en microservicios con CQRS + Event Sourcing, .NET 8 con Clean Architecture, API Gateway y persistencia en SQL Server/PostgreSQL. Cola de eventos con RabbitMQ/Kafka/Azure Service Bus y frontend React.js + aplicaciones móviles.",
      },
      "siades-api": {
        description:
          "API de administración y distribución de sangre: gestión de médicos, donantes, grupos sanguíneos, hospitales y pedidos.",
      },
      "pambala-business": {
        description:
          "Marketplace completo con listado de productos, carrito, checkout, pagos PayPal, login y vista de administrador.",
      },
      informista: {
        description:
          "Plataforma de noticias donde los usuarios registrados leen contenido, comentan y publican posts.",
      },
      nextbala: {
        description:
          "Sistema de gestión de pedidos con hoja de ruta de módulo financiero, dashboards y automatización WhatsApp/impresión.",
      },
      "monasmart-api": {
        description:
          "API backend con persistencia PostgreSQL para plataformas de negocio.",
      },
      goportunities: {
        description:
          "Backend en Go para gestión de oportunidades, estudiando buenas prácticas con Clean Architecture.",
      },
      "wezila-lp": {
        description:
          "Landing page institucional de Wezila con página de productos y carruseles en Blazor/C#.",
      },
      "balangola-lp": {
        description:
          "Landing page institucional de Balangola con página de productos y carruseles en Blazor/C#.",
      },
      "devops-pipelines": {
        description:
          "Colección de pipelines de CI/CD, scripts y automatizaciones para entrega continua.",
      },
      "k8s-demo": {
        description:
          "Demostraciones de orquestación de contenedores con Kubernetes: deployments, servicios e infraestructura.",
      },
      whoami: {
        description:
          "Sitio portfolio personal con chatbot AI multilíngue, terminal interactivo y despliegue automático en Cloudflare Pages.",
      },
    } as ProjectMap,
    educationFacts: [
      "Bachillerato en Ingeniería Informática (ISTA)",
      "Formaciones técnicas especializadas en TI",
      "Especializaciones en Arquitectura y Datos",
      "Aprendizaje continuo y certificaciones",
    ],
    careerFacts: [
      "Desarrollador",
      "Gestor de Bases de Datos",
      "Gestor de Proyectos",
      "Gestor de Sistemas de Información",
    ],
  },
};

export default es;
