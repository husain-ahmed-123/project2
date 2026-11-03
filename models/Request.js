const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    description: { type: String },
    lcation: { type: String },
    status: { type: String },
  },
  { timestamps: true },
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
