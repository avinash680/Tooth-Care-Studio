import React from "react";
import {
  ShieldCheck,
  Database,
  Share2,
  Lock,
  UserCheck,
  Cookie,
  RefreshCw,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    body: [
      "When you book an appointment, contact us, or use our website, we may collect:",
    ],
    list: [
      "Personal details — full name, phone number, email address",
      "Appointment details — preferred date, clinic location, and the reason for your visit (as shared in the message field)",
      "Medical and dental information you share with our doctors during consultation or treatment",
      "Technical data — browser type, device information, and pages visited, collected automatically when you use our website",
    ],
  },
  {
    icon: ShieldCheck,
    title: "2. How We Use Your Information",
    body: ["We use the information you provide to:"],
    list: [
      "Confirm, reschedule, or remind you about appointments",
      "Provide dental consultation, diagnosis, and treatment",
      "Respond to your queries and follow up on your care",
      "Maintain accurate patient and treatment records",
      "Improve our website, services, and patient experience",
    ],
  },
  {
    icon: Share2,
    title: "3. How We Share Your Information",
    body: [
      "We do not sell or rent your personal data. We only share information when necessary to provide care or when required by law, including with:",
    ],
    list: [
      "Dentists, hygienists, and clinical staff involved in your treatment",
      "Diagnostic labs or specialists we refer you to, with your knowledge",
      "Service providers who help us run appointment booking and reminders (e.g. SMS/email providers), bound by confidentiality obligations",
      "Government or regulatory authorities, where legally required",
    ],
  },
  {
    icon: Lock,
    title: "4. How We Protect Your Information",
    body: [
      "We take reasonable administrative, technical, and physical safeguards to protect your data against unauthorised access, alteration, disclosure, or loss — in line with applicable Indian data protection law, including the Digital Personal Data Protection Act, 2023 (DPDPA). Access to patient records is restricted to authorised clinical and administrative staff only.",
    ],
  },
  {
    icon: UserCheck,
    title: "5. Your Rights",
    body: ["As a patient, you have the right to:"],
    list: [
      "Access the personal and medical information we hold about you",
      "Request correction of inaccurate or outdated information",
      "Request deletion of your data, subject to our legal and medical record-keeping obligations",
      "Withdraw consent for non-essential communications (e.g. promotional messages) at any time",
      "Raise a grievance regarding how your data is handled",
    ],
  },
  {
    icon: Cookie,
    title: "6. Cookies & Website Usage",
    body: [
      "Our website may use cookies or similar technologies to remember your preferences and understand how visitors use our site. You can disable cookies through your browser settings, though some features of the site may not work as intended.",
    ],
  },
  {
    icon: RefreshCw,
    title: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised effective date.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a6faf]/10 mb-4">
            <ShieldCheck size={28} className="text-[#1a6faf]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Effective Date: 24 June 2026</p>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Tooth Care  Studio Our  operates clinics in Chandigarh
            and Panchkula. This policy explains how we collect, use, and    
            protect the personal information of patients and website
            visitors.
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

              {list && (
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
              <h2 className="text-xl font-bold">8. Contact Us</h2>
            </div>
            <p className="mb-3 text-white/90">
              If you have questions about this Privacy Policy or wish to
              exercise your rights over your data, contact us at:
            </p>
            <ul className="space-y-1 text-white/90">
              <li>
                <span className="font-medium text-white">
                  Chandigarh Clinic:
                </span>{" "}
                169, Sector 46 A, Chandigarh · 8054864276 · toothcarstudio@gmail.com
              </li>
              <li>
                <span className="font-medium text-white">
                  Panchkula Clinic:
                </span>{" "}
              Booth No. 14 Sector 26 Panchkula  · 8054864276 · toothcarestudio@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
