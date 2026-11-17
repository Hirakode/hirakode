import Link from "next/link";
import { projects } from "@/lib/content";
import { Arrow } from "./icons";
import { ProjectVisual } from "./project-visual";

export function ProjectList() {
  return <div className="project-list">{projects.map(project => <article key={project.slug} className="project-item" data-reveal>
    <Link href={`/projets/${project.slug}`} className="project-art-link" aria-label={`Découvrir le projet ${project.name}`}><ProjectVisual project={project}/></Link>
    <div className="project-editorial">
      <div className="project-labels"><span>{project.technology}</span><span className={project.slug === "autotraders" ? "project-live" : ""}>{project.status}</span></div>
      <h3>{project.name}</h3>
      <p className="project-promise">{project.shortCategory}</p>
      <p className="project-summary">{project.summary}</p>
      <div className="project-evidence"><strong>{project.proof.value}</strong><span>{project.proof.label}<small>{project.proof.kind}</small></span></div>
      <Link href={`/projets/${project.slug}`} className="text-link">Dans les coulisses du projet<Arrow diagonal/></Link>
    </div>
  </article>)}</div>;
}
