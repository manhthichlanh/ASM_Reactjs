import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './components/home/Home';
import Layout from './components/Layout';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NoPage from './components/Nopage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Cart from './components/cart/Cart';
import Logout from './components/Logout';
import Profile from './components/user/profile';
import Detail from './components/product/Detail';
import Checkout from './components/order/checkout';
import OrderList from './components/user/orderList';
import ProductsOfCategory from './components/productList/ProductsOfCategory';
function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       
        <Route index element={<Home/>} />
        <Route path="product/:id" element={<Detail/>} />
        <Route path="product/productlist/" element={<ProductsOfCategory/>} />

        <Route path="product/category/:cateId" element={<ProductsOfCategory/>} />
        <Route path="checkout" element={<Checkout  />} />
        <Route path="blogs" element={<Blog  />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart  />} />
        <Route path="orderlist" element={<OrderList  />} />
        <Route path="logout" element={<Logout  />} />
        <Route path="*" element={<NoPage />} />
       
      </Route>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App;
