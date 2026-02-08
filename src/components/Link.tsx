function Link({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: (to: string) => void;
}) {
  return (
    <a
      className="h-full flex items-center justify-center w-auto px-4 py-2 text-sm md:text-base text-slate-600 dark:text-white hover:text-slate-500 dark:hover:text-shadow-teal-50 transition-colors duration-300 hover:cursor-pointer
      relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-slate-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
      onClick={(e) => {
        e.preventDefault();
        onClick(to);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
