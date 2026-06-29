import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[91vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-90 scale-105"
        style={{
          backgroundImage: "url('gallery/background.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 pt-5 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full h-[85vh] flex items-center px-6 sm:px-10 lg:px-20">
        <div className="max-w-3xl ml-4 lg:ml-10">
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-lg mb-5">
            🦷 Multispecialty Dental Clinic & Pathology Lab
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            Experience Advanced
            <span className="text-cyan-300"> Dental Care </span>
            <br />
            Like Never Before
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg sm:text-xl font-semibold text-white">
            Only at Tooth Care Studio
          </p>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-100 leading-7">
            Discover a new level of dental excellence with gentle care,
            cutting-edge technology, and personalized treatment plans.
            We are committed to helping you achieve a healthier, brighter,
            and more confident smile with expert dentists, advanced
            technology, and compassionate care for your entire family.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/book_appointment"
              className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </Link>

            <Link
              to="/about"
              className="px-7 py-3 border-2 border-white hover:bg-white hover:text-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-cyan-300">
                20+
              </h3>
              <p className="mt-1 text-sm text-gray-100">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-cyan-300">
                2
              </h3>
              <p className="mt-1 text-sm text-gray-100">
                Clinic Locations
              </p>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-cyan-300">
                1000+
              </h3>
              <p className="mt-1 text-sm text-gray-100">
                Happy Smiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;