import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Header from "./layout/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";
import "../src/App.css";
import GsapBox from "./sections/GsapBox"; // <--- Importa tu componente aquí (ajusta la ruta si es necesario)


// Registrar el hook por seguridad
gsap.registerPlugin(useGSAP);

function App() {
  const containerRef = useRef(null);

  // Usamos el scope para asegurarnos de que GSAP busque la referencia dentro de este contenedor
  useGSAP(() => {
    gsap.to(".box-animada", {
      x: 150,
      rotate: 360,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Header />

      <main className="pt-0 background">
          <Hero />
          <About />
          <Experience />
          <GsapBox />
          <Projects />
          <Contact />
          <Footer />
      </main>
    </div>
  );
}

export default App;