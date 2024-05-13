const express = require('express');
const router = express.Router();
const authController = require("../controller/user");
const doctor = require("../controller/doctor");
const time = require("../controller/time");

router.route("/food").post(authController.getFood);
router.route("/register").post(authController.register);
router.route("/doctor").get(doctor.getDoctors).post(doctor.setDoctor);
router.route("/time").get(time.getTime).post(time.setTime);

module.exports = router;