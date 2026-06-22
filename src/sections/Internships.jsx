import { motion } from "framer-motion";
import {
  Laptop,
  Building2,
  Award,
  Users,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function Internships() {
  const internships = [
    {
      title: "Web Development Internship",
      duration: "4 - 12 Weeks",
      mode: "Online & Offline",
      icon: <Laptop size={36} />,
      description:
        "Build responsive websites and modern web applications using React, JavaScript, Tailwind CSS and industry best practices.",
    },
    {
      title: "Java Development Internship",
      duration: "4 - 12 Weeks",
      mode: "Online & Offline",
      icon: <Building2 size={36} />,
      description:
        "Learn Core Java, OOP, JDBC, Servlets and backend development while working on real-world projects.",
    },
    {
      title: "AI / Machine Learning Internship",
      duration: "4 - 12 Weeks",
      mode: "Online & Offline",
      icon: <Users size={36} />,
      description:
        "Work with Python, Machine Learning models, data analysis and AI-powered solutions.",
    },
  ];

  return (
    <section
      id="internships"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-24">
          <span className="text-cyan-400 font-semibold tracking-[4px] uppercase">
            Internship Programs
          </span>

          <h2 className="text-5xl md:text-7xl font-black mt-6">
            Start Your
            <span className="gradient-text block">
              Career Journey
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            Practical internship programs designed to
            help students gain real-world experience,
            technical skills and industry exposure.
          </p>
        </div>

        {/* Internship Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="
              glass
              rounded-[36px]
              p-8
              relative
              overflow-hidden
              group
              "
            >
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-gradient-to-br
                from-cyan-500/10
                via-indigo-500/10
                to-purple-500/10
                "
              ></div>

              <div className="relative z-10">
                {/* Icon */}

                <div
                  className="
                  w-18
                  h-18
                  rounded-3xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  flex
                  items-center
                  justify-center
                  mb-8
                  shadow-xl
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-6">
                  {item.description}
                </p>

                {/* Details */}

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock3 size={18} />
                    <span>{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Laptop size={18} />
                    <span>{item.mode}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Award size={18} />
                    <span>
                      Offer Letter & Certificate
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  text-cyan-400
                  font-semibold
                  "
                >
                  Apply Now

                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
          mt-24
          glass
          rounded-[40px]
          p-10
          md:p-14
          "
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Award
                size={40}
                className="mx-auto text-cyan-400 mb-4"
              />

              <h4 className="font-bold text-xl mb-2">
                Certificate
              </h4>

              <p className="text-gray-400">
                Completion Certificate
              </p>
            </div>

            <div>
              <Users
                size={40}
                className="mx-auto text-purple-400 mb-4"
              />

              <h4 className="font-bold text-xl mb-2">
                Mentorship
              </h4>

              <p className="text-gray-400">
                Weekly Mentor Guidance
              </p>
            </div>

            <div>
              <Laptop
                size={40}
                className="mx-auto text-cyan-400 mb-4"
              />

              <h4 className="font-bold text-xl mb-2">
                Projects
              </h4>

              <p className="text-gray-400">
                Client-Based Projects
              </p>
            </div>

            <div>
              <Building2
                size={40}
                className="mx-auto text-purple-400 mb-4"
              />

              <h4 className="font-bold text-xl mb-2">
                Placement
              </h4>

              <p className="text-gray-400">
                Career Assistance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}