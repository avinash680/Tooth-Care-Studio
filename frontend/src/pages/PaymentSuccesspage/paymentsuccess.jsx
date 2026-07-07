import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">

      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8">

        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircle className="w-24 h-24 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mt-5">
          Payment Successful
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Your appointment has been booked successfully.
        </p>

        {/* Appointment Details */}
        <div className="mt-8 border rounded-2xl p-6 bg-gray-50 space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-500">Patient</span>
            <span className="font-semibold">
              {state?.fullName || "N/A"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Phone</span>
            <span className="font-semibold">
              {state?.phone || "N/A"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Appointment Date</span>
            <span className="font-semibold">
              {state?.appointmentDate || "N/A"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Clinic</span>
            <span className="font-semibold">
              {state?.clinic || "Main Clinic"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Amount Paid</span>
            <span className="font-bold text-green-600">
              ₹300
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Payment ID</span>
            <span className="font-semibold text-sm">
              {state?.paymentId || "Generated Successfully"}
            </span>
          </div>

        </div>

        {/* Success Message */}
        <div className="mt-6 bg-green-100 text-green-700 rounded-xl p-4 text-center">
          ✅ A confirmation email has been sent to your registered email address.
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">

          <Link
            to="/"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.print()}
            className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold"
          >
            Print Receipt
          </button>

        </div>

      </div>

    </div>
  );
};

export default PaymentSuccess;