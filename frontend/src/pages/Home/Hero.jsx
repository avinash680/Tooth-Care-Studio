

import React, { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Star,
  CalendarCheck,
  ArrowRight,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";

const TEAL = "#0E5C56";
const TEAL_DEEP = "#093F3B";
const CORAL = "#FF6F59";
const MINT = "#7EE0D6";

const stats = [
  { value: "20+", label: "Years Experience", icon: ShieldCheck },
  { value: "2", label: "Clinic Locations", icon: MapPin },
  { value: "1000+", label: "Happy Smiles", icon: Users },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse-driven parallax — the card and glows drift toward the cursor.
  const handleMouseMove = useCallback((e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 -> 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px, y: py });
  }, []);

  const handleMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] overflow-hidden bg-slate-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[heroZoom_16s_ease-out_forwards]"
        style={{ backgroundImage: "url('gallery/background.png')" }}
      />

      {/* Overlay — brand-tinted instead of flat black */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(110deg, ${TEAL_DEEP}E6 0%, ${TEAL}CC 42%, ${TEAL_DEEP}66 75%, transparent 100%)`,
        }}
      />

      {/* Fine grain texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative floating shapes — now with subtle cursor parallax */}
      <div
        className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/5 blur-sm animate-[float_9s_ease-in-out_infinite] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${tilt.x * -30}px, ${tilt.y * -30}px)` }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full blur-md pointer-events-none animate-[float_11s_ease-in-out_infinite_reverse] transition-transform duration-300 ease-out"
        style={{
          backgroundColor: `${CORAL}22`,
          transform: `translate(${tilt.x * 20}px, ${tilt.y * 20}px)`,
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-56 h-56 rounded-full blur-2xl pointer-events-none transition-transform duration-500 ease-out"
        style={{
          backgroundColor: `${MINT}1A`,
          transform: `translate(${tilt.x * 45}px, ${tilt.y * 45}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full min-h-[92vh] flex items-center px-6 sm:px-10 lg:px-20 py-28">
        <div className="w-full grid lg:grid-cols-[1.35fr_0.9fr] gap-14 items-center">
          {/* Left column */}
          <div className="max-w-2xl">
            {/* Badge */}
            <span
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg mb-6 overflow-hidden opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ backgroundColor: CORAL }}
            >
              <Sparkles size={15} className="relative z-10" />
              <span className="relative z-10">
                Multispecialty Dental Clinic &amp; Pathology Lab
              </span>
              {/* Shimmer sweep */}
              <span
                className="absolute inset-0 -translate-x-full animate-[shimmer_2.8s_ease-in-out_infinite]"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.45) 50%, transparent 80%)",
                }}
              />
            </span>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] font-extrabold leading-[1.1] text-white drop-shadow-lg opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.12s" }}
            >
              Experience Advanced
              <span className="relative inline-block ml-2" style={{ color: MINT }}>
                Dental Care
                <span
                  className="absolute left-0 -bottom-1 h-[4px] w-0 rounded-full animate-[growLine_1s_ease-out_forwards]"
                  style={{ backgroundColor: CORAL, animationDelay: "1s" }}
                />
              </span>
              <br />
              Like Never Before
            </h1>

            {/* Subtitle */}
            <p
              className="mt-5 text-lg sm:text-xl font-semibold text-white/90 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.24s" }}
            >
              Only at Tooth Care Studio
            </p>

            {/* Description */}
            <p
              className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200 leading-7 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.34s" }}
            >
              Discover a new level of dental excellence with gentle care,
              cutting-edge technology, and personalized treatment plans. We're
              committed to helping you achieve a healthier, brighter, and more
              confident smile with expert dentists and compassionate care for
              your entire family.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4 mt-9 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.46s" }}
            >
              <Link
                to="/book_appointment"
                className="group relative px-7 py-3.5 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden"
                style={{
                  backgroundColor: CORAL,
                  boxShadow: `0 14px 28px -10px ${CORAL}99`,
                }}
              >
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  style={{ backgroundColor: "#E85A46" }}
                />
              </Link>

              <Link
                to="/about"
                className="px-7 py-3.5 border-2 border-white/70 hover:bg-white text-white hover:text-slate-900 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-4 sm:gap-5 mt-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.58s" }}
            >
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${CORAL}33` }}
                  >
                    <Icon size={16} style={{ color: CORAL }} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white leading-none">
                      {value}
                    </h3>
                    <p className="mt-1 text-xs text-gray-200">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — signature element: a live-availability booking card */}
          <div
            className="relative hidden lg:flex justify-center opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]"
            style={{ animationDelay: "0.5s" }}
          >
            <div
              className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 transition-transform duration-300 ease-out animate-[floatCard_7s_ease-in-out_infinite]"
              style={{
                transform: `perspective(900px) rotateX(${tilt.y * -6}deg) rotateY(${tilt.x * 8}deg)`,
                boxShadow: `0 30px 60px -20px ${TEAL_DEEP}CC`,
              }}
            >
              {/* Live availability header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold uppercase tracking-wide">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: "#4ADE80" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2.5 w-2.5"
                      style={{ backgroundColor: "#4ADE80" }}
                    />
                  </span>
                  Slots open today
                </div>
                <CalendarCheck size={18} className="text-white/70" />
              </div>

              {/* Next slot */}
              <div className="mt-5 rounded-2xl bg-white/10 border border-white/10 p-4">
                <p className="text-[11px] uppercase tracking-wide text-white/60">
                  Next Available
                </p>
                <p className="mt-1 text-2xl font-bold text-white">4:30 PM</p>
                <p className="mt-0.5 text-sm text-white/70">Today · Dr. Mehta</p>
              </div>

              {/* Trust checklist */}
              <ul className="mt-5 space-y-2.5">
                {[
                  "Painless digital diagnostics",
                  "Same-day emergency slots",
                  "Kid-friendly, family care",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/85"
                  >
                    <CheckCircle2 size={16} style={{ color: MINT }} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/book_appointment"
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: CORAL, boxShadow: `0 14px 24px -10px ${CORAL}99` }}
              >
                Claim this slot
                <ArrowRight size={16} />
              </Link>

              {/* Rating badge, pinned to the card corner */}
              <div
                className="absolute -top-5 -right-5 flex items-center gap-1.5 rounded-2xl bg-white px-3.5 py-2 shadow-xl animate-[floatCard_5.5s_ease-in-out_infinite_reverse]"
              >
                <Star size={16} fill={CORAL} strokeWidth={0} />
                <span className="text-sm font-bold text-slate-800">4.9</span>
                <span className="text-[11px] text-slate-500">/ 500 reviews</span>
              </div>
            </div>

            {/* Glow behind the card */}
            <div
              className="absolute -z-10 w-72 h-72 rounded-full blur-3xl"
              style={{ backgroundColor: `${MINT}33` }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growLine {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-18px) translateX(12px); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          60%, 100% { transform: translateX(220%); }
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

export default Hero;