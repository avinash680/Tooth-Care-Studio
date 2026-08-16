const nodemailer = require("nodemailer");

exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const numericAmount = Number(amount) || 0;

    res.status(200).json({
      success: true,
      order: {
        amount: numericAmount * 100,
        currency: "INR",
        id: `booking_${Date.now()}`,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { fullName, phone, email, appointmentDate, clinic, message } =
      req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const bookingId = `BOOKING-${Date.now()}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${appointmentDate}</p>
        <p><strong>Clinic:</strong> ${clinic}</p>
        <p><strong>Problem:</strong> ${message}</p>

        <hr/>

        <p><strong>Booking ID:</strong> ${bookingId}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Appointment Confirmed",
      html: `
        <h2>Appointment Confirmed</h2>

        <p>Hello <b>${fullName}</b>,</p>

        <p>Your appointment request has been confirmed.</p>

        <hr/>

        <p><strong>Date:</strong> ${appointmentDate}</p>
        <p><strong>Clinic:</strong> ${clinic}</p>
        <p><strong>Booking ID:</strong> ${bookingId}</p>

        <br/>

        <p>Thank you for choosing our clinic.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Booking Confirmed Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
