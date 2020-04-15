const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;
const cros = require("cors");
const router = require("./routes/user");
const app = express();
app.use(cros());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", router);
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
