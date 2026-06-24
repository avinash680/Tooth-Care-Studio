import React from "react";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactLocations from "./ContactLocations";
import ContactCTA from "./ContactCTA";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ContactInfo />
        <ContactLocations />
        <ContactCTA />
      </div>
    </section>
  );
};

export default Contact;
