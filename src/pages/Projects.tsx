import ProjectItem from "../components/ProjectItem";

export default function Projects({ lang }: { lang: "en" | "pt" }) {
    return (
        <>
            <section className="flex-start row page-header">
                <h2 className="small highlight-text-dark">
                    {lang === "pt" ? "Projetos" : "Projects"}
                </h2>
            </section>
            <section className="flex-start no-wrap column content-container">
                <section className="flex-center">
                    <h3 className="highlight-text large">
                        {lang === "pt" ? "O que eu já fiz" : "What I have done"}
                    </h3>
                </section>
                <section className="flex-center row projects">
                    <ProjectItem
                        lang={lang}
                        name={lang === "pt" ? "Portfólio" : "Portfolio"}
                        description={
                            lang === "pt"
                                ? `
Um portfólio pessoal feito com ReactJS e CSS, onde falo um pouco sobre mim e mostro alguns dos meus projetos.
`
                                : `
A personal portfolio made with ReactJS and CSS, where I talk a little about myself and show some of my projects.
`
                        }
                        image="https://raw.githubusercontent.com/luizgustavojunqueira/Portfolio/refs/heads/main/Portfolio.png"
                        repo="https://github.com/luizgustavojunqueira/portfolio"
                        link="https://portfolio-luizgustavojunqueiras-projects.vercel.app/"
                    />
                </section>
            </section>
        </>
    );
}
