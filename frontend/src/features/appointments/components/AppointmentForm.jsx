import React, { useState } from "react";
import { Calendar, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import { API_BASE_URL } from "../../../config/api";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    appointmentDate: "",
    clinic: "Chandigarh Clinic",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Please select appointment date";
    } else {
      const selectedDate = new Date(formData.appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.appointmentDate = "Appointment date cannot be in the past";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/bookappointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Show the confirmation screen instead of the form
        setBookingConfirmed(true);
      } else {
        alert(data.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  const handleBookAnother = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      appointmentDate: "",
      clinic: "Chandigarh Clinic",
      message: "",
    });
    setErrors({});
    setBookingConfirmed(false);
  };

  // ---- Success / confirmation screen ----
  if (bookingConfirmed) {
    return (
      <div className="bg-white p-6 md:p-7 rounded-3xl shadow-xl border border-gray-100 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 size={56} className="text-green-500" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your appointment is successfully completed
        </h2>

        <p className="text-gray-600 mb-6">
          Our team will contact you shortly to confirm the details.
        </p>

        <button
          type="button"
          onClick={handleBookAnother}
          className="w-full bg-[#1a6faf] hover:bg-[#155c91] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  // ---- Form screen ----
  return (
    <div className="bg-white p-6 md:p-7 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Appointment Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a6faf] focus:outline-none"
              />
            </div>

            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone Number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a6faf] focus:outline-none"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email & Date */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a6faf] focus:outline-none"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Preferred Date
            </label>

            <div className="relative">
              <Calendar
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a6faf] focus:outline-none"
              />
            </div>

            {errors.appointmentDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.appointmentDate}
              </p>
            )}
          </div>
        </div>

        {/* Clinic */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Select Clinic
          </label>

          <select
            name="clinic"
            value={formData.clinic}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a6faf] focus:outline-none"
          >
            <option value="Chandigarh Clinic">Chandigarh Clinic</option>
            <option value="Panchkula Clinic">Panchkula Clinic</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Message
          </label>

          <textarea
            rows="3"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your dental concern..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a6faf] focus:outline-none resize-none"
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1a6faf] hover:bg-[#155c91] text-white font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;