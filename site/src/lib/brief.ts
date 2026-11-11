export type Brief = { name: string; email: string; company: string; need: string; message: string };
export type BriefErrors = Partial<Record<keyof Brief, string>>;
export const needLabels: Record<string, string> = { solutions: "Créer une solution", transformation: "Transformer nos pratiques", exploration: "Explorer une idée" };

export function validateBrief(brief: Brief): BriefErrors {
  const errors: BriefErrors = {};
  if (!brief.name.trim() || brief.name.length > 100) errors.name = "Indiquez votre nom (100 caractères maximum).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email) || brief.email.length > 254) errors.email = "Indiquez une adresse e-mail valide.";
  if (brief.company.length > 150) errors.company = "Le nom de l’organisation est limité à 150 caractères.";
  if (!Object.hasOwn(needLabels, brief.need)) errors.need = "Choisissez ce dont vous souhaitez parler.";
  if (brief.message.trim().length < 20 || brief.message.length > 2000) errors.message = "Décrivez votre idée en 20 à 2 000 caractères.";
  return errors;
}

export function buildBriefText(brief: Brief): string {
  return `Bonjour Hirakode,\n\nJe souhaite échanger à propos de : ${needLabels[brief.need] ?? "Mon projet"}.\n\n${brief.message.trim()}\n\n${brief.name.trim()}\n${brief.company.trim() ? `${brief.company.trim()}\n` : ""}${brief.email.trim()}`;
}

export function buildMailto(brief: Brief): string {
  const subject = `Projet ${brief.company.trim() || brief.name.trim()}`.replace(/[\r\n]+/g, " ");
  return `mailto:contact@hirakode.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBriefText(brief))}`;
}
