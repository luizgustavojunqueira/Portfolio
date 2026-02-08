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

  useEffect(() => {
    document.documentElement.className = `scroll-smooth ${theme}`;
  }, [theme]);

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
      {/* <Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} /> */}
      <Home lang={lang} />
    </main>
  );
}

export default App;
