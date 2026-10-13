import { Phone, FileText, Palette, Download } from "lucide-react";

function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-white">
                        Ponte en <span className="text-green-500">contacto</span>
                    </h2>

                    <p className="text-gray-400 mt-5 text-lg">
                        ¿Tienes un proyecto en mente o buscas un diseñador UI/UX para tu equipo? Estaré encantado de
                        conversar contigo.
                    </p>
                </div>

                <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-xl">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-green-500">Nombre</h3>
                            <p className="text-2xl font-semibold text-white mt-2">Alfio Efren Barragán Castillo</p>
                        </div>

                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-green-500">Celular</h3>
                            <a
                                href="tel:+573227904887"
                                className="text-xl text-gray-300 hover:text-green-400 transition"
                            >
                                +57 322 790 4887
                            </a>
                        </div>
                    </div>

                    {/* Botones de contacto */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href="tel:+573227904887"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white transition"
                        >
                            <Phone size={18} />
                            Llamar
                        </a>

                        <a
                            href="https://wa.me/573227904887"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg transition"
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Botones de hojas de vida */}

                    {/* Sección de hojas de vida */}
                    <div className="mt-10 pt-8 border-t border-slate-800">
                        <h3 className="text-center text-white font-semibold text-xl mb-2">Mi hoja de vida</h3>

                        <p className="text-center text-gray-400 text-sm mb-6">
                            Conoce mi experiencia profesional y mi perfil como diseñador UI/UX.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                            {/* Hoja de vida sencilla */}
                            <a
                                href="/imagenes/cv-Alfio-Efren-Barragan-Castillo-2026-sencilla.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Abrir hoja de vida sencilla en PDF"
                                className="group inline-flex items-center justify-center gap-3
      border border-slate-700 bg-slate-800/50
      text-gray-200 hover:border-green-500 hover:text-green-400
      hover:bg-slate-800 px-6 py-4 rounded-xl
      transition-all duration-300"
                            >
                                <FileText
                                    size={22}
                                    className="text-green-500 group-hover:scale-110 transition-transform"
                                />

                                <span className="font-medium">Hoja de vida sencilla</span>

                                <Download
                                    size={17}
                                    className="text-gray-500 group-hover:text-green-400 transition-colors"
                                />
                            </a>

                            {/* Hoja de vida con diseño */}
                            <a
                                href="/imagenes/cv-Alfio-Efren-Barragan-Castillo-2026-diseno.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Abrir hoja de vida con diseño en PDF"
                                className="group inline-flex items-center justify-center gap-3
      bg-green-600 hover:bg-green-700
      text-white px-6 py-4 rounded-xl
      transition-all duration-300"
                            >
                                <Palette size={22} className="group-hover:rotate-6 transition-transform" />

                                <span className="font-medium">Hoja de vida diseño</span>

                                <Download
                                    size={17}
                                    className="text-green-100 group-hover:translate-y-0.5 transition-transform"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
