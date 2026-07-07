import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * Dental Camp Gallery
 * -----------------------------------------------------------------------
 * Design notes:
 * - Palette: deep clinical teal (#0F4C4C) + soft sage backdrop (#EAF3EF)
 *   + warm coral accent (#FF7A59) for the one "alive" moment (hover / active state).
 * - Type: Fraunces (display, characterful) for numerals/headers,
 *   Manrope (body/caption) for everything else.
 * - Layout: CSS-columns masonry (photos keep natural aspect ratio, no
 *   awkward center-cropping) instead of a rigid uniform grid.
 * - Signature moment: full lightbox "viewer" with a filmstrip rail,
 *   keyboard navigation, and a soft aperture-style open transition.
 * -----------------------------------------------------------------------
 */

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
  "/gallery/1.jpg",
  "/gallery/3.jpg",
 "/gallery/5.jpg",
 "/gallery/7.jpg",
 "/gallery/6.jpg"


];

const pad = (n) => String(n).padStart(2, "0");

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Manrope:wght@400;500;700&display=swap');
    .dg-display { font-family: 'Fraunces', serif; }
    .dg-body { font-family: 'Manrope', sans-serif; }
    @keyframes dg-fade-up {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes dg-aperture {
      from { opacity: 0; transform: scale(0.92); }
      to { opacity: 1; transform: scale(1); }
    }
    .dg-reveal { animation: dg-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .dg-lightbox-enter { animation: dg-aperture 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
    @media (prefers-reduced-motion: reduce) {
      .dg-reveal, .dg-lightbox-enter { animation: none !important; }
    }
  `}</style>
);

const GalleryTile = ({ src, index, onOpen }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`dg-reveal mb-6 break-inside-avoid ${visible ? "" : "opacity-0"}`}
      style={{ animationDelay: visible ? `${(index % 6) * 70}ms` : "0ms" }}
    >
      <button
        onClick={() => onOpen(index)}
        className="group relative block w-full overflow-hidden rounded-2xl bg-white text-left shadow-[0_1px_2px_rgba(15,76,76,0.08)] transition-shadow duration-500 hover:shadow-[0_20px_40px_-12px_rgba(15,76,76,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C4C] focus-visible:ring-offset-2"
      >
        <img
          src={src}
          alt={`Dental Camp — frame ${pad(index + 1)}`}
          loading="lazy"
          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Gradient wash, bottom-anchored */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1F1D]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Frame index */}
        <div className="pointer-events-none absolute bottom-3 left-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="dg-display text-sm tracking-wide text-white/90">
            Frame {pad(index + 1)}
          </span>
        </div>

        {/* View affordance */}
        <div className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F4C4C" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </div>
  );
};

const Lightbox = ({ images, index, onClose, onNav }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1917]/95 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <div
        key={index}
        className="dg-lightbox-enter flex max-h-[74vh] max-w-5xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Dental Camp — frame ${pad(index + 1)}`}
          className="max-h-[74vh] max-w-full rounded-lg object-contain shadow-2xl"
        />
      </div>

      <div
        className="mt-5 flex items-center gap-4 dg-body text-sm text-white/70"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onNav(-1)}
          aria-label="Previous photo"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="dg-display text-white">
          {pad(index + 1)} <span className="text-white/40">/ {pad(images.length)}</span>
        </span>
        <button
          onClick={() => onNav(1)}
          aria-label="Next photo"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Filmstrip */}
      <div
        className="mt-6 flex max-w-full gap-2 overflow-x-auto px-2 pb-1"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => onNav(i - index)}
            className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all duration-300 ${
              i === index
                ? "border-[#FF7A59] opacity-100"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const GalleryGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpen = useCallback((i) => setActiveIndex(i), []);
  const handleClose = useCallback(() => setActiveIndex(null), []);
  const handleNav = useCallback(
    (delta) =>
      setActiveIndex((prev) =>
        prev === null ? prev : (prev + delta + galleryImages.length) % galleryImages.length
      ),
    []
  );

  return (
    <section className="bg-[#EAF3EF] px-5 py-16 sm:px-8 lg:px-12">
      <FontStyles />

      <div className="mx-auto mb-10 max-w-3xl text-center">
        <span className="dg-body text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7A59]">
          Field Notes
        </span>
        <h2 className="dg-display mt-3 text-4xl text-[#0F4C4C] sm:text-5xl">
          Moments from the Camp
        </h2>
        <p className="dg-body mt-4 text-[#3B5B56]">
          Sixteen frames from a day spent bringing dental care to the community —
          click any photo to step through the reel.
        </p>
      </div>

      <div className="mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-4">
        {galleryImages.map((image, index) => (
          <GalleryTile key={image + index} src={image} index={index} onOpen={handleOpen} />
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={handleClose}
          onNav={handleNav}
        />
      )}
    </section>
  );
};

export default GalleryGrid;