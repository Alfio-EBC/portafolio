function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Ponte en <span className="text-green-500">contacto</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            ¿Tienes un proyecto en mente o buscas un diseñador UI/UX para tu equipo?
            Estaré encantado de conversar contigo.
          </p>

        </div>

        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-xl">

          <div className="space-y-6">

            <div>
              <h3 className="text-sm uppercase tracking-widest text-green-500">
                Nombre
              </h3>

              <p className="text-2xl font-semibold text-white mt-2">
                Alfio Efren Barragán Castillo
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-green-500">
                Celular
              </h3>

              <a
                href="tel:+573227904887"
                className="text-xl text-gray-300 hover:text-green-400 transition"
              >
                +57 322 790 4887
              </a>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+573227904887"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white transition"
            >
              Llamar
            </a>

            <a
              href="https://wa.me/573227904887"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;