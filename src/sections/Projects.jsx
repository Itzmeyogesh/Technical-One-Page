import { motion } from "framer-motion";
import {
  Globe,
  Brain,
  Clock3,
  Database,
  ArrowRight,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: <Globe size={36} />,
      title: "Web Development Projects",
      description:
        "Build responsive websites, dashboards, portfolios and modern web applications using React and Tailwind CSS.",
      tag: "Frontend",
    },
    {
      icon: <Database size={36} />,
      title: "Java Enterprise Applications",
      description:
        "Develop Java-based applications with SQL integration, APIs and enterprise-level architecture.",
      tag: "Backend",
    },
    {
      icon: <Brain size={36} />,
      title: "AI / Machine Learning",
      description:
        "Work on predictive models, data analytics and intelligent automation solutions.",
      tag: "AI/ML",
    },
    {
      icon: <Clock3 size={36} />,
      title: "Core Research Projects",
      description:
        "Contribute to Year 2038 Time Error and Leap Second Error research initiatives.",
      tag: "Research",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="section-tag">
            LIVE PROJECTS
          </span>

          <h2 className="section-title">
            Real Industry Experience
          </h2>

          <p className="section-description">
            Gain practical exposure through client-based
            projects and research initiatives designed to
            build professional skills.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="
              glass
              rounded-[32px]
              p-8
              relative
              overflow-hidden
              group
              "
            >
              {/* Hover Background */}

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
                via-blue-500/10
                to-purple-500/10
                "
              />

              <div className="relative z-10">
                {/* Tag */}

                <span
                  className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  text-cyan-400
                  text-sm
                  mb-6
                  "
                >
                  {project.tag}
                </span>

                {/* Icon */}

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-600
                  flex
                  items-center
                  justify-center
                  mb-6
                  "
                >
                  {project.icon}
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="text-gray-300 leading-8 mb-6">
                  {project.description}
                </p>

                {/* CTA */}

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-400
                  font-semibold
                  "
                >
                  Learn More

                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-20
          rounded-[40px]
          p-12
          text-center
          bg-gradient-to-r
          from-indigo-600
          via-cyan-500
          to-purple-600
          "
        >
          <h3 className="text-4xl font-black mb-6">
            Work On Real Client Projects
          </h3>

          <p className="max-w-3xl mx-auto text-lg leading-8">
            Every internship at Technical One focuses on
            practical implementation, problem-solving and
            industry-relevant project experience.
          </p>

          <a
            href="#contact"
            className="
            inline-block
            mt-8
            px-8
            py-4
            bg-white
            text-black
            rounded-full
            font-bold
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}