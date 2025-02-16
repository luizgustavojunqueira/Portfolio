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
        <section className="flex-center column project-item">
            <img src={image} alt={name} />
            <section className="flex-center column">
                <h3 className="medium highlight-text-dark">{name}</h3>
                <p>{description}</p>
                <section className="flex-center no-wrap row project-links">
                    {repo != undefined && (
                        <a
                            className="flex-center"
                            href={repo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {lang === "pt" ? "Repositório" : "Repository"}
                        </a>
                    )}

                    {link != undefined && (
                        <a
                            className="flex-center"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {lang === "pt" ? "Ver Projeto" : "View Project"}
                        </a>
                    )}
                </section>
            </section>
        </section>
    );
}
