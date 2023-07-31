import ProductModel from "../model/product";
import CateModel from "../model/category";

const getAllProduct = async (req,res) => {
    try {
        const Products = await ProductModel.find({}).populate('categoryId');
        const Categories = await CateModel.find({})
        res.status(200).json({ success: true, message: "Get All Successfully!",data: { Products, Categories }  });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getProductById = async (req,res) => {
    const ProductId = req.params.id;
    
    try {
      const Products = await ProductModel.findOne({_id:ProductId}).populate('categoryId');
      const Categories = await CateModel.find({});
        res.status(200).json({ success: true, message: `Get ID ${ProductId} Successfully!`,data: { Products, Categories } });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const postCreate = async (req,res,next) => {
    try {
        const result = await ProductModel.findOne({ productName: req.body.productName });
        if (result) {
          return res.json({ message: 'ProductName already exists' });
        }
        console.log(req.body)
        const  { categoryId, productName, price, image, quantity, color, size, description } = req.body;
        const Product = { categoryId, productName, price, image, quantity, color, size, description };
        const newProduct = new ProductModel({ ...Product, });
    
        const savedProduct = await newProduct.save();
    
        res.status(201).json( { message: 'Create New in successfully', savedProduct} );
      } catch (err) {
        next(err);
      }
}

const deleteProduct = async (req,res,next) => {
    const ProductId = req.params.id;
    try {
        
        const result = await ProductModel.findByIdAndDelete({_id:ProductId});
    
        if (!result) {
          return res.status(404).json({ message: "Productgory not found" });
        }
    
        return res.status(200).json({ message: "Productgory deleted successfully" });
      } catch (error) {
        next(error);
      }
}

const putUpdate = async (req,res,next) => {
    const ProductId = req.params.id;
    const updates = {...req.body,createAt: new Date()}; 
    try {
        const result = await ProductModel.findByIdAndUpdate({_id:ProductId}, updates, { new: true });

        if (!result) {
            res.status(404).json({ message: `Product with ID ${ProductId} not found` });
          } else {
            res.status(200).json({ message: `Product with ID ${ProductId} updated successfully` });
          }
    } catch (error) {

        next(error)
    }
}

module.exports = { getAllProduct, getProductById, postCreate, putUpdate, deleteProduct }