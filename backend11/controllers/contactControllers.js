const contactModel = require("../models/contactModel");

exports.getContacts = async (req, res) => {
  const contacts = await contactModel.find();

  res.status(200).json({
    status: 1,
    data: contacts,
    message: "Contact list successfully fetched!",
  });
};

exports.addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  console.log(name, email, phone);
  if (!name || !email) {
    return res.status(200).json({
      status: 0,
      data: null,
      message: "Name and email is required",
    });
  }
  const newContact = await contactModel.create(req.body);
  res.status(201).json({
    status: 1,
    data: newContact,
    message: "Contact created successfully",
  });
};

exports.editContact = async (req, res) => {
  const { id } = req.params;
  const updateContact = await contactModel.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    status: 1,
    data: req.body,
    message: "Contact updated successfully",
  });
};
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  await contactModel.findByIdAndDelete(id);
  res.status(200).json({
    status: 1,
    data: null,
    message: "Contact deleted successfully",
  });
};
