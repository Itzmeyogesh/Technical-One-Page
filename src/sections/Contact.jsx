import { motion } from "framer-motion";
import {
  Mail,
  Building2,
} from "lucide-react";

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="section-tag">
            CONTACT US
          </span>

          <h2 className="section-title">
            Start Your Career Journey
          </h2>

          <p className="section-description">
            Apply today and become part of
            Technical One's growing internship
            ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-[36px] p-10"
          >
            <h3 className="text-3xl font-bold mb-10">
              Internship Contact Details
            </h3>

            <div className="space-y-6">
              {/* HR Email */}

              <div className="flex gap-5 items-center">
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    HR Email
                  </p>

                  <p className="font-semibold">
                    hr@technical-one.com
                  </p>
                </div>
              </div>

              {/* Data Head Email */}

              <div className="flex gap-5 items-center">
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Data Head Email
                  </p>

                  <p className="font-semibold">
                    datahead@technical-one.com
                  </p>
                </div>
              </div>

              {/* Office */}

              <div className="flex gap-5 items-start">
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Building2 size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Office Location
                  </p>

                  <p className="font-semibold leading-7">
                    Technical One
                    <br />
                    5th Floor, The Hub Building
                    <br />
                    Koregaon Park
                    <br />
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              {/* Map */}

              <div
                className="
                mt-10
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                h-[280px]
                "
              >
                <iframe
                  title="Technical One"
                  src="https://maps.google.com/maps?q=The%20Hub%20Building%20Koregaon%20Park%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}