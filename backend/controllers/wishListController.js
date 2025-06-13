const Product = require("../models/productModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getWishList = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("wishlist");
  /*   console.log(user.id); */
  res.status(200).json({
    status: "success",
    results: user.wishlist.length,
    data: user.wishlist,
  });
});

exports.addToWishlist = catchAsync(async (req, res, next) => {
  const { productId } = req.body;
  const user = await User.findById(req.user.id);

  if (user.wishlist.includes(productId)) {
    return next(new AppError("Product already in wishlist", 400));
  }

  user.wishlist.push(productId);
  await user.save();

  res.status(200).json({
    status: "success",
    message: "Product added to wishlist",
  });
});

exports.removeFromWishlist = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const user = await User.findById(req.user.id);

  user.wishlist = user.wishlist.filter((item) => item.toString() !== productId);

  await user.save();

  res.status(200).json({
    status: "success",
    message: "Product removed from wishlist",
  });
});
