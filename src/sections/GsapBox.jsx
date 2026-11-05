import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  LayoutTemplate,
  Contrast,
  PanelsTopLeft,
  Code2,
  Atom,
  X,
} from "lucide-react";

import miSvg from "../imagenes/spaceship.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skillsData = [
  {
    id: "ui-ux",
    title: "UI/UX",
    icon: PanelsTopLeft,
    description: "Mi experiencia en UI/UX se centra en la investigación de usuarios, creación de wireframes y diseño de interfaces intuitivas en Figma, asegurando una experiencia visual atractiva y centrada en las necesidades reales del usuario.",
  },
  {
    id: "accessibility",
    title: "Accesibilidad",
    icon: Contrast,
    description: "Aplico normativas WCAG y buenas prácticas de accesibilidad web (contrastes, etiquetas semánticas, navegación por teclado) para garantizar que las aplicaciones sean usables e inclusivas para todo tipo de personas.",
  },
  {
    id: "frontend",
    title: "Front-End",
    icon: Code2,
    description: "Tengo amplia trayectoria construyendo interfaces modernas, escalables y optimizadas utilizando arquitecturas basadas en componentes, maquetación avanzada con Tailwind CSS y control de versiones profesional.",
  },
  {
    id: "react",
    title: "React",
    icon: Atom,
    description: "Especializado en el desarrollo de aplicaciones web dinámicas con React y Vite. Manejo avanzado de estados, hooks personalizados, ciclo de vida e integración de librerías complejas de animación con gsap.",
  },
];

export default function GsapBox() {
  const containerRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useGSAP(
    () => {
      // ANIMACIÓN FLUIDA SINCRONIZADA CON EL SCROLL (SUBIR Y BAJAR)
      gsap.fromTo(
        ".caja-animada",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",  // Empieza a animarse cuando la sección entra al 80% de la pantalla
            end: "top 30%",    // Termina de revelarse por completo cuando llega al 30%
            scrub: 1,          // Sincroniza la animación directamente con el scroll (subir y bajar fluido)
            markers: false,    // Cambiar a true si deseas depurar visualmente
          },
        }
      );

      // Cursor Follower (Nave espacial)
      gsap.set(".flair", {
        xPercent: -50,
        yPercent: 0,
        opacity: 0,
      });

      let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
          yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" }),
          visible = false;

      const handleMouseMove = (e) => {
        if (!visible) {
          xTo(e.clientX);
          yTo(e.clientY);
          visible = true;
          gsap.to(".flair", { opacity: 1, duration: 0.3, overwrite: "auto" });
        } else {
          xTo(e.clientX);
          yTo(e.clientY);
        }
      };

      const handleMouseLeave = () => {
        visible = false;
        gsap.to(".flair", { opacity: 0, duration: 0.3, overwrite: "auto" });
      };

      window.addEventListener("mousemove", handleMouseMove);
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="bg-slate-950 relative flex flex-col items-center justify-center gap-12 min-h-[60vh]  text-white w-full px-6 overflow-hidden py-24"
    >
      {/* SEGUIDOR CON LA IMAGEN SVG */}
      <div className="flair fixed top-0 left-0 pointer-events-none z-50">
        <img
          src={miSvg}
          alt="Cursor SVG"
          className="w-10 h-9 object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      </div>

      {/* Título Principal */}
      <div className="text-center z-15 space-y-2">
        <h2 className="text-green-400 font-mono text-sm tracking-widest uppercase">Especialidades</h2>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Mis Habilidades</h1>
      </div>

      {/* Contenedor Grid Adaptativo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 w-full max-w-5xl z-10">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="caja-animada flex flex-col items-start justify-between p-6 w-full h-48 rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur-md hover:border-green-500/50 hover:bg-slate-800 hover:shadow-xl hover:shadow-green-500/5 cursor-pointer transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center justify-between w-full">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-xs text-slate-500 font-mono">0{index + 1}</span>
              </div>

              <div className="space-y-1">
                <span className="text-lg font-semibold tracking-wide block">{skill.title}</span>
                <span className="text-xs text-slate-400 group-hover:text-green-400 transition-colors flex items-center gap-1">
                  Ver experiencia &rarr;
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL DE EXPERIENCIA */}
      {selectedSkill && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative bg-slate-800 border border-slate-700 w-full max-w-md p-6 rounded-2xl shadow-2xl text-white">
            <button 
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                <selectedSkill.icon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold">{selectedSkill.title}</h3>
            </div>

            <div className="space-y-3">
           
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-5 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}