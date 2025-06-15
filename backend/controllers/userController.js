const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getUserDetails = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return next(new AppError(`The user with this ID doesn't exist`, 404));
  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find().select("name email phone location");
  res.status(200).json({
    status: "success",
    results: users.length,
    data: users,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { phone, location, bio, occupation, company, timeZone, language } =
    req.body;

  /*     console.log(phone, location, bio, occupation, company, timeZone, language) */
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { phone, location, bio, occupation, company, timeZone, language },
    { new: true, runValidators: true, useFindAndModify: false }
  );

  if (!updatedUser) return next(new AppError("User not found", 404));

  res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: updatedUser,
  });
});
