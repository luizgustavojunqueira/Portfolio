import "../styles/home.css";
import GitHubIcon from "../assets/github_icon.svg";
import LinkedInIcon from "../assets/linkedin_icon.svg";
import EmailIcon from "../assets/email_icon.svg";

export default function Home() {
  return (
    <section id="home" className="home dark_gray_bg">
      <header className="home_header">
        <a className="page_link" href="#about">
          <p>About&nbsp; </p>
        </a>
        <a className="page_link" href="#skills">
          <p>Skills&nbsp; </p>
        </a>
        <a className="page_link" href="#contact">
          <p>Contact&nbsp; </p>
        </a>
      </header>

      <section className="home_content">
        <section className="home_title">
          <h1 className="welcome_text dark_green">Hello!&nbsp;</h1>
          <h1 className="welcome_text white">I'm Luiz Gustavo</h1>
        </section>
        <span className="home_icons">
          <a href="https://github.com/luizgustavojunqueira" target="_blank">
            <img className="icon" src={GitHubIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-gustavo-sabadim-spolon-junqueira-769333208/"
            target="_blank"
          >
            <img className="icon" src={LinkedInIcon} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=luizgustavossj@gmail.com"
            target="_blank"
          >
            <img className="icon" src={EmailIcon} />
          </a>
        </span>
      </section>
    </section>
  );
}
