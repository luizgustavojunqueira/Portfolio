export default function ProjectItem({
  name,
  description,
  image,
  repo,
  link,
  lang,
}: {
  name: string;
  description: string;
  image: string;
  repo?: string | undefined;
  link?: string | undefined;
  lang: "en" | "pt";
}) {
  return (
    <section className="md:max-w-sm lg:max-w-sm flex flex-col gap-0">
      <img src={image} alt={name} className="rounded-t-xl" />
      <section className="flex flex-col gap-4 bg-slate-100 dark:bg-darkgray p-6">
        <h3 className="font-bold text-xl text-emerald-600 dark:text-lime-400">
          {name}
        </h3>
        <p className="text-justify">{description}</p>
        {(repo != undefined || link != undefined) && (
          <section className="flex items-center justify-between gap-4 m-2">
            {repo != undefined && (
              <a
                className="w-full text-center bg-slate-200 dark:bg-midgray rounded-md p-2 hover:bg-slate-300 dark:hover:bg-midgray/50"
                href={repo}
                target="_blank"
                rel="noreferrer"
              >
                {lang === "pt" ? "Repositório" : "Repository"}
              </a>
            )}

            {link != undefined && (
              <a
                className="w-full text-center bg-slate-200 dark:bg-midgray rounded-md p-2 hover:bg-slate-300 dark:hover:bg-midgray/50"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {lang === "pt" ? "Ver Projeto" : "View Project"}
              </a>
            )}
          </section>
        )}
      </section>
    </section>
  );
}
