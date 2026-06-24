import React from "react";

const transformations = [
  {
    before: "gallery/before.jpg",
    after: "/gallery/surjeetafter.jpg",
  },

];

const BeforeAfter = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#1a6faf] font-semibold uppercase tracking-wider mb-3">
            Before & After
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smile Transformations
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Real patient results showcasing the difference professional dental
            care can make.
          </p>
        </div>

        {/* Gallery */}
        <div className="space-y-10">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Before Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-[300px] sm:h-[400px] md:h-[450px] bg-slate-100">
                  <img
                    src={item.before}
                    alt="Before"
                    className="w-full h-full object-contain"
                  />

                  <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    No.1
                  </span>
                </div>
              </div>

              {/* After Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-[300px] sm:h-[400px] md:h-[450px] bg-slate-100">
                  <img
                    src={item.after}
                    alt="After"
                    className="w-full h-full object-contain"
                  />

                  <span className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    No.2
                  </span>
               
               
               
               
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;