import {useEffect, useState} from "react";
import './cart.css'
import { useAppContext } from "../../store/context";
import ToastMessage from "../../untils";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { state, dispatch } = useAppContext();
  const cartItems = state.cartItems;
  let subToltal = 0;
  let grandtotal = 0;
  let shiping = cartItems.length>0 ? 15000 : 0;
  const navigate = useNavigate();
  const handleRemoveFromCart = (index) => {
    dispatch({ type: "DELETE_ITEM", payload: index });
    return ToastMessage('Xóa sản phẩm thành công!').success();
  }
  
  const handleQuantityChange = ( productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { _id:productId, quantity } });
  };
  useEffect(() => {
    const hinh = document.querySelector(".hinhf");
    hinh.style.display = "none";
  },[]
  )

    return (
      <article className="cart">
<div className="contain">
        

        <div className="shopping-cart">
  
          <div className="column-labels">
            <label className="product-image">Ảnh</label>
            <label className="product-details">Sản phẩm</label>
            <label className="product-price">Giá</label>
            <label className="product-quantity">Số lượng</label>
            <label className="product-removal">Xóa?</label>
            <label className="product-line-price">Tổng</label>
            
          </div>
          {
            state.cartItems.map((item,index)=>{
              console.log(item,item.productQuantity)
              const quantity = item.quantity;
              const price = item.price; 
              subToltal += quantity * price;
              grandtotal = subToltal  + shiping;
              return (
                <div className="product" key={index}>
                  <div className="product-image">
                    <img src={item.image}/>
                  </div>
                  <div className="product-details">
                    <h4>Tên sản phẩm: {item.productName}</h4>
                    <h4>Danh mục: {item.categoryId.categoryName}</h4>
                    <h4>Màu sắc: {item.color}</h4>
                    <h4>Kích thước: {item.size}</h4>
                    <p className="product-description">{item.description}</p>
                  </div>
                  <div className="product-price">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                  <div className="product-quantity">
                    <input type="number" value={item.quantity} min="1" max={item.productQuantity} onChange={(e) => handleQuantityChange(item._id, e.target.value)}/>
                  </div>  
                  <div className="product-removal">
                    <button className="remove-product" onClick={() => handleRemoveFromCart(item._id)}>
                      Remove
                    </button>
                  </div>
                  <div className="product-line-price">{ (item.quantity * item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }</div>
                </div>
              );
              
              
            })
          }
  
          <div className="totals">
            <div className="totals-item">
              <label>Tổng phụ (Chưa tính phí ship)</label>
              <div className="totals-value" id="cart-subtotal">{parseFloat(subToltal.toFixed(3)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
            </div>
  
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping"> {shiping.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Tổng chính</label>
              <div className="totals-value" id="cart-total">{parseFloat(grandtotal.toFixed(3)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
            </div>
          </div>
              
              <button className="checkout" onClick={()=>{ navigate('/checkout')}}>Thanh toán</button>
  
        </div>
        </div>
      </article>
      

    )

}
export default Cart;