import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
      }}
      className="
      glass
      rounded-3xl
      p-8
      relative
      overflow-hidden
      group
      h-full
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
        via-blue-500/10
        to-purple-500/10
        "
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
          w-20
          h-20
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500
          via-blue-500
          to-purple-600
          flex
          items-center
          justify-center
          mb-6
          shadow-[0_0_30px_rgba(34,211,238,0.3)]
          "
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="
          text-2xl
          font-bold
          mb-4
          text-white
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
          text-gray-300
          leading-8
          mb-6
          "
        >
          {description}
        </p>

        {/* Link */}
        <div
          className="
          inline-flex
          items-center
          gap-2
          text-cyan-400
          font-semibold
          group-hover:gap-3
          transition-all
          duration-300
          "
        >
          Learn More

          <ArrowRight size={18} />
        </div>
      </div>
    </motion.div>
  );
}