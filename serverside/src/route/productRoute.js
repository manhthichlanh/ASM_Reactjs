import express from "express";
import Product from "../controller/productController";

let router = express.Router();

const initProductRoute =(app)=>{

    router
    .get('/product/read/', Product.getAllProduct)
    .get('/product/read/:id', Product.getProductById)
    .post('/product/create/', Product.postCreate)
    .put('/product/update/:id', Product.putUpdate)
    .delete('/product/delete/:id', Product.deleteProduct)


    return app.use('/',router)
}
export default initProductRoute ;