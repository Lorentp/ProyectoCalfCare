const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  farmname: { type: String },
  lastName: { type:String },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
