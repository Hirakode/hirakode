import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Footer } from "@/components/footer";
import { TeamStrip } from "@/components/sections";
import { contactEmail, transformationQuestions, transformationSteps, transformationUseCases } from "@/lib/content";

const contactHref = "/contact/?besoin=transformation";

export const metadata: Metadata = {
  title: "Transformation IA des entreprises",
  description: "Faites entrer l’IA dans votre quotidien avec Hirakode : diagnostic des usages, pilote mesurable, intégration et accompagnement de vos équipes.",
  alternates: { canonical: "/transformation-ia/" },
  openGraph: {
    title: "Transformation IA des entreprises — Hirakode",
    description: "Un premier usage utile. Une transformation qui se construit avec vos équipes, du cadrage au déploiement.",
    url: "/transformation-ia/",
    images: ["/opengraph-image"],
  },
};

export default function TransformationPage() {
  return (
    <>
      <main id="main">
        <section className="page-intro transformation-intro section-pad" aria-labelledby="transformation-heading">
          <span className="eyebrow">Transformation IA des entreprises</span>
          <h1 id="transformation-heading">Le potentiel de vos équipes<br/><em>sublimé par l’IA.</em></h1>
          <div className="transformation-opening">
            <p>Moins de temps perdu à chercher, recopier ou recommencer. Plus de place pour ce qui fait la valeur de votre métier. Moins de tâches répétitives, plus de valeur créée.</p>
            <div className="transformation-actions"><Link href={contactHref} className="primary-button">Parlons de votre transformation<Arrow diagonal/></Link><a href="#demarche" className="text-link">Voir la démarche<Arrow/></a></div>
          </div>
        </section>

        <section className="transformation-use-cases section-pad" aria-labelledby="use-cases-title">
          <div className="work-heading" data-reveal><div><span className="eyebrow">Dans votre quotidien</span><h2 id="use-cases-title">Où l’IA pourrait<br/><em>vous être utile ?</em></h2></div></div>
          <div>{transformationUseCases.map(useCase => (
            <article key={useCase.title} className="transformation-use-case" data-reveal>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </article>
          ))}</div>
        </section>

        <section id="demarche" className="process-section transformation-method section-pad" aria-labelledby="method-title">
          <div className="process-intro" data-reveal><span className="eyebrow">Notre démarche</span><h2 id="method-title">Avancer par étapes.<br/><em>Décider sur des faits.</em></h2><Link href={contactHref} className="text-link">Parlons de votre premier usage<Arrow diagonal/></Link></div>
          <ol className="process-steps transformation-steps">{transformationSteps.map((step, index) => (
            <li className="process-step" key={step.title} data-reveal><span className="step-marker" aria-hidden="true">0{index + 1}</span><div><h3>{step.title}</h3><h4>{step.subtitle}</h4></div></li>
          ))}</ol>
        </section>

        <section className="transformation-foundations section-pad" aria-labelledby="foundations-title">
          <div className="work-heading" data-reveal><div><span className="eyebrow">Pourquoi Hirakode</span><h2 id="foundations-title">Trois expertises.<br/><em>Une vision de l’IA.</em></h2></div></div>
          <div className="transformation-vision" data-reveal>
            <p>Nous voyons l’IA comme un moyen d’amplifier les savoir-faire et d’ouvrir de nouvelles possibilités. Produit, algorithmique et développement se complètent pour relier vos ambitions à des solutions utiles au quotidien.</p>
            <p>Cette approche se retrouve dans nos propres produits : nous partons d’un besoin, intégrons l’IA là où elle apporte une aide concrète et vérifions ses résultats. Nous réunissons ces trois regards pour construire votre transformation avec vous.</p>
          </div>
          <TeamStrip extended context="transformation"/>
          <Link href="/studio" className="text-link studio-link">Rencontrer les trois associés<Arrow diagonal/></Link>
        </section>

        <section className="faq-section transformation-faq section-pad" aria-labelledby="questions-title">
          <div data-reveal><span className="eyebrow">Vos questions</span><h2 id="questions-title">Nous sommes là<br/><em>pour vous répondre.</em></h2></div>
          <div className="faq-list">
            {transformationQuestions.map(item => <details key={item.question} data-reveal><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}{"contactSuffix" in item && <> Contactez-nous via <a href={`mailto:${contactEmail}`}>{contactEmail}</a> {item.contactSuffix}</>}</p></details>)}
            <p className="transformation-faq-contact">D’autres questions ? Nous sommes là pour vous répondre : <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          </div>
        </section>

        <section className="transformation-invitation section-pad" aria-labelledby="invitation-title">
          <div data-reveal><span className="eyebrow">Commençons par votre réalité</span><h2 id="invitation-title">Quelle tâche aimeriez-vous<br/><em>simplifier en premier ?</em></h2><p>Parlez-nous de votre équipe, de vos outils et de ce qui vous prend du temps. Le premier échange sert à comprendre votre besoin et à voir si nous pouvons vous aider.</p><Link href={contactHref} className="primary-button">Parlons de votre transformation<Arrow diagonal/></Link></div>
        </section>
      </main>
      <Footer compact/>
    </>
  );
}
