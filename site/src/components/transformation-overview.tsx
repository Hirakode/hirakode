import Link from "next/link";
import { transformationSteps } from "@/lib/content";
import { Arrow } from "./icons";

export function TransformationOverview() {
  return (
    <section id="transformation-ia" className="transformation-overview section-pad" aria-labelledby="transformation-title">
      <div data-reveal>
        <span className="eyebrow">01 / Transformation IA des entreprises</span>
        <h2 id="transformation-title">L’IA dans vos outils.<br/><em>La confiance dans vos équipes.</em></h2>
        <p>Vous voyez le potentiel. Nous vous aidons à trouver par où commencer : un usage utile, un premier pilote et des équipes accompagnées pour faire évoluer le quotidien.</p>
        <Link href="/transformation-ia" className="primary-button">Découvrir l’accompagnement<Arrow diagonal/></Link>
      </div>
      <div className="transformation-path" data-reveal>
        <p>Un premier usage utile.<br/>Une transformation qui se construit.</p>
        <ol>{transformationSteps.map((step, index) => (
          <li key={step.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.subtitle}</p></div><Arrow/></li>
        ))}</ol>
        <p className="transformation-path-note">Un périmètre défini ensemble. Des résultats à évaluer avant d’aller plus loin.</p>
      </div>
    </section>
  );
}
