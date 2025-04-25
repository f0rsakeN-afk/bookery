const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "An email address is required"],
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    subject: {
      type: String,
      required: [true, "A subject is required"],
      maxlength: [100, "A subject can have max characters up to 100"],
    },
    query: {
      type: String,
      required: [true, "A query is required"],
      maxlength: [250, "A query can have max characters up to 250"],
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("contactmessages", contactSchema);
module.exports = Contact;
