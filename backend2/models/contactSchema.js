const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email address"],
  },
  phone: {
    type: String,
  },
});

const contactModel = new mongoose.Model("ContactInfo", contactSchema);

module.exports = contactModel;
