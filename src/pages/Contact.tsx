import "../styles/contact.css";
import GitHubIcon from "../assets/github_icon.svg";
import LinkedInIcon from "../assets/linkedin_icon.svg";
import EmailIcon from "../assets/email_icon.svg";

import { useState } from "react";

export default function Contact() {
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
        <section id="contact" className="page medium_gray_bg">
            <header className="page_header">
                <h2 className="dark_green">Contact</h2>
            </header>

            <section className="page_content ">
                <section className="page_header">
                    <h3 className="light_green">Get in touch</h3>
                </section>

                <section className="contact_info">
                    <section className="contact_panel">
                        <section className="contact_header">
                            <h4> Send me an e-mail </h4>
                        </section>
                        <section className="contact_form">
                            <input
                                type="text"
                                placeholder="Your name"
                                onChange={(e) => handleNameInput(e)}
                            />
                            <input
                                placeholder="Your message"
                                onChange={(e) => handleMessageInput(e)}
                            ></input>

                            <button onClick={(e) => sendEmail(e)}>
                                Send Message
                            </button>
                        </section>
                    </section>

                    <section className="contact_panel">
                        <section className="contact_header">
                            <h4> Or reach me out on social media </h4>
                        </section>

                        <section className="contact_socialMedia">
                            <a
                                href="https://github.com/luizgustavojunqueira"
                                target="_blank"
                            >
                                <img className="icon" src={GitHubIcon} />
                                <p>GitHub</p>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/luiz-gustavo-sabadim-spolon-junqueira-769333208/"
                                target="_blank"
                            >
                                <img className="icon" src={LinkedInIcon} />
                                <p>LinkedIn</p>
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=luizgustavossj@gmail.com"
                                target="_blank"
                            >
                                <img className="icon" src={EmailIcon} />
                                <p>Gmail</p>
                            </a>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}
