import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { Arrow } from "@/components/icons";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Parlons de votre projet", description: "Une idée de produit, un besoin d’automatisation ou un projet de transformation IA ? Échangeons avec l’équipe Hirakode.", alternates: { canonical: "/contact/" } };

export default function ContactPage() {
  return <><main id="main" className="contact-page section-pad"><div className="contact-intro"><span className="eyebrow">La première conversation</span><h1>Et si on<br/><em>commençait ?</em></h1><p>Une idée bien définie ou une question encore ouverte. Nous sommes là pour en parler.</p><a className="text-link" href="mailto:contact@hirakode.com">contact@hirakode.com<Arrow diagonal/></a><div className="contact-aside"><span className="status-dot"/><span>Directement avec les personnes<br/>qui construiront votre projet.</span></div></div><Suspense fallback={<p>Le formulaire se prépare. Vous pouvez aussi nous écrire directement.</p>}><ContactForm/></Suspense></main><Footer compact/></>;
}
