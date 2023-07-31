import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './register.css';
import ToastMessage from '../../untils';
function Register() {

  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    address: '',
    password: '',
    phone: '',
    email: '',
    active: 1,
    role: 0,
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }
  const navigate = useNavigate();

  const [data, setData ] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8085/user/register/', formData)
    .then((response) => {
      const user = response.data.user;
      const message = response.data.message;
      console.log(message);
      // setData(user);
      ToastMessage(message).success();
      if (response.status === 201) {

        const timer = setTimeout(()=>{navigate("/login");}, 1000);

        return 0;

      } 
      // console.log(data)
    })
    .catch((error) => {
      console.error(error);
    });  
    };
    useEffect(() => {
      console.log(formData)
    },[formData]
    )
    return (
        <>
          <article class="article">
              <div class="top">
                  
                  <div class="in">
                      <p>Đăng Nhập</p>
                      <span>TRANG CHỦ › TÀI KHOẢN</span>
                  </div>
                  <img src="images/hannah-morgan-39891.jpg" alt=""/>
              </div>
              <form  method="post" class="form-flex" onSubmit={(e)=>handleSubmit(e)}>
                  <input type="text" name="fullname" id="" placeholder="Họ Và Tên" class="inp-top" value={formData.fullName} onChange={handleInputChange}/>
                  <input type="text" name="address" id="" placeholder="Địa Chỉ" value={formData.address} onChange={handleInputChange}/>
                  <input type="text" name="email" id="" placeholder="E-mail" value={formData.email} onChange={handleInputChange}/>
                  <input type="text" name="username" id="" placeholder="Tên Đăng Nhập" value={formData.username} onChange={handleInputChange}/>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder='Điện Thoại'/>

                  <input type="password" name="password" id="" placeholder="Mật Khẩu" value={formData.password} onChange={handleInputChange}/>
                  <input type="password" name="repass" id="" placeholder="Nhập Lại Mật Khẩu"/>
                  <input type="submit" value="Đăng Nhập" name="dangnhap" />
              </form>
              <div class="divider"></div>
              <div class="bottom-link">
                  <span><a href="index.php">Về Trang Chủ </a></span>
                  <span><a href="index.php?act=dangky">Đăng Ký</a></span>
                  <span><a href="#">Quên Mật Khẩu?</a></span>
              </div>
          </article>
        </>
    )
}
export default Register;