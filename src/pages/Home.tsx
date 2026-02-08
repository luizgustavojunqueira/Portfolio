import Link from "../components/Link";
import ShootingStars from "../components/ShootingStars";

export default function Home({ lang }: { lang: "en" | "pt" }) {
  return (
    <>
      <ShootingStars />

      <div className="flex flex-col items-center justify-center h-screen z-10 relative">
        <h1 className="flex flex-col text-9xl font-bold text-center mb-20">
          <span>Luiz</span>
          <span>Gustavo</span>
        </h1>

        <span className="text-xl text-center max-w-xl text-slate-500">
          Criando experiências digitais através de código limpo, design
          funcional e atenção aos detalhes.
        </span>

        <nav className="flex gap-4 mt-10">
          <Link
            to="#projects"
            onClick={(to) =>
              document
                .getElementById(to)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projetos
          </Link>

          <Link
            to="#about"
            onClick={(to) =>
              document
                .getElementById(to)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Sobre
          </Link>
          <Link
            to="#contact"
            onClick={(to) =>
              document
                .getElementById(to)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contato
          </Link>
        </nav>
      </div>
    </>
  );
}
