const express = require("express");
const app = express();
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const contactRoute = require("./routes/contactRoutes");

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourfrontend.com"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("development"));
}

app.use("/api/v1/contact", contactRoute);

app.use(globalErrorHandler);

module.exports = app;
