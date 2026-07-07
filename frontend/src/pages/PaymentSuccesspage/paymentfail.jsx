import React from "react";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center px-4">

      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8">

        {/* Failed Icon */}
        <div className="flex justify-center">
          <XCircle className="w-24 h-24 text-red-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mt-5">
          Payment Failed
        </h1>

        <p className="text-center text-gray-500 mt-2">
          We couldn't process your payment.
        </p>

        {/* Reason */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-5">

          <h3 className="text-lg font-semibold text-red-700">
            Possible Reasons
          </h3>

          <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
            <li>Payment was cancelled.</li>
            <li>Insufficient account balance.</li>
            <li>Network or bank server issue.</li>
            <li>UPI or card transaction failed.</li>
          </ul>

        </div>

        {/* Info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center text-blue-700">
          Your appointment has <strong>not been confirmed</strong>.
          Please complete the payment to confirm your booking.
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">

          <Link
            to="/booking-summary"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition"
          >
            Try Again
          </Link>

          <Link
            to="/"
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 text-center py-3 rounded-xl font-semibold transition"
          >
            Go Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default PaymentFailed;