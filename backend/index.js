const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const contactRoute = require("./routes/contactRoutes");
const productRoute = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

/* app.use(express.json()); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourfrontend.com"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("development"));
}

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/product", productRoute);

app.use(globalErrorHandler);

module.exports = app;
