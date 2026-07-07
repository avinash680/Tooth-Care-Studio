// import React from "react";

// const AboutHero = () => {
//   return (
//     <div className="text-center mb-14">
//       <h1 className="text-4xl md:text-5xl text-[#1a6faf] font-bold">
//         About Us
//       </h1>
//       <div className="w-24 h-1 bg-[#1a6faf] mx-auto mt-5 rounded-full"></div>
//     </div>
//   );
// };

// export default AboutHero;


import React from "react";

const TEAL = "#0E5C56";
const CORAL = "#FF6F59";
const MINT = "#7EE0D6";

const AboutHero = () => {
  return (
    <div className="relative text-center mb-16 pt-4">
      {/* Ambient glow behind the heading */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `${MINT}26` }}
      />

      <div className="relative opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-5"
          style={{ backgroundColor: `${TEAL}14`, color: TEAL }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CORAL }} />
          Get To Know Us
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          About Us
        </h1>

        <div className="flex justify-center mt-6">
          <div
            className="h-1.5 w-24 rounded-full animate-[growLine_1s_ease-out_forwards]"
            style={{
              background: `linear-gradient(90deg, ${TEAL}, ${CORAL})`,
              animationDelay: "0.3s",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growLine {
          from { width: 0; }
          to { width: 6rem; }
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

export default AboutHero;