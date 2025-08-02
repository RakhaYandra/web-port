import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Certificates } from "./components/Certificates/Certificates";
import { Education } from "./components/Education/Education";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Organizations } from "./components/Organizations/Organizations";
import { Projects } from "./components/Projects/Projects";
import { Publications } from "./components/Publications/Publications";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Certificates />
      <Organizations />
      <Publications />
      <Projects />
      <GetInTouch />
    </div>
  );
}

export default App;
