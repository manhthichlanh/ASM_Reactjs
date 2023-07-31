import {useEffect} from "react";
import { Link } from "react-router-dom";
import './user.css'
function Profile(){
    useEffect(() => {
      const hinh = document.querySelector(".hinhf");
      hinh.style.display = "none";
    },[]
    )
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
            <article className="article">
                <div className="topprofile">
                    
                    <div className="inprofile">
                        <p>Trang thông tin</p>
                        <span>TRANG CHỦ › Trang thông tin</span>
                    </div>
                    <img src="./images/bg-page-header.jpg" alt=""/>
                </div>
                <div className="left-pro">
                    <div className="headpro">
                        Tài khoản
                    </div>
                    
                    <div className="profile-bottom-link">
                        <p>Thông Tin Tài Khoản</p>
                        
                        <div className="on-line"></div>
                        <div><Link to="/changeprofile">Thay Đổi Thông Tin Tài Khoản</Link></div>
                        <div><Link to="/changepassword">Thay Đổi Mật Khẩu</Link></div>
                        <div><Link to="/orderlist">Quản lý đơn hàng</Link></div>
                        <div><Link to="/logout"><i className="bi bi-box-arrow-right">&nbsp;</i>Đăng Xuất</Link></div>
                    </div>
                </div>
                
            </article>
        </>
    )
}
export default Profile