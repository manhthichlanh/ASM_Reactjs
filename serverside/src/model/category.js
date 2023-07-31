
const mongoose = require("../configs/connectDB");

const categorySchema = new mongoose.Schema({
    categoryName: { type:String, required:true },
    image: { type:String, required:true },
    display: { type:Number, required:true },
    priority: { type:Number, required:true },
  },{
    collation: { locale: 'en', strength: 2 },
  });

module.exports = mongoose.model('categories', categorySchema);



