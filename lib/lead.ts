export type LeadPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  services: string[];
  budget?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseLeadPayload(data: unknown): LeadPayload | null {
  if (!data || typeof data !== "object") return null;

  const raw = data as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";

  if (name.length < 2 || !EMAIL_RE.test(email)) return null;

  const services = Array.isArray(raw.services)
    ? raw.services.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    : [];

  if (services.length === 0) return null;

  const optionalString = (value: unknown) =>
    typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;

  return {
    name,
    email,
    services,
    company: optionalString(raw.company),
    phone: optionalString(raw.phone),
    budget: optionalString(raw.budget),
    message: optionalString(raw.message),
  };
}
