const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/register", authController.signup);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/me", authController.protect, authController.getMe);

router.post("/forgetpassword", authController.forgetPassword);
router.patch("/newpassword/:token", authController.resetPassword);

router.route("/:id").get(authController.protect, userController.getUserDetails);

router.get(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  userController.getAllUsers
);

router.patch(
  "/updatepassword",
  authController.protect,
  authController.updatePassword
);

module.exports = router;
