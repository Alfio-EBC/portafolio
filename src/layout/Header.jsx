import { Menu } from "lucide-react";

const links = [

  { name: "Sobre mi", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <h1 className="text-2xl font-bold">
          Alfio Efren Barragan Castillo
        </h1>

        <nav>
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

        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}

export default Header;