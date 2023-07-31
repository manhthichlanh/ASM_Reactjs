const mongoose = require("../configs/connectDB");

const productSchema = new mongoose.Schema({
    categoryId: { 
        type: mongoose.Types.ObjectId,
        ref: 'categories'
     },
    productName: { type:String, required:true },
    price: { type:Number, required:true },
    image: { type:String, required:true },
    quantity: { type:Number, required:true },
    color: { type:String, required:true },
    size: { type:String, required:true },
    description: { type:String, required:true },
  },{
    timestamps: true,
    collation: { locale: 'en', strength: 2 },
  });

module.exports = mongoose.model('products', productSchema);