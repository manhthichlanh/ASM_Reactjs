
const mongoose = require("../configs/connectDB");

const orderSchema = new mongoose.Schema({
    cartId: { 
        type: mongoose.Types.ObjectId,
        ref: 'carts'
     },
    userId: { 
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },

    fullname: { type:String, required:true },
    email: { type:String, required:true },
    address: { type:String, required:true },
    phone: { type:Number, required:true },
    payment: {type:String, required:true},
    noted: { type:String, required:true },
    status: { type:String, required:true },
    
  },{
    timestamps: true,
    collation: { locale: 'en', strength: 2 },
  });

module.exports = mongoose.model('orders', orderSchema);



