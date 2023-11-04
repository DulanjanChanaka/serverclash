const router = require("express").Router();
const TopPhoto = require("../models/top-photo");

// CREATE CATEGORY
router.post("/", async (req, res) => {
  const newPhoto = new TopPhoto(req.body);

  try {
    const savedPhoto = await newPhoto.save();
    res.status(201).json(savedPhoto);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", async (req, res) => {
  try {
    const data = await TopPhoto.find().sort({ description: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
