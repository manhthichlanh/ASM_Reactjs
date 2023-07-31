
const mongoose = require("../configs/connectDB");

const cartSchema = new mongoose.Schema({
  
    userId: { 
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },

    product: [
        {
          _id: { 
            type: mongoose.Types.ObjectId,
            required: true 
          },
          categoryId: { 
              _id: { type: mongoose.Types.ObjectId } ,
              categoryName: {type: String},
              image: {type: String},
              display: {type:Number},
              priority: {type: Number},
              _id: false
            },
          productName: { type:String, required:true },
          price: { type:Number, required:true },
          image: { type:String, required:true },
          quantity: { type:Number, required:true },
          color: { type:String, required:true },
          size: { type:String, required:true },
          description: { type:String, required:true },
          
        }
    ],
    flag: { type: Number, required:true },
  },{
    timestamps: true,
    collation: { locale: 'en', strength: 2 },
  });

module.exports = mongoose.model('carts', cartSchema);



