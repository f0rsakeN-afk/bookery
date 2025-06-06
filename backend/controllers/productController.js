const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");
const mongoose = require("mongoose");
const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only image", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPhoto = upload.single("image");

exports.resizeProductPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `product-${req.user.id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize()   
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/product/${req.file.filename}`);
  /* save image to the database */
  req.body.image = req.file.filename;
  next();
});

exports.addProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    message: "Product added successfully",
    data: product,
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const filteredQuery = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const totalItems = await filteredQuery.query.clone().countDocuments();

  const paginatedQuery = filteredQuery.paginate();
  const products =
    await paginatedQuery.query; /* .populate({ path: "reviews" }); */

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;
  const totalPages = Math.ceil(totalItems / limit);

  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
    pagination: {
      totalItems,
      totalPages,
      page,
      limit,
    },
  });
});

exports.getProductById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  /*  console.log(id, "hello"); */
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError("Invalid product ID", 400));
  }

  const product = await Product.findById(id).populate({
    path: "reviews",
    options: {
      sort: { createdAt: -1 },
      limit: 30,
    },
  });

  if (!product) {
    return next(new AppError(`The product with this id doesn't exist`, 404));
  }

  res.status(200).json({
    status: "success",
    data: product,
  });
});

exports.searchProducts = catchAsync(async (req, res, next) => {
  const search = req.query.search;

  let query = {};
  if (search) {
    const regex = new RegExp(search, "i");
    query = {
      $or: [
        { name: { $regex: regex } },
        { category: { $regex: regex } },
        { description: { $regex: regex } },
      ],
    };
  }

  const products = await Product.find(query).select(
    "title priceAfterDiscount price discountPercentage image id"
  );

  /* if (products.length===0) {
    return next(new AppError("No products found", 404));
  } */
  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: "Product deleted successfully",
  });
});
