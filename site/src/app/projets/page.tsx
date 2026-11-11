import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ProjectList } from "@/components/project-list";

export const metadata: Metadata = { title: "Nos projets", description: "WhalingView, GeoDataViz, Travelideas : découvrez nos réalisations en data, visualisation et développement de produits numériques.", alternates: { canonical: "/projets/" } };

export default function ProjectsPage() {
  return <><main id="main" className="projects-page"><div className="page-intro section-pad"><span className="eyebrow">Notre travail / 01—03</span><h1>Ce que nous<br/><em>donnons à voir.</em></h1><p>Des produits que l’on peut explorer.<br/>Des idées qui se confrontent à l’usage.</p></div><section className="section-pad projects-index" aria-label="Nos trois projets"><ProjectList/></section></main><Footer/></>;
}
