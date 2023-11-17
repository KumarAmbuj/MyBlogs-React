const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: Number,
  password: String,
});

module.exports = mongoose.model("users", userSchema);
