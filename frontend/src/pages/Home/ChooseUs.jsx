import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Increased gap between content and card */}
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-[#1a6faf] font-semibold uppercase tracking-wider mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Helping Your <br />
              Dental Problems
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We offer expert dental care with a team of experienced
              specialists, state-of-the-art technology, and a comfort-first
              approach to ensure pain-free treatments.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a6faf]/10 text-[#1a6faf] font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Experienced Team
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our expert dentists and specialists provide top-tier dental
                    care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a6faf]/10 text-[#1a6faf] font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    State-of-the-Art Technology
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We use modern techniques for precise, pain-free treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a6faf]/10 text-[#1a6faf] font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Personalized Care
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We create customized treatment plans for every patient.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a6faf]/10 text-[#1a6faf] font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Patient Comfort First
                  </h3>
                  <p className="text-gray-600 mt-2">
                    From a relaxing atmosphere to painless procedures, your
                    well-being is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Consultation Card */}
          <div className="flex justify-center lg:justify-end lg:ml-10">
            <div className="bg-[#1a6faf] text-white p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
              
              <h3 className="text-3xl font-bold leading-tight mb-4">
                Don't Hesitate to Do Consultation
              </h3>

              <p className="text-blue-100 leading-relaxed mb-8">
                Whether you need routine checkups, advanced treatments, or
                cosmetic enhancements, our dental experts are here to help you
                achieve a healthy and beautiful smile.
              </p>

              <div className="space-y-5">
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-semibold text-lg mb-1">
                    Monday - Saturday
                  </h4>
                  <p className="text-blue-100">9:30AM - 7:30PM</p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="font-semibold text-lg mb-1">Sunday</h4>
                  <p className="text-blue-100">By Appointment</p>
                </div>

                <div className="bg-white rounded-xl p-5 text-center">
                  <p className="text-gray-500 text-sm mb-2">
                    Call Us Today
                  </p>
                  <a
                    href="tel:+918054864276"
                    className="text-[#1a6faf] text-2xl font-bold hover:text-blue-700 transition"
                  >
                    +91 8054864276
                  </a>
                </div>
              </div>

              <Link
                to="/book_appointment"
                className="block w-full mt-8 text-center bg-white text-[#1a6faf] font-semibold py-4 rounded-xl hover:bg-gray-100 transition duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;