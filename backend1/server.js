require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = process.env.PORT;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.log(error.message);
  }
};
connectDb();

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
