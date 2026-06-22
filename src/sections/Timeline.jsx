import { motion } from "framer-motion";
import {
  UserPlus,
  FileText,
  Laptop,
  Award,
} from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      icon: <UserPlus size={30} />,
      title: "Apply",
      description:
        "Submit your internship application through our website.",
    },
    {
      icon: <FileText size={30} />,
      title: "Selection",
      description:
        "Our team reviews your profile and confirms eligibility.",
    },
    {
      icon: <Laptop size={30} />,
      title: "Training & Projects",
      description:
        "Work on real projects under mentor guidance and weekly reviews.",
    },
    {
      icon: <Award size={30} />,
      title: "Certificate",
      description:
        "Receive internship certificate, project experience and career support.",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <div className="text-center mb-24">
          <span className="section-tag">
            INTERNSHIP PROCESS
          </span>

          <h2 className="section-title">
            How It Works
          </h2>

          <p className="section-description">
            A simple process designed to help students
            gain industry experience quickly and efficiently.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Center Line */}

          <div
            className="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-1
            bg-gradient-to-b
            from-cyan-500
            via-blue-500
            to-purple-600
            -translate-x-1/2
            rounded-full
            "
          />

          <div className="space-y-16">
            {steps.map((step, index) => (
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
                viewport={{
                  once: true,
                }}
                className={`
                  flex
                  items-center
                  ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }
                  flex-col
                  gap-8
                `}
              >
                {/* Card */}

                <div
                  className="
                  glass
                  rounded-3xl
                  p-8
                  md:w-[45%]
                  "
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 leading-8">
                    {step.description}
                  </p>
                </div>

                {/* Icon */}

                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-600
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_30px_rgba(34,211,238,0.3)]
                  z-10
                  "
                >
                  {step.icon}
                </div>

                {/* Empty Spacer */}

                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-24">
          <a
            href="#contact"
            className="
            inline-block
            px-10
            py-4
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-600
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_0_30px_rgba(34,211,238,0.25)]
            "
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}