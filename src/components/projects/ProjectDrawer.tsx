import { useEffect, useState } from "react";
import { Project } from "./types";

interface IProjectDrawer {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: IProjectDrawer) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsOpen(true), 10);
    } else {
      setIsOpen(false);
      setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 300);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 dark:bg-white/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 h-full w-full md:w-2/3 lg:w-1/2 bg-white dark:bg-black z-50 overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 bg-white dark:bg-black border-b border-slate-300 dark:border-slate-700 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-2xl text-slate-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Close drawer"
          >
            ×
          </button>
        </div>

        <div className="p-6 md:p-8">
          {project.image && (
            <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 mb-6 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="mb-6">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-md px-6 py-3 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Repositório ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-md px-6 py-3 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Ver Projeto →
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
