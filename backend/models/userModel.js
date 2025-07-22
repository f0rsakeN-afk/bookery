const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your username"],
      minlength: [5, "Username should be at least 5 characters"],
      maxlength: [20, "Username can have a maximum of 20 characters"],
      trim: true,
      match: [
        /^[A-Za-z]+$/,
        "Username must contain only alphabetic characters",
      ],
    },
    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (val) {
          return this.password === val;
        },
        message: "Password and passwordConfirm must be same",
      },
      select: false,
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?[0-9]{7,15}$/, "Please provide a valid phone number"],
    },
    location: {
      type: String,
      trim: true,
      maxlength: [100, "Location can't exceed 100 characters"],
    },
    bio: {
      type: String,
      maxlength: [250, "A bio can have at most 250 characters"],
      trim: true,
    },
    occupation: {
      type: String,
      trim: true,
      maxlength: [50, "Occupation can't exceed 50 characters"],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [100, "Company name can't exceed 100 characters"],
    },
    timeZone: {
      type: String,
      trim: true,
      maxlength: [50, "Time zone can't exceed 50 characters"],
    },
    language: {
      type: String,
      trim: true,
      maxlength: [30, "Language can't exceed 30 characters"],
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "A role can be either user or admin",
      },
      default: "user",
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,

    wishlist: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "products",
      },
    ],
    cart: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
          required: [true, "A product quantity is required"],
          min: [1, "Product quantity cannot be less than 1"],
          default: 1,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  if (!this.isNew) {
    this.passwordChangedAt = Date.now() - 1000;
  }

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const timestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimestamp < timestamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

/* userSchema.pre("save", function (next) {
  if (this.isNew || !this.isModified("password")) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});
 */
const User = mongoose.model("users", userSchema);
module.exports = User;
