const contactModel = require("../model/contactModel");

exports.fetchContact = async (req, res) => {
  const contact = await contactModel.find();
  res.send(contact);
};

exports.fetchContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findById(id);
  res.send(contact);
};

exports.addContact = async (req, res) => {
  const contact = await contactModel.create(req.body);
  res.status(201).send(contact);
};

exports.editContact = async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findByIdAndUpdate(id, req.body);
  const updatedContact = await contactModel.findById(id);
  res.status(201).send(updatedContact);
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findByIdAndDelete(id);
  res.status(201).send("Contact has been deleted!");
};
