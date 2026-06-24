import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24 py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              Multispecialty Dental Clinic & Pathology Lab
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Experience Advanced
              <span className="text-blue-600"> Dental Care </span>
              Like Never Before
            </h1>

            <p className="text-xl text-gray-700 font-medium mt-5">
              Only at Tooth Care Studio
            </p>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Discover a new level of dental excellence with gentle care,
              advanced technology, and a personalized approach — all designed
              to keep your smile healthy, confident, and bright.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/book_appointment"
                className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300 shadow-lg inline-block"
              >
                Book Appointment
              </Link>

              <Link
                to="/about"
                className="px-7 py-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-xl font-semibold transition duration-300 inline-block"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                <p className="text-gray-600 mt-1">Years Experience</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">2</h3>
                <p className="text-gray-600 mt-1">Clinic Locations</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
                <p className="text-gray-600 mt-1">Happy Smiles</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden">
              <img
                src="/media/hero-image.webp"
                alt="Dr. Nisha Dua Arora"
                className="w-full h-[450px] md:h-[550px] xl:h-[700px] object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 md:p-8 lg:p-10">
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Dr. Nisha (Dua) Arora
                </h2>

                <p className="text-blue-200 font-medium mt-2">
                  MDS – Dental Specialist
                </p>

                <p className="text-gray-200 mt-4 text-sm md:text-base leading-relaxed max-w-xl">
                  An MDS-qualified dental specialist with more than 20 years of
                  clinical experience, dedicated to delivering advanced,
                  comfortable, and patient-focused dental care.
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
                <h4 className="font-bold text-blue-600 text-lg">
                  Advanced Care
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Modern dental technology for accurate diagnosis and treatment.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
                <h4 className="font-bold text-blue-600 text-lg">
                  Personalized Treatment
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Customized treatment plans designed around your unique needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
                <h4 className="font-bold text-blue-600 text-lg">
                  Trusted Expertise
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  More than two decades of experience and thousands of happy
                  patients.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;