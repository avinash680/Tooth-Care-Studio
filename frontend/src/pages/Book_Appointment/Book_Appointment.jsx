import React from "react";
import AppointmentForm from "../../features/appointments/components/AppointmentForm";

const Book_Appointment = () => {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-sky-50 ">
    <section
  className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('/images/book-appointment-banner.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0d3f70]/80 to-[#8db8d8]/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white">
    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      Book Appointment
    </h1>

    <div className="flex items-center justify-center gap-2 text-xl">
      <span>Home</span>
      <span>/</span>
      <span>Book Appointment</span>
    </div>
  </div>
</section>
    
    
    
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Banner Image Card */}
          <div className="relative">
            <img
              src="/gallery/Contact-page-Book-an-Appointment_Mobile-banner_578X364-px-02.jpg"
              alt="Book Appointment"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Appointment Form Component */}
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
};

export default Book_Appointment;