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
router.post("/", async (req, res) => {
  const requestCreate = await Request.create({
    descriptionme: req.body.description,
    lcation: req.body.lcation,
    status: req.body.status,
    owner: req.session.user._id,
  });
  res.redirect("/");
});
router.post("/", isSignedIn, async (req, res) => {
  req.body.owner = req.session.user._id;

  await Request.create(req.body);

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
  const request = await Request.findOneAndDelete({
    descriptionme: req.body.description,
    lcation: req.body.lcation,
    status: req.body.status,
    owner: req.session.user._id,
  });

  if (!request) {
    return res.send("Request not found.");
  }

  res.redirect("/requests");
});

module.exports = router;
