const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "PLease fill the name field."],
  },
  phone: {
    type: String,
    required: [true, "PLease fill the phone field."],
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
