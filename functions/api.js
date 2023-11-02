const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const topPhoto = require("../routes/top-photo");
const AllPhoto = require("../routes/all-photo");
const cors = require("cors");

const serverless = require("serverless-http");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/top-photo", topPhoto);
app.use("/api/all-photo", AllPhoto);

app.get("/", (req, res) => res.status(200).json({ msg: "hi" }));

mongoose
  .connect(
    "mongodb+srv://dulanjanchanaka:Fo7zzDbN2JPbJnHy@cluster0.j4qvhsc.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    // console.log("DB Connection Successfull!");
    // app.listen(process.env.PORT || 5000, () => {
    //   console.log("Backend server is running!");
    // });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports.handler = serverless(app);
