import React from "react";
import ServicesHeading from "./ServicesHeading";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeading />
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;