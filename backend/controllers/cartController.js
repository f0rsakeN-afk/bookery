const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/userModel");
const Product = require("../models/productModel");

exports.getMyCart = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("cart.product");
  res.status(200).json({
    status: "success",
    results: user.cart.length,
    data: user.cart,
  });
});

exports.addToCart = catchAsync(async (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId)
    return next(new AppError("Please provide productId & quantity", 400));

  const user = await User.findById(req.user.id);

  const existingItem = user.cart.find(
    (item) => item.product.toString() === productId
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    user.cart.push({ product: productId, quantity: quantity || 1 });
  }

  user.wishlist = user.wishlist.filter((id) => !id.equals(productId));

  await user.save();

  res.status(200).json({
    status: "success",
    message: "Product added to cart successfully",
  });
});

exports.updateCartItem = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  /*   console.log(productId, quantity); */
  const user = await User.findById(req.user.id);

  const item = user.cart.find((item) => item.product.toString() === productId);

  if (!item) return next(new AppError("Item not found in cart", 404));

  item.quantity = quantity;
  await user.save();

  res.status(200).json({
    status: "success",
    message: "Cart updated successfully",
  });
});

exports.removeFromCart = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  /*   console.log(productId.toString()); */
  if (!productId)
    return next(
      new AppError(
        "Please provide the productId of item you want to delete",
        400
      )
    );

  const user = await User.findById(req.user.id);

  /*  console.log(user.cart); */

  user.cart = user.cart.filter(
    (item) => item.product && item.product.toString() !== productId.toString()
  );

  /*  console.log(user.cart); */
  await user.save();

  res.status(200).json({
    status: "success",
    message: "Product removed from cart",
  });
});
