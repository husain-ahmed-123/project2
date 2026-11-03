const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({}, { timestamps: true });

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
