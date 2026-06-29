import React from "react";

const DoctorSection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      {/* Doctor Image */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-[#1a6faf]/10 rounded-2xl scale-105"></div>

          <img
            src="public/gallery/1234.png"
            alt="Dr. Nisha (Dua) Arora"
            className="relative w-full h-[550px] object-cover rounded-2xl border-8 border-white shadow-2xl"
          />
        </div>
      </div>

      {/* Doctor Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Dr. Nisha (Dua) Arora
        </h2>

        <p className="text-lg text-[#1a6faf] font-semibold mb-6">
          MDS | 20+ Years of Clinical Excellence
        </p>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Dr. Nisha (Dua) Arora is a highly accomplished dental professional
            with more than 20 years of clinical experience in dentistry. An MDS
            by qualification, she leads a team of skilled and professionally
            trained doctors across two well-established clinics in Chandigarh
            and Panchkula.
          </p>

          <p>
            Renowned for her commitment to patient care, Dr. Nisha combines
            scientific precision with artistic excellence to deliver
            personalized, high-quality dental treatments. Her approach focuses
            on aesthetics, functionality, precision, and patient comfort.
          </p>

          <p>
            To remain at the forefront of modern dentistry, she regularly
            participates in advanced clinical training programs covering digital
            dentistry, minimally invasive procedures, evidence-based treatment
            planning, CBCT diagnostics, and Digital Smile Design.
          </p>

          <p>
            Dr. Nisha has actively contributed to the academic field by
            presenting papers and posters at prestigious national and
            international conferences. Her research has been published in
            reputed journals, and she has also contributed to dental literature
            and textbooks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;