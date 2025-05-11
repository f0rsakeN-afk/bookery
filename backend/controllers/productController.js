const Product = require("../models/product");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.addProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    message: "Product added successfully",
    data: product,
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find().sort("-createdAt");
  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});

exports.getProductById = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    next(new AppError(`The product with this id doesn't exist`, 404));

  res.status(200).json({
    status: "success",
    data: product,
  });
});
