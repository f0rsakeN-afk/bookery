const app = require("./index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

if (!DATABASE_PASSWORD || !DATABASE_URL) {
  console.log("No DB urls found", 404);
  process.exit(1);
}

const DB = DATABASE_URL.replace("<db_password>", DATABASE_PASSWORD);

mongoose
  .connect(DB)
  .then((con) => {
    /*     console.log(con.connections) */
    console.log("Database connection successfull!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("unhandled rejection error");
  server.close(() => {
    process.exit(1);
  });
});
