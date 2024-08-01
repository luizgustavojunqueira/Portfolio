import "../styles/skills.css";
import javaScript from "../assets/javascript_icon.svg";
import typeScript from "../assets/typescript_icon.svg";
import python from "../assets/python_icon.svg";
import cplusplus from "../assets/c++_icon.svg";
import html from "../assets/html_icon.svg";
import css from "../assets/css_icon.svg";
import c from "../assets/c_icon.svg";
import react from "../assets/react_icon.svg";
import node from "../assets/nodejs_icon.svg";
import git from "../assets/git_icon.svg";
import docker from "../assets/docker_icon.svg";
import linux from "../assets/linux_icon.svg";
import bash from "../assets/bash_icon.svg";
import SkillItem from "../components/SkillItem";

export default function Skills() {
  return (
    <section className="skills dark_gray_bg">
      <header>
        <h2 className="dark_green">Skills</h2>
      </header>

      <section className="skills_content">
        <section className="skills_header">
          <h3 className="light_green">What I can do</h3>
        </section>
      </section>
      <div className="containerSkills">
        <div className="skillsLine">
          <SkillItem image={javaScript} name={"JavaScript"} />
          <SkillItem image={typeScript} name={"TypeScript"} />
          <SkillItem image={python} name={"Python"} />
          <SkillItem image={c} name={"C"} />
          <SkillItem image={cplusplus} name={"C++"} />
          <SkillItem image={html} name={"HTML"} />
          <SkillItem image={css} name={"CSS"} />
        </div>
        <div className="skillsLine">
          <SkillItem image={node} name={"NodeJS"} />
          <SkillItem image={react} name={"ReactJS"} />
          <SkillItem image={git} name={"Git"} />
          <SkillItem image={docker} name={"Docker"} />
        </div>
        <div className="skillsLine">
          <SkillItem image={linux} name={"Linux"} />
          <SkillItem image={bash} name={"Bash"} />
        </div>
      </div>
    </section>
  );
}
