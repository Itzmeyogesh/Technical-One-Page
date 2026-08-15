import {
  Home,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Clock3,
  Users,
  MessageSquareQuote,
  Mail,
} from "lucide-react";

export default function Navbar() {
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
      href: "#leadership",
      icon: Users,
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
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-1.5 sm:gap-2 md:gap-3
          px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3
          rounded-full
          border border-white/10
          bg-black/60
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
              aria-label={link.name}
              className="group relative flex-shrink-0"
            >
              <div
                className="
                  w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
                  rounded-full
                  flex items-center justify-center
                  border border-white/10
                  bg-white/5
                  hover:bg-cyan-500/10
                  hover:border-cyan-400
                  hover:scale-110
                  active:scale-95
                  transition-all
                  duration-300
                "
              >
                <Icon
                  className="
                    w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5
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
                  top-full
                  mt-3
                  left-1/2
                  -translate-x-1/2
                  px-3
                  py-1
                  rounded-lg
                  bg-black/90
                  border border-white/10
                  text-white
                  text-xs
                  font-medium
                  whitespace-nowrap
                  shadow-lg
                  opacity-0
                  translate-y-1
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                  pointer-events-none
                  z-50
                "
              >
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}