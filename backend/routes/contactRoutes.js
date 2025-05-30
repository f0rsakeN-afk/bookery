const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("user"),
    contactController.sendMessage
  )
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    contactController.getAllMessages
  );

router.delete(
  "/:id",
  authController.protect,
  authController.restrictTo("admin"),
  contactController.deleteContactMessages
);

module.exports = router;
