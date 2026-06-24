import React, { useState, useEffect, useRef } from "react";

const stats = [
  {
    number: 1200,
    suffix: "+",
    label: "Happy Client",
  },
  {
    number: 12,
    suffix: "+",
    label: "Year Experience",
  },
  {
    number: 15,
    suffix: "+",
    label: "Doctor & Staff",
  },
  {
    number: 100,
    suffix: "+",
    label: "Online Appointment",
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
    const duration = 1000;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min(
        (timestamp - startTimestamp) / duration,
        1
      );

      setCount(Math.floor(progress * end));

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
    <h3 className="text-4xl lg:text-5xl font-bold text-black">
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
      {
        threshold: 0.3,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full">
      {/* Stats Section */}
      <div ref={statsRef} className="bg-slate-100 py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start group transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 bg-[#3467F6] rounded-xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover:scale-110 ${
                    isVisible
                      ? "rotate-0 scale-100"
                      : "rotate-45 scale-50"
                  }`}
                >
                  <img
                    src="/gallery/tooth.png"
                    alt="Tooth Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Counter */}
                <div className="text-center sm:text-left">
                  <Counter
                    end={item.number}
                    suffix={item.suffix}
                    startAnimation={startCount}
                  />
                  <p className="text-gray-600 text-base lg:text-lg font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[320px]">
        {/* Top Left Image */}
        <div className="overflow-hidden">
          <img
            src="/gallery/topleft.jpg"
            alt="Pediatric Dentistry"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Pediatric Dentistry */}
        <div className="bg-white flex items-center justify-center p-8 lg:p-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-5">
              Pediatric Dentistry
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Gentle, kid-friendly dental care to ensure your child's oral
              health from an early age. We make every visit comfortable,
              friendly, and stress-free.
            </p>
          </div>
        </div>

        {/* Large Right Image */}
        <div className="lg:col-span-2 lg:row-span-2 overflow-hidden">
          <img
            src="/gallery/rightside.jpg"
            alt="Dental Treatment"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Emergency Dentistry */}
        <div className="bg-white flex items-center justify-center p-8 lg:p-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-5">
              Emergency Dentistry
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Toothache, broken tooth, or dental injury? Our emergency dental
              services provide quick relief and expert treatment when you need
              it most.
            </p>
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="overflow-hidden">
          <img
            src="/gallery/dentist.webp"
            alt="Dental Doctor"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default DentalServices;