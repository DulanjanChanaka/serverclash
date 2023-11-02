const mongoose = require("mongoose");

const TopPhotoSchema = new mongoose.Schema(
  {
    imageUrl: { type: String },
    description: { type: String },
    baseurl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TopPhoto", TopPhotoSchema);
