const express = require("express");
const router = express.Router();
const studentRoute = require("./cars");

router.use("/cars", studentRoute);

module.exports = router;
