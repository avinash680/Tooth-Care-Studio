const express = require("express");
const router = express.Router();

const {
  createOrder,
  verifyPayment,
} = require("../controllers/paymentController");
const { bookAppointment } = require("../controllers/bookappointmentController");

router.post("/create-order", createOrder);
router.post("/verify", verifyPayment);
router.post("/confirm-booking", bookAppointment);

module.exports = router;
