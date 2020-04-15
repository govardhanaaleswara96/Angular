const User = require("../models/user");

const postUser = (req, res, next) => {
  //  console.log(req.body);
  // const name = req.body.name;
  // const email = req.body.email;
  // const password = req.body.password;
  // const cPassword = req.body.cPassword;
  // console.log(name);
  // const user = new User(name, email, password, cPassword);
  const user = new User(req.body);
  console.log(user);
  user
    .save()
    .then((result) => {
      console.log(result);
      res.send("User Added Successfully");
    })
    .catch((err) => {
      res.send("Email Id Already Exists");
    });
};

module.exports = {
  postUser,
};
