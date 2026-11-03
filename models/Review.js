const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    stars: {
      type: Number,
      min: 1,
      max: 5,
    },
    request: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
    },
  },
  { timestamps: true },
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
