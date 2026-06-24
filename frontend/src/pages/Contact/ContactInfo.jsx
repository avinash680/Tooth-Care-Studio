import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
        <Phone className="mx-auto text-[#1a6faf]" size={40} />
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          Call Us
        </h3>
        <p className="mt-2 text-gray-600">
          +91  8054864276
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
        <Mail className="mx-auto text-[#1a6faf]" size={40} />
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          Email Us
        </h3>
        <p className="mt-2 text-gray-600">
      toothcarestudio@gmail.com
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
        <Clock className="mx-auto text-[#1a6faf]" size={40} />
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          Working Hours
        </h3>
        <p className="mt-2 text-gray-600">
          Mon - Sat: 9:30 AM - 7:00 PM
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
