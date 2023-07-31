import express from "express";
import order from "../controller/orderController";

let router = express.Router();

const initOrderRoute =(app)=>{
    router
    .get('/order/read/', order.getAllOrder)
    .get('/order/read/:id', order.getOrderById)
    .get('/order/read/user/:id', order.getOrderByUserid)
    .post('/order/create/', order.postCreate)
    .put('/order/update/:id', order.putUpdate)
    .put('/order/update/status/:id', order.putUpdateStatus)

    .delete('/order/delete/:id', order.deleteOrder)


    router.get('/about',(req,res)=>{
        res.send('Nguyễn Văn Mạnh')
    })

    return app.use('/',router)
}
export default initOrderRoute ;