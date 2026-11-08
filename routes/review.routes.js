const express = require("express");
const router = express.Router();
const Review = require("../models/Review.js");
const isSignedIn = require("../middleware/is-signed-in.js");
//new
router.get("/new", (req, res) => {
  res.render("requests/review.ejs");
});
//display
router.get("/", async (req, res) => {
  const allReview = await Review.find();
  res.render("review.ejs", { review: allReview });
});

router.post("/", isSignedIn, async (req, res) => {
  console.log(req.body);
  const newReview = await Review.create({
    text: req.body.text,
    stars: req.body.stars,
  });

  res.redirect("/requests");
});

module.exports = router;
