const readEnv = (key: string): string => {
  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : "";
};

export const contactConfig = {
  accessKey: readEnv("VITE_WEB3FORMS_ACCESS_KEY"),
};

export const contactConfigReady = Boolean(contactConfig.accessKey);
