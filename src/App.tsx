import "./tailwind.css";
import Home from "./pages/Home";
import Header from "./components/Header.tsx";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Projects from "./pages/Projects";

type Theme = "dark" | "light";

function App() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [lang, setLang] = useState<"en" | "pt">("en");

    const [showArrow, setshowArrow] = useState<boolean>(false);

    const [observing, setObserving] = useState(false);

    useEffect(() => {
        document.documentElement.className = `scroll-smooth ${theme}`;
    }, [theme]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries);
            if (entries[0].isIntersecting) {
                setObserving(true);
            } else {
                setObserving(false);
            }
        });
        observer.observe(document.getElementById("home") as Element);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setshowArrow(true);
            } else {
                setshowArrow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main id="app" className=" bg-slate-100 text-black ">
            <Header
                theme={theme}
                setTheme={setTheme}
                lang={lang}
                setLang={setLang}
            />
            <Home lang={lang} />

            <About lang={lang} observing={observing} />
            <Skills lang={lang} observing={observing} />
            <Projects lang={lang} observing={observing} />
            <Contact lang={lang} observing={observing} />

            <a
                onClick={() => {
                    setTimeout(() => {
                        setObserving(true);
                    }, 750);

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                className={`fixed bottom-6 right-6 bg-slate-100 dark:bg-darkgray p-2 rounded-full transition-opacity duration-300 ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <svg
                    className="w-8 h-8 fill-lime-500"
                    height="32px"
                    viewBox="0 0 32 32"
                    width="32px"
                >
                    <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
                </svg>
            </a>
        </main>
    );
}

export default App;
