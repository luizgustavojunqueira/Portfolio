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
      className="h-full flex items-center justify-center max-w-30 w-30 my-2 md:my-0 md:py-4 border-b-3 dark:border-darkgray dark:hover:border-slate-100 border-slate-100 hover:border-darkgray"
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
