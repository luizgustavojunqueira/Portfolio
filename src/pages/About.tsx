export default function About() {
    return (
        <section id="about" className="flex-start column page">
            <section className="flex-start row page-header">
                <h2 className="small">About</h2>
            </section>

            <section className="flex-center column content-container">
                <section className="flex-center">
                    <h3 className="highlight-text-dark large">Who I am</h3>
                </section>

                <section className="about-content flex-start column medium content">
                    <p>
                        Hello! My name is Luiz Gustavo S. S. Junqueira. I am a
                        20-year-old Computer Science student at the Federal
                        University of Mato Grosso do Sul (UFMS).
                    </p>
                    <p>
                        I am interested in automation, robotics, and software
                        development in general. Currently, I have been
                        dedicating myself to studying backend development, but I
                        also have experience and interest in frontend.
                        Additionally, I work on projects involving IoT and
                        embedded systems, such as autonomous drones and remote
                        monitoring solutions.
                    </p>
                    <p>
                        I believe in the power of technology to create
                        innovative and impactful solutions, and I am always
                        seeking to learn and apply new tools and methodologies
                        in my projects.
                    </p>
                </section>
            </section>
        </section>
    );
}
