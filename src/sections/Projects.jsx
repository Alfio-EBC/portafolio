import { useState } from "react";
import { X } from "lucide-react";
import biotablero from "../imagenes/biotablero.png";
import biotablerodos from "../imagenes/biotablerodos.jpg";
import biotablerotres from "../imagenes/biotablerotres.jpg";
import biotablerocuatro from "../imagenes/biotablerocuatro.jpg";
import biotablerocinco from "../imagenes/biotablerocinco.jpg";

import restauracion from "../imagenes/portal-restauracion.png";

import portalestudintesuno from "../imagenes/portalestudintesuno.jpg";
import portalestudintesunocargando from "../imagenes/portalestudintesunocargando.jpg";
import urosario from "../imagenes/portalestudintes.jpg";
import urosarioslidedos from "../imagenes/portaldeestuduantesdos.jpg";
import urosarioslidetres from "../imagenes/urosarioslidetres.jpg";
import urosarioslidecuatro from "../imagenes/urosarioslidecuatro.jpg";

import cafe from "../imagenes/dashboard-cafe.jpg";
import cafedos from "../imagenes/dashboard-cafe-dos.jpg";
import cafetres from "../imagenes/dashboard-cafe-tres.jpg";

import atomic from "../imagenes/atomic-frenchiez.jpg";
import menciones from "../imagenes/menciones.png";
import mencionesdos from "../imagenes/menciones-odal.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "BioTablero",
      cardImage: biotablero,
      images: [
        biotablero,
        biotablerotres,
        biotablerodos,
        biotablerocuatro,
        biotablerocinco,
      ],
      short: "Cifras e indicadores sobre biodiversidad.",
      description:
        "El proyecto se enfocó en el diseño y desarrollo de la plataforma BioTablero desde una perspectiva de experiencia de usuario (UX) y diseño de interfaces (UI), priorizando la investigación de usuarios, la accesibilidad y el diseño centrado en las personas. Para ello, se realizó un proceso de investigación con usuarios, comunidades y stakeholders para identificar necesidades, comportamientos, puntos de dolor y oportunidades de mejora en la interacción con la plataforma.<br><br>La participación de las comunidades permitió comprender sus dinámicas, necesidades de información y expectativas frente a la herramienta, garantizando que las soluciones propuestas respondieran a contextos reales y promovieran una experiencia más inclusiva y participativa. A partir de los hallazgos obtenidos, se definió una arquitectura de información clara, flujos de navegación intuitivos y un sistema de interfaces accesibles y responsivas, alineadas con principios de usabilidad y estándares de accesibilidad digital.<br><br>El objetivo fue diseñar una solución que facilite la consulta, gestión y visualización de la información, ofreciendo una experiencia inclusiva, eficiente y de fácil uso para las comunidades, investigadores, entidades y demás actores vinculados a BioTablero.",
    },
    {
      title: "Portal de restauración",
      cardImage: restauracion,
      images: [restauracion],
      short: "Herramineta de consulta de proyectos de restauración.",
      description:
        "El Portal Restauración nació como una iniciativa orientada a crear una plataforma digital que reuniera las diferentes acciones e iniciativas de monitoreo de las zonas restauradas en Colombia. Su principal objetivo fue centralizar la información y facilitar el acceso a datos relevantes sobre los procesos de restauración ecológica en el país. La plataforma cuenta con una sección dedicada a visibilizar a los líderes y organizaciones restauradoras de Colombia, destacando su trabajo y contribución a la conservación y recuperación de los ecosistemas. Además, integra contenido educativo, publicaciones y documentos relacionados con la restauración ambiental, convirtiéndose en un espacio de consulta y difusión de conocimiento. <br>  <br> El proyecto se desarrolló bajo una metodología de diseño centrado en el usuario, realizando un proceso de investigación con potenciales usuarios y stakeholders para comprender sus necesidades, expectativas y puntos de dolor. A partir de estos hallazgos, se definieron los flujos de navegación, la arquitectura de información y las funcionalidades de la plataforma. Durante el proceso se aplicaron principios de accesibilidad y diseño de interfaces de usuario (UI), garantizando una experiencia intuitiva, inclusiva y fácil de usar para diferentes tipos de usuarios. El resultado fue una plataforma que no solo facilita el acceso a la información sobre restauración ecológica, sino que también promueve la colaboración y la difusión del conocimiento en torno a la conservación ambiental.",
    },
    {
      title: "Universidad del Rosario",
      cardImage: urosario,
      images: [
        portalestudintesuno,
        portalestudintesunocargando,
        urosario,
        urosarioslidedos,
        urosarioslidetres,
        urosarioslidecuatro,
      ],
      short: "Portal de Proyección Académica.",
      description:
        "El Portal de Proyección Académica fue un proyecto interno desarrollado para la Universidad del Rosario.El proyecto inició con un análisis de las problemáticas que enfrentaban los estudiantes al momento de realizar el seguimiento y control de sus asignaturas y materias de apoyo durante su trayectoria académica- Como parte de la fase de investigación, se realizaron entrevistas con un grupo de estudiantes y con el área de Dirección Académica, con el objetivo de identificar las principales necesidades y comprender el estado de las materias a lo largo de la carrera.A partir de los hallazgos obtenidos, se diseñaron wireframes en conjunto con el equipo de trabajo para definir las funcionalidades que tendría el portal. Posteriormente, se desarrolló un prototipo de alta fidelidad que fue presentado a la Dirección Académica para su validación y aprobación.<br><br> Después de la aprobación, se realizó una nueva ronda de pruebas con estudiantes para evaluar el impacto y la utilidad de la solución propuesta, validando que la plataforma respondiera a las necesidades identificadas en la investigación inicial. Finalmente, se inició la fase de desarrollo e implementación del dashboard, utilizando React para la construcción de la interfaz y consumiendo la información a través de una API, permitiendo centralizar y visualizar de manera eficiente el progreso académico de los estudiantes.",
    },
    {
      title: "Universidad del Rosario",
      cardImage: menciones,
      images: [menciones, mencionesdos],
      short: "Opciones de profundización académica.",
      description:
        "El proyecto de profundización académica tuvo como objetivo fortalecer las competencias en el diseño de experiencias de usuario (UX) y diseño de interfaces de usuario (UI), mediante la aplicación de metodologías centradas en las personas, investigación de usuarios y el desarrollo de soluciones digitales accesibles e intuitivas.<br> La propuesta busca analizar las necesidades y comportamientos de los usuarios para identificar oportunidades de mejora en productos y servicios digitales. A partir de ello, se implementarán procesos de investigación, definición de problemas, creación de prototipos, pruebas de usabilidad y validación de soluciones, siguiendo metodologías de diseño como Design Thinking y Human-Centered Design.",
    },
    {
      title: "Cafe conecta",
      cardImage: cafe,
      images: [cafe, cafedos, cafetres],
      short: "Dashboard de cafe.",
      description:
        "El proyecto se enfocará en comprender el ecosistema cafetero desde una perspectiva de negocio, experiencia de usuario (UX) y diseño de interfaces (UI), integrando la investigación de mercados y la participación de los stakeholders para identificar las necesidades, comportamientos y expectativas de los diferentes actores de la cadena del café. A partir de estos hallazgos, se diseñará una solución digital centrada en el usuario, con interfaces intuitivas, accesibles y funcionales, que genere valor para productores, consumidores, comercializadores y demás participantes del sector cafetero.",
    },
    {
      title: "Atomic Frenchiez",
      cardImage: atomic,
      images: [atomic],
      short: "Especialistas en cachorros Bulldog Francés saludables.",
      description:
        "El proyecto se enfocará en el diseño y desarrollo del landing page de Atomic Frenchiez desde una perspectiva de negocio, experiencia de usuario (UX) y diseño de interfaces (UI). Para ello, se realizará una investigación de mercado que permita comprender las necesidades, comportamientos y expectativas de los potenciales clientes, inversionistas y demás stakeholders interesados en el modelo de franquicia.<br><br>Los hallazgos obtenidos servirán como base para diseñar una experiencia digital centrada en el usuario, mediante una arquitectura de información clara, contenidos estratégicos y una interfaz intuitiva, accesible y responsiva. El objetivo es crear un landing page que fortalezca la presencia de la marca, comunique efectivamente su propuesta de valor y facilite la captación de nuevos interesados en la franquicia.",
    },
  ];

  return (
    <section id="projects" className="py-24 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Proyectos <span className="text-green-500">destacados</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Proyectos de diseño UI/UX que combinan investigación, estrategia y
            diseño visual para crear experiencias digitales funcionales,
            accesibles y atractivas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-green-500 transition duration-300 hover:-translate-y-2"
            >
              <img
                src={project.cardImage}
                alt={project.title}
                className="w-full h-56 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">{project.short}</p>

                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImage(0);
                  }}
                  className="mt-6 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white transition"
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-2xl w-full max-w-7xl max-h-[92vh] sm:max-h-[95vh] flex flex-col overflow-hidden relative">
            {/* Botón cerrar - Posicionado estratégicamente para que no tape contenido en móvil */}
            <button
              onClick={() => {
                setSelectedProject(null);
                setCurrentImage(0);
              }}
              className="
        absolute top-3 right-3 sm:top-4 sm:right-5 z-40
        flex items-center justify-center
        w-9 h-9 sm:w-10 sm:h-10
        rounded-full
        bg-black/70
        text-white
        backdrop-blur-sm
        transition-all duration-300
        hover:bg-green-500
        hover:scale-110
      "
            >
              <X size={20} />
            </button>

            {/* Contenedor principal: Cambia de columna a fila en pantallas grandes */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
              {/* Contenedor Imagen - Pegado al top con scroll vertical */}
              <div class="relative w-full lg:w-[60%] bg-slate-800 overflow-y-auto max-h-[95vh]">
                {" "}
                <img
                  src={selectedProject.images[currentImage]}
                  alt={selectedProject.title}
         class="w-full h-auto"
                />
                {/* Flecha izquierda */}
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
                    )
                  }
                  className="
            absolute left-3 top-1/2 -translate-y-1/2
            bg-black/50 hover:bg-green-600
            text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full
            transition flex items-center justify-center text-sm sm:text-base z-30
          "
                >
                  ❮
                </button>
                {/* Flecha derecha */}
                <button
                  onClick={() =>
                    setCurrentImage(
                      currentImage === selectedProject.images.length - 1
                        ? 0
                        : currentImage + 1,
                    )
                  }
                  className="
            absolute right-3 top-1/2 -translate-y-1/2
            bg-black/50 hover:bg-green-600
            text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full
            transition flex items-center justify-center text-sm sm:text-base z-30
          "
                >
                  ❯
                </button>
              </div>

              {/* Descripción - Abajo en móviles, scroll independiente */}
              <div className="w-full lg:w-[40%] p-5 sm:p-8 overflow-y-auto flex flex-col justify-between order-2 lg:order-1 flex-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 pr-10 lg:pr-0">
                    {selectedProject.title}
                  </h3>

                  <div
                    className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-8"
                    dangerouslySetInnerHTML={{
                      __html: selectedProject.description,
                    }}
                  />
                </div>

                {/* Indicadores de imágenes */}
                <div className="flex flex-wrap gap-2 mt-6 pb-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                        currentImage === index
                          ? "bg-green-500 scale-110"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
