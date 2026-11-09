const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String },
    problem: { type: String },
    phoneNumber: { type: Number },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  },

  { timestamps: true },
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
