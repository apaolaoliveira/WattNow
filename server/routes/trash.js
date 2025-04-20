const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const EWaste = require("../models/Trash");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/submit-ewaste", upload.single("photo"), async (req, res) => {
  try {
    const { brand, type, year, number, condition, notes } = req.body;

    const newEntry = new EWaste({
      brand,
      type,
      year,
      number,
      condition,
      notes,
      photoPath: req.file.path,
    });

    await newEntry.save();
    res.status(201).json({ message: "e-Waste data saved successfully!" });
  } catch (err) {
    console.error("Error saving e-waste:", err);
    res.status(500).json({ error: "Failed to save e-waste data." });
  }
});

router.get("/ewaste-list", async (req, res) => {
  try {
    const items = await EWaste.find();
    res.json(items);
  } catch (err) {
    console.error("Error fetching e-waste:", err);
    res.status(500).json({ error: "Failed to fetch e-waste data." });
  }
});

module.exports = router;
