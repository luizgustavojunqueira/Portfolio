import { useState, useEffect, useRef } from "react";
import { Project } from "./types";

interface IProjectHighlight {
  projects: Project[];
}

export default function ProjectHighlight({ projects }: IProjectHighlight) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasMultipleProjects = projects.length > 1;
  const [showControls, setShowControls] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchTimeoutRef = useRef<number | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (!hasMultipleProjects || isHovered) return;
    autoplayRef.current = window.setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [projects.length, hasMultipleProjects, isHovered]);

  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        window.clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }
      stopAutoplay();
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (touchTimeoutRef.current) {
      window.clearTimeout(touchTimeoutRef.current);
    }
    setShowControls(true);
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchMove = () => {
    // prevent accidental scroll when swiping horizontally
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0]?.clientX ?? null;
    if (touchStartX.current !== null && endX !== null) {
      const delta = endX - touchStartX.current;
      const threshold = 50;
      if (delta > threshold) {
        prevProject();
      } else if (delta < -threshold) {
        nextProject();
      }
    }

    touchStartX.current = null;
    touchTimeoutRef.current = window.setTimeout(() => {
      setShowControls(false);
      touchTimeoutRef.current = null;
    }, 2500);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    startAutoplay();
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1,
    );
    startAutoplay();
  };

  const goToIndex = (index: number) => {
    if (index === currentProjectIndex) return;
    setCurrentProjectIndex(index);
    startAutoplay();
  };

  return (
    <section className="w-full">
      <div
        className="relative bg-white dark:bg-darkgray  overflow-hidden group hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex-none w-full flex flex-col md:flex-row"
            >
              <div className="w-full md:w-2/5 relative bg-slate-200 dark:bg-slate-800 h-64 md:h-auto md:min-h-75 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center grayscale-0 md:grayscale md:group-hover:grayscale-0"
                />
              </div>

              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="font-bold text-xl md:text-2xl text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/70 dark:group-hover:text-black/70 text-sm md:text-base text-justify mt-4 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-row flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 group-hover:border-white/20 dark:group-hover:border-black/20 group-hover:text-white dark:group-hover:text-black px-3 py-1 rounded transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-3 mt-6">
                  {project.githubUrl && (
                    <a
                      className="flex-1 text-center border border-slate-300 dark:border-slate-600 group-hover:border-white/20 dark:group-hover:border-black/20 text-slate-700 dark:text-slate-300 group-hover:text-white dark:group-hover:text-black rounded-md px-4 py-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 group-hover:hover:bg-white/10 dark:group-hover:hover:bg-black/10"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositório ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      className="flex-1 text-center border border-slate-300 dark:border-slate-600 group-hover:border-white/20 dark:group-hover:border-black/20 text-slate-700 dark:text-slate-300 group-hover:text-white dark:group-hover:text-black rounded-md px-4 py-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 group-hover:hover:bg-white/10 dark:group-hover:hover:bg-black/10"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver Projeto ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMultipleProjects && (
          <>
            <button
              onClick={(e) => {
                prevProject();
                (e.currentTarget as HTMLElement).blur();
              }}
              className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-opacity duration-300 ${
                isHovered || showControls
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Previous project"
            >
              ←
            </button>

            <button
              onClick={(e) => {
                nextProject();
                (e.currentTarget as HTMLElement).blur();
              }}
              className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-opacity duration-300 ${
                isHovered || showControls
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Next project"
            >
              →
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    goToIndex(index);
                    (e.currentTarget as HTMLElement).blur();
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex
                      ? "bg-white dark:bg-darkgray w-6"
                      : "bg-white/50 dark:bg-darkgray/50 hover:bg-white/70 hover:dark:bg-darkgray/70"
                  } ${isHovered || showControls ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
