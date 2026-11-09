const express = require("express");
const router = express.Router();
const Request = require("../models/Request.js");
const isSignedIn = require("../middleware/is-signed-in.js");
const Car = require("../models/Car.js");
const Review = require("../models/Review.js");

router.get("/", isSignedIn, async (req, res) => {
  const requests = await Request.find({
    owner: req.session.user._id,
  });

  res.render("requests/requests.ejs", { requests });
});

router.get("/new", isSignedIn, async (req, res) => {
  const myCars = await Car.find({ owner: req.session.user._id });
  res.render("requests/requests-new.ejs", { cars: myCars });
});

router.post("/", isSignedIn, async (req, res) => {
  console.log(req.body);
  const newRequest = await Request.create({
    description: req.body.description,
    location: req.body.location,
    status: req.body.status,
    problem: req.body.problem,
    phoneNumber: req.body.phoneNumber,
    car: req.body.car,
    owner: req.session.user._id,
  });

  res.redirect("/requests");
});

router.get("/:requestId", async (req, res) => {
  const reviews = await Review.find({ request: req.params.requestId }).populate(
    {
      path: "request",
      populate: {
        path: "owner",
      },
    },
  );
  const found = await Request.findById(req.params.requestId);
  res.render("requests/request-details.ejs", { request: found, reviews });
});

router.delete("/:requestId", isSignedIn, async (req, res) => {
  const request = await Request.findByIdAndDelete(req.params.requestId);

  if (!request) {
    return res.send("Request not found.");
  }

  res.redirect("/requests");
});
router.get("/:requestId/edit", async (req, res) => {
  const foundRequest = await Request.findById(req.params.requestId);
  const myCars = await Car.find({ owner: req.session.user._id });

  res.render("requests/request-edit.ejs", {
    request: foundRequest,
    cars: myCars,
  });
});
router.put("/:requestId", async (req, res) => {
  const updateCars = await Request.findByIdAndUpdate(
    req.params.requestId,
    req.body,
  );
  res.redirect("/requests");
});

module.exports = router;
