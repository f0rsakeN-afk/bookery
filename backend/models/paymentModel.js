const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    product_id: [
      {
        type: String,
        required: [true, "A product id is required"],
      },
    ],
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Transaction amount should not be negative"],
    },
    status: {
      type: String,
      required: [true, "A transaction status is required"],
      enum: ["PENDING", "COMPLETE", "FAILED", "REFUNDED"],
      default: "PENDING",
    },
  },
  { timestamps: true, versionKey: false }
);

const Transaction = mongoose.model("transactions", transactionSchema);
module.exports = Transaction;
