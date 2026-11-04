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
    description: "Especializado en el desarrollo de aplicaciones web dinámicas con React y Vite. Manejo avanzado de estados, hooks personalizados, ciclo de vida e integración de librerías complejas de animación como GSAP.",
  },
];

export default function GsapBox() {
  const containerRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Animación con Keyframes sincronizada con el Scroll (sin rotación de cabeza)
      mm.add("(min-width: 1024px)", () => {
        gsap.to(".caja-animada", {
          x: (index) => index * 145,
          rotate: 0, // <--- Quitamos el giro de 180 grados para que no queden al revés
          ease: "elastic.out(1, 0.5)",
          stagger: 0.9,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "+=50",
            scrub: 1,
            markers: false,
          },
          keyframes: {
            y: [0, 50, -10, 20, 0], 
            ease: "none",
            easeEach: "power2.inOut",
          },
        });
      });

      // Cursor Follower
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
      className="relative flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[40vh] bg-slate-950 text-white w-full px-6 overflow-hidden py-20"
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
      <h1 className="text-3xl md:text-4xl font-bold whitespace-nowrap z-10 mb-6 lg:mb-0">
        ¡Habilidades!
      </h1>

      {/* Contenedor adaptativo */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:relative items-center w-full max-w-xl lg:h-36 gap-4 lg:gap-0">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;
          const zIndexClass = `z-[${(skillsData.length - index) * 10}]`;

          return (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className={`caja-animada lg:absolute lg:left-0 flex flex-col items-center justify-center gap-2 p-3 w-32 h-32 rounded-xl border border-white/20 bg-slate-800/90 backdrop-blur hover:border-green-500 hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 shadow-md ${zIndexClass}`}
            >
              <IconComponent className="w-6 h-6 text-green-400" />
              <span className="text-xs font-semibold text-center">{skill.title}</span>
              <span className="text-[10px] text-slate-400 underline mt-1">Ver experiencia</span>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selectedSkill && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative bg-slate-800 border border-slate-700 w-full max-w-md p-6 rounded-2xl shadow-2xl text-white animate-in fade-in zoom-in duration-200">
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
              <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">Mi Experiencia</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-5 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}