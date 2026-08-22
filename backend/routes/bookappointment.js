const express = require("express");
const router = express.Router();

const { bookAppointment } = require("../controllers/bookappointmentController");

router.post("/", bookAppointment);

module.exports = router;
