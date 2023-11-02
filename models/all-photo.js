const mongoose = require("mongoose");
/**
 * imageUrl
description
baseurl
 */
const AllPhotoSchema = new mongoose.Schema(
  {
    imageUrl: { type: String },
    description: { type: String },
    baseurl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllPhoto", AllPhotoSchema);
