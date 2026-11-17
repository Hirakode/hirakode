import Image from "next/image";
import type { Project } from "@/lib/content";

const visualDescriptions = {
  autotraders: "Autotraders : captures du site officiel bleu nuit et cyan, avec son accueil et son aperçu des réglages de risque du bot.",
  whalingview: "WhalingView : captures de la version locale, avec son accueil crème, sa baleine turquoise et le sélecteur Fonds, Dirigeants et Congrès.",
  geodataviz: "GeoDataViz : vue du produit montrant la France en relief, avec des données INSEE Filosofi 2021.",
  travelideas: "Ailleurs, développé dans Travelideas : captures de l’accueil vert et crème avec Lisbonne, et du réglage du budget par personne.",
};

const interfacePreviews = {
  autotraders: {
    name: "autotraders.ai", height: 640,
    focus: "Le risque, selon vos règles.",
    caption: "Site public · Accueil & aperçu des réglages",
    detail: { src: "/images/project-ui/autotraders-settings.jpg", width: 1265, height: 889, x: 653, y: 392, cropWidth: 514, cropHeight: 410 },
  },
  whalingview: {
    name: "WhalingView", height: 590,
    focus: "Remonter aux sources.",
    caption: "Version locale · Accueil & sélection des sources",
    detail: { src: "/images/project-ui/whalingview-sources.jpg", width: 1265, height: 949, x: 116, y: 432, cropWidth: 307, cropHeight: 250 },
  },
  travelideas: {
    name: "ailleurs.", height: 600,
    focus: "Un voyage à votre mesure.",
    caption: "Version locale · Accueil & budget du voyage",
    detail: { src: "/images/project-ui/travelideas-budget.jpg", width: 1265, height: 712, x: 32, y: 316, cropWidth: 246, cropHeight: 226 },
  },
};

export function ProjectVisual({ project, priority = false, detail = false }: { project: Project; priority?: boolean; detail?: boolean }) {
  const preview = project.slug === "geodataviz" ? null : interfacePreviews[project.slug];

  return <div className={`project-visual ${project.visualClass}${detail ? " project-visual-detail" : ""}`} role="img" aria-label={visualDescriptions[project.slug]}>
    <div className="project-scene" aria-hidden="true">
      {project.slug === "geodataviz" && <>
        <Image className="geo-landscape" src={project.image} alt="" fill priority={priority} sizes={detail ? "100vw" : "(max-width: 1000px) 90vw, 55vw"}/>
        <div className="geo-shade"/>
        <div className="scene-brand">GeoDataViz<span>45° N</span></div>
        <p className="geo-title">Lire le monde.<br/><em>En relief.</em></p>
        <div className="geo-legend"><span/><div>La population dessine le territoire.<br/><b>France · INSEE Filosofi 2021</b></div></div>
        <span className="scene-caption">Export du produit · Relief statistique amplifié</span>
      </>}
      {preview && <>
        <div className="interface-heading"><span>{preview.name}</span><span>Dans le produit ↗</span></div>
        <div className="interface-main">
          <Image src={project.image} alt="" width={1250} height={preview.height} preload={priority} sizes={detail ? "(max-width: 767px) 90vw, 70vw" : "(max-width: 1000px) 90vw, 55vw"}/>
        </div>
        <p className="interface-focus">{preview.focus}</p>
        <div className="interface-detail" style={{ aspectRatio: `${preview.detail.cropWidth} / ${preview.detail.cropHeight}` }}>
          <Image src={preview.detail.src} alt="" width={preview.detail.width} height={preview.detail.height} sizes={detail ? "100vw" : "(max-width: 1000px) 170vw, 85vw"}
            style={{ width: `${preview.detail.width / preview.detail.cropWidth * 100}%`, left: `${-preview.detail.x / preview.detail.cropWidth * 100}%`, top: `${-preview.detail.y / preview.detail.cropHeight * 100}%` }}/>
        </div>
        <span className="scene-caption">{preview.caption}</span>
      </>}
    </div>
  </div>;
}
