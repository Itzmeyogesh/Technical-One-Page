import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Rocket,
  Briefcase,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
      pt-36
      pb-20
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-grid"></div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          inline-flex
          items-center
          gap-3
          glass
          rounded-full
          px-6
          py-3
          mb-8
          "
        >
          <GraduationCap size={18} />

          <span className="text-sm font-medium">
            EduTech Startup • Established December 2024
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-white
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-black
          leading-tight
          "
        >
          Build Your Career With

          <span className="gradient-text block mt-4">
            Technical One
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          text-gray-300
          text-lg
          md:text-xl
          max-w-4xl
          mx-auto
          mt-8
          leading-9
          "
        >
          Online & Offline Internship Programs in
          Web Development, Java Development,
          AI / Machine Learning and Power BI.

          <br />

          Work on real-world projects, receive
          expert mentorship, placement guidance
          and gain industry-ready experience.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-5
          "
        >
          <a
            href="#contact"
            className="
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-600
            flex
            items-center
            gap-3
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_0_30px_rgba(34,211,238,0.35)]
            "
          >
            Apply Now

            <ArrowRight size={18} />
          </a>

          <a
            href="#internships"
            className="
            glass
            px-8
            py-4
            rounded-full
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Explore Programs
          </a>
        </motion.div>

        {/* Stats */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-20
          max-w-5xl
          mx-auto
          "
        >
          <div className="glass rounded-3xl p-8">
            <h3 className="text-5xl font-black gradient-text">
              30+
            </h3>

            <p className="text-gray-400 mt-3">
              Internship Batches
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-5xl font-black gradient-text">
              100+
            </h3>

            <p className="text-gray-400 mt-3">
              Client Projects
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-5xl font-black gradient-text">
              4+
            </h3>

            <p className="text-gray-400 mt-3">
              Internship Domains
            </p>
          </div>
        </div>

        {/* Research Highlight */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          mt-16
          glass
          rounded-[36px]
          p-8
          md:p-10
          max-w-5xl
          mx-auto
          "
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div
              className="
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              flex
              items-center
              justify-center
              "
            >
              <Briefcase size={40} />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">
                Featured Core Research Internship
              </h3>

              <p className="text-gray-300 mt-3 leading-8">
                Work on Year 2038 Time Error and
                Leap Second Error projects and gain
                exposure to future-critical software
                engineering challenges.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="
          mt-14
          inline-flex
          items-center
          gap-3
          px-8
          py-4
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          via-cyan-500
          to-purple-600
          font-semibold
          "
        >
          <Rocket size={20} />

          Become Industry Ready With Technical One
        </motion.div>
      </div>
    </section>
  );
}