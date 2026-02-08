import Timeline from "../components/Timeline";

export default function About({ lang }: { lang: "en" | "pt" }) {
  return (
    <section
      id="#about"
      className="flex flex-col items-center min-h-screen z-10 relative px-6 md:px-12"
    >
      <section className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-12 lg:gap-20 mt-16 lg:mt-30 w-full max-w-6xl">
        <section className="w-full flex flex-col items-start justify-start gap-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold flex flex-col justify-start items-start">
            <span>{lang === "pt" ? "Sobre" : "About"}</span>
            <span>{lang === "pt" ? "Mim" : "Me"}</span>
          </h2>

          <span className="text-lg/8 md:text-xl/9 text-left max-w-xl text-slate-500 dark:text-slate-400 mt-6 lg:mt-10">
            {lang === "pt" ? (
              <>
                Meu nome é{" "}
                <span className="font-bold text-black dark:text-white">
                  Luiz Gustavo S. S. Junqueira
                </span>
                . Bacharel em{" "}
                <span className="font-bold text-black dark:text-white">
                  Ciência da Computação
                </span>{" "}
                na UFMS. Interessado em{" "}
                <span className="font-bold text-black dark:text-white">
                  automação
                </span>
                ,{" "}
                <span className="font-bold text-black dark:text-white">
                  robótica
                </span>{" "}
                e{" "}
                <span className="font-bold text-black dark:text-white">
                  desenvolvimento de software
                </span>
                . Atualmente focado em{" "}
                <span className="font-bold text-black dark:text-white">
                  backend
                </span>
                , com projetos em{" "}
                <span className="font-bold text-black dark:text-white">
                  IoT
                </span>{" "}
                e{" "}
                <span className="font-bold text-black dark:text-white">
                  sistemas embarcados
                </span>
                .
              </>
            ) : (
              <>
                My name is{" "}
                <span className="font-bold text-black dark:text-white">
                  Luiz Gustavo S. S. Junqueira
                </span>
                . Bachelor in{" "}
                <span className="font-bold text-black dark:text-white">
                  Computer Science
                </span>{" "}
                at UFMS. Interested in{" "}
                <span className="font-bold text-black dark:text-white">
                  automation
                </span>
                ,{" "}
                <span className="font-bold text-black dark:text-white">
                  robotics
                </span>
                , and{" "}
                <span className="font-bold text-black dark:text-white">
                  software development
                </span>
                . Currently focused on{" "}
                <span className="font-bold text-black dark:text-white">
                  backend
                </span>
                , with projects in{" "}
                <span className="font-bold text-black dark:text-white">
                  IoT
                </span>{" "}
                and{" "}
                <span className="font-bold text-black dark:text-white">
                  embedded systems
                </span>
                .
              </>
            )}
          </span>
        </section>
        <section className="w-full">
          <Timeline
            points={[
              {
                year: 2018,
                title:
                  lang === "pt"
                    ? "Primeiro contato com Programação"
                    : "First contact with Programming",
                active: false,
              },
              {
                year: 2020,
                title:
                  lang === "pt"
                    ? "Curso técnico em informática"
                    : "Technical course in computer science",
                description: "IFMS",
                active: false,
              },
              {
                year: 2022,
                title:
                  lang === "pt"
                    ? "Início da graduação em Ciência da Computação"
                    : "Start of graduation in Computer Science",
                description: "UFMS",
                active: false,
              },
              {
                year: 2025,
                title:
                  lang === "pt"
                    ? "Graduado em Ciência da Computação"
                    : "Graduated in Computer Science",
                active: true,
              },
            ]}
          />
        </section>
      </section>
      {/*       <FadeSection id="about" observing={observing}> */}
      {/*         <h2 className="page-header"> */}
      {/*           {lang === "pt" ? "Sobre Mim" : "About Me"} */}
      {/*         </h2> */}
      {/**/}
      {/*         <h3 className="section-header"> */}
      {/*           {lang === "pt" ? "Quem sou Eu" : "Who am I"} */}
      {/*         </h3> */}
      {/*         <section className="p-2 md:py-6 md:px-16 text-lg/8 md:text-xl/10 text-justify flex flex-col gap-6 text-current"> */}
      {/*           <p> */}
      {/*             {lang === "pt" */}
      {/*               ? ` */}
      {/* Olá! Meu nome é Luiz Gustavo S. S. Junqueira. Sou um */}
      {/* estudante de 20 anos de Ciência da Computação na */}
      {/* Universidade Federal de Mato Grosso do Sul (UFMS). */}
      {/* ` */}
      {/*               : ` */}
      {/* Hello! My name is Luiz Gustavo S. S. Junqueira. I am a */}
      {/* 20-year-old Computer Science student at the Federal */}
      {/* University of Mato Grosso do Sul (UFMS). */}
      {/* `} */}
      {/*           </p> */}
      {/*           <p> */}
      {/*             {lang === "pt" */}
      {/*               ? ` */}
      {/* Estou interessado em automação, robótica e */}
      {/* desenvolvimento de software em geral. Atualmente, tenho */}
      {/* me dedicado a estudar desenvolvimento de backend, mas */}
      {/* também tenho experiência e interesse em frontend. */}
      {/* Além disso, trabalho em projetos envolvendo IoT e */}
      {/* sistemas embarcados, como drones autônomos e soluções */}
      {/* de monitoramento remoto. */}
      {/* ` */}
      {/*               : ` */}
      {/* I am interested in automation, robotics, and software */}
      {/* development in general. Currently, I have been */}
      {/* dedicating myself to studying backend development, but I */}
      {/* also have experience and interest in frontend. */}
      {/* Additionally, I work on projects involving IoT and */}
      {/* embedded systems, such as autonomous drones and remote */}
      {/* monitoring solutions. */}
      {/* `} */}
      {/*           </p> */}
      {/*           <p> */}
      {/*             {lang === "pt" */}
      {/*               ? ` */}
      {/* Acredito no poder da tecnologia para criar soluções */}
      {/* inovadoras e impactantes, e estou sempre buscando */}
      {/* aprender e aplicar novas ferramentas e metodologias em */}
      {/* meus projetos. */}
      {/* ` */}
      {/*               : ` */}
      {/**/}
      {/* I believe in the power of technology to create */}
      {/* innovative and impactful solutions, and I am always */}
      {/* seeking to learn and apply new tools and methodologies */}
      {/* in my projects. */}
      {/* `} */}
      {/*           </p> */}
      {/*         </section> */}
      {/*       </FadeSection> */}
    </section>
  );
}
