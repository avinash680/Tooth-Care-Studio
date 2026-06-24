const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors')
const bookappointmentRoute = require('./routes/bookappointment')

const app = express();
// const connectDB = require('./db/db');




// connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(bookappointmentRoute);
app.get("/", (req,res) => {
     res.send("hello world");
})

module.exports = app;