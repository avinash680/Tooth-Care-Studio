import React from "react";
import { Link } from "react-router-dom";
import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";

const Gallery = () => {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-sky-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryHero />
        
        <GalleryGrid />

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/book_appointment"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1a6faf] text-white font-semibold rounded-full shadow-lg hover:bg-[#155c91] transition-all duration-300 hover:-translate-y-1"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;