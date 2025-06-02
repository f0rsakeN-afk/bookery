const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const reviewController = require("../controllers/reviewController");

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    reviewController.getAllReviews
  )
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.createReview
  );

router
  .route("/:id")
  .patch(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.updateReview
  )
  .delete(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.deleteReview
  );

module.exports = router;
