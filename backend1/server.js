require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = process.env.PORT;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI).then(() => {
      console.log("DB Connection established");
    });
  } catch (error) {
    console.log(error.message);
  }
};
connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Hello World from POST request!");
});

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
