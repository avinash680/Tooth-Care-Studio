// import React, { useState, useEffect, useRef } from "react";

// const stats = [
//   {
//     number: 1200,
//     suffix: "+",
//     label: "Happy Client",
//   },
//   {
//     number: 12,
//     suffix: "+",
//     label: "Year Experience",
//   },
//   {
//     number: 15,
//     suffix: "+",
//     label: "Doctor & Staff",
//   },
//   {
//     number: 100,
//     suffix: "+",
//     label: "Online Appointment",
//   },
// ];

// const Counter = ({ end, suffix, startAnimation }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!startAnimation) {
//       setCount(0);
//       return;
//     }

//     let animationFrame;
//     let startTimestamp = null;
//     const duration = 1000;

//     const animate = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;

//       const progress = Math.min(
//         (timestamp - startTimestamp) / duration,
//         1
//       );

//       setCount(Math.floor(progress * end));

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [startAnimation, end]);

//   return (
//     <h3 className="text-4xl lg:text-5xl font-bold text-black">
//       {count.toLocaleString()}
//       {suffix}
//     </h3>
//   );
// };

// const DentalServices = () => {
//   const [startCount, setStartCount] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   const statsRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartCount(true);
//           setIsVisible(true);
//         } else {
//           setStartCount(false);
//           setIsVisible(false);
//         }
//       },
//       {
//         threshold: 0.3,
//       }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="w-full">
//       {/* Stats Section */}
//       <div ref={statsRef} className="bg-slate-100 py-14 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start group transition-all duration-1000 ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-12"
//                 }`}
//                 style={{
//                   transitionDelay: `${index * 150}ms`,
//                 }}
//               >
//                 {/* Icon */}
//                 <div
//                   className={`w-20 h-20 bg-[#3467F6] rounded-xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover:scale-110 ${
//                     isVisible
//                       ? "rotate-0 scale-100"
//                       : "rotate-45 scale-50"
//                   }`}
//                 >
//                   <img
//                     src="/gallery/tooth.png"
//                     alt="Tooth Icon"
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>

//                 {/* Counter */}
//                 <div className="text-center sm:text-left">
//                   <Counter
//                     end={item.number}
//                     suffix={item.suffix}
//                     startAnimation={startCount}
//                   />
//                   <p className="text-gray-600 text-base lg:text-lg font-medium">
//                     {item.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[320px]">
//         {/* Top Left Image */}
//         <div className="overflow-hidden">
//           <img
//             src="/gallery/topleft.jpg"
//             alt="Pediatric Dentistry"
//             className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//           />
//         </div>

//         {/* Pediatric Dentistry */}
//         <div className="bg-white flex items-center justify-center p-8 lg:p-10">
//           <div className="text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold text-black mb-5">
//               Pediatric Dentistry
//             </h2>
//             <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
//               Gentle, kid-friendly dental care to ensure your child's oral
//               health from an early age. We make every visit comfortable,
//               friendly, and stress-free.
//             </p>
//           </div>
//         </div>

//         {/* Large Right Image */}
//         <div className="lg:col-span-2 lg:row-span-2 overflow-hidden">
//           <img
//             src="/gallery/rightside.jpg"
//             alt="Dental Treatment"
//             className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//           />
//         </div>

//         {/* Emergency Dentistry */}
//         <div className="bg-white flex items-center justify-center p-8 lg:p-10">
//           <div className="text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold text-black mb-5">
//               Emergency Dentistry
//             </h2>
//             <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
//               Toothache, broken tooth, or dental injury? Our emergency dental
//               services provide quick relief and expert treatment when you need
//               it most.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Left Image */}
//         <div className="overflow-hidden">
//           <img
//             src="/gallery/dentist.webp"
//             alt="Dental Doctor"
//             className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DentalServices;

import React, { useState, useEffect, useRef } from "react";
import { Users, CalendarClock, Stethoscope, CalendarCheck2, ArrowUpRight } from "lucide-react";

const TEAL = "#0E5C56";
const TEAL_DEEP = "#093F3B";
const CORAL = "#FF6F59";
const MINT = "#7EE0D6";

const stats = [
  { number: 5000, suffix: "+", label: "Happy Clients", icon: Users },
  { number: 20, suffix: "+", label: "Years Experience", icon: CalendarClock },
  { number: 8, suffix: "+", label: "Doctors & Staff", icon: Stethoscope },
  { number: 100, suffix: "+", label: "Online Appointments", icon: CalendarCheck2 },
];

const services = [
  {
    type: "image",
    src: "/gallery/topleft.jpg",
    alt: "Pediatric Dentistry",
    label: "For little smiles",
  },
  {
    type: "text",
    eyebrow: "Little Smiles",
    title: "Pediatric Dentistry",
    description:
      "Gentle, kid-friendly dental care to ensure your child's oral health from an early age. We make every visit comfortable, friendly, and stress-free.",
  },
  {
    type: "image",
    src: "/gallery/rightside.jpg",
    alt: "Dental Treatment",
    label: "Precision, chairside",
    span: true,
  },
  {
    type: "text",
    eyebrow: "Urgent Care",
    title: "Emergency Dentistry",
    description:
      "Toothache, broken tooth, or dental injury? Our emergency dental services provide quick relief and expert treatment when you need it most.",
  },
  {
    type: "image",
    src: "gallery/image-6.jpg",
    alt: "Dental Doctor",
    label: "Meet the team",
  },
];

const Counter = ({ end, suffix, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }

    let animationFrame;
    let startTimestamp = null;
    const duration = 1200;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease-out cubic for a smoother finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [startAnimation, end]);

  return (
    <h3 className="text-4xl lg:text-5xl font-bold text-white tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
};

const DentalServices = () => {
  const [startCount, setStartCount] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          setIsVisible(true);
        } else {
          setStartCount(false);
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full">
      {/* Stats Section */}
      <div
        ref={statsRef}
        className="relative py-16 lg:py-20 overflow-hidden"
        style={{
          background: `linear-gradient(120deg, ${TEAL_DEEP} 0%, ${TEAL} 100%)`,
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute -top-20 -left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: `${MINT}1A` }}
        />
        <div
          className="absolute -bottom-24 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: `${CORAL}14` }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-6 lg:px-6 lg:py-8 flex flex-col items-center text-center lg:items-start lg:text-left gap-4 transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1.5 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 130}ms` }}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${
                      isVisible ? "rotate-0 scale-100" : "rotate-45 scale-50"
                    }`}
                    style={{
                      background: `linear-gradient(145deg, ${CORAL}, #E85A46)`,
                    }}
                  >
                    <Icon size={24} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Counter */}
                  <div>
                    <Counter end={item.number} suffix={item.suffix} startAnimation={startCount} />
                    <p className="mt-1 text-sm lg:text-base font-medium text-white/70">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[320px]">
        {services.map((item, index) => {
          if (item.type === "image") {
            return (
              <div
                key={item.alt}
                className={`group relative overflow-hidden ${
                  item.span ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient overlay, strengthens on hover */}
                <div
                  className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(0deg, ${TEAL_DEEP}CC 0%, transparent 55%)`,
                  }}
                />
                {/* Reveal label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-semibold text-lg">{item.label}</span>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: CORAL }}
                  >
                    <ArrowUpRight size={18} className="text-white" />
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.title}
              className="group relative bg-white flex items-center justify-center p-8 lg:p-10 overflow-hidden"
            >
              {/* Hover wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(160deg, ${TEAL}08, ${MINT}14)` }}
              />
              <div className="relative text-center max-w-sm">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: CORAL }}
                >
                  {item.eyebrow}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-5">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  {item.description}
                </p>
                <div
                  className="mx-auto mt-6 h-1 rounded-full w-12 group-hover:w-20 transition-all duration-500"
                  style={{ backgroundColor: TEAL }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DentalServices;