import { useEffect, useState } from "react";

export default function Home({ lang }: { lang: "en" | "pt" }) {
    const subTitleOptions = [
        "Fullstack Developer",
        "Robotics Enthusiast",
        "Automation Enthusiast",
        "Software Developer",
        "Computer Science Student",
        "Open Source Enthusiast",
    ];

    const subTitleOptionsPt = [
        "Desenvolvedor Fullstack",
        "Entusiasta de Robótica",
        "Entusiasta de Automação",
        "Desenvolvedor de Software",
        "Estudante de Ciência da Computação",
        "Entusiasta de Código Aberto",
    ];

    const [subTitle, setSubTitle] = useState("");
    const [subTitleIndex, setSubTitleIndex] = useState(0);

    const [nextSubTitle, setNextSubTitle] = useState(
        lang === "pt"
            ? subTitleOptionsPt[subTitleIndex]
            : subTitleOptions[subTitleIndex],
    );

    const [timeoutTime, setTimeoutTime] = useState(75);

    const [writing, setWriting] = useState(true);

    const removeLastChar = (str: string) => {
        return str.substring(0, str.length - 1);
    };

    const changeSubTitle = () => {
        setTimeoutTime(75);
        if (!writing) {
            if (subTitle.length === 0) {
                setSubTitleIndex((subTitleIndex + 1) % subTitleOptions.length);
                setSubTitle(" ");
                setWriting(true);
                setNextSubTitle(
                    lang === "pt"
                        ? subTitleOptionsPt[subTitleIndex]
                        : subTitleOptions[subTitleIndex],
                );
                return;
            }
            setSubTitle(removeLastChar(subTitle));
        } else if (writing) {
            if (subTitle === nextSubTitle) {
                setTimeoutTime(1000);
                setWriting(false);
                setSubTitle(subTitle + " ");
                return;
            }
            setSubTitle(nextSubTitle.substring(0, subTitle.length + 1));
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            changeSubTitle();
        }, timeoutTime);

        return () => clearTimeout(timeout);
    }, [subTitle]);

    return (
        <>
            <section id="home" className="grid-two page">
                <section className="flex-center column">
                    <img
                        className="profile_picture"
                        src="https://avatars.githubusercontent.com/u/66537057?v=4"
                    />
                </section>
                <section className="flex-start row">
                    <section className="column margin-10">
                        <h1 className="large">
                            <span className="highlight-text">
                                {lang == "pt" ? "Olá" : "Hello"}!&nbsp;
                            </span>
                            {lang == "pt" ? "Eu sou" : "I'm"} Luiz Gustavo.
                        </h1>
                        <section className="medium">
                            <span>{"<"}</span>
                            <span className="highlight-text">{`${subTitle.split(" ")[0]}`}</span>
                            <span>{` ${subTitle.split(subTitle.split(" ")[0])[1] || ""}/>`}</span>
                        </section>
                        <span>
                            <a
                                href="https://github.com/luizgustavojunqueira"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    className="icon"
                                >
                                    <path d="M 25 8 C 15.611 8 8 15.611 8 25 C 8 34.389 15.611 42 25 42 C 34.389 42 42 34.389 42 25 C 42 15.611 34.389 8 25 8 z M 25 9 C 33.837 9 41 16.163 41 25 C 41 32.315911 36.085048 38.472093 29.380859 40.378906 C 29.244571 40.172672 29.145294 39.932396 29.152344 39.650391 C 29.179344 38.593391 29.152344 36.129609 29.152344 35.224609 C 29.152344 33.671609 28.169922 32.570312 28.169922 32.570312 C 28.169922 32.570312 35.878906 32.657641 35.878906 24.431641 C 35.878906 21.257641 34.222656 19.605469 34.222656 19.605469 C 34.222656 19.605469 35.092922 16.216297 33.919922 14.779297 C 32.604922 14.637297 30.249141 16.036453 29.244141 16.689453 C 29.244141 16.689453 27.652953 16.037109 25.001953 16.037109 C 22.350953 16.037109 20.757812 16.689453 20.757812 16.689453 C 19.751812 16.036453 17.397031 14.637297 16.082031 14.779297 C 14.909031 16.216297 15.779297 19.605469 15.779297 19.605469 C 15.779297 19.605469 14.121094 21.255688 14.121094 24.429688 C 14.121094 32.655687 21.830078 32.568359 21.830078 32.568359 C 21.830078 32.568359 21.05381 33.443176 20.882812 34.730469 C 20.35101 34.918958 19.615523 35.146484 18.914062 35.146484 C 17.241063 35.146484 15.969906 33.519578 15.503906 32.767578 C 15.043906 32.025578 14.101656 31.402344 13.222656 31.402344 C 12.643656 31.402344 12.359375 31.692438 12.359375 32.023438 C 12.359375 32.354437 13.171031 32.584266 13.707031 33.197266 C 14.837031 34.490266 14.816844 37.400391 18.839844 37.400391 C 19.314 37.400391 20.165462 37.292676 20.847656 37.199219 C 20.843251 38.143438 20.832715 39.064049 20.847656 39.648438 C 20.854716 39.930842 20.755741 40.172492 20.619141 40.378906 C 13.914952 38.472093 9 32.315911 9 25 C 9 16.163 16.163 9 25 9 z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/luiz-gustavo-sabadim-spolon-junqueira-769333208/"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    className="icon"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                </svg>
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=luizgustavossj@gmail.com"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="icon"
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
                        </span>
                    </section>
                </section>
            </section>
        </>
    );
}
