import Timeline from "../components/Timeline";

export default function About({ lang }: { lang: "en" | "pt" }) {
  return (
    <section
      id="#about"
      className="flex flex-col items-center min-h-screen z-10 relative"
    >
      <section className="flex flex-row items-start justify-start gap-20 mt-30">
        <section className="max-w-4xl flex flex-col items-start justify-start gap-8 ">
          <h2 className="text-8xl font-bold flex flex-col justify-start items-start">
            <span>Sobre</span>
            <span>Mim</span>
          </h2>

          <span className="text-xl/9 text-left max-w-xl text-slate-500 dark:text-slate-400 mt-10">
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
        <section className="">
          <Timeline
            points={[
              {
                year: 2018,
                title: "Primeiro contato com programação",
                active: false,
              },
              {
                year: 2020,
                title: "Curso técnico em informática",
                description: "IFMS",
                active: false,
              },
              {
                year: 2022,
                title: "Curso de Ciência da Computação",
                description: "UFMS",
                active: false,
              },
              {
                year: 2025,
                title: "Gradução em Ciência da Computação",
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
