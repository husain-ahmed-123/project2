const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({}, { timestamps: true });

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
