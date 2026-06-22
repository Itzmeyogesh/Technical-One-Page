import {
  GraduationCap,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                flex
                items-center
                justify-center
                "
              >
                <GraduationCap size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Technical One
                </h3>

                <p className="text-sm text-gray-400">
                  EduTech Startup
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-7">
              Empowering students and freshers through
              industry-focused internships, mentorship,
              real-world projects and career guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#domains"
                  className="hover:text-cyan-400 transition"
                >
                  Domains
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Internship Domains */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Internship Domains
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>Java Development</li>
              <li>AI / Machine Learning</li>
              <li>Power BI</li>
              <li>Core Research</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="text-cyan-400 mt-1"
                />

                <span className="text-gray-400">
                  hr@technical-one.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-cyan-400 mt-1"
                />

                <span className="text-gray-400">
                  Koregaon Park, Pune, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Technical One.
            All Rights Reserved.
          </p>

          <a
            href="#home"
            className="
            flex
            items-center
            gap-2
            text-cyan-400
            hover:text-white
            transition
            "
          >
            Back To Top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}