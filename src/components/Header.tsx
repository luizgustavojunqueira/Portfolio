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
        <header className="flex flex-col bg-slate-100 dark:bg-darkgray dark:text-verylightgreen text-black text-md md:grid md:grid-cols-[2fr_6fr_2fr] md:items-center transition-colors">
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
                        className="relative w-6 h-6"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`absolute top-0 w-6 h-6 fill-slate-200 transition-all duration-300 ${
                                theme === "light"
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-75 rotate-45"
                            }`}
                        >
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`absolute top-0 w-6 h-6 fill-slate-200 transition-all duration-300 ${
                                theme === "dark"
                                    ? "opacity-100 scale-100 rotate-0"
                                    : "opacity-0 scale-75 -rotate-45"
                            }`}
                        >
                            <path
                                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() =>
                            setLang((lang) => (lang === "en" ? "pt" : "en"))
                        }
                        className="relative w-6 h-6"
                    >
                        <svg
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                            role="img"
                            preserveAspectRatio="xMidYMid meet"
                            className={`absolute top-0 w-6 h-6 transition-transform transition-opacity duration-300 ${
                                lang === "en"
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 rotate-90"
                            }`}
                        >
                            <path
                                fill="#009B3A"
                                d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
                            />
                            <path
                                fill="#FEDF01"
                                d="M32.728 18L18 29.124L3.272 18L18 6.875z"
                            />
                            <circle
                                fill="#002776"
                                cx="17.976"
                                cy="17.924"
                                r="6.458"
                            />
                            <path
                                fill="#CBE9D4"
                                d="M12.277 14.887a6.406 6.406 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614z"
                            />
                            <path
                                fill="#88C9F9"
                                d="M12 18.233h1v1h-1zm1 2h1v1h-1z"
                            />
                            <path
                                fill="#55ACEE"
                                d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"
                            />
                            <path fill="#3B88C3" d="M19 20.233h1v1h-1z" />
                        </svg>

                        <svg
                            viewBox="0 0 130 120"
                            enableBackground="new 0 0 130 120"
                            className={`absolute top-0 w-6 h-6 transition-transform transition-opacity duration-300 ${
                                lang === "pt"
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 rotate-90"
                            }`}
                        >
                            <g id="Infos">
                                <rect
                                    id="BG"
                                    x="-200"
                                    y="-1350"
                                    fill="#D8D8D8"
                                    width="2180"
                                    height="1700"
                                />
                            </g>
                            <g id="Others">
                                <g>
                                    <rect
                                        y="0"
                                        fill="#DC4437"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="26.7"
                                        fill="#DC4437"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="80"
                                        fill="#DC4437"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="106.7"
                                        fill="#DC4437"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="53.3"
                                        fill="#DC4437"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="13.3"
                                        fill="#FFFFFF"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="40"
                                        fill="#FFFFFF"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="93.3"
                                        fill="#FFFFFF"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="66.7"
                                        fill="#FFFFFF"
                                        width="130"
                                        height="13.3"
                                    />
                                    <rect
                                        y="0"
                                        fill="#2A66B7"
                                        width="70"
                                        height="66.7"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="13.5,4 15.8,8.9 21,9.7 17.2,13.6 18.1,19 13.5,16.4 8.9,19 9.8,13.6 6,9.7 11.2,8.9"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="34,4 36.3,8.9 41.5,9.7 37.8,13.6 38.6,19 34,16.4 29.4,19 30.2,13.6 26.5,9.7 31.7,8.9"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="54.5,4 56.8,8.9 62,9.7 58.2,13.6 59.1,19 54.5,16.4 49.9,19 50.8,13.6 47,9.7 52.2,8.9"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="24,24 26.3,28.9 31.5,29.7 27.8,33.6 28.6,39 24,36.4 19.4,39 20.2,33.6 16.5,29.7 21.7,28.9"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="44.5,24 46.8,28.9 52,29.7 48.2,33.6 49.1,39 44.5,36.4 39.9,39 40.8,33.6 37,29.7 42.2,28.9"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="13.5,45.2 15.8,50.1 21,50.9 17.2,54.7 18.1,60.2 13.5,57.6 8.9,60.2 9.8,54.7 6,50.9 11.2,50.1"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="34,45.2 36.3,50.1 41.5,50.9 37.8,54.7 38.6,60.2 34,57.6 29.4,60.2 30.2,54.7 26.5,50.9 31.7,50.1"
                                    />
                                    <polygon
                                        fill="#FFFFFF"
                                        points="54.5,45.2 56.8,50.1 62,50.9 58.2,54.7 59.1,60.2 54.5,57.6 49.9,60.2 50.8,54.7 47,50.9 52.2,50.1"
                                    />
                                </g>
                            </g>
                            <g id="Europe">
                                <g id="Row_5"></g>
                                <g id="Row_4"></g>
                                <g id="Row_3"></g>
                                <g id="Row_2"></g>
                                <g id="Row_1"></g>
                            </g>
                        </svg>
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
