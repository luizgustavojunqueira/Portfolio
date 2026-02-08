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
      className="h-full flex items-center justify-center max-w-30 w-30 m-0 p-2 hover:text-slate-500 transition-colors duration-300 hover:cursor-pointer
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
