import React from "react";

const features = [
  {
    image: "/media/filling-machine.png",
    title: "Modern Digital Diagnostic Tools",
    description:
      "We use the latest imaging and scanning technology to ensure accurate diagnosis and personalized treatment plans.",
  },
  {
    image: "/media/dentist-tools.png",
    title: "High-Quality Dental Materials",
    description:
      "Only the best materials are used to ensure durable, safe, and natural-looking results for every patient.",
  },
  {
    image: "/media/dentistry.png",
    title: "Advanced Treatment Modalities",
    description:
      "From routine care to complex procedures, we offer modern treatments designed for precision and comfort.",
  },
  {
    image: "/media/patient.png",
    title: "Comfortable Patient Lounges",
    description:
      "Relax in our cozy waiting area equipped with complimentary Wi-Fi, ensuring a stress-free dental experience.",
  },
];

const ClinicEquipment = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-4">
            Advanced Technology
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Clinics Equipped With
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We use the latest imaging and scanning technology to ensure
            accurate diagnosis, personalized treatment plans, and exceptional
            patient care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[28px] p-8 lg:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-cyan-400"></div>

              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-sky-50 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-7 text-base">
                {item.description}
              </p>

              {/* Bottom Decoration */}
              <div className="mt-8 w-12 h-1 rounded-full bg-sky-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicEquipment;