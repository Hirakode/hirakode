import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectList } from "@/components/project-list";
import { ProcessSection, ServicesOverview, TeamStrip } from "@/components/sections";
import { Arrow } from "@/components/icons";
import { Footer } from "@/components/footer";

export default function Home() {
  return <><main id="main"><Hero/>
    <section id="introduction" className="intro-section section-pad"><span className="eyebrow" data-reveal>Hirakode / De l’idée à l’usage</span><div data-reveal><h2>Le potentiel de l’IA.<br/><em>La réalité de votre métier.</em></h2><div className="intro-columns"><p>Nous sommes trois. Une équipe qui réunit produit, développement et data pour transformer les bonnes idées en outils utiles.</p><p>Nous créons vos solutions sur mesure et accompagnons vos équipes dans leur transformation. Avec vous, du premier échange à la prise en main.</p></div><Link href="/studio" className="text-link">Rencontrer le studio<Arrow diagonal/></Link></div></section>
    <section id="projets" className="work-section section-pad" aria-labelledby="work-title"><div className="work-heading" data-reveal><div><span className="eyebrow">01 / Sélection de projets</span><h2 id="work-title">Des idées.<br/><em>Devenues tangibles.</em></h2></div><p>Trois univers. Le même plaisir<br/>de rendre le complexe évident.</p></div><ProjectList/></section>
    <ServicesOverview/><ProcessSection/>
    <section className="studio-section section-pad" aria-labelledby="team-title"><div className="section-heading" data-reveal><span className="eyebrow">04 / Le studio</span><h2 id="team-title">Trois regards.<br/><em>Un même mouvement.</em></h2><p>Vos interlocuteurs sont aussi ceux qui imaginent et construisent votre solution.</p></div><TeamStrip/><Link className="text-link studio-link" href="/studio">L’esprit Hirakode<Arrow diagonal/></Link></section>
  </main><Footer/></>;
}
