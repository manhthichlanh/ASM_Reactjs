import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToastMessage from '../../untils';
import { useAppContext } from '../../store/context';

const Product = ({data}) => {

  const { state, dispatch } = useAppContext();

  const handleAddToCart = (e) => {

    e.preventDefault();

    const user = localStorage.getItem("user");

    if (user === null) return ToastMessage("Bạn cần đăng nhập để mua hàng!").warn();

    const { _id } = JSON.parse(user);
        const product = data;
        
        const obj = {
            ...product, color: data.color.split(",")[0], size:  data.size.split(",")[0],productQuantity:data.quantity,quantity: 1,userId:_id
        }

        console.log(data);

        dispatch({ type: 'ADD_TO_CART', payload: obj });

        return ToastMessage("Đặt hàng thành công!").success();
  }

  return (
    <div className="col">

                        <div className="col-img">
                            <Link to={`/product/${data._id}`} >
                                <img src={data.image} alt="" className="img-main"/> 
                            </Link>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="/images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">{data.productName}</div>
                                
                                <div className="price"><span>{data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></div>
                       
                                <button type="button">

                                    <div className="icon">
                                        <img src="/images/cart.svg" alt=""/>
                                    </div>

                                    <div className="text-add" onClick={(e)=>handleAddToCart(e)}>Thêm</div>

                                </button>
                                
                                    
                            </div>

                        </div>
                          
                    </div>
  );
};

export default Product;