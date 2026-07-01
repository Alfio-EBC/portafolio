import personaje from "../imagenes/personaje-bot.png";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-primary  py-9 background-sg"
    >
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Imagen */}
          <div className="flex justify-center">
<img
  src={personaje}
  alt="Personaje"
  className="animate-float w-96"
/>
          </div>

          {/* Información */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-3xl font-bold text-primary-foreground leading-tight">
              Alfio Efren Barragán Castillo
            </h1>

            <p className="text-gray-600 text-lg leading-8 text-primary-foreground">
              Diseñador visual, especialista en gerencia de marketing digital y
              maquetador web con experiencia en HTML, CSS y JavaScript. Me
              enfoco en brindar soluciones centradas en la experiencia de
              usuario (UX) y la interfaz de usuario (UI), proponiendo ideas
              innovadoras, accesibles y funcionales que respondan a las
              necesidades de los diferentes actores involucrados en los procesos
              de transformación digital.
            </p>

            <p className="text-gray-600 text-lg leading-8 text-primary-foreground">
              Cuento con experiencia en la creación de productos digitales
              orientados a convertir procesos y negocios tradicionales en
              experiencias digitales eficientes, aplicando principios de
              usabilidad, accesibilidad y diseño centrado en el usuario. Mi
              objetivo es garantizar una interacción intuitiva, amigable y
              satisfactoria entre los usuarios y las plataformas digitales.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;




