import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Footer } from "@/components/footer";
import { projects, transformationQuestions, transformationSteps, transformationUseCases } from "@/lib/content";

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
          <h1 id="transformation-heading">L’IA au travail.<br/><em>Avec vos équipes.</em></h1>
          <div className="transformation-opening">
            <div>
              <p>Moins de temps perdu à chercher, recopier ou recommencer. Plus de place pour ce qui fait la valeur de votre métier.</p>
              <p>Hirakode vous aide à identifier les usages pertinents, à tester une première solution et à accompagner son adoption. Le point de départ : votre réalité. Le fil conducteur : une utilité que l’on peut vérifier.</p>
              <div className="transformation-actions"><Link href={contactHref} className="primary-button">Parlons de votre transformation<Arrow diagonal/></Link><a href="#demarche" className="text-link">Voir la démarche<Arrow/></a></div>
            </div>
            <aside className="transformation-first-step">
              <span className="eyebrow">Votre premier pas</span>
              <h2>Un usage.<br/>Une équipe.<br/><em>Un cap clair.</em></h2>
              <p>Commencer sur un périmètre limité pour décider de la suite avec des éléments concrets.</p>
            </aside>
          </div>
        </section>

        <section className="transformation-use-cases section-pad" aria-labelledby="use-cases-title">
          <div className="work-heading" data-reveal><div><span className="eyebrow">Dans votre quotidien</span><h2 id="use-cases-title">Où l’IA pourrait<br/><em>vous être utile.</em></h2></div><p>Des pistes à explorer selon votre métier.<br/>Leur pertinence se vérifie sur le terrain.</p></div>
          <div>{transformationUseCases.map(useCase => (
            <article key={useCase.title} className="transformation-use-case" data-reveal>
              <div><h3>{useCase.title}</h3><p>{useCase.situation}</p></div>
              <div><p>{useCase.approach}</p><p className="transformation-measure"><span>Ce que l’on évalue</span>{useCase.measure}</p></div>
            </article>
          ))}</div>
          <p className="transformation-context">Ces exemples illustrent des usages possibles, à cadrer avec vous ; ils ne décrivent pas des missions clients réalisées par Hirakode.</p>
        </section>

        <section id="demarche" className="process-section transformation-method section-pad" aria-labelledby="method-title">
          <div className="process-intro" data-reveal><span className="eyebrow">Notre démarche</span><h2 id="method-title">Avancer par étapes.<br/><em>Décider sur des faits.</em></h2><p>À chaque étape, un objectif partagé et quelque chose de concret entre vos mains. Le pilote permet de décider si un déploiement plus large a du sens.</p><Link href={contactHref} className="text-link">Parlons de votre premier usage<Arrow diagonal/></Link></div>
          <ol className="process-steps transformation-steps">{transformationSteps.map((step, index) => (
            <li className="process-step" key={step.title} data-reveal><span className="step-marker" aria-hidden="true">0{index + 1}</span><div><h3>{step.title}</h3><h4>{step.subtitle}</h4><p>{step.text}</p><div className="transformation-deliverable"><span className="eyebrow">Vous repartez avec</span><p>{step.deliverable}</p></div></div></li>
          ))}</ol>
        </section>

        <section className="transformation-trust section-pad" aria-labelledby="trust-title">
          <div data-reveal><span className="eyebrow">Pourquoi Hirakode</span><h2 id="trust-title">Une équipe qui pense.<br/><em>Et qui construit.</em></h2><p>Produit, data et développement réunis dans un même studio. Vos interlocuteurs travaillent aussi à la mise en œuvre : ils peuvent relier les besoins du métier aux contraintes de la solution.</p><Link href="/studio" className="text-link">Rencontrer les trois associés<Arrow diagonal/></Link></div>
          <div className="transformation-commitments" data-reveal>
            <article><h3>Des choix que vous comprenez.</h3><p>Objectifs, livrables, budget et critères de réussite sont définis avec vous. Les coûts des outils et les limites du pilote font partie de la discussion.</p></article>
            <article><h3>Vos équipes dans la boucle.</h3><p>Les personnes concernées participent aux essais. Nous définissons les validations humaines nécessaires et les situations dans lesquelles il faut reprendre la main.</p></article>
            <article><h3>Une suite que vous maîtrisez.</h3><p>Documentation, accès et modalités de maintenance sont précisés dans le périmètre de la mission. Vous savez comment utiliser la solution et la faire évoluer.</p></article>
          </div>
        </section>

        <section className="transformation-foundations section-pad" aria-labelledby="foundations-title">
          <div className="work-heading" data-reveal><div><span className="eyebrow">Notre socle technique</span><h2 id="foundations-title">Du savoir-faire.<br/><em>À voir en action.</em></h2></div><p>Nos produits donnent à voir notre travail<br/>sur les données, les interfaces et les usages.</p></div>
          <div className="transformation-projects">{projects.map(project => (
            <Link href={`/projets/${project.slug}`} key={project.slug} data-reveal><h3>{project.name}</h3><p>{project.summary}</p><span>Explorer le projet<Arrow diagonal/></span></Link>
          ))}</div>
          <p className="transformation-context">Ces réalisations présentent notre savoir-faire de conception et de développement. Notre offre d’accompagnement à la transformation IA se construit sur ce socle.</p>
        </section>

        <section className="faq-section transformation-faq section-pad" aria-labelledby="questions-title">
          <div data-reveal><span className="eyebrow">Vos questions</span><h2 id="questions-title">La confiance<br/><em>se construit aussi ici.</em></h2></div>
          <div className="faq-list">{transformationQuestions.map(item => <details key={item.question} data-reveal><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section className="transformation-invitation section-pad" aria-labelledby="invitation-title">
          <div data-reveal><span className="eyebrow">Commençons par votre réalité</span><h2 id="invitation-title">Quelle tâche aimeriez-vous<br/><em>simplifier en premier ?</em></h2><p>Parlez-nous de votre équipe, de vos outils et de ce qui vous prend du temps. Le premier échange sert à comprendre votre besoin et à voir si nous pouvons vous aider.</p><Link href={contactHref} className="primary-button">Parlons de votre transformation<Arrow diagonal/></Link></div>
          <p className="transformation-invitation-note">Pas besoin d’un cahier des charges.<br/>Un problème concret suffit pour ouvrir la discussion.</p>
        </section>
      </main>
      <Footer compact/>
    </>
  );
}
