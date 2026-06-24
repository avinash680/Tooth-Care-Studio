import React from "react";

const GalleryHero = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16">
      <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-[#1a6faf] text-sm font-semibold">
        Gallery
      </span>

      <h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
        Bringing Smiles
        <span className="block text-[#1a6faf]">
          to Communities
        </span>
      </h2>

      <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Explore memorable moments from our dental camps where we provide
        free checkups, oral health awareness, and quality dental care to
        communities. Every smile reflects our commitment to healthier,
        happier lives.
      </p>
    </div>
  );
};

export default GalleryHero;
