import { Dispatch, SetStateAction } from "react";
function Header({
    setTheme,
    theme,
    lang,
    setLang,
}: {
    setTheme: Dispatch<SetStateAction<"dark" | "light">>;
    theme: "dark" | "light";
    lang: "en" | "pt";
    setLang: Dispatch<SetStateAction<"en" | "pt">>;
}) {
    return (
        <header>
            <section className="toggle-buttons row ">
                <button
                    className="toggle"
                    onClick={() =>
                        setTheme((theme) =>
                            theme === "dark" ? "light" : "dark",
                        )
                    }
                >
                    {theme === "dark" ? "Light" : "Dark"} Mode
                </button>
            </section>
            <section className="flex-center ">
                <a className="nav" href="#home">
                    <p>Home </p>
                </a>
                <a className="nav" href="#about">
                    <p>{lang == "pt" ? "Sobre Mim" : "About Me"} </p>
                </a>
                <a className="nav" href="#skills">
                    <p>{lang == "pt" ? "Habilidades" : "Skills"} </p>
                </a>
                <a className="nav" href="#projects">
                    <p>{lang == "pt" ? "Projetos" : "Projects"} </p>
                </a>
                <a className="nav" href="#contact">
                    <p>{lang == "pt" ? "Contato" : "Contact"} </p>
                </a>
            </section>

            <section className="toggle-buttons row ">
                <button
                    className="toggle"
                    onClick={() =>
                        setLang((lang) => (lang === "en" ? "pt" : "en"))
                    }
                >
                    {lang === "en" ? "PT" : "EN"}
                </button>
            </section>
        </header>
    );
}

export default Header;
