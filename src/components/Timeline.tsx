interface ITimeline {
  points: {
    year: number;
    title: string;
    description?: string;
    active: boolean;
  }[];
}

function Timeline({ points }: ITimeline) {
  return (
    <div className="w-full max-w-2xl">
      {points.map((point, index) => (
        <div key={index} className="flex gap-6 relative">
          <div className="flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full border-2 shrink-0 ${
                point.active
                  ? "bg-black border-black dark:bg-white dark:border-white"
                  : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
              }`}
            />
            {index !== points.length - 1 && (
              <div className="w-0.5 bg-gray-300 dark:bg-gray-700 flex-1 mt-2 mb-2" />
            )}
          </div>

          <div className={index !== points.length - 1 ? "pb-12" : "pb-4"}>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              {point.year}
            </span>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white min-h-7">
              {point.title}
            </h3>
            {point.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {point.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
