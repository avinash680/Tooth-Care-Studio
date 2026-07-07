// import React from "react";

// const ExpertiseSection = () => {
//   const expertiseItems = [
//     "Emergency Dental Care & Trauma Management",
//     "Oral & Maxillofacial Prosthodontics",
//     "Comprehensive Pain Management & Oral Ulcer Treatment",
//     "Root Canal Therapy (RCT)",
//     "Aligner Based Orthodontics",
//     "CBCT Based Diagnostic & Treatment Planning",
//     "Pediatric Dentistry & Preventive Care",
//   ];

//   return (
//     <div className="mt-24">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-900">
//           Areas of Expertise
//         </h2>
//         <p className="text-gray-600 mt-3">
//           Specialized treatments delivered with precision and care.
//         </p>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {expertiseItems.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
//           >
//             <h3 className="font-semibold text-gray-800">{item}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExpertiseSection;


import React from "react";
import {
  ShieldAlert,
  Layers,
  HeartPulse,
  Activity,
  Smile,
  ScanLine,
  Baby,
} from "lucide-react";

const TEAL = "#0E5C56";
const CORAL = "#FF6F59";
const MINT = "#7EE0D6";

const expertiseItems = [
  {
    icon: ShieldAlert,
    title: "Emergency Dental Care & Trauma Management",
  },
  {
    icon: Layers,
    title: "Oral & Maxillofacial Prosthodontics",
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Pain Management & Oral Ulcer Treatment",
  },
  {
    icon: Activity,
    title: "Root Canal Therapy (RCT)",
  },
  {
    icon: Smile,
    title: "Aligner Based Orthodontics",
  },
  {
    icon: ScanLine,
    title: "CBCT Based Diagnostic & Treatment Planning",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry & Preventive Care",
  },
];

const ExpertiseSection = () => {
  return (
    <div className="relative mt-28">
      <div className="text-center mb-14 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-4"
          style={{ backgroundColor: `${TEAL}14`, color: TEAL }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CORAL }} />
          What We Do
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Areas of Expertise
        </h2>
        <p className="text-gray-600 mt-3">
          Specialized treatments delivered with precision and care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative rounded-2xl p-[1.5px] opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Animated gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 0deg, ${TEAL}, ${MINT}, ${CORAL}, ${TEAL})`,
                  animation: "spin 4s linear infinite",
                }}
              />

              <div className="relative bg-white border border-gray-100 rounded-[15px] p-6 h-full flex items-start gap-4 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `linear-gradient(145deg, ${TEAL}12, ${MINT}26)` }}
                >
                  <Icon size={22} style={{ color: TEAL }} />
                </div>
                <h3 className="font-semibold text-gray-800 leading-snug pt-1.5">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
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
    </div>
  );
};

export default ExpertiseSection;
