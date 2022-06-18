const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: String,
  fullName: String,
  email: String,
  birthDay: String,
});

module.exports = mongoose.model("Users", userSchema);
