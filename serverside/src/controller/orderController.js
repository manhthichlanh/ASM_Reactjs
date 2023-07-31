import OrderModel from "../model/order";

const getAllOrder = async (req,res) => {
    try {
        const Order = await OrderModel.find({}).populate("cartId");
        res.status(200).json({ success: true, message: "Get All Successfully!",data: Order });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getOrderByUserid = async (req,res) => {
    const userId = req.params.id;
    try {
        const Order = await OrderModel.find({userId}).populate("cartId").sort({ createdAt: -1 });
        res.status(200).json({ success: true, message: `Get ID ${userId} Successfully!`,data: Order });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getOrderById = async (req,res) => {
    const OrderId = req.params.id;
    try {
        const Order = await OrderModel.findOne({_id:OrderId}).populate("cartId");
        res.status(200).json({ success: true, message: `Get ID ${OrderId} Successfully!`,data: Order });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const postCreate = async (req,res,next) => {
    try {
     
        const newOrder = new OrderModel({ ...req.body });
    
        const savedOrder = await newOrder.save();
    
        res.status(201).json( { message: 'Create New in successfully', savedOrder} );
      } catch (err) {
        next(err);
      }
}

const deleteOrder = async (req,res,next) => {
    const OrderId = req.params.id;
    try {
        
        const result = await OrderModel.findByIdAndDelete({_id:OrderId});
    
        if (!result) {
          return res.status(404).json({ message: "Order not found" });
        }
    
        return res.status(200).json({ message: "Order deleted successfully" });
      } catch (error) {
        next(error);
      }
}

const putUpdate = async (req,res,next) => {
    const OrderId = req.params.id;
    const updates = req.body;
    try {
        const result = await OrderModel.findByIdAndUpdate({_id:OrderId}, updates, { new: true });

        if (!result) {
            res.status(404).json({ message: `Order with ID ${OrderId} not found` });
          } else {
            res.status(200).json({ message: `Order with ID ${OrderId} updated successfully` });
          }
    } catch (error) {

        next(error)
    }
}

const putUpdateStatus = async (req,res,next) => {
    const OrderId = req.params.id;
    const status = req.body;
    try {
        const result = await OrderModel.findByIdAndUpdate({_id:OrderId}, status , { new: true });

        if (!result) {
            res.status(404).json({ message: `Order with ID ${OrderId} not found` });
          } else {
            res.status(200).json({ message: `Order with ID ${OrderId} updated successfully` });
          }
    } catch (error) {

        next(error)
    }
}

module.exports = { getAllOrder, getOrderById, postCreate, putUpdate, deleteOrder, getOrderByUserid,putUpdateStatus }