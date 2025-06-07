const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      unique: true,
    },
    pidx: {
      type: String,
      unique: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "products",
      required: [true, "A product id is required"],
    },
    amount: {
      type: Number,
      required: [true, "A transaction amount is required"],
    },
    dataFromVerificationReq: {
      type: Object,
    },
    apiQueryFromUser: { type: Object },
    paymentGateway: {
      type: String,
      enum: ["khalti", "esewa"],
      required: [true, "A payment method is required"],
    },
    status: {
      type: String,
      enum: ["success", "pending", "failed"],
      default: "pending",
    },
    paymentDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("payment", paymentSchema);
module.exports = Payment;
