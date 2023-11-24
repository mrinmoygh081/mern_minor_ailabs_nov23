require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;

// Import Routing
const contactRoutes = require("./routers/contactRoutes");

// Settings
app.use(express.json());

// DB Configuration
try {
  mongoose.connect(process.env.DB_URI2).then(() => {
    console.log("DB Connection established");
  });
} catch (error) {
  console.log("Error connecting to DB: " + error.message);
}

app.use("/api/v1/contact", contactRoutes);

// Server configuration
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
