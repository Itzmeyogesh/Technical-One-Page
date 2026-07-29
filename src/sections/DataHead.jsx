import {
  Brain,
  Briefcase,
  Users,
  Award,
  Rocket,
  Building2,
} from "lucide-react";

export default function DataHead() {
  return (
    <section
      id="leadership"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase">
            Leadership Team
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Meet Our Leadership
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>


        {/* Leadership Cards */}
        <div className="grid lg:grid-cols-2 gap-10">


          {/* ================= DATA HEAD ================= */}

          <div className="glass rounded-3xl p-8 md:p-12 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500">

            <div className="grid gap-8">

              <div className="flex flex-col items-center">

                <img
                  src="/smita-nair.jpg"
                  alt="Smita Nair"
                  className="w-56 h-56 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
                />


                <h3 className="text-3xl font-bold mt-6">
                  Smita Nair
                </h3>


                <p className="text-cyan-400 text-lg mt-2">
                  Head of Data Science
                </p>


                <div className="grid grid-cols-2 gap-6 mt-8 w-full">


                  <div className="glass p-5 rounded-2xl text-center">

                    <Award
                      className="mx-auto text-cyan-400 mb-3"
                      size={32}
                    />

                    <h4 className="text-3xl font-bold">
                      10+
                    </h4>

                    <p className="text-gray-400">
                      Years Experience
                    </p>

                  </div>



                  <div className="glass p-5 rounded-2xl text-center">

                    <Briefcase
                      className="mx-auto text-cyan-400 mb-3"
                      size={32}
                    />

                    <h4 className="text-3xl font-bold">
                      100+
                    </h4>

                    <p className="text-gray-400">
                      Projects Delivered
                    </p>

                  </div>


                </div>

              </div>



              <div>

                <h3 className="text-2xl font-bold mb-5">
                  Professional Overview
                </h3>


                <p className="text-gray-300 leading-relaxed">

                  Smita Nair is an accomplished Data Science leader with more
                  than 10 years of experience in Data Analytics, Machine
                  Learning, Artificial Intelligence, Business Intelligence,
                  Predictive Analytics, and Data Engineering. She has
                  successfully delivered over 100 industry projects across
                  multiple domains and currently heads the Data Science division
                  at Technical One.

                </p>



                <h4 className="text-xl font-semibold text-cyan-400 mt-8 mb-5">
                  Responsibilities
                </h4>



                <div className="space-y-4">


                  <div className="flex gap-4">

                    <Brain className="text-cyan-400 mt-1"/>

                    <p>
                      Lead AI, Machine Learning and Data Science initiatives.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Users className="text-cyan-400 mt-1"/>

                    <p>
                      Mentor Data Science interns through structured training.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Briefcase className="text-cyan-400 mt-1"/>

                    <p>
                      Allocate client projects based on technical performance.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Award className="text-cyan-400 mt-1"/>

                    <p>
                      Ensure project quality and timely delivery.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Brain className="text-cyan-400 mt-1"/>

                    <p>
                      Guide teams in AI, ML, NLP, Deep Learning and Analytics.
                    </p>

                  </div>


                </div>


              </div>


            </div>


          </div>





          {/* ================= CO-FOUNDER ================= */}


          <div className="glass rounded-3xl p-8 md:p-12 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500">


            <div className="grid gap-8">


              <div className="flex flex-col items-center">


                <img
                  src="/Juhi.jpeg"
                  alt="Juhi Yadav"
                  className="w-56 h-56 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
                />



                <h3 className="text-3xl font-bold mt-6">
                  Juhi Yadav
                </h3>



                <p className="text-cyan-400 text-lg mt-2">
                  Co-Founder
                </p>



                <p className="text-gray-400 mt-2">
                  Joined January 2025
                </p>



                <a
                  href="mailto:cofounder@technical-one.com"
                  className="mt-3 text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  cofounder@technical-one.com
                </a>


              </div>





              <div>


                <h3 className="text-2xl font-bold mb-5">
                  Professional Overview
                </h3>



                <p className="text-gray-300 leading-relaxed">

                  Juhi Yadav joined Technical One in January 2025 as
                  Co-Founder. She plays a key role in strategic planning,
                  business development, organizational growth, client
                  relationships, and operational excellence while helping drive
                  innovation across the company.

                </p>




                <h4 className="text-xl font-semibold text-cyan-400 mt-8 mb-5">
                  Responsibilities
                </h4>



                <div className="space-y-4">



                  <div className="flex gap-4">

                    <Rocket className="text-cyan-400 mt-1"/>

                    <p>
                      Define the strategic vision and long-term growth roadmap.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Building2 className="text-cyan-400 mt-1"/>

                    <p>
                      Develop partnerships with clients and organizations.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Users className="text-cyan-400 mt-1"/>

                    <p>
                      Strengthen organizational culture and collaboration.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Briefcase className="text-cyan-400 mt-1"/>

                    <p>
                      Lead business development and operational planning.
                    </p>

                  </div>



                  <div className="flex gap-4">

                    <Award className="text-cyan-400 mt-1"/>

                    <p>
                      Drive innovation and ensure sustainable business growth.
                    </p>

                  </div>



                </div>


              </div>



            </div>


          </div>



        </div>


      </div>

    </section>
  );
}