import Link from "../components/Link";
import ShootingStars from "../components/ShootingStars";

interface IHome {
  lang: "en" | "pt";
  theme: "light" | "dark";
}

export default function Home({ lang, theme }: IHome) {
  return (
    <>
      <ShootingStars theme={theme} />

      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen py-16 z-10 relative"
      >
        <h1 className="flex flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold items-center justify-center text-center mb-6 md:mb-20 text-black dark:text-white">
          <span>Luiz</span>
          <span>Gustavo</span>
        </h1>

        <span className="text-lg md:text-xl text-center max-w-xl px-6 text-slate-500 dark:text-white">
          {lang === "pt"
            ? "Criando experiências digitais através de código limpo, design funcional e atenção aos detalhes."
            : "Crafting digital experiences through clean code, functional design, and attention to detail."}
        </span>

        <nav className="flex flex-wrap justify-center gap-4 mt-8 md:mt-10 px-6">
          <Link
            to="#projects"
            onClick={(to) =>
              document
                .getElementById(to)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {lang === "pt" ? "Projetos" : "Projects"}
          </Link>

          <Link
            to="#about"
            onClick={(to) =>
              document
                .getElementById(to)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {lang === "pt" ? "Sobre" : "About"}
          </Link>
          <Link
            to="#contact"
            onClick={(to) =>
              document
                .getElementById(to)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {lang === "pt" ? "Contato" : "Contact"}
          </Link>
        </nav>
      </section>
    </>
  );
}
