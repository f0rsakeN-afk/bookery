const app = require("./index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT||3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
