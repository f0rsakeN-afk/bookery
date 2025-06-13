const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authController = require("../controllers/authController");

router.use(authController.protect, authController.restrictTo("user"));

router.route("/").get(cartController.getMyCart).post(cartController.addToCart);

router
  .route("/:productId")
  .patch(cartController.updateCartItem)
  .delete(cartController.removeFromCart);

module.exports = router;
