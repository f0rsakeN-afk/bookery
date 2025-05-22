const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const bodyParser = require("body-parser");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const contactRoute = require("./routes/contactRoutes");
const productRoute = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

/* app.use(express.json()); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("development"));
}

app.use(cookieParser());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);

app.use(mongoSanitize());

app.use(
  hpp({
    whitelist: [],
  })
);

app.use(xss());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourfrontend.com"],
    credentials: true,
  })
);

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/product", productRoute);

app.use(globalErrorHandler);

module.exports = app;
