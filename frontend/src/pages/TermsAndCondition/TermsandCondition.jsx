import React from "react";
import {
  FileText,
  CalendarClock,
  Stethoscope,
  IndianRupee,
  AlertTriangle,
  Globe,
  Copyright,
  Scale,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: CalendarClock,
    title: "1. Appointments & Cancellations",
    body: [],
    list: [
      "Appointments booked through our website or by phone are subject to confirmation by our clinic staff.",
      "We request at least 24 hours' notice for cancellations or rescheduling. Repeated no-shows may affect future booking priority.",
      "Arriving significantly late for an appointment may result in a shortened consultation or the need to reschedule, depending on clinic availability.",
      "Appointment dates are tentative until confirmed by our team via call, SMS, or email.",
    ],
  },
  {
    icon: Stethoscope,
    title: "2. Treatment & Consent",
    body: [
      "All dental treatment is provided based on professional clinical judgment after examination. By booking an appointment, you agree that:",
    ],
    list: [
      "Treatment plans and cost estimates may change after clinical examination or X-rays",
      "You will disclose accurate medical history, allergies, and ongoing medications to our dentists",
      "Separate written consent will be obtained before any surgical, cosmetic, or major dental procedure",
      "Results of treatment (e.g. orthodontic or cosmetic outcomes) can vary between patients and are not guaranteed in exact terms",
    ],
  },
  
  {
    icon: AlertTriangle,
    title: "4. Limitation of Liability",
    body: [
      "While our clinical team takes all reasonable care in diagnosis and treatment, dentistry — like all medical fields — involves inherent risks and individual variation in healing and response to treatment. We are not liable for outcomes arising from incomplete medical history disclosed by the patient, failure to follow post-treatment care instructions, or pre-existing conditions not disclosed at the time of consultation.",
    ],
  },
  {
    icon: Globe,
    title: "5. Website Use",
    body: [
      "Content on this website — including blog posts, service descriptions, and images — is provided for general informational purposes only and does not constitute medical advice. It is not a substitute for an in-person consultation with a qualified dentist. You agree not to misuse the website, attempt unauthorised access to our systems, or submit false information through our appointment forms.",
    ],
  },
  {
    icon: Copyright,
    title: "6. Intellectual Property",
    body: [
      "All content on this website, including our logo, clinic name, text, images, and design, is the property of [Clinic Name] and may not be copied, reproduced, or used without prior written permission.",
    ],
  },
  {
    icon: Scale,
    title: "7. Governing Law",
    body: [
      "These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of our website or services will be subject to the jurisdiction of the courts in Chandigarh, India.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a6faf]/10 mb-4">
            <FileText size={28} className="text-[#1a6faf]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">Effective Date: 24 June 2026</p>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Please read these terms carefully before booking an appointment
            or using the services of Tooth Care Studio, operating clinic in 
    Chandigarh, By using our website or booking an
            appointment, you agree to the terms below.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map(({ icon: Icon, title, body, list }) => (
            <div
              key={title}
              className="bg-white p-6 md:p-7 rounded-3xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1a6faf]/10 flex-shrink-0">
                  <Icon size={20} className="text-[#1a6faf]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
              </div>

              {body.map((para, i) => (
                <p key={i} className="text-gray-600 mb-2 leading-relaxed">
                  {para}
                </p>
              ))}

              {list && list.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact */}
          <div className="bg-[#1a6faf] p-6 md:p-7 rounded-3xl shadow-xl text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 flex-shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <h2 className="text-xl font-bold">8. Questions About These Terms</h2>
            </div>
            <p className="mb-3 text-white/90">
              If you have any questions about these Terms & Conditions,
              reach out to us at:
            </p>
            <ul className="space-y-1 text-white/90">
              <li>
                <span className="font-medium text-white">
                  Chandigarh Clinic:
                </span>{" "}
                169, Sector 46 A, Chandi · 8054864276· toothcarestudio@gmail.com
              </li>
              <li>
                <span className="font-medium text-white">
                  Panchkula Clinic:
                </span>{" "}
                Booth No. 14 Sector 26, Panchkula · 8054864276 · toothcarestudio@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
