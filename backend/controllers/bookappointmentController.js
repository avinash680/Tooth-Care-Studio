exports.bookAppointment = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      appointmentDate,
      clinic,
      message,
    } = req.body;

    // Basic validation
    if (
      !fullName ||
      !phone ||
      !email ||
      !appointmentDate ||
      !clinic
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Return appointment data to frontend
    // (Do NOT save to DB or send emails yet)

    res.status(200).json({
      success: true,
      message: "Appointment details received.",
      appointment: {
        fullName,
        phone,
        email,
        appointmentDate,
        clinic,
        message,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};