const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
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
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: [true, "Contact message must belong to a user"],
    },
  },
  { timestamps: true, versionKey: false }
);

contactSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "email name",
  });
  next();
});

const Contact = mongoose.model("contactmessages", contactSchema);
module.exports = Contact;
