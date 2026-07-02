import personaje from "../imagenes/personaje-bot.png";

function About() {
  return (
   
<section
  id="about"
  className="py-20 container mx-auto"
  aria-labelledby="about-title"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Contenido */}
      <div className="order-2 lg:order-1">
     <p className="text-white -300 text-lg leading-8 pb-4">
                Diseñador visual, especialista en gerencia de marketing digital
                y maquetador web con experiencia en HTML, CSS y JavaScript. Me
                enfoco en brindar soluciones centradas en la experiencia de
                usuario (UX) y la interfaz de usuario (UI), proponiendo ideas
                innovadoras, accesibles y funcionales que respondan a las
                necesidades de los diferentes actores involucrados en los
                procesos de transformación digital.</p>
 <p className="text-white -300 text-lg leading-8">
                Cuento con experiencia en la creación de productos digitales
                orientados a convertir procesos y negocios tradicionales en
                experiencias digitales eficientes, aplicando principios de
                usabilidad, accesibilidad y diseño centrado en el usuario. Mi
                objetivo es garantizar una interacción intuitiva, amigable y
                satisfactoria entre los usuarios y las plataformas digitales.
              </p>
      </div>

      {/* Imagen */}
      <figure className="flex justify-center order-1 lg:order-2">
        <img
          src={personaje}
          alt="Ilustración representando a Efren Barragán"
          className="w-full max-w-md animate-float"
          loading="lazy"
        />
      </figure>

    </article>
  </div>
</section>
  );
}

export default About;




