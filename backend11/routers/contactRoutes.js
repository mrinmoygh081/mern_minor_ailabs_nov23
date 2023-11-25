const express = require("express");
const {
  addContact,
  getContacts,
  editContact,
  deleteContact,
} = require("../controllers/contactControllers");
const router = express.Router();

router.get("/", getContacts);
router.post("/", addContact);
router.put("/:id", editContact);
router.delete("/:id", deleteContact);

module.exports = router;
