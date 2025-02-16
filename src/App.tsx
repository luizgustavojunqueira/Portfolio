import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header.tsx";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
// import Projects from "./pages/Projects";

// import ArrowTopIcon from "./assets/arrow_top_icon.png";

type Theme = "dark" | "light";

function App() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [lang, setLang] = useState<"en" | "pt">("en");

    useEffect(() => {
        document.documentElement.style.setProperty("color-scheme", theme);
    }, [theme]);
    return (
        <>
            <section id="app">
                <Header
                    theme={theme}
                    setTheme={setTheme}
                    lang={lang}
                    setLang={setLang}
                />
                <Home lang={lang} />
                <About lang={lang} />
                <Skills lang={lang} />
                <Contact lang={lang} />
                {/* <Projects /> */}
                {/* <footer>
                    <a href="#top">
                        <img src={ArrowTopIcon} alt="Arrow to top" />
                    </a>
                </footer> */}
            </section>
        </>
    );
}

export default App;
