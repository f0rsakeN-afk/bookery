const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "A review text is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "products",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps:true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email",
  });
  next();
});

const Review = mongoose.model("reviews", reviewSchema);
module.exports = Review;
