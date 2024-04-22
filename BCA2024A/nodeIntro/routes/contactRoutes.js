const express = require("express");
const {
  addContact,
  fetchContact,
  fetchContactById,
  editContact,
  deleteContact,
} = require("../controllers/contactControllers");
const router = express.Router();

router.get("/", fetchContact);
router.get("/:id", fetchContactById);
router.post("/", addContact);
router.put("/:id", editContact);
router.delete("/:id", deleteContact);

module.exports = router;
