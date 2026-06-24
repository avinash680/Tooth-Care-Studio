import React from "react";

const ExpertiseSection = () => {
  const expertiseItems = [
    "Emergency Dental Care & Trauma Management",
    "Oral & Maxillofacial Prosthodontics",
    "Comprehensive Pain Management & Oral Ulcer Treatment",
    "Root Canal Therapy (RCT)",
    "Aligner Based Orthodontics",
    "CBCT Based Diagnostic & Treatment Planning",
    "Pediatric Dentistry & Preventive Care",
  ];

  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Areas of Expertise
        </h2>
        <p className="text-gray-600 mt-3">
          Specialized treatments delivered with precision and care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="font-semibold text-gray-800">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
