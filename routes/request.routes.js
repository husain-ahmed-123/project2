const express = require("express");
const router = express.Router();
const Request = require("../models/Request.js");
const isSignedIn = require("../middleware/is-signed-in.js");
const Car = require("../models/Car.js");

// /requests: specifiy the issue we have. page for creating new request
// /

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
    car: req.body.car,
    owner: req.session.user._id,
  });

  res.redirect("/requests");
});

router.get("/:requestId", isSignedIn, async (req, res) => {
  const request = await Request.find({
    descriptionme: req.body.description,
    lcation: req.body.lcation,
    status: req.body.status,
    owner: req.session.user._id,
  });

  if (!request) {
    return res.send("Request not found.");
  }

  res.render("requests/requests.ejs", { request });
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
