import type {
  CertificationMap,
  EducationMap,
  ExperienceMap,
  ProfileContent,
  ProjectMap,
  SkillGroupLabels,
  StatEntry,
} from "./content.types";

const fr = {
  ui: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      skills: "Compétences",
      about: "À propos",
      contact: "Contact",
      terminal: "Terminal",
    },
    header: {
      online: "Système en ligne",
      offline: "Mode hors ligne",
      themeGroup: "Mode de thème",
      themeLight: "Thème clair",
      themeSystem: "Thème du système",
      themeDark: "Thème sombre",
      goHome: "Aller à l'accueil",
      openTerminal: "Ouvrir le terminal interactif",
      openMenu: "Ouvrir le menu de navigation",
      closeMenu: "Fermer le menu",
      menu: "Menu",
      close: "Fermer",
      navDialog: "Menu de navigation",
      social: "{label} : {username}",
      chooseLanguage: "Choisir la langue",
    },
    sidebar: {
      label: "Navigation principale",
      terminal: "~/jkc-terminal",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      openTerminal: "Ouvrir le terminal",
      rights: "© {year} {name}. Tous droits réservés.",
      madeBy: "Conçu et construit par Jaime",
      tagline: "{title} · Full Stack · Data & DevOps",
    },
    common: {
      skipToContent: "Aller au contenu",
      viewProjects: "Voir les projets",
      talkToMe: "Parlez-moi",
      cv: "CV",
      allProjects: "Voir tous les projets",
      allSkills: "Voir toutes les compétences",
      readFullStory: "Découvrir toute mon histoire",
      seeSkills: "Voir les compétences",
      workTogether: "Travaillons ensemble",
      letTalk: "Discutons",
      featuredBadge: "À la une",
      openCode: "Voir le code de {name} sur GitHub",
      openDemo: "Ouvrir la démo de {name}",
      filterProjects: "Filtrer les projets",
      filters: {
        all: "Tous",
        featured: "À la une",
        backend: "Backend",
        web: "Web & Frontend",
        data: "Données & Cloud",
        devops: "DevOps",
      },
      resultCount: "{count} projet{plural}",
      empty: "Aucun projet trouvé pour ce filtre.",
      inProduction: "En production",
      otherProjects: "Autres projets",
      prodSection: "Projets en production",
      otherSection: "Autres projets",
    },
    boot: {
      fallback: "Initialisation du système...",
      skip: "Passer l'intro →",
      steps: {
        initializing: "Initialisation du noyau…",
        loadingConfig: "Chargement de la configuration système…",
        mountingModules: "Montage des modules : UI, thèmes, routes…",
        loadingProfile: "Chargement du profil : {name}…",
        ready: "Système prêt. Bienvenue !",
      },
    },
    terminal: {
      srLabel: "Terminal interactif",
      srHeading: "Terminal interactif du portfolio",
      titleBar: "jkc@os: ~/terminal — zsh",
      statusCount: "NORMAL {count} entrées",
      statusVersion: "JKC OS v1.0 — Luanda, Angola",
      inputLabel: "Commande du terminal",
      placeholder: "tapez 'help' pour commencer",
      bannerTitle: "JKC OS Terminal — {role}",
      bannerHint: "Tapez 'help' pour voir les commandes disponibles.",
      helpTitle: "COMMANDES DISPONIBLES :",
      helpList: {
        help: "Affiche cette liste de commandes",
        banner: "Affiche le message de bienvenue",
        whoami: "Informations sur moi",
        about: "Ouvre la page « À propos »",
        projects: "Ouvre la page des projets",
        skills: "Ouvre la page des compétences",
        contact: "Ouvre la page de contact",
        social: "Affiche mes réseaux sociaux",
        theme: "Change le thème (light/dark/system)",
        bio: "Affiche un résumé de ma carrière",
        skillsList: "Liste mes compétences techniques",
        date: "Affiche la date et l'heure actuelles",
        echo: "Répète le texte",
        clear: "Efface le terminal",
        exit: "Revient à l'accueil",
      },
      helpTip: "Astuce : utilisez les flèches ↑/↓ pour naviguer dans l'historique.",
      whoamiLabels: {
        name: "nom",
        role: "fonction",
        location: "lieu",
        email: "email",
        summary: "résumé",
      },
      opening: "Ouverture du module « {module} »…",
      themeSet: "Thème défini sur « {theme} ».",
      themeUsage: "Utilisation : theme <light|dark|system>",
      bioExp: "+10 ans en ingénierie et gestion informatique",
      bioRole: "Gestionnaire de systèmes d'information",
      bioRoles:
        "Full Stack · Gestionnaire de bases de données · Chef de projet",
      projectsTitle: "PROJETS À LA UNE :",
      projectsHint: "Exécutez 'projects' pour tout voir sur le site.",
      sudo: "jaimito n'est pas dans le fichier sudoers. Cet incident sera signalé. (je plaisante 😄)",
      jkcOnline: "Système de dev JKC en ligne. Tout fonctionne parfaitement !",
      notFound: "Commande introuvable : '{cmd}'. Tapez 'help' pour voir les commandes.",
    },
  },
  pages: {
    hero: {
      hi: "Bonjour, je suis",
      tagline: "Je construis des systèmes qui font avancer les entreprises.",
      comment: "+10 ans d'impact",
    },
    home: {
      aboutKicker: "À propos",
      aboutTitle: "Une technologie qui a du sens, un code qui a de l'impact",
      factLocation: "— basé en Angola, travaillant pour le monde.",
      factExperience: "d'expérience en ingénierie et gestion informatique.",
      factLearning: "en Architecture, Données, Cloud et IA.",
      factLearningStrong: "Apprentissage continu",
      factPractice: "— Clean Architecture, CI/CD et sécurité.",
      factPracticeStrong: "Bonnes pratiques internationales",
      skillsKicker: "Compétences",
      skillsTitle: "Une stack complète, de bout en bout",
      skillsSub:
        "Du backend et des données au frontend et au DevOps — des technologies qui livrent des systèmes de production.",
      projectsKicker: "Portfolio",
      projectsTitle: "Projets à la une",
      projectsSub:
        "Des systèmes que j'ai construits et qui génèrent un réel impact pour les entreprises.",
      clientsKicker: "Clients",
      clientsTitle: "Des marques et institutions qui font confiance à mon travail",
      clientsSub:
        "Des entreprises et institutions avec lesquelles j'ai collaboré et que j'ai aidées à créer de la valeur réelle en technologie.",
      journeyKicker: "Carrière",
      journeyTitle: "Mon parcours professionnel",
      journeySub:
        "Une trajectoire de croissance continue — du développeur au leadership technologique.",
      ctaTitle: "Construisons quelque chose d'extraordinaire ?",
      ctaText:
        "Je suis disponible pour de nouveaux défis et collaborations. Si vous cherchez un leader technique et un ingénieur pour votre prochain grand projet, parlez-moi.",
    },
    about: {
      kicker: "À propos",
      title: "Ingénieur, leader et apprenant permanent",
      subtitle:
        "Un professionnel de la technologie qui combine ingénierie logicielle, données et leadership pour bâtir des systèmes de production à impact réel.",
      sectionNav: "Sections de la page",
      overview: "Aperçu",
      stats: "En chiffres",
      journey: "Parcours",
      valuesLabel: "Valeurs",
      contact: "Contact",
      avatarFallback: "JC",
      avatarAlt: "Photo de Jaime Kiala Coxi",
      years: "+10 ans",
      experience: "Expérience",
      education: "Formation",
      certifications: "Certifications",
      timelineLabel: "Chronologie des certifications",
      values: [
        {
          title: "Impact mesurable",
          text: "Chaque système doit résoudre un vrai problème et apporter une valeur vérifiable à l'entreprise.",
        },
        {
          title: "Qualité internationale",
          text: "Clean Architecture, tests, CI/CD et sécurité par conception — des standards globaux.",
        },
        {
          title: "Apprentissage continu",
          text: "Le cloud, les données, l'IA et les nouvelles architectures font partie de mon quotidien.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Parlons de votre projet",
      subtitle: "Remplissez le formulaire ou contactez-moi directement — je réponds rapidement.",
      email: "Email",
      location: "Localisation",
      github: "GitHub",
      linkedin: "LinkedIn",
      name: "Nom",
      subject: "Sujet",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@exemple.com",
      subjectPlaceholder: "Sujet du message",
      messagePlaceholder: "Parlez-moi de votre projet…",
      sending: "Préparation…",
      send: "Envoyer le message",
      success:
        "Message envoyé avec succès ! Merci de m'avoir contacté — je répondrai bientôt.",
      failed:
        "Impossible d'envoyer le message. Réessayez ou écrivez directement à {email}.",
      mailSubject: "Portfolio — contact de {name}",
    },
    projects: {
      titleA: "Projets",
      titleB: "livrés",
      sub: "Une sélection de systèmes de production, de prototypes et de projets d'apprentissage qui montrent ma façon de travailler — de l'architecture à la livraison.",
    },
    skills: {
      kicker: "Compétences techniques",
      title: "Les technologies avec lesquelles je construis et j'opère",
      subtitle:
        "Une maîtrise solide de l'ingénierie logicielle, des données et de l'infrastructure — toujours alignée sur les bonnes pratiques internationales.",
    },
    notFound: {
      title: "Erreur : page introuvable",
      message:
        "La route que vous cherchez n'existe pas dans ce système. Vérifiez l'adresse ou revenez vers un endroit familier.",
      home: "Retour à l'accueil",
      terminal: "Terminal",
    },
  },
  data: {
    profile: {
      title: "Gestionnaire de systèmes d'information",
      roles: [
        "Gestionnaire de systèmes d'information",
        "Développeur Full Stack",
        "Gestionnaire de bases de données",
        "Chef de projet",
      ],
      availability: "Disponible pour de nouveaux défis",
      summary:
        "Gestionnaire de systèmes d'information et ingénieur logiciel avec plus de 10 ans à concevoir, construire et opérer des systèmes critiques dans le secteur de l'assurance. En combinant architecture logicielle (.NET, React, Go), gestion de bases de données, infrastructure et pratiques de gestion agile, je dirige des équipes techniques et transforme les processus métier en plateformes robustes, sécurisées et performantes.",
      about: [
        "Je suis un professionnel des technologies de l'information dont la carrière s'étend entre développement logiciel, gestion de bases de données, infrastructure et direction de systèmes d'entreprise. J'ai travaillé chez Guarda-Oceânica (sécurité électronique et informatique), chez ZSeguros (développement et support) et chez Royal Seguros, où j'ai évolué de Technicien Senior de Programmation et Gestionnaire de bases de données à Gestionnaire de systèmes d'information — coordonnant l'infrastructure, les projets informatiques et la stratégie numérique.",
        "Je crois en une technologie qui résout de vrais problèmes. Je travaille avec une stack moderne — C#/.NET, React, Go, SQL Server, NoSQL, Docker et virtualisation — et j'applique les bonnes pratiques internationales : Clean Architecture, API REST et microservices, SCRUM/Kanban et sécurité par conception. J'aime encadrer les équipes, automatiser les processus et livrer une valeur mesurable.",
      ],
      languages: ["Portugais", "Anglais", "Espagnol", "Lingala"],
    } satisfies ProfileContent,
    stats: [
      { value: "+10", label: "Années d'expérience" },
      { value: "+25", label: "Projets livrés" },
      { value: "+10", label: "Systèmes en production" },
      { value: "8", label: "Stacks maîtrisées" },
    ] as StatEntry[],
    skillGroups: {
      backend: "Backend & Architecture",
      data: "Données & Infrastructure",
      frontend: "Frontend & Mobile",
      devops: "Gestion & DevOps",
    } as SkillGroupLabels,
    experiences: {
      "gestor-si-royal": {
        role: "Gestionnaire de systèmes d'information",
        highlights: [
          "Gestion de l'infrastructure technologique, en assurant l'efficacité, la disponibilité et la sécurité de tous les systèmes.",
          "Coordination du développement, de la mise à jour et de la maintenance des systèmes d'information de l'entreprise.",
          "Planification et suivi des projets informatiques, en garantissant délais, budgets et standards de qualité.",
          "Gestion des risques de sécurité de l'information, du budget informatique et des négociations avec les fournisseurs.",
          "Évaluation des technologies émergentes (IA et cloud) et alignement de l'informatique sur la stratégie métier.",
        ],
      },
      "tecnico-senior-royal": {
        role: "Technicien Senior de Programmation et Gestionnaire de bases de données",
        highlights: [
          "Direction du développement de nouveaux produits d'assurance commerciale intégrés au système de gestion.",
          "Cycle full-stack complet : modélisation de bases de données, API robustes et interfaces de devis et de sinistres.",
          "Réduction de 34 % du temps de traitement des rapports grâce à l'automatisation des flux critiques.",
          "Intégration de nouveaux produits sans interruption de service et amélioration des performances des bases de données.",
          "Encadrement de développeurs juniors et diffusion des bonnes pratiques de qualité.",
        ],
      },
      "programador-zseguros": {
        role: "Programmeur Junior et HelpDesk",
        highlights: [
          "Participation au cycle de vie de projets de gestion d'assurance (ZSeguros App, ZRecruitment, ZNotification, ZReclama).",
          "Développement en C#, .NET et VB avec des interfaces modernes et responsives dans Visual Studio.",
          "Support technique et HelpDesk, en garantissant la stabilité des systèmes et l'assistance aux utilisateurs.",
        ],
      },
      "tecnico-guarda-oceanica": {
        role: "Technicien en sécurité électronique et informatique",
        highlights: [
          "Maintenance d'équipements informatiques (ordinateurs, imprimantes, switchs, routeurs).",
          "Installation et configuration de systèmes d'exploitation, d'applications et formation des utilisateurs.",
          "Installation de systèmes de vidéosurveillance, de portails automatisés, de clôtures électriques et de détection d'incendie.",
          "Surveillance continue et exécution de sauvegardes de sécurité.",
        ],
      },
    } as ExperienceMap,
    education: {
      ista: {
        title: "Génie Informatique",
        detail:
          "Licence avec des compétences en Programmation, Réseaux informatiques et Bases de données.",
      },
      "formacoes-tecnicas": {
        title: "Formations techniques spécialisées",
        detail:
          "Développement logiciel, bases de données, gestion de projet et DevOps.",
      },
    } as EducationMap,
    certifications: {
      okr: { title: "OKR Foundation Course", issuer: "OKR Institute" },
      mackenzie: {
        title: "Gestion d'équipes à distance",
        issuer: "Universidade Presbiteriana Mackenzie",
      },
      lean: {
        title: "Lean Six Sigma — Yellow Belt",
        issuer: "FM2S Formação e Consultoria",
      },
      shst: {
        title: "Sécurité, Hygiène et Santé au travail",
        issuer: "Inspection générale du travail, Angola",
      },
      csharp: {
        title: "Foundational C# with Microsoft",
        issuer: "Free Code Camp",
      },
      macoratti: {
        title: "Programmation C#, .NET Core et SQL Server",
        issuer: "Macoratti",
      },
      udemy: {
        title: "Programmation FullStack Node.js et React.js",
        issuer: "Udemy",
      },
      php: {
        title: "PHP de zéro à professionnel",
        issuer: "João Ribeiro Academy",
      },
    } as CertificationMap,
    projects: {
      "zseguros-app": {
        description:
          "Application pour les clients du groupe ZSeguros : consultation des polices, sinistres, renouvellement et contacts.",
      },
      zrecruitment: {
        description:
          "Plateforme de recrutement : offres, candidatures, tri des profils et gestion du processus d'embauche.",
      },
      znotification: {
        description:
          "Service central de notifications (SMS, email et push) pour les plateformes du groupe ZSeguros.",
      },
      zreclama: {
        description:
          "Portail de réclamations et de service client : enregistrement, suivi, escalade et résolution.",
      },
      "mona-seguros": {
        description:
          "Système intégré de gestion d'assurance : polices, sinistres, réclamations, courtiers et comptabilité.",
        longDescription:
          "Plateforme modulaire de gestion d'assurance construite sur des microservices avec Clean Architecture, Repository Pattern et Unit of Work. Intègre MassTransit/RabbitMQ pour la messagerie, Serilog pour l'observabilité et Ocelot comme API Gateway.",
      },
      "storm-app": {
        description:
          "CRM de gestion de flotte : enregistrement des élèves/tuteurs, conducteurs, véhicules, routes, finances et rapports.",
        longDescription:
          "CRM basé sur des microservices avec CQRS + Event Sourcing, .NET 8 avec Clean Architecture, API Gateway et persistance SQL Server/PostgreSQL. File d'événements avec RabbitMQ/Kafka/Azure Service Bus et frontend React.js + applications mobiles.",
      },
      "siades-api": {
        description:
          "API d'administration et de distribution de sang : gestion des médecins, donneurs, groupes sanguins, hôpitaux et demandes.",
      },
      "pambala-business": {
        description:
          "Marketplace complet avec listes de produits, panier, paiement PayPal, connexion et vue administrateur.",
      },
      informista: {
        description:
          "Plateforme d'actualités où les utilisateurs inscrits lisent du contenu, commentent et publient des articles.",
      },
      nextbala: {
        description:
          "Système de gestion de commandes avec une feuille de route pour le module financier, des tableaux de bord et l'automatisation WhatsApp/impression.",
      },
      "monasmart-api": {
        description:
          "API backend avec persistance PostgreSQL pour les plateformes métier.",
      },
      goportunities: {
        description:
          "Backend en Go pour la gestion d'opportunités, en étudiant les bonnes pratiques avec Clean Architecture.",
      },
      "wezila-lp": {
        description:
          "Landing page institutionnelle de Wezila avec page produits et carrousels en Blazor/C#.",
      },
      "balangola-lp": {
        description:
          "Landing page institutionnelle de Balangola avec page produits et carrousels en Blazor/C#.",
      },
      "devops-pipelines": {
        description:
          "Collection de pipelines CI/CD, de scripts et d'automatisations pour la livraison continue.",
      },
      "k8s-demo": {
        description:
          "Démos d'orchestration de conteneurs avec Kubernetes : déploiements, services et infrastructure.",
      },
    } as ProjectMap,
    educationFacts: [
      "Licence en Génie Informatique (ISTA)",
      "Formations techniques spécialisées en informatique",
      "Spécialisations en Architecture et Données",
      "Apprentissage continu et certifications",
    ],
    careerFacts: [
      "Développeur",
      "Gestionnaire de bases de données",
      "Chef de projet",
      "Gestionnaire de systèmes d'information",
    ],
  },
};

export default fr;
