const mongoose = require("mongoose");

const trashSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: Number, required: true },
  number: { type: String, required: true },
  condition: { type: String, enum: ["Good", "Average", "Bad"], required: true },
  notes: { type: String, required: true },
  photoPath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Trash", trashSchema);
