import React from "react";
import AboutHero from "./AboutHero";
import DoctorSection from "./DoctorSection";
import ExpertiseSection from "./ExpertiseSection";
import AboutCTA from "./AboutCTA";

const About = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-5">
        <AboutHero />
        <DoctorSection />
        <ExpertiseSection />
        <AboutCTA />
      </div>
    </section>
  );
};

export default About;
