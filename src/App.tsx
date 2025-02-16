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
            <main id="app">
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
            </main>
            <a href="#app" className="arrow-top">
                <svg
                    className="icon"
                    height="32px"
                    viewBox="0 0 32 32"
                    width="32px"
                >
                    <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
                </svg>
            </a>
        </>
    );
}

export default App;
