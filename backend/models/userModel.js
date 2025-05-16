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
    },
    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minlength: 6,
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
    },
    location: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      maxlength: [250, "A bio can have at most 250 characters"],
      trim: true,
    },
    occupation: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    timeZone: {
      type: String,
    },
    language: {
      type: String,
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
  },
  { timestamps: true, versionKey: false }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
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

userSchema.pre("save", function (next) {
  if (this.isNew || !this.isModified("password")) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

const User = mongoose.model("users", userSchema);
module.exports = User;
