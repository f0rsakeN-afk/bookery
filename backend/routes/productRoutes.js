const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    productController.uploadPhoto,
    productController.resizeProductPhoto,
    productController.addProduct
  )
  .get(authController.protect, productController.getAllProducts);

router
  .route("/search")
  .get(authController.protect, productController.searchProducts);

router
  .route("/:id")
  .get(authController.protect, productController.getProductById)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    productController.deleteProduct
  );

module.exports = router;
