const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An username is required"],
    minlength: [5, "Username should be at least 5 characters"],
  },
});
