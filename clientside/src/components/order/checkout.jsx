import { useEffect, useState } from "react";
import './checkout.css';
import { useAppContext } from "../../store/context";
import axios from 'axios';
import ToastMessage from "../../untils";
import { useNavigate } from "react-router-dom";
function Checkout() {
    let subtotal = 0;
    let shipping = 15000;
    let grandtotal = 0;
    const navigate = useNavigate();
    const { state, dispatch } = useAppContext();
    const [formData, setFormData] = useState({
        userId: '',
        fullname: '',
        address: '',
        phone: '',
        email: '',
        payment: 'COD',
        noted: '',
        status: "Đang chờ xử lý"
      });
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      }
 

    const handleSubmit = async (event) => {
      event.preventDefault();
      const user = JSON.parse(localStorage.getItem("user")) ;
      const product = state.cartItems.map(item => ({
        _id: item._id,
        categoryId: item.categoryId,
        productName: item.productName,
        price: item.price,
        image: item.image,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
        description: item.description
      }));
      const data = {
        userId:user._id,
        product,
        flag: 1
      }
      
      try {
        const postCart = await axios.post(`http://localhost:8085/cart/create/`,data);
        const cartData = postCart.data.savedcart;
        const cartId = cartData._id;
        const postOrder = await axios.post(`http://localhost:8085/order/create/`,{...formData,cartId} );

        dispatch({ type: "SET_CART_ITEMS", payload: [] });
        navigate('/')
        ToastMessage("Thanh Toán Hoàn Tất!").success();
        
    } catch (error) {
        console.log(error)
      }
    }
    useEffect((param) => {
        (
            async () => {
                const user = JSON.parse(localStorage.getItem("user")) ;
                setFormData(prevState => ({ ...prevState, ['userId']: user._id }));
            }
            
        )()
    },[]
    )
    useEffect((param) => {
        console.log(formData)
    },[formData]
    )
    return (
            <article className="order">
 
            <div className="d-flex">
            <form onSubmit={handleSubmit} method="POST">
                <label>
                    <span className="fname">Họ và Tên <span className="required">*</span></span>
                    <input type="text" name="fullname" value={formData.fullName} onChange={handleInputChange} />
                </label>

                <label>
                    <span>Địa chỉ <span className="required">*</span></span>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
                </label>

                <label>
                    <span>Số điện thoại <span className="required">*</span></span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                </label>

                <label>
                    <span>Email <span className="required">*</span></span>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} /> 
                </label>

                <label>
                    <span>Phương thức thanh toán <span className="required">*</span></span>
                    <select name="payment" id="payment" value={formData.payment} onChange={handleInputChange}>
                    <option value="COD" className="option">Thanh toán khi nhận hàng (COD)</option>
                    <option value="Paypal" className="option">Thanh toán bằng Paypal</option>
                    </select>
                </label>

                <label>
                    <span>Ghi chú <span className="required">*</span></span>
                    <textarea name="noted" id="noted" placeholder="Nội dung" value={formData.noted} onChange={handleInputChange}></textarea>
                </label>

                <button type="submit">Thanh Toán</button>
            </form>
            <div className="Yorder">
                <table>
                <thead>
                    <tr>
                        <th colSpan="3">Đơn hàng của bạn</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         (state.cartItems.length > 0) && (
                            state.cartItems.map(item=>{
                                subtotal += item.price * item.quantity;
                                grandtotal += subtotal + shipping;
                                return (
                                
                                    <tr key={item._id}>
                                        <td><img src={item.image} alt="" style={{ width: "100%" }} /></td>
                                        <td>{item.productName} x {item.quantity}</td>
                                        <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                    </tr>
                                )
                            })
                         )
                    }
                   
                    
        
                </tbody>
                <thead>
                <tr>
                    <td>Tổng phụ</td>
                    <td></td>
                    <td>{subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td></td>
                    <td>{shipping.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                </tr>
                <tr>
                    <td>Tổng chính</td>
                    <td></td>
                    <td>{grandtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                </tr>
                </thead>
                
                </table><br/>
            
             
            
               
               
            </div>
            </div>
            </article>
            
    )
}
export default Checkout;