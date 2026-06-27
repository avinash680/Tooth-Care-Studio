import React from "react";

const services = [
  {
    image: "/gallery/general.jpg",
    title: "General Dentistry",
    description:
      "Preventive care, routine dental check-ups, digital X-rays (RVG), tooth-colored fillings, scaling, and polishing.",
  },
  {
    image: "/media/Cosmetic-Dentist-in-La-Canada-Flintridge.jpg.webp",
    title: "Cosmetic & Esthetic Dentistry",
    description:
      "Teeth whitening, smile makeovers with bonding and veneers, and aesthetic crowns and bridges for a confident smile.",
  },
  {
    image: "/media/b2ap3_large_dental-implants.webp",
    title: "Dental Implants & Prosthodontics",
    description:
      "Permanent tooth replacement with implants, full and partial dentures, and restorations that restore function and appearance.",
  },
  {
    image: "/gallery/root-canal-1024x683.jpg",
    title: "Root Canal Treatment",
    description:
      "Single-sitting root canal therapy, advanced pulp care, and pain-relieving treatments to save natural teeth.",
  },
  {
    image: "/gallery/All_About_Braces_deaa770a8b.webp",
    title: "Orthodontics",
    description:
      "Dental braces, Invisalign clear aligners, retainers, and comprehensive alignment correction treatments.",
  },
  {
    image: "/gallery/shutterstock_112019783-1200x675.jpg",
    title: "Pediatric Dentistry",
    description:
      "Specialized dental care for children, including fluoride treatments, dental sealants, and preventive oral health guidance.",
  },
  {
    image: "/gallery/periodontics-2412.jpg",
    title: "Periodontics",
    description:
      "Treatment for gum diseases, deep cleaning procedures, scaling and root planing, and advanced gum surgeries.",
  },
  {
    image: "/gallery/8-healing-tips-after-oral-and-maxillofacial-surgery.jpg",
    title: "Oral & Maxillofacial Surgery",
    description:
      "Wisdom tooth extractions, impacted tooth removal, cyst surgeries, and bone grafting procedures.",
  },
  {
    image: "/gallery/z.webp",
    title: "Oral Medicine & Radiology",
    description:
      "Comprehensive oral disease diagnosis, advanced dental imaging, radiology services, and treatment planning.",
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          {/* Service Image */}
          <div className="overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
            
            <button className="mt-6 text-[#1a6faf] font-semibold hover:underline">
              Learn More →
            </button>  
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
