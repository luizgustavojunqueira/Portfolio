import "../styles/home.css";
import GitHubIcon from "../assets/github_icon.svg";
import LinkedInIcon from "../assets/linkedin_icon.svg";
import EmailIcon from "../assets/email_icon.svg";
import { useEffect, useState } from "react";

export default function Home() {
    const subTitleOptions = [
        "Fullstack Developer",
        "Robotics Enthusiast",
        "Automation Enthusiast",
        "Software Developer",
        "Computer Science Student",
        "Open Source Enthusiast",
    ];

    const [subTitle, setSubTitle] = useState("");
    const [subTitleIndex, setSubTitleIndex] = useState(0);

    const [nextSubTitle, setNextSubTitle] = useState(
        subTitleOptions[subTitleIndex],
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
                setNextSubTitle(subTitleOptions[subTitleIndex]);
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
        <section id="home" className="page dark_gray_bg">
            <header className="home_header">
                <a className="page_link" href="#about">
                    <p>About </p>
                </a>
                <a className="page_link" href="#skills">
                    <p>Skills</p>
                </a>
                <a className="page_link" href="#contact">
                    <p>Contact</p>
                </a>
            </header>

            <section className="page_content home">
                <section className="image_container">
                    <img
                        className="profile_picture"
                        src="https://avatars.githubusercontent.com/u/66537057?v=4"
                    />
                </section>
                <section className="home_title">
                    <h1 className="welcome_text">
                        <span className="dark_green">Hello!&nbsp;</span>
                        I'm Luiz Gustavo
                    </h1>
                    <section className="home_subtitle">
                        <span>{"<"}</span>
                        <span className="dark_green">{`${subTitle.split(" ")[0]}`}</span>
                        <span className="home_subtitle">{` ${subTitle.split(" ")[1] || ""}/>`}</span>
                    </section>
                    <span className="home_icons">
                        <a
                            href="https://github.com/luizgustavojunqueira"
                            target="_blank"
                        >
                            <img className="icon" src={GitHubIcon} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/luiz-gustavo-sabadim-spolon-junqueira-769333208/"
                            target="_blank"
                        >
                            <img className="icon" src={LinkedInIcon} />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=luizgustavossj@gmail.com"
                            target="_blank"
                        >
                            <img className="icon" src={EmailIcon} />
                        </a>
                    </span>
                </section>
            </section>
        </section>
    );
}
