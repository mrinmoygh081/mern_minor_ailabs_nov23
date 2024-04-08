const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [255, "Maximum length of name field will be 255"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
  },
  phone: {
    type: String,
  },
});
const contactModel = new mongoose.model("Contact", contactSchema);
module.exports = contactModel;
