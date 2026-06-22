import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Brain,
  BarChart3,
  Clock3,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Globe size={34} />,
      title: "Web Development",
      description:
        "Build modern responsive websites using React, JavaScript, Tailwind CSS and industry-standard tools.",
    },
    {
      icon: <Code2 size={34} />,
      title: "Java Development",
      description:
        "Learn Core Java, OOP, JDBC, Servlets and enterprise application development fundamentals.",
    },
    {
      icon: <Brain size={34} />,
      title: "AI / Machine Learning",
      description:
        "Work with Python, Machine Learning algorithms, data processing and AI-based applications.",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Power BI",
      description:
        "Create professional dashboards, business reports and data visualization solutions.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "Year 2038 Research",
      description:
        "Participate in research focused on future-critical software engineering and time-based system challenges.",
    },
    {
      icon: <Cpu size={34} />,
      title: "Leap Second Research",
      description:
        "Explore real-world timing synchronization problems affecting large-scale computing systems.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-24">
          <span className="text-cyan-400 font-semibold tracking-[4px] uppercase">
            Our Programs
          </span>

          <h2 className="text-5xl md:text-7xl font-black mt-6">
            Internship
            <span className="gradient-text block">
              Domains
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            Technical One offers industry-focused
            internship programs designed to help
            students gain practical experience and
            build professional skills.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
              viewport={{ once: true }}
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
              {/* Hover Glow */}

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
                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  flex
                  items-center
                  justify-center
                  mb-6
                  shadow-xl
                  "
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {service.description}
                </p>

                <div
                  className="
                  flex
                  items-center
                  gap-2
                  mt-6
                  text-cyan-400
                  font-semibold
                  "
                >
                  Learn More

                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}

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
          mt-20
          glass
          rounded-[40px]
          p-10
          md:p-14
          text-center
          "
        >
          <h3 className="text-4xl md:text-5xl font-black">
            Learn.
            <span className="gradient-text">
              {" "}Build.
            </span>
            Grow.
          </h3>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Gain practical experience through
            client projects, mentor guidance,
            professional development sessions
            and internship certifications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}