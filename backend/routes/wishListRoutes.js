const express = require("express");
const router = express.Router();
const wishListController = require("../controllers/wishListController");
const authController = require("../controllers/authController");

router.use(authController.protect, authController.restrictTo("user"));

router
  .route("/")
  .get(wishListController.getWishList)
  .post(wishListController.addToWishlist);

router.delete("/:productId", wishListController.removeFromWishlist);

module.exports = router;
