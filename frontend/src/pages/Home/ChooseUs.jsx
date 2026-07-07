import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Cpu,
  ClipboardList,
  HeartHandshake,
  Clock,
  PhoneCall,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

const TEAL = "#0E5C56";
const TEAL_DEEP = "#093F3B";
const CORAL = "#FF6F59";
const MINT = "#7EE0D6";

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our expert dentists and specialists provide top-tier dental care.",
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Technology",
    description: "We use modern techniques for precise, pain-free treatments.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Care",
    description: "We create customized treatment plans for every patient.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Comfort First",
    description:
      "From a relaxing atmosphere to painless procedures, your well-being is our priority.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Ambient background accents */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ backgroundColor: `${TEAL}0A` }}
      />
      <div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ backgroundColor: `${CORAL}0D` }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-5"
              style={{ backgroundColor: `${TEAL}14`, color: TEAL }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CORAL }} />
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Helping Your <br />
              Dental Problems
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              We offer expert dental care with a team of experienced
              specialists, state-of-the-art technology, and a comfort-first
              approach to ensure pain-free treatments.
            </p>

            <div className="space-y-3">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-300 hover:bg-slate-50 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                    style={{ animationDelay: `${0.15 + index * 0.1}s` }}
                  >
                    <div
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                      style={{ background: `linear-gradient(145deg, ${TEAL}, ${TEAL_DEEP})` }}
                    >
                      <Icon size={22} className="text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Consultation Card */}
          <div
            className="flex justify-center lg:justify-end lg:ml-10 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="relative text-white p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
              style={{
                background: `linear-gradient(145deg, ${TEAL_DEEP} 0%, ${TEAL} 100%)`,
                boxShadow: `0 30px 60px -20px ${TEAL_DEEP}99`,
              }}
            >
              {/* Decorative glows inside the card */}
              <div
                className="absolute -top-14 -right-14 w-48 h-48 rounded-full blur-2xl pointer-events-none"
                style={{ backgroundColor: `${MINT}26` }}
              />
              <div
                className="absolute -bottom-16 -left-10 w-40 h-40 rounded-full blur-2xl pointer-events-none"
                style={{ backgroundColor: `${CORAL}1F` }}
              />

              {/* Floating badge */}
              <div
                className="absolute top-6 right-6 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 animate-[floatCard_5s_ease-in-out_infinite]"
              >
                <CalendarCheck size={14} style={{ color: MINT }} />
                <span className="text-xs font-medium text-white/90">Open today</span>
              </div>

              <h3 className="relative text-3xl font-bold leading-tight mb-4 max-w-[85%]">
                Don't Hesitate to Do Consultation
              </h3>

              <p className="relative text-white/75 leading-relaxed mb-8">
                Whether you need routine checkups, advanced treatments, or
                cosmetic enhancements, our dental experts are here to help you
                achieve a healthy and beautiful smile.
              </p>

              <div className="relative space-y-4">
                <div className="flex items-center gap-4 bg-white/10 border border-white/10 p-4 rounded-xl transition-colors duration-300 hover:bg-white/15">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${MINT}26` }}
                  >
                    <Clock size={18} style={{ color: MINT }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base leading-none mb-1">
                      Monday – Saturday
                    </h4>
                    <p className="text-white/70 text-sm">9:30 AM – 7:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 border border-white/10 p-4 rounded-xl transition-colors duration-300 hover:bg-white/15">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${MINT}26` }}
                  >
                    <Clock size={18} style={{ color: MINT }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base leading-none mb-1">Sunday</h4>
                    <p className="text-white/70 text-sm">By Appointment</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 text-center">
                  <p className="text-gray-500 text-sm mb-2 flex items-center justify-center gap-1.5">
                    <PhoneCall size={14} />
                    Call Us Today
                  </p>
                  <a
                    href="tel:+918054864276"
                    className="text-2xl font-bold transition-colors duration-300"
                    style={{ color: TEAL }}
                  >
                    +91 8837615101
                  </a>
                </div>
              </div>

              <Link
                to="/book_appointment"
                className="group relative flex items-center justify-center gap-2 w-full mt-8 text-center font-semibold py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                style={{ backgroundColor: CORAL, color: "white" }}
              >
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
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

export default WhyChooseUs;