const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");

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
  const { orderId } = req.params;
  /*   console.log(orderId)
  console.log(orderStatus) */

  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
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

exports.createOrder = catchAsync(async (req, res, next) => {
  const { products, shippingInfo, paymentMethod } = req.body;

  if (!products || !Array.isArray(products) || products.length === 0) {
    return next(new AppError("No products provided", 400));
  }

  if (paymentMethod !== "cash_on_delivery") {
    return next(new AppError("Only COD is supported right now", 400));
  }

  const productIds = products.map((item) => item.product);
  const dbProducts = await Product.find({ _id: { $in: productIds } });

  if (dbProducts.length !== productIds.length) {
    return next(new AppError("One or more products are invalid", 400));
  }

  let totalPrice = 0;

  for (const item of products) {
    const dbProduct = dbProducts.find((p) => p._id.toString() === item.product);

    if (!dbProduct) {
      return next(new AppError("Product not found", 404));
    }

    if (!item.quantity || item.quantity < 1) {
      return next(new AppError("Invalid quantity provided", 400));
    }

    if (dbProduct.quantity < item.quantity) {
      return next(
        new AppError(`Not enough stock for product: ${dbProduct.title}`, 400)
      );
    }

    const discountedPrice =
      (dbProduct.price * (100 - dbProduct.discountPercentage)) / 100;

    totalPrice += discountedPrice * item.quantity;
  }

  const order = await Order.create({
    user: req.user.id,
    products,
    shippingInfo,
    paymentMethod,
    paymentStatus: "pending",
    totalPrice: Math.round(totalPrice * 100) / 100,
  });

  await User.findByIdAndUpdate(req.user.id, { cart: [] });

  for (const item of products) {
    await Product.findByIdAndUpdate(item.product, {
      $inc: { quantity: -item.quantity },
    });
  }

  res.status(201).json({
    status: "success",
    message: "Order placed successfully",
    data: order,
  });
});

exports.getAnalytics = catchAsync(async (req, res, next) => {
  const now = new Date();
  const past60Days = new Date();
  past60Days.setDate(now.getDate() - 59);

  const rawSales = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $gte: past60Days,
          $lte: now,
        },
        paymentStatus: "paid",
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
        sales: { $sum: "$totalPrice" },
      },
    },
    {
      $project: {
        _id: 0,
        date: "$_id",
        sales: 1,
      },
    },
  ]);

  const dateMap = {};
  for (let i = 59; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    dateMap[dateStr] = 0;
  }

  rawSales.forEach((item) => {
    if (item.date in dateMap) {
      dateMap[item.date] = item.sales;
    }
  });

  const finalSales = Object.keys(dateMap).map((date) => ({
    date,
    sales: dateMap[date],
  }));

  res.status(200).json({
    status: "success",
    results: finalSales.length,
    data: finalSales,
  });
});
