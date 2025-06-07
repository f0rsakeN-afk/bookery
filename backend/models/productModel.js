const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "A product title is required"],
      trim: true,
      minlength: [5, "A product title must be of 5 characters"],
      maxlength: [40, "A product title must be less than 40 characters"],
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "A product description is required"],
      trim: true,
      maxlength: [
        200,
        "A product description should be less than 200 characters",
      ],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
      min: [1, "A product price must be more than or equal to 1"],
    },
    quantity: {
      type: Number,
      required: [true, "A product quantity is required"],
      min: [1, "A product quantity cannot be less than 1"],
    },
    category: {
      type: String,
      required: [true, "A product category is required"],
      enum: {
        values: [
          "clothing",
          "electronics",
          "health",
          "food",
          "lifestyle",
          "accessories",
        ],
        message:
          "{VALUE} is not a valid category. A product category can be either clothing, electronics, health, food, lifestyle or accessories",
      },
    },
    brand: {
      type: String,
      required: [true, "A product brand is required"],
      maxlength: [20, "A brand name cannot have more than 20 characters"],
    },
    discountPercentage: {
      type: Number,
      default: 0,
      max: [60, "Discount percentage cannot be more than 60%"],
      min: [0, "Discount percentage should be greater than 0"],
    },
    image: {
      type: String,
      required: [true, "A product image is required"],
    },
    shipping: {
      weight: {
        type: Number,
        required: [true, "A product weight is required"],
      },
      dimensions: {
        length: {
          type: Number,
          required: [true, "A product's length is required"],
        },
        width: {
          type: Number,
          required: [true, "A product's width is required"],
        },
        height: {
          type: Number,
          required: [true, "A product's height is required"],
        },
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    versionKey: false,
    timestamps: true,
  }
);

productSchema.virtual("priceAfterDiscount").get(function () {
  const discount = (this.price * this.discountPercentage) / 100;
  return Math.round((this.price - discount) * 100) / 100;
});

productSchema.virtual("reviews", {
  ref: "reviews",
  foreignField: "product",
  localField: "_id",
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
