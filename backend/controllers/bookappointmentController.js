const nodemailer = require("nodemailer");

exports.bookAppointment = async (req, res) => {
  try {
    const { fullName, phone, email, appointmentDate, clinic, message } =
      req.body;

    if (!fullName || !phone || !email || !appointmentDate || !clinic) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const bookingId = `BOOKING-${Date.now()}`;

    await Promise.all([
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        replyTo: email,
        subject: "New Appointment Booking",
        html: `
          <h2>New Appointment</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${appointmentDate}</p>
          <p><strong>Clinic:</strong> ${clinic}</p>
          <p><strong>Problem:</strong> ${message || "Not provided"}</p>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
        `,
      }),
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Appointment Request Received",
        html: `
          <h2>Appointment Request Received</h2>
          <p>Hello <b>${fullName}</b>,</p>
          <p>We received your appointment request. The clinic will contact you to finalize the appointment.</p>
          <p><strong>Date:</strong> ${appointmentDate}</p>
          <p><strong>Clinic:</strong> ${clinic}</p>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
        `,
      }),
    ]);

    res.status(200).json({
      success: true,
      message: "Appointment confirmed and email sent successfully.",
      bookingId,
    });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
