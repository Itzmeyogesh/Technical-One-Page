import { Brain, Briefcase, Users, Award } from "lucide-react";

export default function DataHead() {
  return (
    <section
      id="data-head"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase">
            Leadership Team
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Head of Data Science
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="glass rounded-3xl p-8 md:p-12 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div className="flex flex-col items-center lg:items-start">
              <img
                src="/smita-nair.jpg"
                alt="Smita Nair"
                className="w-64 h-64 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
              />

              <h3 className="text-3xl font-bold mt-6">
                Smita Nair
              </h3>

              <p className="text-cyan-400 text-lg mt-2">
                Data Head • Technical One
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8 w-full">
                <div className="glass p-5 rounded-2xl text-center">
                  <Award className="mx-auto text-cyan-400 mb-3" size={32} />
                  <h4 className="text-3xl font-bold">10+</h4>
                  <p className="text-gray-400">Years Experience</p>
                </div>

                <div className="glass p-5 rounded-2xl text-center">
                  <Briefcase
                    className="mx-auto text-cyan-400 mb-3"
                    size={32}
                  />
                  <h4 className="text-3xl font-bold">100+</h4>
                  <p className="text-gray-400">Projects Delivered</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Professional Overview
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Smita Nair is an accomplished Data Science leader with more than
                10 years of experience in Data Analytics, Machine Learning,
                Artificial Intelligence, Business Intelligence, Predictive
                Analytics, and Data Engineering. She has successfully led and
                delivered over 100 industry projects across multiple domains and
                currently heads the Data Science division at Technical One.
              </p>

              <h4 className="text-2xl font-semibold text-cyan-400 mb-6">
                Key Responsibilities
              </h4>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Brain className="text-cyan-400 mt-1" />
                  <p>
                    Lead Data Science, AI, and Machine Learning initiatives
                    across Technical One.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Users className="text-cyan-400 mt-1" />
                  <p>
                    Mentor and evaluate Data Science interns through structured
                    training and project-based assessments.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Briefcase className="text-cyan-400 mt-1" />
                  <p>
                    Assign high-performing interns to client projects based on
                    internship performance, technical skills, and project
                    readiness.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Award className="text-cyan-400 mt-1" />
                  <p>
                    Ensure project quality, client satisfaction, technical
                    excellence, and timely delivery of solutions.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Brain className="text-cyan-400 mt-1" />
                  <p>
                    Conduct technical reviews, career mentoring sessions, and
                    guide teams in AI, ML, NLP, Deep Learning, and Analytics.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Users className="text-cyan-400 mt-1" />
                  <p>
                    Build and manage high-performing data teams while fostering
                    innovation and continuous learning.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}