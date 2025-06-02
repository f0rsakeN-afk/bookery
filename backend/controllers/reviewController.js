const catchAsync = require("../utils/catchAsync");
const Review = require("../models/reviewModel");
const AppError = require("../utils/appError");

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();
  res.status(200).json({
    status: "success",
    results: reviews.length,
    data: reviews,
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  /*   console.log(req.body); */
  const review = await Review.create(req.body);
  res.status(201).json({
    status: "success",
    message: "Review posted successfully",
    data: review,
  });
});

exports.deleteReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  /*   console.log(review); */
  if (!review)
    return next(new AppError("The review with this  id does not exist", 404));
  if (review.user._id.toString() !== req.user.id) {
    return next(
      new AppError("You are not authorized to perform this action", 403)
    );
  }
  await Review.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "Review deleted successfully",
  });
});

exports.updateReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError("The review with this id does not exist", 404));
  }

  if (review.user._id.toString() !== req.user.id) {
    return next(
      new AppError("You are not authorized to perform this action", 403)
    );
  }

  const updatedReview = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
      new: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Review updated successfully",
    data: updatedReview,
  });
});
