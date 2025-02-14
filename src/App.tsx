import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header.tsx";
import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";

// import ArrowTopIcon from "./assets/arrow_top_icon.png";

function App() {
    return (
        <>
            <section id="app">
                <Header />
                <Home />
                <About />
                {/* <Skills /> */}
                {/* <Contact /> */}
                {/* <Projects /> */}
                {/* <footer>
                    <a href="#top">
                        <img src={ArrowTopIcon} alt="Arrow to top" />
                    </a>
                </footer> */}
            </section>
        </>
    );
}

export default App;
