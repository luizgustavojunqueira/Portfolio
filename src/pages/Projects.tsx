import ProjectItem from "../components/ProjectItem";

export default function Projects() {
    return (
        <section>
            <section className="page dark_gray_bg">
                <header>
                    <h2 className="dark_green">Projects</h2>
                </header>

                <section className="projects_content">
                    <section className="projects_header">
                        <h3 className="light_green">What I have done</h3>
                    </section>

                    <section>
                        <ProjectItem
                            name="Project 1"
                            description="Description 1"
                            image=""
                            link=""
                            tecnologies=""
                        />
                    </section>
                </section>
            </section>
        </section>
    );
}
