const Contact = require("../models/contactModel");
const catchAsync = require("../utils/catchAsync");

exports.sendMessage = catchAsync(async (req, res, next) => {
  const contactMessage = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    message: "Form submitted successfully",
    data: contactMessage,
  });
});

exports.getAllMessages = catchAsync(async (req, res, next) => {
  const messages = await Contact.find();
  res.status(200).json({
    status: "success",
    results: messages.length,
    data: messages,
  });
});
