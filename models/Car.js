const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    car: {
      type: String,
    },
    model: { type: String },
    year: { type: Number },
    plateNumber: { type: Number },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
