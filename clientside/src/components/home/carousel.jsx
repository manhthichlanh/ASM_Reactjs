

import { useState, useRef, useEffect } from "react";

function Carousel() {
  const [timeoutRef, setTimeoutRef] = useState(null);
  const indexRef = useRef(0);
  const [press, setPress] = useState(false);

  const forpoint = (n) => {
      
    indexRef.current = n - 1;
    setPress((prevPress) => !prevPress);

    setTimeout(() => {
      setPress(false);
    }, 4000); 

};

useEffect(() => {
  let timeoutId;

  const show = document.querySelectorAll(".show");
  const dots = document.querySelectorAll(".dot");

  const carousel = () => {
    for (let i = 0; i < show.length; i++) {
      show[i].style.display = "none";
      dots[i].style.removeProperty("background-color");
    }

    indexRef.current++;
    if (indexRef.current > show.length) {
      indexRef.current = 1;
    }

    show[indexRef.current - 1].style.display = "block";
    dots[indexRef.current - 1].style.backgroundColor = "white";

    if (!press) {
      timeoutId = setTimeout(() => {
        carousel();
      }, 4000);
    }
  };

  carousel();

  return () => clearTimeout(timeoutId);
}, [press]);

  return (
    <header>
                <div className="show fade" >
                    <img src="./images/Slide_1.jpg" alt="" id="slide"/>
                </div>
                <div className="show fade " >
                    <img src="./images/Slide_2.jpg" alt="" id="slide"/>
                </div>
                <div className="show fade" >
                    <img src="./images/Slide_3.jpg" alt="" id="slide"/>
                </div>
                <div className="show fade" >
                    <img src="./images/Slide_4.jpg" alt="" id="slide"/>
                </div>
       
                    <div className="nutchon">
                        <div className="dot" onClick={()=>forpoint(1)}></div>
                        <div className="dot" onClick={()=>forpoint(2)}></div>
                        <div className="dot" onClick={()=>forpoint(3)}></div>
                        <div className="dot" onClick={()=>forpoint(4)}></div>
                    </div>
                   
      
                </header>
  );
}

export default Carousel;