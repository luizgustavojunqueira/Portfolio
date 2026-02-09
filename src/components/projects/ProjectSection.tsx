// ProjectsSection.tsx
import { useState } from "react";
import ProjectHighlight from "./ProjectHighlight";
import ProjectItem from "./ProjectItem";
import { Project } from "./types";
import ProjectDrawer from "./ProjectDrawer";

interface IProjectsSection {
  lang: "pt" | "en";
  projects: Project[];
}

export default function ProjectsSection({ projects, lang }: IProjectsSection) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const highlightedProjects = projects.filter((project) => project.isHighlight);
  const otherProjects = projects.filter((project) => !project.isHighlight);

  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-10">
        {highlightedProjects.length > 0 && (
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-widest mb-4">
              {lang === "pt" ? "Projetos em Destaque" : "Highlighted Projects"}
            </h3>
            <ProjectHighlight projects={highlightedProjects} />
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-widest mb-4">
              {lang === "pt" ? "Outros Projetos" : "Other Projects"}
            </h3>
            <div className="flex flex-col">
              {otherProjects.map((project, index) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  index={index + 1}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
