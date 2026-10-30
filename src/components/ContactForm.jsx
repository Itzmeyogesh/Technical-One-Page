import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Link,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/maqgywlj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
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
          Fill out the form below and our team will get in touch with you.
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
          name="name"
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
          text-white
          outline-none
          focus:border-cyan-500
          transition
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
          name="email"
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
          text-white
          outline-none
          focus:border-cyan-500
          transition
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
          name="phone"
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
          text-white
          outline-none
          focus:border-cyan-500
          transition
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
          name="college"
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
          text-white
          outline-none
          focus:border-cyan-500
          transition
          "
        />
      </div>

      {/* Domain */}
      <div>
        <select
          name="domain"
          required
          className="
          w-full
          bg-[#0f172a]
          border
          border-white/10
          rounded-2xl
          py-4
          px-4
          text-white
          outline-none
          focus:border-cyan-500
          transition
          "
        >
          <option value="" className="bg-slate-900 text-gray-400">
            Select Internship Domain
          </option>
          <option value="Web Development" className="bg-slate-900 text-white">Web Development</option>
          <option value="Java Development" className="bg-slate-900 text-white">Java Development</option>
          <option value="AI / Machine Learning" className="bg-slate-900 text-white">AI / Machine Learning</option>
          <option value="Power BI" className="bg-slate-900 text-white">Power BI</option>
          <option value="Cloud & DevOps" className="bg-slate-900 text-white">Cloud & DevOps</option>
          <option value="Year 2038 Research" className="bg-slate-900 text-white">Year 2038 Research</option>
          <option value="Leap Second Research" className="bg-slate-900 text-white">Leap Second Research</option>
        </select>
      </div>

      {/* Resume Drive Link */}
      <div className="space-y-1">
        <div className="relative">
          <Link
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="url"
            name="resume_link"
            placeholder="Resume Link (Google Drive / Portfolio / LinkedIn)"
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
            text-white
            outline-none
            focus:border-cyan-500
            transition
            "
          />
        </div>
        <p className="text-xs text-gray-400 pl-2">
          * Drive लिंकची ॲक्सेस 'Anyone with the link can view' असल्याची खात्री करा.
        </p>
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about yourself..."
          className="
          w-full
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-4
          resize-none
          text-white
          outline-none
          focus:border-cyan-500
          transition
          "
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-sm">
          <CheckCircle2 size={18} />
          <span>Application submitted successfully! We will get in touch soon.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-rose-400 bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl text-sm">
          <AlertCircle size={18} />
          <span>Something went wrong. Please check your details and try again.</span>
        </div>
      )}

      {/* Button */}
      <button
        type="submit"
        disabled={status === "loading"}
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
        active:scale-[0.98]
        disabled:opacity-50
        disabled:hover:scale-100
        transition-all
        duration-300
        shadow-[0_0_30px_rgba(34,211,238,0.3)]
        "
      >
        {status === "loading" ? (
          <>
            Submitting...
            <Loader2 size={20} className="animate-spin" />
          </>
        ) : (
          <>
            Submit Application
            <Send size={20} />
          </>
        )}
      </button>
    </form>
  );
}