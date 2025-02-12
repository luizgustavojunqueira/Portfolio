import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";

import ArrowTopIcon from "./assets/arrow_top_icon.png";

function App() {
    return (
        <>
            <Home />
            <About />
            <Skills />
            {
                // <Projects />
            }
            <Contact />

            <button id="backToTop" onClick={() => window.scrollTo(0, 0)}>
                <img src={ArrowTopIcon} />
            </button>
        </>
    );
}

export default App;
