require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Importing all routes
const contactRoutes = require("./routes/contactRoutes");

// Middleware
app.use(express.json());

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Connected to MongoDB Database");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB Database");
    });
};
connectDB();

// Using all routes
app.use("/contact", contactRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
