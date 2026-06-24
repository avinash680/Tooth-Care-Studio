import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a6faf] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Tooth Care Studio
            </h2>

            <p className="text-blue-100 leading-7 mb-6">
              Delivering exceptional dental care through advanced technology,
              experienced specialists, and a patient-first approach. Your smile
              is our priority.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/Tooth-Care-Studio/61558802919175/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#1a6faf] transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/tooth_care_studio/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#1a6faf] transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

           
          
              <a
                href="https://wa.me/918837615101"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center text-lg"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
        {/* Quick Links */}
<div>
  <h3 className="text-xl font-semibold mb-5">
    Quick Links
  </h3>

  <ul className="space-y-3 text-blue-100">
    <li>
      <Link to="/" className="hover:text-white transition-colors">
        Home
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-white transition-colors">
        About Us
      </Link>
    </li>

    <li>
      <Link to="/services" className="hover:text-white transition-colors">
        Services
      </Link>
    </li>

  
    <li>
      <Link to="/contact" className="hover:text-white transition-colors">
        Contact
      </Link>
    </li>
  </ul>
</div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-blue-100">
              <li>Dental Implants</li>
              <li>Root Canal Treatment</li>
              <li>Teeth Whitening</li>
              <li>Orthodontics</li>
              <li>Cosmetic Dentistry</li>
              <li>Smile Makeover</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-5 text-blue-100">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-white shrink-0" />
                <p>
                  Booth No. 14 Sector 26,
                  <br />
                Panchkula, Haryana
                </p>
              </div>
           <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-white shrink-0" />
                <p> 
                  169, Sector-46A,
                  <br />
                  Chandigarh
                </p>
              </div>
           









              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white shrink-0" />
                <p>+91 8054864276</p>
              </div>

              <a
                href="https://wa.me/918837615101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <FaWhatsapp className="text-white shrink-0 text-lg" />
                <p>+91 8837615101</p>
              </a>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white shrink-0" />
                <p> toothcarestudio@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-blue-100 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tooth Care Studio. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacypolicy"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/termsandcondition"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;