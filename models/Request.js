const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    lcation: { type: String, required: true },
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
