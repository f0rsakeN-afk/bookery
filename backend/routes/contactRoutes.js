const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router
  .route("/")
  .post(contactController.sendMessage)
  .get(contactController.getAllMessages);

module.exports = router;
