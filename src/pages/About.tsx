import Interests from "../components/Interests";
import Timeline from "../components/Timeline";

export default function About({ lang }: { lang: "en" | "pt" }) {
  return (
    <section
      id="#about"
      className="flex flex-col items-center min-h-screen z-1 relative px-6 md:px-12"
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

      <section className="w-full max-w-275 my-8 lg:my-12">
        <Interests
          label={lang === "pt" ? "interesses" : "interests"}
          interests={
            lang === "pt"
              ? [
                  {
                    id: "backend",
                    title: "Backend",
                    subtitle: "APIs, microserviços e arquitetura de sistemas",
                    description:
                      "Gosto de entender como sistemas funcionam por baixo dos panos. Construir APIs robustas e escaláveis é onde me sinto mais em casa.",
                    icon: "●",
                    tags: [
                      "Node.js",
                      "Elixir",
                      "Go",
                      ".NET",
                      "SQL",
                      "Docker",
                      "Python",
                    ],
                  },
                  {
                    id: "frontend",
                    title: "Frontend",
                    subtitle: "Interfaces minimalistas e experiências fluidas",
                    description:
                      "Transformar lógica em algo visual e interativo é satisfatório. Gosto de criar interfaces que falem por si só.",
                    icon: "◼",
                    tags: ["React", "Vue", "Tailwind", "Figma"],
                  },
                  {
                    id: "automation",
                    title: "Automação",
                    subtitle: "Scripts, pipelines e processos automatizados",
                    description:
                      "Se algo precisa ser feito mais de duas vezes, eu automatizo. Eficiência é eliminar trabalho repetitivo.",
                    icon: "▶",
                    tags: ["Python", "Bash", "GitHub Actions", "CI/CD"],
                  },
                  {
                    id: "robotics",
                    title: "Robótica",
                    subtitle: "Sistemas autônomos e controle embarcado",
                    description:
                      "Fazer software interagir com o mundo físico é outra dimensão. Robótica é onde código ganha corpo.",
                    icon: "◆",
                    tags: ["ROS", "C++", "Python", "Gazebo"],
                  },
                  {
                    id: "iot",
                    title: "IoT",
                    subtitle: "Dispositivos conectados e monitoramento remoto",
                    description:
                      "Conectar dispositivos e coletar dados em tempo real abre possibilidades enormas. É a ponte entre o digital e o real.",
                    icon: "⬢",
                    tags: ["MQTT", "ESP32", "Raspberry Pi", "LoRa"],
                  },
                  {
                    id: "embedded",
                    title: "Embarcados",
                    subtitle: "Firmware, sensores e hardware de baixo nível",
                    description:
                      "Programar com recursos limitados exige criatividade. Cada byte importa — e isso me fascina.",
                    icon: "▼",
                    tags: ["C", "C++", "RTOS", "ESP32"],
                  },
                  {
                    id: "opensource",
                    title: "Open Source",
                    subtitle: "Contribuições e projetos colaborativos",
                    description:
                      "Construir em público, aprender com outros e contribuir de volta. O melhor jeito de evoluir como dev.",
                    icon: "★",
                    tags: ["GitHub", "OSS", "Comunidade", "Colaboração"],
                  },
                ]
              : [
                  {
                    id: "backend",
                    title: "Backend",
                    subtitle: "APIs, microservices and system architecture",
                    description:
                      "I enjoy understanding how systems work under the hood. Building robust and scalable APIs is where I feel most at home.",
                    icon: "●",
                    tags: [
                      "Node.js",
                      "Elixir",
                      "Go",
                      ".NET",
                      "SQL",
                      "Docker",
                      "Python",
                    ],
                  },
                  {
                    id: "frontend",
                    title: "Frontend",
                    subtitle: "Minimalist interfaces and fluid experiences",
                    description:
                      "Transforming logic into something visual and interactive is satisfying. I like creating interfaces that speak for themselves.",
                    icon: "◼",
                    tags: ["React", "Vue", "Tailwind", "Figma"],
                  },
                  {
                    id: "automation",
                    title: "Automation",
                    subtitle: "Scripts, pipelines and automated processes",
                    description:
                      "If something needs to be done more than twice, I automate it. Efficiency is about eliminating repetitive work.",
                    icon: "▶",
                    tags: ["Python", "Bash", "GitHub Actions", "CI/CD"],
                  },
                  {
                    id: "robotics",
                    title: "Robotics",
                    subtitle: "Autonomous systems and embedded control",
                    description:
                      "Making software interact with the physical world is another dimension. Robotics is where code takes shape.",
                    icon: "◆",
                    tags: ["ROS", "C++", "Python", "Gazebo"],
                  },
                  {
                    id: "iot",
                    title: "IoT",
                    subtitle: "Connected devices and remote monitoring",
                    description:
                      "Connecting devices and collecting data in real-time opens up huge possibilities. It's the bridge between digital and physical.",
                    icon: "⬢",
                    tags: ["MQTT", "ESP32", "Raspberry Pi", "LoRa"],
                  },
                  {
                    id: "embedded",
                    title: "Embedded",
                    subtitle: "Firmware, sensors and low-level hardware",
                    description:
                      "Programming with limited resources requires creativity. Every byte matters — and that fascinates me.",
                    icon: "▼",
                    tags: ["C", "C++", "RTOS", "ESP32"],
                  },
                  {
                    id: "opensource",
                    title: "Open Source",
                    subtitle: "Contributions and collaborative projects",
                    description:
                      "Building in public, learning from others and contributing back. The best way to evolve as a dev.",
                    icon: "★",
                    tags: ["GitHub", "OSS", "Community", "Collaboration"],
                  },
                ]
          }
        />
      </section>
    </section>
  );
}
