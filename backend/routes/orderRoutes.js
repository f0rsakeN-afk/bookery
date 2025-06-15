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

router.post(
  "/",
  authController.restrictTo("user"),
  orderController.createOrder
);

router.use(authController.restrictTo("admin"));

router.patch("/:orderId", orderController.updateOrderStatus);

router.get("/analytics", orderController.getAnalytics);

router.get("/", orderController.getAllOrders);

module.exports = router;
