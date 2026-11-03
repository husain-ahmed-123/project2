const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    description: { type: String },
    lcation: { type: String },
    status: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true },
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
