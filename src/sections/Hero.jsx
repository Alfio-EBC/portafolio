import yo from "../imagenes/alfio-efren-barragan-castilllo.png";

function Hero() {
  return (
    <section id="hero" className="pt-16" aria-labelledby="hero-title">
      <div className="container mx-auto">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-primary px-6">
          <figure className="flex justify-center order-2 lg:order-1">
            <img
              src={yo}
              alt="Efren Barragán, diseñador UI/UX y desarrollador Front-End"
              className="w-full"
              loading="eager"
            />
          </figure>
          <div className="space-y-6 order-2 lg:order-1">
            <header className="space-y-3">
              <p className="text-white font-semibold tracking-wide uppercase">
                Hola, soy Efren Barragán
              </p>

              <h1
                id="hero-title"
                className="text-5xl md:text-6xl font-bold leading-tight text-white"
              >
                Diseñador <span className="text-green-500">UI/UX</span> <br />&{" "}
                <span className="text-green-500">Front-End</span>
              </h1>

              <p className="text-gray-300 text-lg leading-8 max-w-xl">
                Diseño experiencias digitales intuitivas, accesibles y centradas
                en el usuario. Transformo ideas en productos funcionales
                mediante investigación UX, diseño de interfaces modernas y
                desarrollo Front-End con React.
              </p>
            </header>

            {/* Tecnologías */}
            <ul className="flex flex-wrap gap-3">
              <li className="px-4 py-2 rounded-full text-green-400 border border-green-600">
                {" "}
                UI/UX
              </li>

              <li className="px-4 py-2 rounded-full text-green-400 border border-green-600">
                {" "}
                Accesibilidad
              </li>

              <li className="px-4 py-2 rounded-full text-green-400 border border-green-600">
                {" "}
                Prototipado
              </li>

              <li className="px-4 py-2 rounded-full text-green-400 border border-green-600">
                {" "}
                Front-End
              </li>

              <li className="px-4 py-2 rounded-full text-green-400 border border-green-600">
                React
              </li>
            </ul>

            {/* Botones */}
            <nav
              className="flex flex-wrap gap-4"
              aria-label="Acciones principales"
            >
  
             
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero;
