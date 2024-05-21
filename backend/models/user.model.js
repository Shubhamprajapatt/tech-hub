const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  password: { required: true, type: String },
  role: { required: true, type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
// const data=mongoose({
//     name:"Shubham",
//     email:"shubham",
//     password:"123",
//     role:"admin"
// })


// data.save();

const User = mongoose.model("User", userSchema);
module.exports=User;

