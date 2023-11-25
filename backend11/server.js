const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;

// Import routes
const contactRoutes = require("./routers/contactRoutes");

// Settings
app.use(express.json());

app.use("/api/v1/contact", contactRoutes);

// DB Configuration
try {
  mongoose
    .connect("mongodb+srv://riju:riju21@cluster1.doybfcn.mongodb.net/contact")
    .then(() => {
      console.log("DB Connection established");
    });
} catch (error) {
  console.log("Error in DB connection", error.message);
}

app.listen(PORT, () => {
  console.log("listening on PORT: " + PORT);
});
