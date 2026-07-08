function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-gray-400 text-center md:text-left">
          © 2026 Todos los derechos reservados.
        </p>

        <h3 className="text-white font-semibold">
          Efren <span className="text-green-500">Barragán</span>
        </h3>

      </div>
    </footer>
  );
}

export default Footer;