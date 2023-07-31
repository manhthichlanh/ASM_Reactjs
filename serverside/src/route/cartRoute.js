import express from "express";
import cart from "../controller/cartController";


let router = express.Router();

const initCartRoute =(app)=>{
    router
    .get('/cart/read/', cart.getAllcart)
    .get('/cart/read/:id', cart.getcartById)
    .post('/cart/create/', cart.postCreate)
    .put('/cart/update/:id', cart.putUpdate)
    .delete('/cart/delete/:id', cart.deletecart)


    router.get('/about',(req,res)=>{
        res.send('Nguyễn Văn Mạnh')
    })

    return app.use('/',router)
}
export default initCartRoute ;