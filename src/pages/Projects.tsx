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
                        image="https://raw.githubusercontent.com/luizgustavojunqueira/Portfolio/refs/heads/development/Images/Portfolio.png"
                        repo="https://github.com/luizgustavojunqueira/portfolio"
                        link="https://portfolio-luizgustavojunqueiras-projects.vercel.app/"
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
            </section>
        </>
    );
}
