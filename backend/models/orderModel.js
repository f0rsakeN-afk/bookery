const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: [true, "An order must belong to a user"],
    },
    products: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "products",
          required: [true, "An order must contain a product"],
        },
        quantity: {
          type: Number,
          required: [true, "A product quantity is required"],
          min: [1, "A product quantity must not be less than 1"],
        },
      },
    ],
    shippingInfo: {
      address: {
        type: String,
        required: [true, "Please provide an address"],
      },
      city: {
        type: String,
        required: [true, "Please provide us the name of the city"],
      },
      phone: {
        type: String,
        required: [true, "Please provide us your phone number"],
      },
      postalCode: {
        type: String,
        required: [true, "Please provide us the postal code of your area"],
      },
    },
    paymentMethod: {
      type: String,
      enum: ["esewa", "cash_on_delivery"],
      default: "cash_on_delivery",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentDetails: {
      refId: String,
      paidAt: Date,
    },
    totalPrice: {
      type: Number,
      required: [true, "An order must have a total price"],
    },
    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "delivered", "cancelled"],
      default: "processing",
    },
    deliveredAt: Date,
  },
  { timestamps: true, versionKey: false }
);

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
