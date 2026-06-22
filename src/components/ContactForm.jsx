import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Send,
} from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Application submitted successfully! We will contact you soon."
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      glass
      rounded-[36px]
      p-10
      space-y-6
      "
    >
      <div>
        <h3 className="text-3xl font-bold mb-3">
          Apply For Internship
        </h3>

        <p className="text-gray-400">
          Fill out the form below and our team will
          get in touch with you.
        </p>
      </div>

      {/* Name */}

      <div className="relative">
        <User
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Full Name"
          required
          className="
          w-full
          bg-white/5
          border
          border-white/10
          rounded-2xl
          py-4
          pl-12
          pr-4
          "
        />
      </div>

      {/* Email */}

      <div className="relative">
        <Mail
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="
          w-full
          bg-white/5
          border
          border-white/10
          rounded-2xl
          py-4
          pl-12
          pr-4
          "
        />
      </div>

      {/* Phone */}

      <div className="relative">
        <Phone
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          className="
          w-full
          bg-white/5
          border
          border-white/10
          rounded-2xl
          py-4
          pl-12
          pr-4
          "
        />
      </div>

      {/* College */}

      <div className="relative">
        <GraduationCap
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="College / University"
          required
          className="
          w-full
          bg-white/5
          border
          border-white/10
          rounded-2xl
          py-4
          pl-12
          pr-4
          "
        />
      </div>

      {/* Domain */}

      <select
        required
        className="
        w-full
        bg-white/5
        border
        border-white/10
        rounded-2xl
        py-4
        px-4
        "
      >
        <option value="">
          Select Internship Domain
        </option>

        <option>Web Development</option>
        <option>Java Development</option>
        <option>AI / Machine Learning</option>
        <option>Power BI</option>
        <option>Cloud & DevOps</option>
        <option>Year 2038 Research</option>
        <option>Leap Second Research</option>
      </select>

      {/* Message */}

      <textarea
        rows="5"
        placeholder="Tell us about yourself..."
        className="
        w-full
        bg-white/5
        border
        border-white/10
        rounded-2xl
        p-4
        resize-none
        "
      />

      {/* Resume */}

      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Upload Resume
        </label>

        <input
          type="file"
          className="w-full"
        />
      </div>
      <form action="https://formspree.io/f/maqgywlj" method="POST"></form>

      {/* Button */}

      <button
        type="submit"
        className="
        w-full
        py-4
        rounded-2xl
        font-semibold
        text-lg
        flex
        items-center
        justify-center
        gap-3
        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-purple-600
        hover:scale-[1.02]
        transition-all
        duration-300
        shadow-[0_0_30px_rgba(34,211,238,0.3)]
        "
      >
        Submit Application

        <Send size={20} />
      </button>
    </form>
  );
}