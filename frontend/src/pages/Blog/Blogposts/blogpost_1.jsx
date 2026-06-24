import React from "react";
import {
  Sun,
  Moon,
  Sparkles,
  CheckCircle2,
  CandyOff,
  Droplets,
  Stethoscope,
  Clock,
} from "lucide-react";

const habits = [
  {
    time: "Morning & Night",
    title: "Brush Twice a Day",
    text:
      "Brushing in the morning and before bed removes the plaque and food particles that build up throughout the day. Use a soft-bristled toothbrush and fluoride toothpaste, and brush for a full two minutes — front, back, and chewing surfaces. Swap your toothbrush every 3–4 months, or sooner if the bristles fray.",
    icon: Sparkles,
    accent: "blue",
  },
  {
    time: "Before Bed",
    title: "Floss Regularly",
    text:
      "Brushing alone can't reach the tight spaces between teeth, where plaque and food debris often hide. Flossing once a day — ideally before bed — helps prevent cavities and gum disease in these hard-to-reach areas. Floss picks or a water flosser work just as well if traditional floss feels fiddly.",
    icon: CheckCircle2,
    accent: "blue",
  },
  {
    time: "Throughout the Day",
    title: "Limit Sugary Snacks & Drinks",
    text:
      "Sugar feeds the bacteria in your mouth that produce acid, which wears down enamel and leads to cavities. Try cutting back on sodas, candy, and frequent snacking between meals. When you do indulge, rinsing with water afterward softens the impact on your teeth.",
    icon: CandyOff,
    accent: "blue",
  },
  {
    time: "All Day, Every Day",
    title: "Stay Hydrated",
    text:
      "Drinking plenty of water washes away food particles and bacteria, and keeps saliva production steady — saliva is your mouth's natural defense against decay. Water is also a far better choice than sugary or acidic drinks for keeping enamel strong.",
    icon: Droplets,
    accent: "blue",
  },
  {
    time: "Every 6 Months",
    title: "Don't Skip Regular Checkups",
    text:
      "Even with great daily habits, professional cleanings and checkups catch problems — cavities, early gum disease — before they become painful or expensive to treat. Regular visits also give your dentist a chance to spot issues you'd never notice on your own.",
    icon: Stethoscope,
    accent: "gold",
    isLast: true,
  },
];

const BlogPost = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .habit-row {
          animation: fadeInUp 0.5s ease-out backwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .habit-row { animation: none; }
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-5 md:px-6 py-16 md:py-20 font-['Plus_Jakarta_Sans']">
        {/* ---- Hero ---- */}
        <header className="mb-16">
          {/* Day-cycle motif */}
          <div className="relative w-full h-16 mb-8">
            <svg
              viewBox="0 0 600 80"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 30 65 Q 300 -10 570 65"
                fill="none"
                stroke="#1a6faf"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="1 8"
                strokeLinecap="round"
              />
              {/* habit markers along the arc */}
              {[0.12, 0.3, 0.5, 0.7, 0.88].map((t, i) => {
                const x = 30 + t * 540;
                const y = 65 - Math.sin(t * Math.PI) * 58;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={i === 4 ? 5 : 4}
                    fill={i === 4 ? "#F2B84B" : "#1a6faf"}
                  />
                );
              })}
            </svg>
            <div className="absolute left-0 bottom-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#1a6faf]/10">
              <Sun size={18} className="text-[#1a6faf]" />
            </div>
            <div className="absolute right-0 bottom-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#0F2A3D]/5">
              <Moon size={16} className="text-[#0F2A3D]" />
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#1a6faf] mb-4">
            <span>Oral Care Guide</span>
            <span className="w-1 h-1 rounded-full bg-[#1a6faf]/40" />
            <span className="text-[#0F2A3D]/50 normal-case tracking-normal font-medium">
              June 20, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-[#1a6faf]/40" />
            <span className="flex items-center gap-1 text-[#0F2A3D]/50 normal-case tracking-normal font-medium">
              <Clock size={12} /> 3 min read
            </span>
          </div>

          <h1 className="font-['Fraunces'] text-4xl md:text-5xl font-semibold text-[#0F2A3D] leading-[1.1] mb-6">
            5 Daily Habits for Healthy Teeth
          </h1>

          <p className="font-['Fraunces'] italic text-xl text-[#0F2A3D]/70 leading-relaxed border-l-2 border-[#1a6faf]/30 pl-5">
            Maintaining healthy teeth starts with simple daily habits.
            Brushing twice a day, flossing regularly, and limiting sugary
            snacks can significantly improve your oral health — here's a
            closer look at five habits worth building into your routine.
          </p>
        </header>

        {/* ---- Timeline ---- */}
        <div className="mb-16">
          {habits.map((habit, i) => {
            const Icon = habit.icon;
            const isGold = habit.accent === "gold";
            return (
              <div
                key={habit.title}
                className="flex gap-5 md:gap-6 habit-row"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {/* Marker column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full font-['Fraunces'] font-semibold text-lg flex-shrink-0 ${
                      isGold
                        ? "bg-[#F2B84B] text-[#0F2A3D]"
                        : "bg-[#1a6faf] text-white"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {!habit.isLast && (
                    <div className="w-px flex-1 my-1 bg-gradient-to-b from-[#1a6faf]/40 to-[#1a6faf]/10" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ${habit.isLast ? "pb-0" : "pb-10"}`}>
                  <div
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase mb-2 ${
                      isGold ? "text-[#B8860B]" : "text-[#1a6faf]"
                    }`}
                  >
                    {habit.time}
                  </div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon
                      size={18}
                      className={isGold ? "text-[#B8860B]" : "text-[#1a6faf]"}
                    />
                    <h2 className="font-['Fraunces'] text-xl font-semibold text-[#0F2A3D]">
                      {habit.title}
                    </h2>
                  </div>
                  <p className="text-[#0F2A3D]/70 leading-relaxed">
                    {habit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---- Byline ---- */}
        <div className="text-sm text-[#0F2A3D]/40 mb-10 pb-10 border-b border-[#0F2A3D]/10">
          Written by the [Clinic Name] Dental Team
        </div>

        {/* ---- Closing CTA ---- */}
        <div className="bg-[#1a6faf] rounded-3xl p-8 md:p-10 text-center shadow-xl">
          <h2 className="font-['Fraunces'] text-2xl font-semibold text-white mb-2">
            Ready for your next checkup?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Good habits at home go a long way — but regular professional
            care is what keeps your smile truly healthy.
          </p>
          <a
            href="/appointment"
            className="inline-block bg-white text-[#1a6faf] font-semibold px-7 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
