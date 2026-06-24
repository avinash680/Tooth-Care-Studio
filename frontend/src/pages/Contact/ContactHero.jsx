import React from "react";

const ContactHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <span className="inline-block px-5 py-2 bg-blue-100 text-[#1a6faf] rounded-full font-semibold text-sm">
          Contact Us
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
          Let's Keep Your
          <span className="block text-[#1a6faf]">
            Smile Healthy
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          Visit us today and discover why thousands trust Tooth Care Studio —
          where you smile with shine. Our experienced dental team is ready to
          provide exceptional care for you and your family.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
