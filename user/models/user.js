const mongoose = require("mongoose");
const schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost:27017/signUpForm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("DB Not Connected");
  });
const userSchema = new schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    cPassword: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
