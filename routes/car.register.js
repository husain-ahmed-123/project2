const express = require("express");
const router = express.Router();
const Request = require("../models/Request.js");
const Cars = require("../models/Car.js");
const isSignedIn = require("../middleware/is-signed-in.js");

//new
router.get("/new", (req, res) => {
  res.render("create-cars.ejs");
});
//display
router.get("/", async (req, res) => {
  const allCars = await Cars.find();
  res.render("cars-list.ejs", { cars: allCars });
});
//delete
router.delete("/:carsId/delete", async (req, res) => {
  console.log("delete cars");
  await Cars.findByIdAndDelete(req.params.carsId);
  res.redirect("/cars");
});

router.get("/:CarsId", async (req, res) => {
  const foundcars = await Cars.findById(req.params.CarsId);
  res.render("cars-details.ejs", { cars: foundcars });
});
router.post("/", async (req, res) => {
  const carsCreate = await Cars.create({
    name: req.body.name,
    model: req.body.model,
    year: req.body.year,
    plateNumber: req.body.plateNumber,
    owner: req.session.user._id,
  });
  res.redirect("/");
});
router.get("/:carsId/edit", async (req, res) => {
  const foundcars = await Cars.findById(req.params.carsId);
  res.render("edit-cars.ejs", { cars: foundcars });
});
router.put("/:carsId/update", async (req, res) => {
  const updateCars = await Cars.findByIdAndUpdate(req.params.cardId);
  res.redirect("/cars");
});

module.exports = router;
