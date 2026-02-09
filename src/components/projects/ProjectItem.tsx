// ProjectItem.tsx
import { Project } from "./types";

interface IProjectItem {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectItem({ project, index, onClick }: IProjectItem) {
  return (
    <div
      onClick={onClick}
      className="group flex items-start justify-between py-6 px-4 bg-white dark:bg-black border-b border-slate-300 dark:border-slate-700 cursor-pointer transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-black dark:hover:border-white"
    >
      <div className="flex items-start gap-6 flex-1">
        <span className="text-slate-400 dark:text-slate-500 text-sm font-mono min-w-8">
          {String(index).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-2 py-1 rounded transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="ml-4 text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        →
      </div>
    </div>
  );
}
