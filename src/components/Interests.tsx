import { useRef, useState } from "react";

interface InterestItem {
  title: string;
  subtitle?: string;
  description?: string;
  icon: React.ReactNode;
  id: string;
  tags?: string[];
}
interface IInterests {
  interests: InterestItem[];
  label?: string;
}

function Interests({ interests, label }: IInterests) {
  const [currentOpen, setCurrentOpen] = useState<number>(0);
  const debounceRef = useRef<number | null>(null);

  const handleInteraction = (index: number) => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => setCurrentOpen(index), 100);
  };

  return (
    <section className="w-full">
      {label && (
        <div className="text-xs text-slate-400 uppercase tracking-widest mb-4">
          {label}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:h-80 border border-slate-100 dark:border-slate-900 overflow-hidden">
        {interests.map((interest, index) => {
          const isOpen = currentOpen === index;
          return (
            <div
              key={interest.id}
              onMouseEnter={() => handleInteraction(index)}
              onClick={() => setCurrentOpen(index)}
              className={`relative overflow-hidden flex transition-[flex-grow,height] duration-200 ease-in-out
                    ${isOpen ? "h-80 md:h-full md:flex-[3_1_0%] bg-black dark:bg-white flex-row-reverse" : "h-13 md:h-full md:flex-[0_0_52px] min-w-13 bg-white dark:bg-black"}
                  // ${index !== interests.length - 1 ? "border-b md:border-r border-slate-100 dark:border-slate-900" : ""}
                  group
                `}
              style={{ minWidth: isOpen ? 220 : 52 }}
            >
              {!isOpen && (
                <span className="absolute inset-0 flex items-center justify-center text-black dark:text-white font-semibold text-xs tracking-wide md:rotate-180 whitespace-nowrap [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] z-10 pointer-events-none select-none">
                  {interest.title}
                </span>
              )}
              {isOpen && (
                <div className="flex flex-col w-full h-full">
                  <div className="p-6 md:p-8 h-full w-full">
                    <div className="flex flex-row items-start">
                      <div>
                        <div className="text-2xl mb-3 text-black">
                          {typeof interest.icon === "string" ? (
                            <span>{interest.icon}</span>
                          ) : (
                            interest.icon
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white dark:text-black mb-1">
                          {interest.title}
                        </h3>
                        {interest.subtitle && (
                          <p className="text-sm text-slate-400 leading-relaxed mb-3">
                            {interest.subtitle}
                          </p>
                        )}
                        {interest.description && (
                          <p className="text-xs text-white/50 dark:text-black/50 leading-relaxed border-t border-white/10 dark:border-black/10 pt-3">
                            {interest.description}
                          </p>
                        )}

                        {interest.tags && (
                          <div className="mt-4 flex flex-row flex-wrap gap-2">
                            {interest.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs border-white/20 dark:border-black/20 border text-white dark:text-black px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Interests;
