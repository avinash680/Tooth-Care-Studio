const express = require("express");
const router = express.Router();

const bookAppointmentController = require("../controllers/bookappointmentController");
router.post(
  "/bookappointment",
  bookAppointmentController.bookappointment
);

module.exports = router;