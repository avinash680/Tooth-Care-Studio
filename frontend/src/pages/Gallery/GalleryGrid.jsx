import React from "react";

const galleryImages = [
  "/gallery/banner-1.png",
  "/gallery/image-1.jpg",
  "/gallery/image-2.jpg",
  "/gallery/image-3.jpg",
  "/gallery/image-4.jpg",
  "/gallery/image-5.jpg",
  "/gallery/image-6.jpg",
  "/gallery/image-7.jpg",
  "/gallery/image-8.jpg",
  "/gallery/image-9.jpg",
  "/gallery/img.jpeg",
  "/gallery/img2.jpeg",
  "/gallery/img3.jpeg",
  "/gallery/img4.jpeg",
  "/gallery/img5.jpeg",
  "/gallery/img6.jpeg",
];

const GalleryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <img
            src={image}
            alt={`Dental Camp ${index + 1}`}
            className="w-full h-[320px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
