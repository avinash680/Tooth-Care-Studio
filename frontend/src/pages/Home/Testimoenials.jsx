import React from "react";

const testimoenials = [
  {
    name: "Maneger",
    feedback:
      "A patient visited with heavy tartar and gum inflammation. After a gentle scaling and cleaning, the gums became healthier, and the teeth looked clean and fresh. The patient felt more confident and happy with their smile again.",
  },
  {
    name: "Manjeet",
    feedback:
      "I had severe tooth decay and discoloration that made me hide my smile for years. With expert care and advanced dental treatment, my damaged teeth were restored, and my confidence returned. Now, I can smile freely again — thank you for giving me a new reason to be proud of my smile!",
  },
  {
    name: "Surjeet",
    feedback:
      "I used to feel embarrassed about my stained and damaged teeth. Eating and smiling in public made me uncomfortable. After my dental treatment, my teeth look healthier, cleaner, and brighter. I can now smile with full confidence — a big thank you to the amazing dental team for bringing back my smile!",
  },
];

const Testimoenials = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-[#1a6faf] font-semibold uppercase tracking-wider mb-3">
            Our Testimonial
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Success Stories
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Discover how our expert dental care has transformed smiles and
            improved confidence for our valued patients.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimoenials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-full bg-[#1a6faf]/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#1a6faf]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h8v-7H6.08A3.001 3.001 0 0 1 9 8V6H7.17zm10 0A5.001 5.001 0 0 0 12 11v7h8v-7h-3.92A3.001 3.001 0 0 1 19 8V6h-1.83z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Honest Review
                <br />
                From Our Client
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {item.feedback}
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#1a6faf] flex items-center justify-center text-white font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Happy Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Testimoenials;