const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 2000;
const productRouter = require("./routes/product");
const User = require("./models/user");
const shopRouter = require("./routes/shop");
app.use(cors());

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  User.findById("5ed742b48b88334aa53c31ab")
    .then((user) => {
      // console.log(user);
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use("/product", productRouter);
app.use("/product", shopRouter);

mongoose
  .connect("mongodb://localhost:27017/myProducts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "govardhan",
          email: "goabala88@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });

    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB not Connected");
  });

// app.use((req, res) => {
//   res.send("dddddddd");
// });

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
