import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { Arrow } from "@/components/icons";
import { ProcessSection } from "@/components/sections";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Nos expertises", description: "Développement de solutions IA sur mesure et transformation IA : cadrage, prototypes, automatisation, intégration et accompagnement des équipes.", alternates: { canonical: "/expertises/" } };

const questions = [
  { question: "Nous avons une idée, mais pas encore de cahier des charges.", answer: "C’est un bon point de départ. Nous commençons par comprendre le besoin, les utilisateurs et les contraintes. Le cadrage permet ensuite de choisir un premier périmètre et de définir ce que l’on veut vérifier." },
  { question: "Faut-il déjà disposer de données structurées ?", answer: "Pas nécessairement. Nous examinons les sources disponibles, leur qualité et leurs conditions d’utilisation. Selon le besoin, le premier travail peut être de les organiser ou de simplifier le processus avant d’y intégrer de l’IA." },
  { question: "Pouvez-vous travailler avec notre équipe technique ?", answer: "Oui. Nous pouvons concevoir un produit ensemble, prendre en charge une partie précise ou intervenir en renfort. Les interfaces, les responsabilités et les modalités de transmission sont définies au début du projet." },
  { question: "Comment démarrer et estimer le projet ?", answer: "Un premier échange sert à préciser votre contexte, le résultat attendu et vos contraintes. Nous vous proposons ensuite un périmètre, des étapes et une estimation adaptés. Le site ne présente pas de forfait qui ignorerait votre situation." },
] as const;

export default function ExpertisePage() {
  return <><main id="main"><section className="page-intro section-pad"><span className="eyebrow">Nos expertises</span><h1>L’IA a du potentiel.<br/><em>Donnons-lui un rôle.</em></h1><p>Un produit à construire. Une organisation à faire évoluer.<br/>Partons de ce qui compte pour vous.</p><div className="expertise-jump">{services.map(service => <a href={`#${service.id}`} key={service.id}>{service.number} / {service.title}<span>↓</span></a>)}</div></section>
    {services.map(service => <section id={service.id} key={service.id} className={`expertise-detail section-pad expertise-${service.id}`}><div data-reveal><span className="eyebrow">Expertise / {service.number}</span><h2>{service.title}</h2><p className="expertise-description">{service.description}</p><Link href={`/contact/?besoin=${service.id}`} className="text-link">Échangeons sur votre besoin<Arrow diagonal/></Link></div><div className="expertise-content" data-reveal><h3>Ce que cela peut changer.</h3><ul>{service.examples.map(example => <li key={example}><Arrow/>{example}</li>)}</ul><div className="deliverables"><span className="eyebrow">Ce que vous avez en main</span><p>{service.deliverables}</p></div><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></section>)}
    <ProcessSection/>
    <section className="faq-section section-pad"><div data-reveal><span className="eyebrow">Avant de commencer</span><h2>Parlons<br/><em>concrètement.</em></h2></div><div className="faq-list">{questions.map(item => <details key={item.question} data-reveal><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>
  </main><Footer/></>;
}
