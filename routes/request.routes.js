const express = require("express");
const router = express.Router();
const Request = require("../models/Request.js");
const isSignedIn = require("../middleware/is-signed-in.js");

router.get("/", isSignedIn, async (req, res) => {
  const requests = await Request.find({
    owner: req.session.user._id,
  });

  res.render("requests/index.ejs", { requests });
});

router.get("/new", isSignedIn, (req, res) => {
  res.render("requests/new.ejs");
});

router.post("/", isSignedIn, async (req, res) => {
  req.body.owner = req.session.user._id;

  await Request.create(req.body);

  res.redirect("/requests");
});

router.get("/:requestId", isSignedIn, async (req, res) => {
  const request = await Request.find({
    _id: req.params.requestId,
    owner: req.session.user._id,
  });

  if (!request) {
    return res.send("Request not found.");
  }

  res.render("requests/show.ejs", { request });
});

router.delete("/:requestId", isSignedIn, async (req, res) => {
  const request = await Request.findOneAndDelete({
    _id: req.params.requestId,
    owner: req.session.user._id,
  });

  if (!request) {
    return res.send("Request not found.");
  }

  res.redirect("/requests");
});

module.exports = router;
