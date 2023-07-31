import express from "express";
import adminRoute from '../controller/adminController'
import initUserRoute from './userRoute';
import initCategoryRoute from './categoryRoute';
import initProductRoute from "./productRoute";
import upload from "../configs/uploadImages";
import initCartRoute from "./cartRoute";
import initOrderRoute from "./orderRoute";
// const auth = require("../middleware/authencation");
import authencation from "../middleware/authencation";
import * as guard from "../middleware/authorition";
let router = express.Router();
const initAdminRoute = (app) => {

    initUserRoute(app);

    initCategoryRoute(app);

    initProductRoute(app);

    initCartRoute(app);

    initOrderRoute(app);

    router
        .get("/login", adminRoute.getLogin)
        .post("/login", adminRoute.postLogin)

    router.use(authencation);

    router

        .get("/test", (req, res, next) => {
            req.userId = 1
            req.role = 1
            next()
        }, (req, res, next) => {
            console.log(req)
            const { userId, role } = req;
            res.json({ userId, role })

        })

        .get("/home", guard.homeGuard, adminRoute.getHome)


        .get('/categories', guard.categoryGuard, adminRoute.getCategoryData)
        .get('/categories/edit/:id', guard.categoryGuard, adminRoute.getUpdateCate)
        .post('/categories/update/', guard.categoryGuard, adminRoute.postUpdateCate)
        .get('/categories/addNew', guard.categoryGuard, adminRoute.getAddNewCate)
        .post('/categories/addNew', guard.categoryGuard, adminRoute.postAddNewCate)
        .get('/categories/delete/:id', guard.categoryGuard, adminRoute.deleteCate)

        .get('/products', guard.productGuard, adminRoute.getProductsData)
        .get('/products/edit/:id', guard.productGuard, adminRoute.getUpdateProduct)
        .post('/products/update/', guard.productGuard, upload.single("productImage"), adminRoute.postUpdateProduct)
        .get('/products/addNew', guard.productGuard, adminRoute.getAddNewProduct)
        .post('/products/addNew', guard.productGuard, upload.single("productImage"), adminRoute.postAddNewProduct)
        .get('/products/delete/:id', guard.productGuard, adminRoute.deleteProduct)

        .get('/users', guard.userGuard, adminRoute.getUserData)
        .get('/users/edit/:id', guard.userGuard, adminRoute.getUpdateUser)
        .post('/users/update/', guard.userGuard, adminRoute.postUpdateUser)
        .get('/users/addNew', guard.userGuard, adminRoute.getAddNewUser)
        .post('/users/addNew', guard.userGuard, adminRoute.postAddNewUser)
        .get('/users/delete/:id', guard.userGuard, adminRoute.deleteUser)

        .get('/orders', guard.orderGuard, adminRoute.getOrdersData)
        .get('/orders/detail/:id', guard.orderGuard, adminRoute.getOrdersDetail)
        .get('/users/edit/:id', guard.orderGuard, adminRoute.getUpdateUser)
        .post('/users/update/status/', guard.orderGuard, adminRoute.postUpdateUser)

        .get("/logout", adminRoute.getLogout)
        .get("/analytic", adminRoute.getAnalytic)
    return app.use('/admin', router)
}
export default initAdminRoute;