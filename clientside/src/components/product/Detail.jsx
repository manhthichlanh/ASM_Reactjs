import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../store/context';
import axios from 'axios';
import './detail.css'
import ToastMessage from '../../untils';
function Detail() {
    const { state, dispatch } = useAppContext();
  const [data,setData] = useState([]);
  const [interactiveData, setInteractiveData] = useState([]);
  const { id } = useParams();
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    (
        async () => {
            const res = await axios.get(`http://localhost:8085/product/read/${id}`);
            const data = res.data.data.Products
            setData(data);
            setInteractiveData({...data, color: data.color.split(",")[0], size:  data.size.split(",")[0],quantity})
        }
        
    )()

  },[]

  )

  function handleColor(index,item) {
    setInteractiveData({...interactiveData, color: item})
    setColorIndex(index);

  }
  function handleSize(index,item) {
    setInteractiveData({...interactiveData, size: item})
    setSizeIndex(index);
  }
  function handleQuantity(item) {
    setInteractiveData({...interactiveData, quantity: item})
    setQuantity(item)
  }
  const handleAddToCart = (e) => {

    e.preventDefault();

    if (quantity===0) return ToastMessage("Bạn hãy chọn số lượng trước khi mua hàng!").warn();

    const user = localStorage.getItem("user");

    if (user === null) return ToastMessage("Bạn cần đăng nhập để mua hàng!").warn();

    const { _id } = JSON.parse(user);
        
        const obj = {...interactiveData, userId:_id} ;


        dispatch({ type: 'ADD_TO_CART', payload: obj });

        return ToastMessage("Thêm vào giỏ hàng thành công!").success();
  }
  return (
    <article className='detail'>
        <div className="contain ">

                <div className="shoe-details-left">

                
                <img src={data.image} alt="shoe" className="product-shot animated fadeInLeft" />
                
                
            
                
                
                </div> 

            <div className="shoe-details-right">

            <span className="product-title">{data.productName}</span>
            <span className="label">Mới</span>

        
                
            <div className="product-price">{data.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>

            
            
        
            
            <ul className="product-tabs">
                <li className="active"><a href="#pane1">Mô tả</a></li>
                <li><a href="#pane2">Chi tiết</a></li>
                <li><a href="#pane3">Đánh giá</a></li>
                <li><a href="#pane4">Hướng Dẫn</a></li>
            </ul>
            
            <div className="tab-content">
                <div id="pane1" className="tab-pane active">
                    {data.description}
                </div>
                <div id="pane2" className="tab-pane">
                
                </div>
                
                <div id="pane3" className="tab-pane">
                
                </div>
                
                <div id="pane4" className="tab-pane">
                
                </div>
            </div> 
            <h2>Kích thước</h2>
            <ul className="sizes">
                {
                       
                    data.size?.split(",").map((item,index)=>{
                        
                        return (
                            <li key={index} className={ (index==sizeIndex)? "active":""} style={{ minWidth: "21px" }} onClick={()=>handleSize(index,item)}> <a style={{ cursor: "pointer" }}>{item}</a> </li>

                        )
                    })
                }
                {/* <li><a style={{ cursor: "pointer" }}>08</a></li>
                <li className="active"><a style={{ cursor: "pointer" }}>09</a></li>
                <li><a style={{ cursor: "pointer" }}>10</a></li>
                <li><a style={{ cursor: "pointer" }}>11</a></li> */}
            </ul>
            
            <h2>Màu sắc</h2>
            <ul className="sizes">
            {
                       
                       data.color?.split(",").map((item,index)=>{
                           
                           return (
                               <li key={index} className={ (index==colorIndex) ? "active":""} style={{ minWidth: "80px" }} onClick={()=>{handleColor(index,item)}}> <a style={{ cursor: "pointer" }}>{item}</a> </li>
   
                           )
                       })
                   }
            </ul>
            
            <div className="product-quantity">
             <h2>Số lượng</h2>
                <input type="number" name="" id="" min={0} onChange={(e)=>handleQuantity(e.target.value)} />
            </div>
            <div className="btn-group">
                <button style={{ cursor: "pointer", fontWeight: "600"  }} className="btn btn-secondary" onClick={(e)=>handleAddToCart(e)}>
                    THÊM VÀO GIỎ
                </button>
                
                <button style={{ cursor: "pointer", fontWeight: "600" }} className="btn btn-primary">
                    MUA NGAY
                </button>
            </div>

            </div> 

            </div>
    </article>
  );
}

export default Detail;