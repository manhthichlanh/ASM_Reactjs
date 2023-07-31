import { useState, useEffect } from "react";
import axios from "axios";
import './orderList.css';
import { Link } from "react-router-dom";
import ToastMessage from "../../untils";
function OrderList() {
    const [order,setOrder] = useState([]);
    const [detail,setDetail] = useState({status: false, product: []});
    const [mesage, setMessage] = useState("");
    const [stats, setStats] = useState({
        countOrder: 0,
        countProduct: 0,
        quantity: 0,
        total: 0
    })
    const handleStatus  = async (id) => {
      const res = await axios.put(`http://localhost:8085/order/update/status/${id}`,{ status: "Hủy" });
      const data = res.data;
 
      ToastMessage(data.message).success();
      setMessage(data.message);

    }
    
    useEffect(() => {
      (
        async () => {

            const user = JSON.parse(localStorage.getItem("user")||"") || "";
            const res = await axios.get(`http://localhost:8085/order/read/user/${user._id}`);
            const data = res.data.data;
            const childrendData = data.cartId;
            let tongSp = 0
            let tongSl = 0;
            let tongGia = 0 
            const product = data.map(item=>{
                if (item.status !== "Hủy") {
                    return item.cartId.product.map(element=>{
                        // tongSp +=element.length;
                        tongSp ++;
                        tongSl += element.quantity;
                        tongGia += element.quantity * element.price
                    })
                }
            
            })
            setOrder(data);

            setStats(prevState => ({ ...prevState, ["countOrder"]: data.length,  ["countProduct"]: tongSp,  ["quantity"]: tongSl,  ["total"]: tongGia}));
            
        }
        
      )()
    },[]
    )
    useEffect(() => {
        (
          async () => {

            const user = JSON.parse(localStorage.getItem("user")||"") || "";
            const res = await axios.get(`http://localhost:8085/order/read/user/${user._id}`);
            const data = res.data.data;
            const childrendData = data.cartId;
            setOrder(data);

          }
          
        )()
      },[mesage,stats]
    )
    return (
        <article className="orderList">
             <div className="filter">

            </div>

            <table >
                {
                    (detail.status)?(<>
                        <thead>
                            <tr>
        
                            <th >#</th>
                            <th >danh mục</th>
                            <th >tên sản phẩm</th>
                            <th >hình ảnh</th>
                            <th >đơn giá</th>
                            <th >số lượng</th>
                            <th >màu sắc</th>
                            <th >kích thước</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                (detail.product.length>0) && (
                                    
                                    detail.product.map((item,index)=>{

                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.categoryId.categoryName}</td>
                                                <td>{item.productName}</td>
                                                <td><img src={item.image} alt="" /></td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.color}</td>
                                                <td>{item.size}</td>
                                            </tr>
                                        )
                                    })
                                )
                            }
                           
                        </tbody></>):(<>
                    <thead>
                        <tr>
    
                            <th>#</th>
    
                            <th>Ngày Đặt</th>
    
                            <th>Người Đặt</th>

                           
                            <th>Tổng Sản</th>
    
                            <th>Tổng Lượng</th>

                            <th>Tổng Tiền</th>

                            <th>Địa Chỉ </th>
    
                            <th>điện thoại </th>
    
                            <th>Trạng Thái </th>
    
                            <th>Hành Động </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (order.length>0) && (
                                order.map((item,index)=>{
                                    const date = new Date(item.createdAt).toLocaleString('en-GB', 'Asia/Ho_Chi_Minh').replace(/\//g, '-');
                                    let total = 0;
                                    let countQuantity = 0;
                                    let countProduct = 0;
                                    item.cartId.product.map(element=>{
                                        countProduct ++;
                                        countQuantity += element.quantity;
                                        total += element.quantity * element.price
                                    })
                                    return (
                                        <tr key={index}>
    
                                        <td>{index+1}</td>
                
                                       
                                        <td>{date}</td>
                
                                        <td>{item.fullname}</td>

                                        <td>{countProduct}</td>

                                        <td>{countQuantity}</td>

                                        <td>{total}</td>

                                        <td>{item.address}</td>
                
                                        <td>{item.phone}</td>
    
                                        <td>{item.status}</td>
                                        <td ><Link onClick={()=>{setDetail(prevState => ({ ...prevState, ['status']: true,['product']: item.cartId.product }))}}>Chi tiết</Link> <Link onClick={()=>{handleStatus(item._id)}}>Hủy</Link></td>
                                    </tr>
                                    )
                                })
                            )
                        }
                       
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={3}>Tổng đơn hàng</th>
                            <th colSpan={3}>Tổng sản phẩm</th>
                            <th colSpan={2}>Tổng số lượng</th>
                            <th colSpan={2}>Tổng giá</th>
                        </tr>

                        <tr>
                            <td colSpan={3}>{stats.countOrder}</td>
                            <td colSpan={3}>{stats.countProduct}</td>
                            <td colSpan={2}>{stats.quantity}</td>
                            <td colSpan={2}>{stats.total}</td>
                        </tr>

                    </tfoot>
                    </>)
                }
                


              

          

            </table>
        </article>
       
    )


}
export default OrderList;