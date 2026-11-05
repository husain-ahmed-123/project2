const express = require("express");
const router = express.Router();
const Request = require("../models/Request.js");
const isSignedIn = require("../middleware/is-signed-in.js");

app.get("/", (req, res) => {
  res.render("homepage.ejs");
});
app.get("views/cars-details", (req, res) => {
  res.render("/cars-details");
});
app.get("views/create-cars", (req, res) => {
  res.render("/create-cars");
});
app.get("views/cars-list", (req, res) => {
  res.render("/cars-list");
});

//new
app.get("/Cars/new", (req, res) => {
  res.render("create-cars.ejs");
});
//display
app.get("/cars", async (req, res) => {
  const allCars = await Cars.find();
  res.render("cars-list.ejs", { cars: allCars });
});
//delete
app.delete("/cars/:carsId/delete", async (req, res) => {
  console.log("delete cars");
  await Cars.findByIdAndDelete(req.params.carsId);
  res.redirect("/cars");
});

app.get("/cars/:CarsId", async (req, res) => {
  const foundcars = await Cars.findById(req.params.CarsId);
  res.render("cars-details.ejs", { cars: foundcars });
});
app.post("/cars", async (req, res) => {
  const carsCreate = await Cars.create({
    name: req.body.name,
  });
  res.redirect("/");
});
app.get("/cars/:carsId/edit", async (req, res) => {
  const foundcars = await Cars.findById(req.params.carsId);
  res.render("edit-cars.ejs", { cars: foundcars });
});
app.put("/cars/:carsId", async (req, res) => {
  const updateCars = await Cars.findByIdAndUpdate(req.params.cardId, req.body);
  res.redirect("/cars");
});
