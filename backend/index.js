const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const contactRoute = require("./routes/contactRoutes");
const productRoute = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const wishListRoutes = require("./routes/wishListRoutes");
const cartRoutes = require("./routes/cartRoutes");

/* app.use(express.json()); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourfrontend.com"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("development"));
}

/* const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter); */

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/wishlist", wishListRoutes);
app.use("/api/v1/cart", cartRoutes);

app.use(globalErrorHandler);

module.exports = app;
