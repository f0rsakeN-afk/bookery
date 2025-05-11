const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .post(productController.addProduct)
  .get(productController.getAllProducts);

router.route("/:id").get(productController.getProductById);

module.exports = router;
