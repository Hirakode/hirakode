import Image from "next/image";
import type { Project } from "@/lib/content";

const visualDescriptions = {
  autotraders: "Autotraders : un message Telegram est interprété par l’IA, puis traité selon les règles du compte avant son exécution sur MetaTrader. Schéma illustratif.",
  whalingview: "WhalingView : des déclarations publiques alimentent un indice descriptif et une synthèse IA vérifiée. Schéma illustratif.",
  geodataviz: "GeoDataViz : vue du produit montrant la France en relief, avec des données INSEE Filosofi 2021.",
  travelideas: "Ailleurs, développé dans Travelideas : photographie de Lisbonne et illustration des critères budget, climat et temps sur place utilisés pour comparer les destinations.",
};

export function ProjectVisual({ project, priority = false, detail = false }: { project: Project; priority?: boolean; detail?: boolean }) {
  return <div className={`project-visual ${project.visualClass}${detail ? " project-visual-detail" : ""}`} role="img" aria-label={visualDescriptions[project.slug]}>
    <div className="project-scene" aria-hidden="true">
      {project.slug === "autotraders" && <>
        <div className="scene-brand">autotraders<span>.ai</span></div>
        <div className="auto-route">
          <div className="signal-message"><span className="signal-source"><span>↗</span> Telegram <small>Signal reçu</small></span><p>EUR/USD · Achat</p><div className="signal-fields"><span>Entrée</span><span>Stop loss</span><span>Take profit</span></div></div>
          <div className="auto-engine"><span className="engine-line"/><span className="engine-core">IA</span><div><strong>Le message devient une instruction.</strong><span>Interprétation → données structurées</span></div></div>
          <div className="execution-ticket"><div><span className="execution-check">✓</span><span>Vos règles.<br/><strong>Votre compte.</strong></span></div><span className="execution-destination">MetaTrader<br/><b>4 / 5</b></span></div>
        </div>
        <span className="scene-caption">Du signal à l’action · Schéma illustratif</span>
      </>}
      {project.slug === "whalingview" && <>
        <div className="scene-brand">WhalingView<span>↗</span></div>
        <div className="whaling-composition">
          <div className="filing-stack"><div><span>SEC · Form 4</span><strong>Transactions d’initiés</strong><i/><i/></div><div><span>SEC · Form 13F</span><strong>Positions déclarées</strong><i/><i/></div><div><span>Congrès américain</span><strong>Déclarations publiques</strong><i/><i/></div></div>
          <div className="whaling-insight"><span className="insight-label">La donnée, en clair.</span><p>Rapprocher les faits.<br/>Expliquer le contexte.</p><div className="insight-footer"><span className="insight-symbol">✳</span><span>Synthèse IA<br/><b>Faits & sources contrôlés</b></span><span>↗</span></div></div>
        </div>
        <span className="scene-caption">De la déclaration à l’explication · Illustration</span>
      </>}
      {project.slug === "geodataviz" && <>
        <Image className="geo-landscape" src={project.image} alt="" fill priority={priority} sizes={detail ? "100vw" : "(max-width: 1000px) 90vw, 55vw"}/>
        <div className="geo-shade"/>
        <div className="scene-brand">GeoDataViz<span>45° N</span></div>
        <p className="geo-title">Lire le monde.<br/><em>En relief.</em></p>
        <div className="geo-legend"><span/><div>La population dessine le territoire.<br/><b>France · INSEE Filosofi 2021</b></div></div>
        <span className="scene-caption">Export du produit · Relief statistique amplifié</span>
      </>}
      {project.slug === "travelideas" && <>
        <Image className="travel-landscape" src={project.image} alt="" fill priority={priority} sizes={detail ? "100vw" : "(max-width: 1000px) 90vw, 55vw"}/>
        <div className="travel-shade"/>
        <div className="scene-brand">ailleurs<span>par Travelideas</span></div>
        <p className="travel-title">Et si c’était<br/><em>Lisbonne ?</em></p>
        <div className="travel-preferences"><span>Ce qui compte pour vous</span><div><span>Budget</span><i/><b>01</b></div><div><span>Climat</span><i/><b>02</b></div><div><span>Temps sur place</span><i/><b>03</b></div><p>Des priorités. Un classement expliqué.</p></div>
        <span className="scene-caption">Illustration des critères · Photo de Lisbonne</span>
      </>}
    </div>
  </div>;
}
