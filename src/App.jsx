import Header from "./layout/Header";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
           <Footer />
      </main>
    </>
  );
}

export default App;