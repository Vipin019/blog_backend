const mongoose = require("mongoose");

const userauthTemplet = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  passward: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  contactNo: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("userauth", userauthTemplet);
