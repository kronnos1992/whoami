export const routeConfig = {
  home: { path: "/", module: "home" },
  terminal: { path: "/terminal", module: "terminal" },
  projects: { path: "/projects", module: "projects" },
  skills: { path: "/skills", module: "skills" },
  about: { path: "/about", module: "about" },
  contact: { path: "/contact", module: "contact" },
  notFound: { path: "*", module: "not-found" },
} as const;

export type AppRouteKeys = keyof typeof routeConfig;

export type AppRoutePath = typeof routeConfig[AppRouteKeys]["path"];

export type AppRouteModule = typeof routeConfig[AppRouteKeys]["module"];
