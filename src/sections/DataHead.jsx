import {
  Briefcase,
  Users,
  Award,
  Rocket,
  Building2,
} from "lucide-react";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase">
            Leadership Team
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Meet Our Leadership
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Leadership Card */}
        <div className="max-w-3xl mx-auto">
          {/* ================= CO-FOUNDER ================= */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500">
            <div className="grid gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="/Juhi.jpeg"
                  alt="Juhi Yadav"
                  className="w-56 h-56 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
                />

                <h3 className="text-3xl font-bold mt-6">
                  Juhi Yadav
                </h3>

                <p className="text-cyan-400 text-lg mt-2">
                  Co-Founder
                </p>

                <p className="text-gray-400 mt-2">
                  Joined January 2025
                </p>

                <a
                  href="mailto:cofounder@technical-one.com"
                  className="mt-3 text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  cofounder@technical-one.com
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-5">
                  Professional Overview
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Juhi Yadav joined Technical One in January 2025 as
                  Co-Founder. She plays a key role in strategic planning,
                  business development, organizational growth, client
                  relationships, and operational excellence while helping drive
                  innovation across the company.
                </p>

                <h4 className="text-xl font-semibold text-cyan-400 mt-8 mb-5">
                  Responsibilities
                </h4>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Rocket className="text-cyan-400 mt-1 shrink-0" />
                    <p>
                      Define the strategic vision and long-term growth roadmap.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Building2 className="text-cyan-400 mt-1 shrink-0" />
                    <p>
                      Develop partnerships with clients and organizations.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Users className="text-cyan-400 mt-1 shrink-0" />
                    <p>
                      Strengthen organizational culture and collaboration.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Briefcase className="text-cyan-400 mt-1 shrink-0" />
                    <p>
                      Lead business development and operational planning.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Award className="text-cyan-400 mt-1 shrink-0" />
                    <p>
                      Drive innovation and ensure sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}