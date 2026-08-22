import React, { useState, useMemo } from "react";
import {
  User,
  Phone,
  Mail,
  CalendarDays,
  Stethoscope,
  ArrowRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { API_BASE_URL } from "../../../config/api";

const TEAL = "#0E5C56";
const TEAL_DEEP = "#093F3B";
const CORAL = "#FF6F59";
const CREAM = "#FAF7F2";

const fields = [
  { key: "patientName", label: "Patient Name" },
  { key: "mobile", label: "Mobile Number" },
  { key: "email", label: "Email Address" },
  { key: "date", label: "Appointment Date" },
  { key: "problem", label: "Reason for Visit" },
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    mobile: "",
    email: "",
    date: "",
    problem: "",
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [submitError, setSubmitError] = useState("");

  const errors = useMemo(() => {
    const e = {};
    if (!formData.patientName.trim())
      e.patientName = "Enter the patient's full name.";
    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      e.mobile = "Enter a valid 10-digit number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Enter a valid email.";
    if (!formData.date) e.date = "Select a date.";
    else if (new Date(formData.date) < new Date(new Date().toDateString()))
      e.date = "Date cannot be in the past.";
    if (formData.problem.trim().length < 5)
      e.problem = "Describe the reason for your visit.";
    return e;
  }, [formData]);

  const completedCount = fields.filter(
    (f) => formData[f.key] && !errors[f.key],
  ).length;
  const progress = Math.round((completedCount / fields.length) * 100);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      patientName: true,
      mobile: true,
      email: true,
      date: true,
      problem: true,
    });

    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    setSubmitError("");
    setBookingId("");

    try {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.patientName,
          phone: formData.mobile,
          email: formData.email,
          appointmentDate: formData.date,
          clinic: "Main Clinic",
          message: formData.problem,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit appointment.");
      }

      setBookingId(result.bookingId || "Confirmed");
    } catch (error) {
      console.error("Appointment submission failed", error);
      setSubmitError(
        error instanceof TypeError
          ? "Unable to reach the appointment server. Please try again later."
          : error.message || "Unable to submit appointment.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (key) =>
    `w-full rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none transition-all duration-200 border ${
      touched[key] && errors[key]
        ? "border-red-300 focus:ring-2 focus:ring-red-200 bg-red-50/40"
        : "border-slate-200 focus:ring-2 bg-slate-50 focus:bg-white"
    }`;

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center p-3 md:p-6"
      style={{ backgroundColor: CREAM }}
    >
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full">
        {/* Header */}
        <div
          className="relative px-6 py-5 text-white overflow-hidden flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${TEAL} 0%, ${TEAL_DEEP} 100%)`,
          }}
        >
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5"></div>

          <div className="relative z-10 flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-2.5 py-0.5 mb-2 text-[11px] font-medium tracking-wide">
                <Stethoscope size={12} />
                Dental Consultation
              </div>
              <h1 className="text-xl md:text-2xl font-bold leading-snug">
                Book Your Appointment
              </h1>
            </div>
          </div>

          {/* Progress */}
          <div className="relative z-10 mt-3">
            <div className="h-1 rounded-full bg-white/15 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%`, backgroundColor: CORAL }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="px-6 py-5 space-y-3.5 overflow-y-auto"
        >
          {/* Patient Name */}
          <div>
            <label className="block font-semibold mb-1 text-slate-700 text-xs">
              Patient Name
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter full name"
                className={fieldClass("patientName")}
              />
            </div>
            {touched.patientName && errors.patientName && (
              <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                <AlertCircle size={11} /> {errors.patientName}
              </p>
            )}
          </div>

          {/* Mobile + Email */}
          <div className="grid sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block font-semibold mb-1 text-slate-700 text-xs">
                Mobile Number
              </label>
              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="9876543210"
                  maxLength={10}
                  className={fieldClass("mobile")}
                />
              </div>
              {touched.mobile && errors.mobile && (
                <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                  <AlertCircle size={11} /> {errors.mobile}
                </p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700 text-xs">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                  className={fieldClass("email")}
                />
              </div>
              {touched.email && errors.email && (
                <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                  <AlertCircle size={11} /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Date + Problem side by side on larger screens */}
          <div className="grid sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block font-semibold mb-1 text-slate-700 text-xs">
                Appointment Date
              </label>
              <div className="relative">
                <CalendarDays
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min={new Date().toISOString().split("T")[0]}
                  className={fieldClass("date")}
                />
              </div>
              {touched.date && errors.date && (
                <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                  <AlertCircle size={11} /> {errors.date}
                </p>
              )}
            </div>

            <div className="flex items-end">
              <div
                className="w-full rounded-lg px-3 py-2 border flex items-center gap-2"
                style={{
                  backgroundColor: `${TEAL}0D`,
                  borderColor: `${TEAL}33`,
                }}
              >
                <CheckCircle2
                  size={16}
                  style={{ color: TEAL }}
                  className="flex-shrink-0"
                />
                <p className="text-[11px] text-slate-500 leading-snug">
                  Your preferred date will be confirmed by the clinic.
                </p>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div>
            <label className="block font-semibold mb-1 text-slate-700 text-xs">
              Problem / Reason for Visit
            </label>
            <textarea
              rows="2"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Describe your dental problem..."
              className={`w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all duration-200 border resize-none ${
                touched.problem && errors.problem
                  ? "border-red-300 focus:ring-2 focus:ring-red-200 bg-red-50/40"
                  : "border-slate-200 focus:ring-2 bg-slate-50 focus:bg-white"
              }`}
            />
            {touched.problem && errors.problem && (
              <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                <AlertCircle size={11} /> {errors.problem}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full text-white py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-80 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundColor: submitting ? TEAL_DEEP : CORAL,
              boxShadow: `0 10px 20px -10px ${CORAL}80`,
            }}
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Confirming details...
              </>
            ) : (
              <>
                Submit Consultation
                <ArrowRight size={18} />
              </>
            )}
          </button>

          {bookingId && (
            <p className="text-center text-sm text-green-700">
              Appointment submitted successfully. Booking ID: {bookingId}
            </p>
          )}
          {submitError && (
            <p className="text-center text-sm text-red-600">{submitError}</p>
          )}

          <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <CheckCircle2 size={12} />
            Your information is kept private and secure.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
