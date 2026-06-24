import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Clock3,
  Brain,
  MessageSquareQuote,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      icon: Home,
    },
    {
      name: "Services",
      href: "#services",
      icon: Briefcase,
    },
    {
      name: "Internships",
      href: "#internships",
      icon: GraduationCap,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderKanban,
    },
    {
      name: "Timeline",
      href: "#timeline",
      icon: Clock3,
    },
    {
      name: "Data Head",
      href: "#data-head",
      icon: Brain,
    },
    {
      name: "Testimonials",
      href: "#testimonials",
      icon: MessageSquareQuote,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ];

  return (
    <>
      {/* Desktop Floating Dock Navbar */}
      <div className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="
            flex items-center gap-3
            px-5 py-3
            rounded-full
            border border-white/10
            bg-black/40
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(34,211,238,0.20)]
          "
        >
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                className="group relative"
              >
                <div
                  className="
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    border border-white/10
                    bg-white/5
                    hover:bg-cyan-500/10
                    hover:border-cyan-400
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    size={20}
                    className="
                      text-gray-300
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  />
                </div>

                {/* Tooltip */}
                <span
                  className="
                    absolute
                    top-14
                    left-1/2
                    -translate-x-1/2
                    px-3
                    py-1
                    rounded-lg
                    bg-black/90
                    text-white
                    text-xs
                    whitespace-nowrap
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    pointer-events-none
                  "
                >
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Navbar */}
      <header
        className="
          lg:hidden
          fixed
          top-0
          left-0
          w-full
          z-50
          bg-black/50
          backdrop-blur-xl
          border-b
          border-white/10
        "
      >
        <div className="flex items-center justify-between h-20 px-6">
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div
              className="
                w-10 h-10
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-600
                flex
                items-center
                justify-center
              "
            >
              <GraduationCap size={20} />
            </div>

            <h1
              className="
                text-lg
                font-black
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Technical One
            </h1>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            className="
              bg-black/95
              backdrop-blur-xl
              border-t
              border-white/10
            "
          >
            <div className="flex flex-col gap-5 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-gray-300
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}