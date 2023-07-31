// import CartModel from '../model/users';
import CartModel from "../model/cart";

const getAllcart = async (req,res) => {
    try {
        const cart = await CartModel.find({});
        res.status(200).json({ success: true, message: "Get All Successfully!",data: cart });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const getcartById = async (req,res) => {
    const cartId = req.params.id;
    try {
        const cart = await CartModel.findOne({_id:cartId});
        res.status(200).json({ success: true, message: `Get ID ${cartId} Successfully!`,data: cart });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const postCreate = async (req,res,next) => {
    try {

        const { userId, product, flag } = req.body;
        const cart = { userId, product, flag };
        const newcart = new CartModel({ ...cart, });
    
        const savedcart = await newcart.save();
    
        res.status(201).json( { message: 'Create New in successfully', savedcart} );
      } catch (err) {
        next(err);
      }
}
const deletecart = async (req,res,next) => {
    const cartId = req.params.id;
    try {
        
        const result = await CartModel.findByIdAndDelete({_id:cartId});
    
        if (!result) {
          return res.status(404).json({ message: "Cart not found" });
        }
    
        return res.status(200).json({ message: "Cart deleted successfully" });
      } catch (error) {
        next(error);
      }
}
const putUpdate = async (req,res,next) => {
    const cartId = req.params.id;
    const updates = req.body;
    try {
        const result = await CartModel.findByIdAndUpdate({_id:cartId}, updates, { new: true });

        if (!result) {
            res.status(404).json({ message: `cartgory with ID ${cartId} not found` });
          } else {
            res.status(200).json({ message: `cartgory with ID ${cartId} updated successfully` });
          }
    } catch (error) {

        next(error)
    }
}
module.exports = { getAllcart, getcartById, postCreate, putUpdate, deletecart }