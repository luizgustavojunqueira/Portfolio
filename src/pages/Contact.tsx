import { useState } from "react";

export default function Contact({ lang }: { lang: "en" | "pt" }) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        window.location.href = `mailto:luizgustavossj@gmail.com?body=${message}&subject=${name}`;
        e.preventDefault();
    };

    return (
        <section
            id="contact"
            className="transition-colors flex flex-col items-center justify-start gap-4 min-h-screen bg-slate-200 dark:bg-midgray dark:text-verylightgreen text-black p-4"
        >
            <h2 className="page-header">
                {lang === "pt" ? "Contato" : "Contact"}
            </h2>

            <h3 className="section-header">
                {lang === "pt" ? "Fale Comigo" : "Get in touch"}
            </h3>

            <section className="w-full flex flex-col gap-8 md:grid md:grid-cols-2 pt-8">
                <section className="flex flex-col justify-center items-center ">
                    <section className="w-11/12 lg:w-3/4 bg-slate-100 dark:bg-darkgray p-4 rounded-xl flex flex-col gap-2">
                        <h4 className="section-header text-lg">
                            {lang === "pt"
                                ? "Me mande um email"
                                : "Send me an email"}
                        </h4>
                        <section className="flex flex-col justify-center items-center gap-4">
                            <input
                                className="w-full text-black dark:text-slate-100 min-h-10 bg-slate-200 dark:bg-midgray p-2 rounded-md"
                                type="text"
                                placeholder={
                                    lang === "pt" ? "Seu nome" : "Your name"
                                }
                                onChange={(e) => handleNameInput(e)}
                            />
                            <textarea
                                className="w-full resize-none text-black dark:text-slate-100 min-h-30 bg-slate-200 dark:bg-midgray p-2 rounded-md"
                                placeholder={
                                    lang === "pt"
                                        ? "Sua mensagem"
                                        : "Your message"
                                }
                                onChange={(e) => handleMessageInput(e)}
                            ></textarea>

                            <button
                                className="transition-colors w-full min-h-10 rounded-xl bg-lime-400 dark:bg-lime-600 hover:bg-lime-400/50 hover:dark:bg-lime-600/50"
                                onClick={(e) => sendEmail(e)}
                            >
                                {lang === "pt" ? "Enviar" : "Send"}
                            </button>
                        </section>
                    </section>
                </section>

                <section className="flex flex-col justify-center items-center ">
                    <section className="w-11/12 lg:w-3/4 h-full bg-slate-100 dark:bg-darkgray p-4 rounded-xl flex flex-col gap-2">
                        <h4 className="section-header text-lg">
                            {" "}
                            {lang === "pt" ? "Redes Sociais" : "Socials"}{" "}
                        </h4>

                        <section className="flex flex-col justify-center  gap-4">
                            <span className="flex flex-row items-center gap-2 text-sm flex-wrap">
                                <a
                                    href="https://github.com/luizgustavojunqueira"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        className="w-12 h-12 fill-current"
                                    >
                                        <path d="M 25 8 C 15.611 8 8 15.611 8 25 C 8 34.389 15.611 42 25 42 C 34.389 42 42 34.389 42 25 C 42 15.611 34.389 8 25 8 z M 25 9 C 33.837 9 41 16.163 41 25 C 41 32.315911 36.085048 38.472093 29.380859 40.378906 C 29.244571 40.172672 29.145294 39.932396 29.152344 39.650391 C 29.179344 38.593391 29.152344 36.129609 29.152344 35.224609 C 29.152344 33.671609 28.169922 32.570312 28.169922 32.570312 C 28.169922 32.570312 35.878906 32.657641 35.878906 24.431641 C 35.878906 21.257641 34.222656 19.605469 34.222656 19.605469 C 34.222656 19.605469 35.092922 16.216297 33.919922 14.779297 C 32.604922 14.637297 30.249141 16.036453 29.244141 16.689453 C 29.244141 16.689453 27.652953 16.037109 25.001953 16.037109 C 22.350953 16.037109 20.757812 16.689453 20.757812 16.689453 C 19.751812 16.036453 17.397031 14.637297 16.082031 14.779297 C 14.909031 16.216297 15.779297 19.605469 15.779297 19.605469 C 15.779297 19.605469 14.121094 21.255688 14.121094 24.429688 C 14.121094 32.655687 21.830078 32.568359 21.830078 32.568359 C 21.830078 32.568359 21.05381 33.443176 20.882812 34.730469 C 20.35101 34.918958 19.615523 35.146484 18.914062 35.146484 C 17.241063 35.146484 15.969906 33.519578 15.503906 32.767578 C 15.043906 32.025578 14.101656 31.402344 13.222656 31.402344 C 12.643656 31.402344 12.359375 31.692438 12.359375 32.023438 C 12.359375 32.354437 13.171031 32.584266 13.707031 33.197266 C 14.837031 34.490266 14.816844 37.400391 18.839844 37.400391 C 19.314 37.400391 20.165462 37.292676 20.847656 37.199219 C 20.843251 38.143438 20.832715 39.064049 20.847656 39.648438 C 20.854716 39.930842 20.755741 40.172492 20.619141 40.378906 C 13.914952 38.472093 9 32.315911 9 25 C 9 16.163 16.163 9 25 9 z" />
                                    </svg>
                                </a>
                                <p className="break-all">
                                    luizgustavojunqueira
                                </p>
                            </span>

                            <span className="flex flex-row items-center gap-2 text-sm flex-wrap">
                                <a
                                    href="https://www.linkedin.com/in/luiz-gustavo-sabadim-spolon-junqueira-769333208/"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        className="w-12 h-12 fill-current"
                                    >
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </a>
                                <p className="break-all">
                                    Luiz Gustavo Junqueira
                                </p>
                            </span>

                            <span className="flex flex-row items-center gap-2 text-sm flex-wrap">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=luizgustavossj@gmail.com"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="w-12 h-12 fill-current"
                                    >
                                        <g>
                                            <g>
                                                <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z" />
                                            </g>
                                            <g>
                                                <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z" />
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                                <p className="break-all">
                                    luizgustavossj@gmail.com
                                </p>
                            </span>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}
