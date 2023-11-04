const router = require("express").Router();
const AllPhoto = require("../models/all-photo");

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const data = await AllPhoto.find().sort({ description: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE CATEGORY
router.post("/", async (req, res) => {
  const newPhoto = new AllPhoto(req.body);

  try {
    const savedPhoto = await newPhoto.save();
    res.status(201).json(savedPhoto);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
