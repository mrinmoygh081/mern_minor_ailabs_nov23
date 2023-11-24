const express = require("express");
const {
  getContacts,
  addContact,
} = require("../controllers/contactControllers");
const router = express.Router();

router.get("/", getContacts);
router.post("/add", addContact);

module.exports = router;
