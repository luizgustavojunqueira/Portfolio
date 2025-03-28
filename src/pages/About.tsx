import FadeSection from "../components/FadeSection.tsx";

export default function About({
    lang,
    observing,
}: {
    lang: "en" | "pt";
    observing: boolean;
}) {
    return (
        <section
            id="about"
            className="transition-colors flex flex-col items-center justify-start gap-4 min-h-screen bg-slate-200 dark:bg-midgray dark:text-verylightgreen text-black p-4"
        >
            <FadeSection id="about" observing={observing}>
                <h2 className="page-header">
                    {lang === "pt" ? "Sobre Mim" : "About Me"}
                </h2>

                <h3 className="section-header">
                    {lang === "pt" ? "Quem sou Eu" : "Who am I"}
                </h3>
                <section className="p-2 md:py-6 md:px-16 text-lg/8 md:text-xl/10 text-justify flex flex-col gap-6 text-current">
                    <p>
                        {lang === "pt"
                            ? `
Olá! Meu nome é Luiz Gustavo S. S. Junqueira. Sou um
estudante de 20 anos de Ciência da Computação na
Universidade Federal de Mato Grosso do Sul (UFMS).
`
                            : `
Hello! My name is Luiz Gustavo S. S. Junqueira. I am a
20-year-old Computer Science student at the Federal
University of Mato Grosso do Sul (UFMS).
`}
                    </p>
                    <p>
                        {lang === "pt"
                            ? `
Estou interessado em automação, robótica e
desenvolvimento de software em geral. Atualmente, tenho
me dedicado a estudar desenvolvimento de backend, mas
também tenho experiência e interesse em frontend.
Além disso, trabalho em projetos envolvendo IoT e
sistemas embarcados, como drones autônomos e soluções
de monitoramento remoto.
`
                            : `
I am interested in automation, robotics, and software
development in general. Currently, I have been
dedicating myself to studying backend development, but I
also have experience and interest in frontend.
Additionally, I work on projects involving IoT and
embedded systems, such as autonomous drones and remote
monitoring solutions.
`}
                    </p>
                    <p>
                        {lang === "pt"
                            ? `
Acredito no poder da tecnologia para criar soluções
inovadoras e impactantes, e estou sempre buscando
aprender e aplicar novas ferramentas e metodologias em
meus projetos.
`
                            : `

I believe in the power of technology to create
innovative and impactful solutions, and I am always
seeking to learn and apply new tools and methodologies
in my projects.
`}
                    </p>
                </section>
            </FadeSection>
        </section>
    );
}
