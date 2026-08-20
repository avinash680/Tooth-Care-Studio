const express = require("express");
const router = express.Router();

const { bookAppointment } = require("../controllers/bookappointmentController");

router.post("/confirm", bookAppointment);

module.exports = router;
