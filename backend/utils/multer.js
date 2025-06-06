const multer = require("multer");
const sharp = require("sharp");
const catchAsync = require("./catchAsync");
const AppError = require("./appError");

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
    .resize(600, 800, {
      fit: "cover",
      position: "center",
    })
    .toFormat("jpeg")
    .jpeg({ quality: 80 })
    .toFile(`public/product/${req.file.filename}`);
  /* save image to the database */
  req.body.image = req.file.filename;
  next();
});
