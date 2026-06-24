import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
const testimonials = [
{
name: "Keerthi Darapaneni",
role: "AI/ML Intern",
review:
"Worked on real client AI and Machine Learning projects at Technical One. The practical exposure to industry-level datasets, model development, and deployment significantly enhanced my technical skills.",
},
{
name: "Sakshi Pawar",
role: "Web Development Trainer",
review:
"The internship experience strengthened my technical foundation and communication skills. Today, I work as a Web Development Trainer and mentor aspiring developers.",
},
{
name: "Vasanth Prakasam",
role: "Placed at Amazon",
review:
"Technical One provided valuable project exposure, mentorship, and industry insights that helped me build confidence and advance my professional career.",
},
{
name: "Shubham Patra",
role: "Placed at Clogic Softech",
review:
"Working on live projects and collaborating with experienced mentors prepared me for real-world software development challenges and professional growth.",
},
{
name: "Kartiki Nandeshwar",
role: "Startup Website Designer",
review:
"Designed and developed a complete startup website during the internship. The experience improved my UI/UX design, frontend development, and client communication skills.",
},
];

return ( <section
   id="testimonials"
   className="py-32 px-6 relative overflow-hidden"
 >
{/* Background Glow */} <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

```
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <div className="text-center mb-20">
      <span className="section-tag">
        SUCCESS STORIES
      </span>

      <h2 className="section-title">
        What Our Interns Achieved
      </h2>

      <p className="section-description">
        Real success stories from students and professionals who
        completed internships and projects at Technical One.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((item, index) => (
        <motion.div
          key={index}
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
          "
        >
          <Quote
            size={40}
            className="text-cyan-400 mb-6"
          />

          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill="currentColor"
                className="text-yellow-400"
              />
            ))}
          </div>

          <p className="text-gray-300 leading-8 mb-8">
            "{item.review}"
          </p>

          <div>
            <h4 className="font-bold text-lg">
              {item.name}
            </h4>

            <p className="text-cyan-400 text-sm">
              {item.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom Stats */}
    <div className="grid md:grid-cols-3 gap-8 mt-20">
      <div className="glass rounded-3xl p-8 text-center">
        <h3 className="text-5xl font-black gradient-text">
          500+
        </h3>

        <p className="text-gray-400 mt-3">
          Interns Trained
        </p>
      </div>

      <div className="glass rounded-3xl p-8 text-center">
        <h3 className="text-5xl font-black gradient-text">
          100+
        </h3>

        <p className="text-gray-400 mt-3">
          Projects Delivered
        </p>
      </div>

      <div className="glass rounded-3xl p-8 text-center">
        <h3 className="text-5xl font-black gradient-text">
          50+
        </h3>

        <p className="text-gray-400 mt-3">
          Placement Success Stories
        </p>
      </div>
    </div>
  </div>
</section>

);
}
