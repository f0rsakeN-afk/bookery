const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

router.use(authController.protect);

router.get(
  "/myorders",
  authController.restrictTo("user"),
  orderController.getMyOrders
);

router.use(authController.restrictTo("admin"));

router.patch("/:productId", orderController.updateOrderStatus);

router.get("/", orderController.getAllOrders);

module.exports = router;
