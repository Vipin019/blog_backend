const mongoose = require("mongoose");

const allpostTemplet = new mongoose.Schema({
  postNo: {
    type: Number,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  post: {
    heading:{
        type:String,
        require:true
    },
    details:{
        type:String,
        require:true
    }
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("allpost", allpostTemplet);
