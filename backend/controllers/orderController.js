const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Order = require("../models/orderModel");

exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .populate("products.product", "title price image")
    .sort("-createdAt");

  res.status(200).json({
    status: "success",
    results: orders.length,
    data: orders,
  });
});

exports.updateOrderStatus = catchAsync(async (req, res, next) => {
  const { orderStatus, paymentStatus } = req.body;
  const { productId } = req.params;

  const updatedOrder = await Order.findByIdAndUpdate(
    productId,
    { orderStatus, paymentStatus },
    { new: true, runValidators: true, useFindAndModify: false }
  );

  if (!updatedOrder) return next(new AppError("Order not found", 404));

  res.status(200).json({
    status: "success",
    message: "Updated successfully",
  });
});

exports.getMyOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.user.id })
    .populate("products.product", "title price image")
    .sort("-createdAt");

  res.status(200).json({
    status: "success",
    results: orders.length,
    data: orders,
  });
});
