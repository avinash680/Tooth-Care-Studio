import React, { useState, useEffect, useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";

const MapContainer = ({ title, src, address }) => {
  const [loadMap, setLoadMap] = useState(false);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoadMap(true);
            observer.disconnect();
          }
        },
        { rootMargin: "300px" }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        observer.disconnect();
      };
    } else {
      const timer = setTimeout(() => {
        setLoadMap(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-80 bg-slate-50 border-t border-gray-100 overflow-hidden">
      {loadMap && (
        <iframe
          title={title}
          src={src}
          className={`w-full h-80 border-0 transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}

      {(!loadMap || loading) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-500 z-10 animate-pulse">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 border border-blue-100/50">
              <MapPin className="w-5 h-5 text-[#1a6faf]" />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
              <div className="w-4 h-4 border-2 border-[#1a6faf] border-t-transparent rounded-full animate-spin"></div>
              <span>Loading Location Map...</span>
            </div>
          </div>
        </div>
      )}

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-700 hover:text-[#1a6faf] rounded-lg shadow-md border border-gray-100 transition-colors duration-200"
      >
        <span>Open in Google Maps</span>
        <ExternalLink size={12} />
      </a>
    </div>
  );
};

const ContactLocations = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Locations
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Visit our conveniently located clinics in Chandigarh and Panchkula.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Chandigarh */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between">
          <div className="p-8">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#1a6faf]" />
              <h3 className="text-2xl font-bold text-gray-900">
                Chandigarh Clinic
              </h3>
            </div>

            <p className="mt-4 text-gray-600">
              House No. 169, Sector 46-A, Chandigarh
            </p>
          </div>

          <MapContainer
            title="Chandigarh Clinic"
            src="https://maps.google.com/maps?q=House%20No.%20169%20Sector%2046A%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
            address="House No. 169, Sector 46-A, Chandigarh"
          />
        </div>

        {/* Panchkula */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between">
          <div className="p-8">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#1a6faf]" />
              <h3 className="text-2xl font-bold text-gray-900">
                Panchkula Clinic
              </h3>
            </div>

            <p className="mt-4 text-gray-600">
              Booth No. 14, Sector 26, Panchkula, Haryana
            </p>
          </div>

          <MapContainer
            title="Panchkula Clinic"
            src="https://maps.google.com/maps?q=Sector%2026%20Panchkula%20Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed"
            address="Booth No. 14, Sector 26, Panchkula, Haryana"
          />
        </div>
      </div>
    </>
  );
};

export default ContactLocations;
