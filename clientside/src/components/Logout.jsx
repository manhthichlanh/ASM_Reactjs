import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
function Logout(){
    const navigate = useNavigate();

    useEffect(()=>{
        const getuser = localStorage.getItem("user");
        if (getuser) {
            localStorage.removeItem("user");
            navigate("/login");
        }
        else localStorage.setItem("user",null);
        console.log("cóa")
    },[])
}
export default Logout;