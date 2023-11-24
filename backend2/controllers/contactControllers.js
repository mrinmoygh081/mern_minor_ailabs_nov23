exports.getContacts = (req, res) => {
  res.send("Welcome! This is my first API from GET method.");
};

exports.addContact = (req, res) => {
  const { name, email, phone } = req.body;
  res.send(`${name}, ${email}, ${phone}`);
};
