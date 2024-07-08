import "../styles/home.css";
import GitHubIcon from "../assets/github_icon.svg";
import LinkedInIcon from "../assets/linkedin_icon.svg";
import EmailIcon from "../assets/email_icon.svg";

export default function Home() {
  return (
    <section className="home">
      <header>
        <h1 className="welcome_text dark_green">Hello!&nbsp;</h1>
        <h1 className="welcome_text white">I'm Luiz Gustavo</h1>
      </header>
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
  );
}
