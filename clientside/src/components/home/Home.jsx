import React, {useEffect, useState, useRef} from "react";
import ProductsList from "../productList/ProductsList";
import { Link } from "react-router-dom";
import './home.css'
import { useAppContext } from "../../store/context";
import Carousel from "./carousel";
import Modal from "./Search";

function Home() {

    const scrollEffect = () => {
        const windowHeight = window.innerHeight;
        const Place = document.querySelector("#loader");
        const loaderTop =  Place.offsetTop;
        const loaderHeight = Place.offsetHeight;
        const scrollHeight = window.pageYOffset;
    
        const bottom = document.querySelector("#hinhload");
        const btTop =  bottom.offsetTop;
        const btHeight = bottom.offsetHeight;
        


        console.log(loaderTop - windowHeight + (loaderHeight*1/2));
     
        
        window.addEventListener('scroll', function scrollPlace() {
    

            if (window.scrollY >=  160 && window.scrollY <= 980) {
                Place.style.opacity = 1;
                Place.style.transform = 'translateX(0px)';
                Place.style.transition = '0.5s ease-in-out';
            } else {
                Place.style.opacity = 0;
                Place.style.transform = 'translateY(130px)';
            }
            if (window.scrollY >= 2300  ) {
                bottom.style.display= "block";
                bottom.style.opacity = 1;
                bottom.style.transform = 'translateX(0px)';
                bottom.style.transition = '0.7s ease-in-out';
            } else {
                bottom.style.opacity = 0;
                bottom.style.transform = 'translateX(-200px)';
                // this.alert("ẩn")
            }
        });
    }
    
    useEffect(()=>{
        (
            async () => {
                scrollEffect();

            }
            
        )()
    },[])

    return (
        <>
            <article>
            <Modal/>
            {/* <BookList/> */}
            <Carousel/>
                <div className="load" id="loader" >
                    <img id="anh1" src="./images/first.jpg"/>
                    <img id="anh1" src="./images/second.jpg"/>
                </div>
                <div className="new"> <Link href="">NEW ARRIVALS</Link></div>
                <div className="dividerr"><pre> O </pre></div>

                <ProductsList/>

                {/* <div className="row"> */}
                    {/* <div className="col">
                        <div className="col-img">
                            <img src="./images/product0.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>
                                
                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div>

                   <div className="col">
                        <div className="col-img">
                            <img src="./images/product1.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>

                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col">
                        <div className="col-img">
                            <img src="./images/product2.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>

                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col">
                        <div className="col-img">
                            <img src="./images/product3.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>

                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col">
                        <div className="col-img">
                            <img src="./images/product4.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>

                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col">
                        <div className="col-img">
                            <img src="./images/product5.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>

                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col">
                        <div className="col-img">
                            <img src="./images/product6.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>

                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className="col">
                        <div className="col-img">
                            <img src="./images/product7.jpeg" alt="" className="img-main"/>
                            <div className="card-module">
                                <div className="icon">
                                    <img src="./images/green-heart.webp" alt=""/>
                                </div>
                                <div className="count">0</div>
                            </div>
                        </div>
                        <div className="card-view">
                            
                            <div className="card-footer">

                                <div className="name">ÁO SƠ MI NỮ - TOTODAY - 02301</div>

                                <div className="price"><span>415.000</span>đ</div>
                       
                                <button type="button">
                                    <div className="icon">
                                        <img src="./images/cart.svg" alt=""/>
                                    </div>
                                    <div className="text-add">Thêm</div>
                                </button>
                                    
                       
                            </div>
                        </div>
                        
                        
                    </div> */}

                {/* </div> */}
           
                <div className="bannerngang">
                    <img src="./images/bannerngang.jpg" alt=""/>
                </div>
                
                <div className="divide"><pre> TIN TỨC MỖI NGÀY </pre></div>
                <div className="daily">
                    <div className="right">
                        <img src="./images/tintuc.jpg" alt=""/>
                    </div>
                    <div className="left">
                        <span>BÀI VIẾT XEM NHIỀU</span>
                        <div className="hang">
                            <img src="./images/t1.jpg" alt=""/>
                            <div className="cot">
                                <p>HAPPY WOMEN'S DAY 2020...</p>
                                <p>04-03-2022</p>
                                <h5>Tin khuyến mãi</h5>
                            </div>
                        </div>
                        <div className="hang">
                            <img src="./images/t2.jpg" alt=""/>
                            <div className="cot">
                                <p>NHỮNG CHIẾC TÚI NHỎ MA...</p>
                                <p>19-01-2022</p>
                                <h5>Tin tức - Thời trang</h5>
                            </div>
                        </div>
                        <div className="hang">
                            <img src="./images/t3.jpg" alt=""/>
                            <div className="cot">
                                <p>TOTO FRIEND ƠI! CÁM ƠN V...</p>
                                <p>21-01-2022</p>
                                <h5>Tin tức - Thời trang</h5>
                            </div>
                        </div>
                        <div className="hang">
                            <img src="./images/t4.jpg" alt=""/>
                            <div className="cot">
                                <p>CÙNG TOTO ĐỔI ÁO KHOÁC...</p>
                                <p>01-12-2021</p>
                                <h5>Chính sách - Thành viên</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="more">
                    <div className="middle">
                        <img src="./images/sync.png" alt=""/>
                        <Link href=""> Xem thêm nhiều tin khác</Link>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/_JgMCoppKHg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="youtube"></iframe>
                <div className="new"><Link href="">Hệ thống cửa hàng</Link></div>
                <div className="vien"><pre> O </pre></div>
            </article>

        </>
    )
}
export default Home;