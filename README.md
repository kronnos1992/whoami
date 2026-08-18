# jkcdev-portfolio

Portefólio profissional de **Jaime Kiala Coxi** — Director de Sistemas de Informação, Full Stack Developer e Data Engineer.

Design moderno, energético e responsivo, com foco em boas práticas de UI/UX e normas internacionais (WCAG, semântica, performance).

## Stack

- **React 19 + TypeScript**
- **Vite 8**
- **Styled Components**
- **Three.js** (avatar 3D na página Sobre)
- **Framer Motion** (animações com suporte a `prefers-reduced-motion`)
- **React Router 7**

## Estrutura

```
src/
├── core/
│   ├── boot/            # Tela de boot (introdução estilo OS)
│   ├── configs/         # Navegação e configurações
│   ├── hooks/           # Hooks genéricos
│   ├── layout/          # Sidebar, Header, Footer, ContentArea, ScrollToTop
│   ├── providers/       # Providers de sistema
│   ├── routes/          # Rotas (home, terminal, projects, skills, about, contact, 404)
│   └── theme/           # Design system: tokens light/dark, GlobalStyles
├── data/
│   └── profile.data.ts  # Fonte central de conteúdo (perfil, skills, projetos, carreira, galeria)
├── modules/             # Páginas (home, projects, skills, about, contact, terminal, not-found)
└── ui/
    ├── animations/      # Animação do boot
    └── components/      # SectionHeading, ProjectCard, SkillBar, Tag, Button, Reveal, BrandIcons, Avatar3D
```

## Rotas

| Rota        | Página                     |
| ----------- | -------------------------- |
| `/`         | Início (hero + destaques)  |
| `/terminal` | Terminal interactivo       |
| `/projects` | Projetos com filtros       |
| `/skills`   | Competências técnicas      |
| `/about`    | Perfil, experiência, formação e avatar 3D |
| `/contact`  | Contacto                   |
| `*`         | Página 404                 |

## Comandos

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (tsc + vite)
npm run preview  # pré-visualizar o build
npm run lint     # ESLint
```

## Qualidade & acessibilidade

- Contraste AA em modo claro e escuro
- Navegação por teclado, skip link e `:focus-visible`
- `prefers-reduced-motion` respeitado
- HTML semântico e meta tags Open Graph
- Rotas com lazy-loading (Three.js num chunk separado, carregado só na página Sobre)
- Avatar 3D construído a partir das fotos do perfil
- Layout responsivo (sidebar → menu mobile)

## Docker

```bash
docker build -t jkcdev-portfolio .
docker run -p 8080:80 jkcdev-portfolio
```
