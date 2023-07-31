// import CateModel from '../model/users';
import CateModel from "../model/category";

const getAllCate = async (req,res) => {
    try {
        const cate = await CateModel.find({});
        res.status(200).json({ success: true, message: "Get All Successfully!",data: cate });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const getCateById = async (req,res) => {
    const cateId = req.params.id;
    try {
        const cate = await CateModel.findOne({_id:cateId});
        res.status(200).json({ success: true, message: `Get ID ${cateId} Successfully!`,data: cate });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const postCreate = async (req,res,next) => {
    try {
        const result = await CateModel.findOne({ categoryName: req.body.categoryName });
        if (result) {
          return res.json({ message: 'CategoryName already exists' });
        }
        const { categoryName, image, display, priority } = req.body;
        const cate = { categoryName, image, display, priority };
        const newCate = new CateModel({ ...cate, });
    
        const savedCate = await newCate.save();
    
        res.status(201).json( { message: 'Create New in successfully', savedCate} );
      } catch (err) {
        next(err);
      }
}
const deleteCate = async (req,res,next) => {
    const cateId = req.params.id;
    try {
        
        const result = await CateModel.findByIdAndDelete({_id:cateId});
    
        if (!result) {
          return res.status(404).json({ message: "Category not found" });
        }
    
        return res.status(200).json({ message: "Category deleted successfully" });
      } catch (error) {
        next(error);
      }
}
const putUpdate = async (req,res,next) => {
    const cateId = req.params.id;
    const updates = req.body;
    try {
        const result = await CateModel.findByIdAndUpdate({_id:cateId}, updates, { new: true });

        if (!result) {
            res.status(404).json({ message: `Category with ID ${cateId} not found` });
          } else {
            res.status(200).json({ message: `Category with ID ${cateId} updated successfully` });
          }
    } catch (error) {
        next(error)
    }
}
module.exports = { getAllCate, getCateById, postCreate, putUpdate, deleteCate }