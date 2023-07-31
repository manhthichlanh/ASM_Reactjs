import React from "react";
import {Link} from 'react-router-dom';
import { useEffect } from "react";
function Footer() {
  
    return (
        <>
        
            <footer>
                <div className="hinhf" id="hinhload" style={{ display: "none" }}>
                    <img src="/images/footer.jpg" alt=""/>
                </div>
                <div className="duoi">
                    <div className="record">
                            <div className="field">
                                <div className="title">MUA HÀNG TRỰC TUYẾN</div>
                                <div className="phonen">
                                    0938.803.633 <br/> 1900.633.501
                                </div>
                                <div className="link"><Link href="#">sale.online@totoshop.vn</Link></div>
                            </div>
                            <div className="field">
                                <div className="title">HOTLINE GÓP Ý</div>
                                <div className="phonen">
                                    0908.18.12.89
                                </div>
                                <div className="link"><Link href="#">cskh@totoshop.vn</Link></div>
                            </div>
                            <div className="field">
                                <div className="dau">Thông tin</div>
                                <div className="noidung">
                                    <Link href="#">Giới thiệu</Link>
                                    <Link href="#">Liên hệ công ty</Link>
                                    <Link href="#">Đối tác</Link>
                                    <Link href="#">Tuyển dụng</Link>
                                </div>
                            </div>
                            <div className="field">
                                <div className="dau">Chính sách
                                </div>
                                <div className="noidung">
                                    <Link href="#">Chính sách đổi hàng</Link>
                                    <Link href="#">Chính sách bảo hành</Link>
                                    <Link href="#">Chính sách bảo mật</Link>
                                    <Link href="#">Chính sách hoàn tiền</Link>
                                </div>
                            </div>
                            <div className="field">
                                <div className="dau">FAQ
                                </div>
                                <div className="noidung">
                                    <Link href="#">Thanh toán và vận chuyển</Link>
                                    <Link href="#">Hướng dẫn chọn size</Link>
                                    <Link href="#">Kiểm tra thông tin đơn hàng</Link>
                                    <Link href="#">Câu hỏi thường gặp</Link>
                                </div>
                            </div>
                            
                    </div>
                    {/* <div className="thongtin">
                        <span style={{ paddingTop: "40px", paddingBottom: "40px" }} >
                                <div className="info">
                                    <br/>
                                    CÔNG TY TNHH SXTM & DV TOTO GROUP
                                    <br style={{ paddingTop: "40px" }}/>
                                    Địa chỉ: 304 - 306 Nguyễn Trãi, P.8, Q.5, TPHCM <br /> 
                                    Điện thoại: 0938803633 <br /> 
                                    DKKD số: 41C8013053 cấp ngày 01/12/2010, nơi cấp UBND Quận 3 
                                    <br />
                                </div>
                             
                                
                                <img src="./images/chatluong.png" alt="" style={{ width: "15%"   }} className="quanlity" />
                                
                            </span>
                 
                        
                        
                    </div> */}
                    <div className="info-section">
                        <div className="info">
                            <span className="company-name" >CÔNG TY TNHH SXTM & DV TOTO GROUP </span> 
                            <span className="address">Địa chỉ: 304 - 306 Nguyễn Trãi, P.8, Q.5, TPHCM</span>  <br />
                            <span className="phone" >Điện thoại: 0938803633</span> 
                            <span className="registration-info">DKKD số: 41C8013053 cấp ngày 01/12/2010, nơi cấp UBND Quận 3</span>
                        </div>
                        <div className="quality">
                            <img src="/images/chatluong.png" alt="Chất lượng" />
                        </div>
                    </div>
                </div>
            </footer>
       
        </>
    )
}
export default Footer;