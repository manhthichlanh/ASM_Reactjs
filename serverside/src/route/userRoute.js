import express from "express";
import User from "../controller/userController";
import adminRoute from '../controller/adminController'

let router = express.Router();

const initUserRoute =(app)=>{
    router
    .get('/user/read/', User.getAllUser)
    .get('/user/read/:id', User.getUserById)
    .post('/user/login', User.postLogin)
    .post('/user/create', User.postCreate)
    .post('/user/register', User.postRegister)
    .put('/user/update/:id', User.putUpdate)
    .delete('/user/delete/:id', User.deleteUser)
    .post("/user/parseToken/:token", adminRoute.parseJWT
    )
    router.get('/about',(req,res)=>{
        res.send('Nguyễn Văn Mạnh')
    })

    return app.use('/',router)
}
export default initUserRoute ;