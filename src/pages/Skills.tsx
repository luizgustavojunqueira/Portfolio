import "../styles/skills.css";
import javaScript from "../assets/icons8-javascript-48.png"
import typesscript from "../assets/icons8-typescript-48.png"
import python from "../assets/icons8-python-48.png"
import c from "../assets/icons8-c-48.png"
import cplusplus from "../assets/icons8-c-48 (1).png"
import html from "../assets/icons8-html-48.png"
import css from "../assets/icons8-css-48.png"
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
        <div className="item">
          <div className="icon_js">
             <img  src = {javaScript}  alt = ""/>
             
          </div>
         <p>JavaScript</p>
        </div>
        <div className="item">
        <div className="icon_js">
             <img  src = {typesscript}  alt = ""/>
             
          </div>
         <p>Typescript</p>
        </div>
        <div className="item">
        <div className="icon_js">
             <img  src = {python}  alt = ""/>
             
          </div>
         <p>Python</p>
        </div>
        <div className="item">
          <div className="icon_js">
             <img  src = {c}  alt = ""/>
             
          </div>
         <p>C</p>
         </div>
        <div className="item">
        <div className="icon_js">
             <img  src = {cplusplus}  alt = ""/>
             
          </div>
         <p>C++</p>
        </div>
        <div className="item">  
          <div className="icon_js">
             <img  src = {html}  alt = ""/>
             
          </div>
         <p>HTML</p>
         </div>
        <div className="item">
        <div className="icon_js">
             <img  src = {css}  alt = ""/>
             
          </div>
         <p>CSS</p>
        </div>
        
        </div>
    </section>
  );
}
