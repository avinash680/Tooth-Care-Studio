import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  CalendarDays,
  FileText,
  ShieldCheck,
  ArrowLeft,
  CreditCard,
  Stethoscope,
} from "lucide-react";

const TEAL = "#0E5C56";
const TEAL_DEEP = "#093F3B";
const CORAL = "#FF6F59";
const CREAM = "#FAF7F2";

const AppointmentSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const appointment = state || {
    patientName: "Avinash",
    mobile: "9876543210",
    email: "avinash@gmail.com",
    date: "2026-07-10",
    problem: "Tooth Pain",
  };

  const consultationFee = 300;
  const discount = 20;
  const discountAmount = (consultationFee * discount) / 100;
  const totalAmount = consultationFee - discountAmount;

  const payNow = async () => {
    try {
      navigate("/payment-success", {
        state: {
          fullName: appointment.patientName,
          phone: appointment.mobile,
          appointmentDate: appointment.date,
          clinic: "Main Clinic",
          paymentId: `BOOKING-${Date.now()}`,
        },
      });
    } catch (error) {
      console.error("Booking confirmation failed", error);
      navigate("/payment-failed");
    }
  };

  const details = [
    { icon: User, label: "Patient", value: appointment.patientName },
    { icon: Phone, label: "Mobile", value: appointment.mobile },
    { icon: Mail, label: "Email", value: appointment.email },
    { icon: CalendarDays, label: "Date", value: appointment.date },
  ];

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center p-3 md:p-6"
      style={{ backgroundColor: CREAM }}
    >
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full">
        {/* Header */}
        <div
          className="relative px-6 py-4 text-white overflow-hidden flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${TEAL} 0%, ${TEAL_DEEP} 100%)`,
          }}
        >
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5"></div>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-2.5 py-0.5 mb-1.5 text-[11px] font-medium tracking-wide">
                <Stethoscope size={12} />
                Booking Summary
              </div>
              <h1 className="text-xl md:text-2xl font-bold leading-snug">
                Review & Confirm
              </h1>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-[11px] text-white/70">Total Payable</p>
              <p className="text-xl font-bold" style={{ color: CORAL }}>
                ₹{totalAmount}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-4 overflow-y-auto space-y-4">
          {/* Doctor */}
          <div
            className="flex items-center gap-4 rounded-xl p-3.5 border"
            style={{ backgroundColor: `${TEAL}0D`, borderColor: `${TEAL}33` }}
          >
            <img
              src="gallery\about1.png"
              alt="Doctor"
              className="w-14 h-14 rounded-full object-cover border-2 flex-shrink-0"
              style={{ borderColor: TEAL }}
            />
            <div className="min-w-0">
              <h2 className="font-bold text-slate-800 text-sm truncate">
                Dr. Nisha (Dua) Arora
              </h2>
              <p className="text-slate-500 text-xs">Dental Surgeon</p>
              <p className="text-xs font-medium" style={{ color: TEAL }}>
                20+ Years Experience
              </p>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="grid sm:grid-cols-2 gap-3">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-2.5 rounded-lg p-3 border border-slate-100 bg-slate-50"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${TEAL}14` }}
                >
                  <Icon size={15} style={{ color: TEAL }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 mb-0.5">{label}</p>
                  <p className="font-semibold text-slate-800 text-xs truncate">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div className="flex items-start gap-2.5 rounded-lg p-3 border border-slate-100 bg-slate-50">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${TEAL}14` }}
            >
              <FileText size={15} style={{ color: TEAL }} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-400 mb-0.5">Problem</p>
              <p className="font-semibold text-slate-800 text-xs leading-snug">
                {appointment.problem}
              </p>
            </div>
          </div>

          {/* Payment */}
          <div
            className="rounded-xl p-4 border"
            style={{ backgroundColor: `${TEAL}0D`, borderColor: `${TEAL}33` }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <ShieldCheck size={16} style={{ color: TEAL }} />
              <h3 className="font-bold text-slate-800 text-sm">
                Payment Summary
              </h3>
            </div>

            <div className="flex justify-between text-xs text-slate-600 mb-1.5">
              <span>Consultation Fee</span>
              <span className="font-medium">₹{consultationFee}</span>
            </div>

            <div className="flex justify-between text-xs mb-2 pb-2 border-b border-dashed border-slate-300">
              <span style={{ color: TEAL }}>Discount ({discount}%)</span>
              <span className="font-medium" style={{ color: TEAL }}>
                -₹{discountAmount}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-800 text-sm">
                Total Payable
              </span>
              <span className="text-xl font-bold" style={{ color: TEAL }}>
                ₹{totalAmount}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 border-t border-slate-100 flex gap-3 flex-shrink-0">
          <Link
            to="/book_appointment"
            className="flex-1 flex items-center justify-center gap-2 border-2 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-slate-50"
            style={{ borderColor: "#E2E8F0", color: "#475569" }}
          >
            <ArrowLeft size={16} />
            Edit Details
          </Link>

          <button
            onClick={payNow}
            className="flex-1 text-white py-2.5 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundColor: CORAL,
              boxShadow: `0 10px 20px -10px ${CORAL}80`,
            }}
          >
            <CreditCard size={16} />
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSummary;
