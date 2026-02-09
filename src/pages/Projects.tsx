import ProjectsSection from "../components/projects/ProjectSection";

export default function Projects({ lang }: { lang: "en" | "pt" }) {
  return (
    <section
      id="#projects"
      className="flex flex-col items-center min-h-screen relative px-6 md:px-12"
    >
      <section className="flex flex-row justify-start items-start w-full max-w-6xl mt-16 lg:mt-30">
        <section className="flex flex-col ">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold ">
            {lang === "pt" ? "Projetos" : "Projects"}
          </h2>

          <span className="text-lg/8 md:text-xl/9 text-left max-w-xl text-slate-500 dark:text-slate-400 mt-6 lg:mt-10">
            {lang === "pt" ? (
              <>Algumas coisas que construi ao longo do caminho.</>
            ) : (
              <>Some things I built along the way.</>
            )}
          </span>
        </section>
      </section>

      <section className="w-full h-fit max-w-275 my-8 lg:my-12">
        <ProjectsSection
          projects={[
            {
              id: "portfolio",
              title: lang === "pt" ? "Portfólio" : "Portfolio",
              description:
                lang === "pt"
                  ? "Um portfólio pessoal feito com ReactJS e CSS, onde falo um pouco sobre mim e mostro alguns dos meus projetos."
                  : "A personal portfolio made with ReactJS and CSS, where I talk a little about myself and show some of my projects.",
              image:
                "https://raw.githubusercontent.com/luizgustavojunqueira/Portfolio/refs/heads/development/Images/Portfolio.png",
              tags: ["ReactJS", "CSS", "JavaScript"],
              githubUrl: "https://github.com/luizgustavojunqueira/portfolio",
              liveUrl: "https://portfolio.luizgustavojunqueira.com",
              isHighlight: true,
            },
            {
              id: "blog",
              title: "Blog",
              description:
                lang === "pt"
                  ? "Meu Blog pessoal feito com Golang, Templ e TailwindCSS onde escrevo sobre tecnologia, programação e projetos pessoais."
                  : "My personal Blog made with Golang, Templ and TailwindCSS where I write about technology, programming and personal projects.",
              image:
                "https://raw.githubusercontent.com/luizgustavojunqueira/Portfolio/refs/heads/development/Images/Blogo.png",
              tags: ["Golang", "Templ", "TailwindCSS"],
              githubUrl: "https://github.com/luizgustavojunqueira/Blogo",
              liveUrl: "https://blog.luizgustavojunqueira.com",
              isHighlight: true,
            },
            {
              id: "ecogis",
              title: "EcoGIS",
              description:
                lang === "pt"
                  ? "Projeto de pesquisa e extensão no Laboratório de Engenharia de Software, da UFMS, para monitoramento e gestão dos biomas do Brasil, por meio da ferramenta WebGis"
                  : "Research and extension project at the Software Engineering Laboratory, UFMS, for monitoring and management of the biomes of Brazil, through the WebGis tool",
              image:
                "https://github.com/luizgustavojunqueira/Portfolio/blob/development/Images/ecogis.png?raw=true",
              tags: ["WebGIS", "Research"],
              isHighlight: false,
            },
            {
              id: "arbo",
              title: "Arbo+",
              description:
                lang === "pt"
                  ? "Projeto de iniciação científica no LEDES (UFMS). Uma aplicação web para gerenciamento de inventários urbanos qualitativos e quantitativos."
                  : "Scientific initiation project at LEDES (UFMS). A web application for managing qualitative and quantitative urban inventories.",
              image:
                "https://github.com/luizgustavojunqueira/Portfolio/blob/development/Images/ArboMais.png?raw=true",
              tags: ["Web App", "IC", "LEDES"],
              isHighlight: false,
            },
          ]}
        />
      </section>
    </section>
  );
}
