const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true,
  },
  password: {
    type: String,
    require:true,
  },
  
},{timestamps:true});

const User=mongoose.model("User",UsersSchema);

module.exports=User;