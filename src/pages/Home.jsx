import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Services from "../sections/Services";
import Internships from "../sections/Internships";
import Timeline from "../sections/Timeline";
import Projects from "../sections/Projects";
import DataHead from "../sections/DataHead";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen text-white">
      <Navbar />

      <Hero />

      <Services />

      <Internships />

      <Timeline />

      <Projects />

      <DataHead />

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
}