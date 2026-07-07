// import React from "react";

// const features = [
//   {
//     image: "/media/filling-machine.png",
//     title: "Modern Digital Diagnostic Tools",
//     description:
//       "We use the latest imaging and scanning technology to ensure accurate diagnosis and personalized treatment plans.",
//   },
//   {
//     image: "/media/dentist-tools.png",
//     title: "High-Quality Dental Materials",
//     description:
//       "Only the best materials are used to ensure durable, safe, and natural-looking results for every patient.",
//   },
//   {
//     image: "/media/dentistry.png",
//     title: "Advanced Treatment Modalities",
//     description:
//       "From routine care to complex procedures, we offer modern treatments designed for precision and comfort.",
//   },
//   {
//     image: "/media/patient.png",
//     title: "Comfortable Patient Lounges",
//     description:
//       "Relax in our cozy waiting area equipped with complimentary Wi-Fi, ensuring a stress-free dental experience.",
//   },
// ];

// const ClinicEquipment = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Heading */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-4">
//             Advanced Technology
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//             Our Clinics Equipped With
//           </h2>

//           <p className="mt-6 text-lg text-slate-600 leading-relaxed">
//             We use the latest imaging and scanning technology to ensure
//             accurate diagnosis, personalized treatment plans, and exceptional
//             patient care.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-[28px] p-8 lg:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
//             >
//               {/* Top Gradient Line */}
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-cyan-400"></div>

//               {/* Icon */}
//               <div className="w-20 h-20 rounded-3xl bg-sky-50 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-12 h-12 object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-tight">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-slate-600 leading-7 text-base">
//                 {item.description}
//               </p>

//               {/* Bottom Decoration */}
//               <div className="mt-8 w-12 h-1 rounded-full bg-sky-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClinicEquipment;



import React from "react";

const TEAL = "#0E5C56";
const TEAL_DEEP = "#093F3B";
const CORAL = "#FF6F59";
const MINT = "#7EE0D6";

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
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Ambient background glows, echo the hero's palette */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `${TEAL}0D` }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `${CORAL}0D` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-4"
            style={{ backgroundColor: `${TEAL}14`, color: TEAL }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: CORAL }}
            />
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
              key={item.title}
              className="group relative rounded-[28px] p-[1.5px] opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Animated gradient border, revealed on hover */}
              <div
                className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 0deg, ${TEAL}, ${MINT}, ${CORAL}, ${TEAL})`,
                  animation: "spin 4s linear infinite",
                }}
              />

              {/* Card body */}
              <div className="relative bg-white rounded-[27px] p-8 lg:p-10 h-full shadow-md group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                {/* Corner accent blob */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${MINT}33` }}
                />

                {/* Icon */}
                <div
                  className="relative w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(145deg, ${TEAL}12, ${MINT}26)`,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain relative z-10"
                  />
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 0 6px ${TEAL}0D` }}
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative text-slate-600 leading-7 text-base">
                  {item.description}
                </p>

                {/* Bottom Decoration */}
                <div
                  className="relative mt-8 h-1 rounded-full w-12 group-hover:w-20 transition-all duration-500"
                  style={{ backgroundColor: CORAL }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ClinicEquipment;