import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Internships", href: "#internships" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/30
      border-b
      border-white/10
    "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div
              className="
              w-11
              h-11
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-600
              flex
              items-center
              justify-center
              shadow-lg
            "
            >
              <GraduationCap size={22} />
            </div>

            <div>
              <h1 className="text-xl font-black text-white">
                Technical One
              </h1>

              <p className="text-xs text-gray-400">
                EduTech Startup
              </p>
            </div>
          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                text-gray-300
                hover:text-cyan-400
                transition-colors
                duration-300
                font-medium
              "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}

          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-600
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            lg:hidden
            text-white
          "
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
          lg:hidden
          bg-black/90
          backdrop-blur-xl
          border-t
          border-white/10
        "
        >
          <div className="flex flex-col px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                text-gray-300
                hover:text-cyan-400
                transition
              "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
              mt-2
              text-center
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-600
              font-semibold
            "
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}