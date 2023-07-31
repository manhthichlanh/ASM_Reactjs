
const mongoose = require("../configs/connectDB");

const userSchema = new mongoose.Schema({
    username: { type:String, required:true },
    fullname: { type:String, required:true },
    email: { type:String, required:true },
    password: { type:String, required:true },
    address: { type:String, required:true },
    phone: { type:Number, required:true },
    active: { type:Number, required:true },
    role: { type:Number, required:true },
  },{
    collation: { locale: 'en', strength: 2 },
  });

module.exports = mongoose.model('users', userSchema);



