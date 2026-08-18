const readEnv = (key: string): string => {
  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : "";
};

export const contactConfig = {
  serviceId: readEnv("VITE_EMAILJS_SERVICE_ID"),
  templateId: readEnv("VITE_EMAILJS_TEMPLATE_ID"),
  publicKey: readEnv("VITE_EMAILJS_PUBLIC_KEY"),
};

export const contactConfigReady = Boolean(
  contactConfig.serviceId && contactConfig.templateId && contactConfig.publicKey,
);
