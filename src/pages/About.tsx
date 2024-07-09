import "../styles/about.css";
import ProfilePicture from "../assets/profile_picture.jpg";

export default function About() {
  return (
    <section className="about medium_gray_bg">
      <header>
        <h2 className="dark_green">About</h2>
      </header>

      <section className="about_content">
        <section className="about_header">
          <h3 className="light_green">Who I am</h3>
        </section>

        <section className="about_paragraphs">
          <p>
            Hello! My name is Luiz Gustavo S. S. Junqueira. I am an 20 year old
            undergraduate student in Computer Science at the Federal University
            of Mato Grosso do Sul (UFMS).{" "}
          </p>

          <p>
            I'm interested in robotics, automation and software development in
            general. Currently I have been studying backend development with a
            greater focus, however I am also interested in frontend development
            and have some experience with it
          </p>
        </section>

        <section className="profile_picture dark_gray_bg">
          <img src={ProfilePicture} />
        </section>
      </section>
    </section>
  );
}
