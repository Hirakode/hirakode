import Image from "next/image";
import type { Project } from "@/lib/content";

export function ProjectVisual({ project, priority = false, detail = false }: { project: Project; priority?: boolean; detail?: boolean }) {
  return <div className={`project-visual ${project.visualClass} ${detail ? "project-visual-detail" : ""}`}>
    <span className="visual-coordinate" aria-hidden="true">H / {project.slug === "whalingview" ? "01" : project.slug === "geodataviz" ? "02" : "03"}</span>
    <div className="project-screen" data-parallax><div className="screen-chrome" aria-hidden="true"><span/><span/><span/><p>{project.name}</p><span className="screen-status"/></div><div className="screen-image"><Image src={project.image} alt={project.imageAlt} width={1280} height={720} priority={priority} sizes="(max-width: 768px) 100vw, 90vw" /></div></div>
    <span className="visual-caption" aria-hidden="true">{project.shortCategory}</span>
  </div>;
}
