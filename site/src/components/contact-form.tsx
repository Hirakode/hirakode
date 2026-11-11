"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { buildBriefText, buildMailto, needLabels, validateBrief, type Brief, type BriefErrors } from "@/lib/brief";
import { Arrow } from "./icons";

export function ContactForm() {
  const search = useSearchParams();
  const requestedNeed = search.get("besoin") ?? "exploration";
  const [need, setNeed] = useState(Object.hasOwn(needLabels, requestedNeed) ? requestedNeed : "exploration");
  const [errors, setErrors] = useState<BriefErrors>({});
  const [brief, setBrief] = useState<Brief | null>(null);
  const [copyState, setCopyState] = useState("");
  const result = useRef<HTMLDivElement>(null);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const nextBrief = { name: value("name"), email: value("email"), company: value("company"), need, message: value("message") };
    const nextErrors = validateBrief(nextBrief);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const field = form.elements.namedItem(Object.keys(nextErrors)[0]);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    setBrief(nextBrief);
    setCopyState("");
    requestAnimationFrame(() => result.current?.focus());
  }

  async function copyBrief() {
    if (!brief) return;
    try { await navigator.clipboard.writeText(buildBriefText(brief)); setCopyState("Le texte est copié. Vous pouvez le coller dans votre messagerie."); }
    catch { setCopyState("La copie automatique est indisponible. Vous pouvez sélectionner le texte ci-dessous."); }
  }

  return <div className="contact-form-wrap"><form className="contact-form" onSubmit={prepareEmail} noValidate onChange={() => { if (brief) setBrief(null); }}>
    <fieldset><legend><span>01</span> De quoi parle-t-on ?</legend><div className="need-options">{Object.entries(needLabels).map(([value, label]) => <label key={value} className={need === value ? "selected" : ""}><input type="radio" name="need" value={value} checked={need === value} onChange={() => setNeed(value)}/><span>{label}</span><Arrow diagonal/></label>)}</div>{errors.need && <p className="field-error">{errors.need}</p>}</fieldset>
    <fieldset><legend><span>02</span> Faisons connaissance.</legend><div className="form-grid"><div className="form-field"><label htmlFor="contact-name">Votre nom <span>*</span></label><input id="contact-name" name="name" autoComplete="name" maxLength={100} required placeholder="Prénom et nom" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}/>{errors.name && <p className="field-error" id="name-error">{errors.name}</p>}</div><div className="form-field"><label htmlFor="contact-email">Votre e-mail <span>*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="vous@entreprise.fr" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}/>{errors.email && <p className="field-error" id="email-error">{errors.email}</p>}</div><div className="form-field form-field-full"><label htmlFor="contact-company">Votre organisation <span>(facultatif)</span></label><input id="contact-company" name="company" autoComplete="organization" maxLength={150} placeholder="Le nom de votre entreprise" aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined}/>{errors.company && <p className="field-error" id="company-error">{errors.company}</p>}</div></div></fieldset>
    <fieldset><legend><span>03</span> Racontez-nous.</legend><div className="form-field"><label htmlFor="contact-message">Votre idée, votre besoin ou votre défi <span>*</span></label><textarea id="contact-message" name="message" required minLength={20} maxLength={2000} rows={4} placeholder="Ce que vous aimeriez changer, les outils que vous utilisez, là où vous en êtes…" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : "message-hint"}/><p id="message-hint" className="field-hint">Quelques phrases suffisent. 2 000 caractères maximum.</p>{errors.message && <p className="field-error" id="message-error">{errors.message}</p>}</div></fieldset>
    <button type="submit" className="primary-button">Préparer mon e-mail<Arrow diagonal/></button><p className="contact-privacy">Vos réponses restent dans cette page. Vous pourrez les relire, puis envoyer le message depuis votre messagerie.</p>
  </form>{brief && <div className="brief-result" tabIndex={-1} ref={result}><span className="eyebrow">Votre message est prêt à relire</span><h2>À vous de l’envoyer.</h2><p>Ouvrez votre messagerie pour envoyer ce message à <strong>contact@hirakode.com</strong>, ou copiez le texte.</p><textarea aria-label="Aperçu du message" value={buildBriefText(brief)} readOnly rows={9}/><div className="brief-actions"><a className="primary-button" href={buildMailto(brief)}>Ouvrir ma messagerie<Arrow diagonal/></a><button type="button" className="text-link" onClick={copyBrief}>Copier le texte</button></div><p role="status" className="field-hint">{copyState}</p></div>}</div>;
}
