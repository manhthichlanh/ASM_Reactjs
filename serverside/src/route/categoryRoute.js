import express from "express";
import Category from "../controller/categoryController";

let router = express.Router();

const initCategoryRoute =(app)=>{

    router
    .get('/category/read/', Category.getAllCate)
    .get('/category/read/:id', Category.getCateById)
    .post('/category/create/', Category.postCreate)
    .put('/category/update/:id', Category.putUpdate)
    .delete('/category/delete/:id', Category.deleteCate)


    return app.use('/',router)
}
export default initCategoryRoute ;