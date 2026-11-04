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
