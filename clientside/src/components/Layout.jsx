import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
    return (
        <>
          <div className="cover">
            <Header />
            <div className="container">

              <Outlet />
            
              <Footer />
              
            </div>
        </div>
      </>

    )
}
export default Layout;