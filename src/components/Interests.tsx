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
    debounceRef.current = window.setTimeout(() => setCurrentOpen(index), 150);
  };

  return (
    <section className="w-full">
      {label && (
        <div className="text-xs text-slate-400 uppercase tracking-widest mb-4">
          {label}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:h-80 border border-slate-300 dark:border-slate-700 overflow-hidden">
        {interests.map((interest, index) => (
          <div
            key={interest.id}
            onMouseEnter={() => {
              handleInteraction(index);
            }}
            onClick={() => {
              setCurrentOpen(index);
            }}
            className={`relative overflow-hidden transition-all duration-450 ease-in-out
              ${
                currentOpen === index
                  ? "flex-[1_1_auto] bg-black dark:bg-white flex flex-row-reverse"
                  : "flex-[0_0_52px] min-w-13 bg-slate-100 dark:bg-slate-900"
              }
              ${index !== interests.length - 1 ? "border-b md:border-r border-slate-300 dark:border-slate-700" : ""}
            `}
          >
            <div
              className={`flex transition-opacity duration-200 ${currentOpen === index ? "jutify-end" : "absolute  items-center justify-center inset-0"} `}
            >
              {currentOpen === index ? (
                <div className="w-full flex flex-row rounded-md justify-center items-center mx-4">
                  {interest.tags && (
                    <div className="flex flex-row flex-wrap w-full gap-2 justify-end h-10">
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
              ) : (
                <span className="text-black dark:text-white font-semibold text-xs tracking-wide md:rotate-180 whitespace-nowrap [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]">
                  {interest.title}
                </span>
              )}
            </div>

            <div
              className={`p-6 md:p-8 h-full w-full transition-opacity duration-300 ${
                currentOpen === index ? "opacity-100 delay-150" : "opacity-0"
              }`}
            >
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
