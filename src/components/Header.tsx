import { Dispatch, SetStateAction, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import Link from "./Link";
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
    const [navOpen, setNavOpen] = useState(false);

    const { width } = useScreenSize();

    return (
        <header className="flex flex-col bg-slate-100 text-black dark:bg-darkgray dark:text-white text-md md:grid md:grid-cols-[2fr_6fr_2fr] md:items-center transition-colors">
            <section className="w-full flex flex-row justify-center border-b-2 border-slate-300 md:border-b-0 md:w-auto md:col-start-3 md:col-span-1">
                <section className="flex flex-row justify-between w-full md:hidden m-2 ">
                    <button
                        onClick={() => setNavOpen((prev) => !prev)}
                        className="relative w-6 h-6"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`absolute top-0 w-6 h-6 fill-slate-200  transition-all duration-300 ${
                                navOpen
                                    ? "opacity-0 -rotate-90"
                                    : "opacity-100 rotate-0"
                            }`}
                        >
                            <g clipPath="url(#clip0_hamburger)">
                                <path
                                    d="M3 6H21M3 12H21M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_hamburger">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg
                            viewBox="0 0 1024 1024"
                            className={`absolute top-0 w-6 h-6 transition-all duration-300 ${
                                navOpen
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 rotate-90"
                            }`}
                            fill="currentColor"
                        >
                            <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
                        </svg>
                    </button>
                </section>
                <section className="flex flex-row justify-end w-full gap-4 md:justify-start m-2">
                    <button
                        onClick={() =>
                            setTheme((theme) =>
                                theme === "dark" ? "light" : "dark",
                            )
                        }
                    >
                        {theme === "light" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 fill-slate-200"
                            >
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 fill-slate-200"
                            >
                                <path
                                    d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={() =>
                            setLang((lang) => (lang === "en" ? "pt" : "en"))
                        }
                    >
                        {lang === "en" ? "PT" : "EN"}
                    </button>
                </section>
            </section>

            <section
                className={`transition-all duration-200 ease-in-out overflow-hidden flex flex-col w-full justify-center items-center text-center gap-2 font-semibold  border-slate-200 dark:border-darkgray md:flex-row md:border-none md:gap-5 md:col-start-2 md:row-start-1 h-full  ${navOpen || width > 767 ? " max-h-96 border-b-2 " : " max-h-0  border-none"}`}
            >
                <Link to="#home">Home</Link>
                <Link to="#about">
                    {lang === "pt" ? "Sobre Mim" : "About Me"}
                </Link>
                <Link to="#skills">
                    {lang === "pt" ? "Habilidades" : "Skills"}
                </Link>
                <Link to="#projects">
                    {lang === "pt" ? "Projetos" : "Projects"}
                </Link>
                <Link to="#contact">
                    {lang === "pt" ? "Contato" : "Contact"}
                </Link>
            </section>
        </header>
    );
}

export default Header;
