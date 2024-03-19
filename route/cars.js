const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

/* add routes */
router.get("/", carsController.getCars);

router.get("/:id", carsController.getCar);

router.post("/", carsController.postCar);

router.put("/:id", carsController.putCar);

router.delete("/:id", carsController.delCar);

module.exports = router;
