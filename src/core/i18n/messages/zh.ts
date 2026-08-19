import type {
  CertificationMap,
  EducationMap,
  ExperienceMap,
  ProfileContent,
  ProjectMap,
  SkillGroupLabels,
  StatEntry,
} from "./content.types";

const zh = {
  ui: {
    nav: {
      home: "首页",
      projects: "项目",
      skills: "技能",
      about: "关于我",
      contact: "联系",
      terminal: "终端",
    },
    header: {
      online: "系统在线",
      offline: "离线模式",
      themeGroup: "主题模式",
      themeLight: "浅色主题",
      themeSystem: "跟随系统",
      themeDark: "深色主题",
      goHome: "返回首页",
      openTerminal: "打开交互式终端",
      openMenu: "打开导航菜单",
      closeMenu: "关闭菜单",
      menu: "菜单",
      close: "关闭",
      navDialog: "导航菜单",
      social: "{label}: {username}",
      chooseLanguage: "选择语言",
    },
    sidebar: {
      label: "主导航",
      terminal: "~/jkc-terminal",
    },
    footer: {
      navigation: "导航",
      contact: "联系",
      openTerminal: "打开终端",
      rights: "© {year} {name}. 保留所有权利。",
      madeBy: "由 Jaime 设计与构建",
      tagline: "{title} · 全栈 · 数据与DevOps",
    },
    common: {
      skipToContent: "跳转到内容",
      viewProjects: "查看项目",
      talkToMe: "联系我",
      cv: "简历",
      allProjects: "查看所有项目",
      allSkills: "查看所有技能",
      readFullStory: "了解更多我的经历",
      seeSkills: "查看技能",
      workTogether: "一起合作",
      letTalk: "聊聊吧",
      featuredBadge: "精选",
      openCode: "在GitHub上查看 {name} 的代码",
      openDemo: "打开 {name} 的演示",
      filterProjects: "筛选项目",
      filters: {
        all: "全部",
        featured: "精选",
        backend: "后端",
        web: "Web与前端",
        data: "数据与云",
        devops: "DevOps",
      },
      resultCount: "{count}个项目{plural}",
      empty: "此筛选条件下没有找到项目。",
      inProduction: "已投产",
      otherProjects: "其他项目",
      prodSection: "生产环境项目",
      otherSection: "其他项目",
    },
    boot: {
      fallback: "系统初始化中...",
      skip: "跳过介绍 →",
      steps: {
        initializing: "正在初始化内核…",
        loadingConfig: "正在加载系统配置…",
        mountingModules: "正在挂载模块：UI、主题、路由…",
        loadingProfile: "正在加载档案：{name}…",
        ready: "系统就绪。欢迎！",
      },
    },
    terminal: {
      srLabel: "交互式终端",
      srHeading: "作品集交互式终端",
      titleBar: "jkc@os: ~/terminal — zsh",
      statusCount: "正常 {count} 条记录",
      statusVersion: "JKC OS v1.0 — 安哥拉罗安达",
      inputLabel: "终端命令",
      placeholder: "输入 'help' 开始",
      bannerTitle: "JKC OS 终端 — {role}",
      bannerHint: "输入 'help' 查看可用命令。",
      helpTitle: "可用命令：",
      helpList: {
        help: "显示此命令列表",
        banner: "显示欢迎横幅",
        whoami: "关于我的信息",
        about: "打开'关于我'页面",
        projects: "打开项目页面",
        skills: "打开技能页面",
        contact: "打开联系页面",
        social: "显示我的社交媒体",
        theme: "切换主题 (light/dark/system)",
        bio: "显示我的职业概要",
        skillsList: "列出我的技术技能",
        date: "显示当前日期和时间",
        echo: "重复输入的文本",
        clear: "清空终端",
        exit: "返回首页",
      },
      helpTip: "提示：使用 ↑/↓ 箭头键浏览历史记录。",
      whoamiLabels: {
        name: "姓名",
        role: "职位",
        location: "所在地",
        email: "邮箱",
        summary: "简介",
      },
      opening: "正在打开模块 '{module}'…",
      themeSet: "主题已设置为 '{theme}'。",
      themeUsage: "用法：theme <light|dark|system>",
      bioExp: "10年以上IT工程与管理经验",
      bioRole: "信息系统管理师",
      bioRoles: "全栈 · 数据库管理 · 项目管理",
      projectsTitle: "精选项目：",
      projectsHint: "运行 'projects' 在网站上查看全部。",
      sudo: "jaimito 不在 sudoers 文件中。此事件将被上报。（开玩笑的 😄）",
      jkcOnline: "JKC 开发系统上线。一切正常！",
      notFound: "未找到命令：'{cmd}'。输入 'help' 查看可用命令。",
    },
    chat: {
      title: "AI助手",
      subtitle: "向我提问",
      open: "打开聊天",
      close: "关闭聊天",
      placeholder: "输入你的消息…",
      error: "抱歉，出了点问题。请重试。",
      suggestions: {
        skills: "你有什么技能？",
        experience: "你的工作经验？",
        projects: "你做过哪些项目？",
        contact: "如何联系你？",
      },
    },
  },
  pages: {
    hero: {
      hi: "你好，我是",
      tagline: "我构建驱动业务的系统。",
      comment: "10年以上的影响力",
    },
    home: {
      aboutKicker: "关于我",
      aboutTitle: "有目标的技术，有影响的代码",
      factLocation: "— 驻扎安哥拉，面向全球。",
      factExperience: "的IT工程与管理经验。",
      factLearning: "在架构、数据、云计算和AI领域。",
      factLearningStrong: "持续学习",
      factPractice: "— 敏捷架构、CI/CD与安全。",
      factPracticeStrong: "国际最佳实践",
      skillsKicker: "技能",
      skillsTitle: "全栈技术，端到端覆盖",
      skillsSub:
        "从后端、数据到前端与DevOps — 我使用这些技术将系统交付到生产环境。",
      projectsKicker: "作品集",
      projectsTitle: "精选项目",
      projectsSub:
        "我构建的系统，正在为业务产生真正的影响力。",
      clientsKicker: "客户",
      clientsTitle: "信任我工作的品牌与机构",
      clientsSub:
        "我曾合作并帮助其实现真正技术价值的企业与机构。",
      journeyKicker: "职业历程",
      journeyTitle: "我的职业成长",
      journeySub:
        "一条持续成长的轨迹 — 从开发者到技术领导。",
      ctaTitle: "一起构建卓越吧？",
      ctaText:
        "我正在接受新的挑战和合作机会。如果你在寻找技术领袖和工程师来参与你的下一个大项目，请联系我。",
    },
    about: {
      kicker: "关于我",
      title: "工程师、领导者与终身学习者",
      subtitle:
        "一位将软件工程、数据与领导力相结合，构建有实际影响的生产系统的科技专业人士。",
      sectionNav: "页面板块",
      overview: "概览",
      stats: "数据",
      journey: "历程",
      valuesLabel: "价值观",
      contact: "联系",
      avatarFallback: "JC",
      avatarAlt: "Jaime Kiala Coxi 的照片",
      years: "+10年",
      experience: "工作经历",
      education: "教育背景",
      certifications: "认证",
      timelineLabel: "认证时间线",
      values: [
        {
          title: "可衡量的影响",
          text: "每个系统都必须解决实际问题，为业务提供可验证的价值。",
        },
        {
          title: "国际质量标准",
          text: "敏捷架构、测试、CI/CD与安全设计 — 全球标准。",
        },
        {
          title: "持续学习",
          text: "云计算、数据、AI和新架构是我日常工作的一部分。",
        },
      ],
    },
    contact: {
      kicker: "联系",
      title: "聊聊你的项目",
      subtitle: "填写表单或直接联系我 — 我会尽快回复。",
      email: "邮箱",
      location: "所在地",
      github: "GitHub",
      linkedin: "LinkedIn",
      name: "姓名",
      subject: "主题",
      message: "留言",
      namePlaceholder: "你的姓名",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "消息主题",
      messagePlaceholder: "告诉我关于你的项目…",
      sending: "发送中…",
      send: "发送消息",
      success:
        "消息发送成功！感谢你的联系 — 我会尽快回复。",
      failed:
        "发送失败。请重试或直接发送邮件到 {email}。",
      mailSubject: "作品集 — 来自 {name} 的联系",
    },
    projects: {
      titleA: "已交付的",
      titleB: "项目",
      sub: "生产环境系统、原型和学习项目的精选展示 — 从架构到交付的全过程。",
    },
    skills: {
      kicker: "技术技能",
      title: "我构建与运维的技术栈",
      subtitle:
        "扎实的软件工程、数据与基础设施能力 — 始终遵循国际最佳实践。",
    },
    notFound: {
      title: "错误：页面未找到",
      message:
        "你访问的路径不存在。请检查地址或返回已知位置。",
      home: "返回首页",
      terminal: "终端",
    },
  },
  data: {
    profile: {
      title: "信息系统管理师",
      roles: [
        "信息系统管理师",
        "全栈开发工程师",
        "数据库管理师",
        "项目管理师",
      ],
      availability: "接受新的挑战",
      summary:
        "信息系统管理师与软件工程师，拥有超过10年设计、构建和运维保险行业关键系统的经验。结合软件架构（.NET、React、Go）、数据库管理、基础设施与敏捷管理实践，我领导技术团队并将业务流程转化为稳健、安全、高性能的平台。",
      about: [
        "我是一名信息技术专业人士，职业生涯涵盖软件开发、数据库管理、基础设施和企业系统领导。我曾在Guarda-Oceânica（电子安防与IT）、ZSeguros（开发与支持）和Royal Seguros工作，从高级编程技术员和数据库管理师晋升为信息系统管理师 — 协调基础设施、IT项目和数字化战略。",
        "我相信技术解决实际问题。我使用现代技术栈 — C#/.NET、React、Go、SQL Server、NoSQL、Docker和虚拟化 — 并践行国际最佳实践：敏捷架构、REST API和微服务、SCRUM/Kanban以及安全设计。我享受指导团队、自动化流程和交付可衡量的价值。",
      ],
      languages: ["葡萄牙语", "英语", "西班牙语", "林加拉语"],
    } satisfies ProfileContent,
    stats: [
      { value: "+10", label: "年经验" },
      { value: "+25", label: "已交付项目" },
      { value: "+10", label: "生产系统" },
      { value: "8", label: "掌握的技术栈" },
    ] as StatEntry[],
    skillGroups: {
      backend: "后端与架构",
      data: "数据与基础设施",
      frontend: "前端与移动端",
      devops: "管理与DevOps",
      ai: "人工智能",
    } as SkillGroupLabels,
    experiences: {
      "gestor-si-royal": {
        role: "信息系统管理师",
        highlights: [
          "管理技术基础设施，确保所有系统的效率、可用性和安全性。",
          "协调企业信息系统的开发、更新和维护。",
          "规划和跟踪IT项目，确保按时交付、预算控制和质量标准。",
          "管理信息安全风险、IT预算和供应商评估。",
          "评估新兴技术（AI和云计算）并将IT与业务战略对齐。",
        ],
      },
      "tecnico-senior-royal": {
        role: "高级编程技术员与数据库管理师",
        highlights: [
          "领导新型商业保险产品的开发，集成到管理系统中。",
          "完整全栈周期：数据库建模、稳健的API以及报价与理赔界面。",
          "通过自动化关键流程，报告处理时间缩短34%。",
          "无中断集成新产品并提升数据库性能。",
          "指导初级开发者并推广质量最佳实践。",
        ],
      },
      "programador-zseguros": {
        role: "初级程序员与帮助台",
        highlights: [
          "参与保险管理系统项目的开发生命周期（ZSeguros App、ZRecruitment、ZNotification、ZReclama）。",
          "使用C#、.NET和VB在Visual Studio中开发现代化的响应式界面。",
          "提供技术支持和帮助台服务，确保系统稳定性和用户满意度。",
        ],
      },
      "tecnico-guarda-oceanica": {
        role: "电子安防与IT技术员",
        highlights: [
          "维护计算机设备（电脑、打印机、交换机、路由器）。",
          "安装和配置操作系统、应用程序并进行用户培训。",
          "安装CCTV监控、自动门、电子围栏和火灾检测系统。",
          "持续监控并执行数据备份。",
        ],
      },
    } as ExperienceMap,
    education: {
      ista: {
        title: "计算机工程",
        detail:
          "学士学位，专长编程、计算机网络和数据库。",
      },
      "formacoes-tecnicas": {
        title: "专业技术培训",
        detail:
          "软件开发、数据库、项目管理和DevOps。",
      },
    } as EducationMap,
    certifications: {
      okr: { title: "OKR基础课程", issuer: "OKR Institute" },
      mackenzie: {
        title: "远程团队管理",
        issuer: "麦肯齐长老会大学",
      },
      lean: {
        title: "精益六西格玛 — 黄带",
        issuer: "FM2S培训与咨询",
      },
      shst: {
        title: "工作安全、卫生与健康",
        issuer: "安哥拉劳动监察总局",
      },
      csharp: {
        title: "C#基础与Microsoft",
        issuer: "Free Code Camp",
      },
      macoratti: {
        title: "C#编程、.NET Core与SQL Server",
        issuer: "Macoratti",
      },
      udemy: {
        title: "全栈Node.js与React.js编程",
        issuer: "Udemy",
      },
      php: {
        title: "PHP从零到专业",
        issuer: "João Ribeiro Academy",
      },
    } as CertificationMap,
    projects: {
      "zseguros-app": {
        description:
          "ZSeguros集团客户应用：保单查询、理赔、续保和联系人。",
      },
      zrecruitment: {
        description:
          "招聘平台：职位发布、申请、人才筛选和招聘流程管理。",
      },
      znotification: {
        description:
          "ZSeguros集团各平台的统一通知服务（短信、邮件和推送）。",
      },
      zreclama: {
        description:
          "客户投诉与服务门户：登记、跟踪、升级和解决。",
      },
      "mona-seguros": {
        description:
          "一体化保险管理系统：保单、理赔、投诉、经纪和会计。",
        longDescription:
          "基于微服务的模块化保险管理平台，采用敏捷架构、仓储模式和工作单元。集成MassTransit/RabbitMQ消息通信、Serilog可观测性和Ocelot API网关。",
      },
      "storm-app": {
        description:
          "车队管理CRM：学员/家长登记、驾驶员、车辆、路线、财务和报表。",
        longDescription:
          "基于CQRS+事件溯源的微服务CRM，.NET 8敏捷架构，API网关，SQL Server/PostgreSQL持久化。RabbitMQ/Kafka/Azure Service Bus事件队列，React.js前端与移动端应用。",
      },
      "siades-api": {
        description:
          "血液管理与分配API：管理医生、献血者、血型、医院和订单。",
      },
      "pambala-business": {
        description:
          "全功能电商平台：商品列表、购物车、结账、PayPal支付、登录和管理后台。",
      },
      informista: {
        description:
          "新闻平台，注册用户可阅读、评论和发布文章。",
      },
      nextbala: {
        description:
          "订单管理系统，含财务模块路线图、仪表板和WhatsApp/打印自动化。",
      },
      "monasmart-api": {
        description:
          "基于PostgreSQL的业务平台后端API。",
      },
      goportunities: {
        description:
          "Go语言编写的机会管理后端，学习敏捷架构最佳实践。",
      },
      "wezila-lp": {
        description:
          "Wezila企业落地页，含产品页和Blazor/C#轮播组件。",
      },
      "balangola-lp": {
        description:
          "Balangola企业落地页，含产品页和Blazor/C#轮播组件。",
      },
      "devops-pipelines": {
        description:
          "CI/CD流水线、脚本和自动化工具集，实现持续交付。",
      },
      "k8s-demo": {
        description:
          "Kubernetes容器编排演示：部署、服务和基础设施。",
      },
      whoami: {
        description:
          "带有AI多语言聊天机器人、交互式终端和Cloudflare Pages自动部署的个人作品集网站。",
      },
    } as ProjectMap,
    educationFacts: [
      "计算机工程学士（ISTA）",
      "IT专业技术培训",
      "架构与数据方向深造",
      "持续学习与认证",
    ],
    careerFacts: [
      "开发工程师",
      "数据库管理师",
      "项目管理师",
      "信息系统管理师",
    ],
  },
};

export default zh;
