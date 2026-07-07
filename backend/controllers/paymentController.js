const Razorpay = require("razorpay");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Razorpay Order
exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // ₹300 -> 30000 paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Verify Payment
exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,

      fullName,
      phone,
      email,
      appointmentDate,
      clinic,
      message,
    } = req.body;

    // Verify Signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment Verification Failed",
      });
    }

    // Send Emails
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

        <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
      `,
    });

    // User Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Appointment Confirmed",
      html: `
        <h2>Appointment Confirmed</h2>

        <p>Hello <b>${fullName}</b>,</p>

        <p>Your payment has been received successfully.</p>

        <p>Your appointment request has been confirmed.</p>

        <hr/>

        <p><strong>Date:</strong> ${appointmentDate}</p>
        <p><strong>Clinic:</strong> ${clinic}</p>

        <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>

        <br/>

        <p>Thank you for choosing our clinic.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Payment Verified Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};