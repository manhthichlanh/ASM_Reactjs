import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import ToastMessage from '../../untils';
import './login.css';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fg, setFg ] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const validate = (formData) => {
    let errors = {};
  
    if (validator.isEmpty(formData.username)) {
      errors.username = 'Vui lòng nhập tên đăng nhập';
    }
  
    if (validator.isEmpty(formData.password)) {
      errors.password = 'Vui lòng nhập mật khẩu';
    }
  
    return errors;
  };
  const makeStorage = (user) => {
    localStorage.setItem("user",JSON.stringify(user));
    setFg(true);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { username, password };
    const errors = validate(formData);
    console.log(errors)
    for (const prop in errors) {
      ToastMessage(`${prop}: ${errors[prop]}`).error()
      console.log(`${prop}: ${errors[prop]}`);
    }
    if(Object.keys(errors).length === 0) {

      try {
        const res = await axios.post('http://localhost:8085/user/login', formData);

        if(res.data.user.active !== 1) {
          
          return ToastMessage("User Không Tồn Tại").error();
        
        } 
        else {

          makeStorage(res.data.user);

          ToastMessage(res.data.message).success();

        }

      } catch (error) {
        if (error.response) {
          ToastMessage(error.response.data.message).error();
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      }


 
    } 
    // axios.post('http://localhost:3005/login', {
    //   username,
    //   password
    // })
    // .then( async (response) => {
    //   const user = response.data.user;

    //   const message =response.data.message;

    //   setData(user);

    //   setMessage(message);

    //   if (response.status === 201) {
    //     const userId = user.userId
    //     const res = await fetch(`http://localhost:3005/carts?userId=${userId}&flag=0`);
    //     const data = await res.json();
    //     const book = data ? data.book:[];
    //     localStorage.setItem("cart", JSON.stringify(book));
    //     localStorage.setItem("user",JSON.stringify(user) );
    //     const timer = setTimeout(()=>{navigate("/");}, 1000);
    //     return 0;
    //   } 

    //   // console.log(data)
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
   
  };
    useEffect(()=>{
      const user = localStorage.getItem("user");

      if (user) navigate("/profile");
    },[fg])

    useEffect(() => {
      const hinh = document.querySelector(".hinhf");
      hinh.style.display = "none";
    },[]
    )
    return (
        <>
          
          <article className="article">
            <div className="top">
                
                <div className="in">
                    <p>Đăng Nhập</p>
                    <span>TRANG CHỦ › TÀI KHOẢN</span>
                </div>
                <img src="./images/hannah-morgan-39891.jpg" alt=""/>
            </div>
          <form onSubmit={(e) => handleSubmit(e) } method="post" className="form-flex">

              <input type="text" name="user" id="user" placeholder="Tên Đăng Nhập" className="inp-top" onChange={(e)=>handleUsernameChange(e)}/>
              <input type="password" name="pass" id="pass" placeholder="Mật Khẩu" onChange={(e)=>handlePasswordChange(e)}/>
              <input type="submit" value="Đăng Nhập" name="dangnhap" />
          </form>
          <div className="divider"></div>
          <div className="bottom-link">
              <div><Link to="/">Về Trang Chủ </Link></div>
              <div><Link to="/register">Đăng Ký</Link></div>
              <div><Link to="/forgot">Quên Mật Khẩu?</Link></div>
          </div>
       
      </article>
        </>
    )
}
export default Login