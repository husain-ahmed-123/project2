const express = require("express");
const router = express.Router();
const Review = require("../models/Review.js");
const isSignedIn = require("../middleware/is-signed-in.js");
//new
router.get("/review/new", (req, res) => {
  res.render("requests/review.ejs");
});
//display
router.get("/", async (req, res) => {
  const allReview = await Review.find();
  res.render("requests/review.ejs", { review: allReview });
});

router.post("/:requestId", isSignedIn, async (req, res) => {
  const newReview = await Review.create({
    text: req.body.text,
    stars: req.body.stars,
    request: req.params.requestId,
  });

  res.redirect("/requests/" + req.params.requestId);
});

module.exports = router;
