import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-bold">
          Alfio Efren Barragán Castillo
        </h1>

        {/* Menú Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón móvil */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav className="md:hidden border-t bg-white">
          <ul className="flex flex-col py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;