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
    window.location.href = `mailto:luizgustavossj@gmail.com?body=${encodeURIComponent(
      message,
    )}&subject=${encodeURIComponent(name)}`;
    e.preventDefault();
  };

  const t = {
    title: lang === "pt" ? "Contato" : "Contact",
    subtitle:
      lang === "pt"
        ? "Tem uma ideia, projeto ou só quer trocar uma ideia? Manda mensagem."
        : "Have an idea, project or just want to chat? Send a message.",
    labelForm: lang === "pt" ? "me mande um email" : "send me an email",
    name: lang === "pt" ? "nome" : "name",
    namePlaceholder: lang === "pt" ? "Seu nome" : "Your name",
    message: lang === "pt" ? "mensagem" : "message",
    messagePlaceholder:
      lang === "pt" ? "No que posso ajudar?" : "How can I help?",
    submit: lang === "pt" ? "Enviar →" : "Send →",
    findMe: lang === "pt" ? "encontre-me" : "find me",
    emailDirect: lang === "pt" ? "email direto" : "direct email",
    copy: lang === "pt" ? "Copiar ↗" : "Copy ↗",
  };

  return (
    <section
      id="#contact"
      className="flex flex-col items-center min-h-screen z-1 relative px-6 md:px-12"
    >
      <div className="w-full max-w-6xl mt-16 lg:mt-30">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white">
          {t.title}
        </h2>
        <span className="text-lg md:text-xl text-left max-w-xl text-slate-500 dark:text-slate-400 mt-6 lg:mt-10 block">
          {t.subtitle}
        </span>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 py-8">
        <div className="flex-1">
          <span className="text-xs uppercase tracking-widest text-slate-400">
            {t.labelForm}
          </span>

          <div className="mt-6">
            <label className="block text-sm text-slate-500 mb-2">
              {t.name}
            </label>
            <input
              value={name}
              onChange={handleNameInput}
              placeholder={t.namePlaceholder}
              className="w-full bg-transparent border-b border-slate-300 py-2 outline-none placeholder:text-slate-300 text-black dark:text-white"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm text-slate-500 mb-2">
              {t.message}
            </label>
            <textarea
              value={message}
              onChange={handleMessageInput}
              placeholder={t.messagePlaceholder}
              className="w-full bg-transparent border-b border-slate-300 py-2 outline-none placeholder:text-slate-300 min-h-30 resize-none text-black dark:text-white"
            />
          </div>

          <button
            onClick={sendEmail}
            className="mt-4 inline-flex items-center border border-black dark:border-white px-6 py-2 text-black dark:text-white hover:bg-black hover:text-white transition"
          >
            {t.submit}
          </button>
        </div>

        <aside className="w-[320px] shrink-0">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-4">
            {t.findMe}
          </div>

          <a
            className="flex items-center justify-between py-3 border-b border-slate-300 hover:pl-2 transition"
            href="https://github.com/luizgustavojunqueira"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <div className="font-semibold text-black dark:text-white">
                GitHub
              </div>
              <div className="text-sm text-slate-400 mt-1">
                luizgustavojunqueira
              </div>
            </div>
            <span className="text-slate-400">→</span>
          </a>

          <a
            className="flex items-center justify-between py-3 border-b border-slate-300 hover:pl-2 transition"
            href="https://www.linkedin.com/in/luiz-gustavo-sabadim-spolon-junqueira-769333208/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <div className="font-semibold text-black dark:text-white">
                LinkedIn
              </div>
              <div className="text-sm text-slate-400 mt-1">
                Luiz Gustavo Junqueira
              </div>
            </div>
            <span className="text-slate-400">→</span>
          </a>

          <a
            className="flex items-center justify-between py-3 border-b border-slate-300 hover:pl-2 transition"
            href="mailto:luizgustavossj@gmail.com"
          >
            <div>
              <div className="font-semibold text-black dark:text-white">
                Email
              </div>
              <div className="text-sm text-slate-400 mt-1">
                luizgustavossj@gmail.com
              </div>
            </div>
            <span className="text-slate-400">→</span>
          </a>
        </aside>
      </div>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        onClick={() =>
          document
            .getElementById("#home")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </section>
  );
}
