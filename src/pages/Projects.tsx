import FadeSection from "../components/FadeSection";
import ProjectItem from "../components/ProjectItem";

export default function Projects({
    lang,
    observing,
}: {
    lang: "en" | "pt";
    observing: boolean;
}) {
    return (
        <section
            id="projects"
            className="transition-colors flex flex-col items-center justify-start gap-4 min-h-screen bg-slate-200 dark:bg-midgray dark:text-verylightgreen text-black p-4"
        >
            <FadeSection id="projects" observing={observing}>
                <h2 className="page-header">
                    {lang === "pt" ? "Projetos" : "Projects"}
                </h2>

                <h3 className="section-header">
                    {lang === "pt" ? "O que eu já fiz" : "What I have done"}
                </h3>
                <section className="w-full flex flex-row flex-wrap justify-center gap-6 py-4 pb-8 md:px-0">
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
                        image="https://raw.githubusercontent.com/luizgustavojunqueira/Portfolio/refs/heads/development/Images/Portfolio.png"
                        repo="https://github.com/luizgustavojunqueira/portfolio"
                        link="https://portfolio.luizgustavojunqueira.com"
                    />

                    <ProjectItem
                        lang={lang}
                        name="Blog"
                        description={
                            lang === "pt"
                                ? `
Meu Blog pessoal feito com Golang, Templ e TailwindCSS onde escrevo sobre tecnologia, programação e projetos pessoais. 
`
                                : `
My personal Blog made with Golang, Templ and TailwindCSS where I write about technology, programming and personal projects.
`
                        }
                        image="https://raw.githubusercontent.com/luizgustavojunqueira/Portfolio/refs/heads/development/Images/Blogo.png"
                        repo="https://github.com/luizgustavojunqueira/Blogo"
                        link="https://blog.luizgustavojunqueira.com"
                    />

                    <ProjectItem
                        lang={lang}
                        name={"EcoGIS"}
                        description={
                            lang === "pt"
                                ? `
Projeto de pesquisa e extensão no Laboratório de Engenharia de Software, da UFMS, para monitoramento e gestão dos biomas do Brasil, por meio da ferramenta WebGis
`
                                : `
Research and extension project at the Software Engineering Laboratory, UFMS, for monitoring and management of the biomes of Brazil, through the WebGis tool 
`
                        }
                        image="https://github.com/luizgustavojunqueira/Portfolio/blob/development/Images/ecogis.png?raw=true"
                    />

                    <ProjectItem
                        lang={lang}
                        name={"Arbo+"}
                        description={
                            lang === "pt"
                                ? `
Projeto de iniciação científica no LEDES (UFMS). Uma aplicação web para gerenciamento de inventários urbanos qualitativos e quantitativos.
`
                                : `
Scientific initiation project at LEDES (UFMS). A web application for managing qualitative and quantitative urban inventories.
`
                        }
                        image="https://github.com/luizgustavojunqueira/Portfolio/blob/development/Images/ArboMais.png?raw=true"
                    />
                </section>
            </FadeSection>
        </section>
    );
}
