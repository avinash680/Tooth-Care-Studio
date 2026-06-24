const nodemailer = require("nodemailer");

module.exports.bookappointment = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      appointmentDate,
      clinic,
      message,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment Request</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${appointmentDate}</p>
        <p><strong>Clinic:</strong> ${clinic}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // User Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Appointment Confirmed",
      html: `
        <h2>Appointment Confirmed</h2>

        <p>Hello ${fullName},</p>

        <p>Your appointment request has been confirmed.</p>

        <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
        <p><strong>Clinic:</strong> ${clinic}</p>

        <br/>

        <p>Thank you.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Appointment booked successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};