import React from "react";

function Modal() {
    const closeModal = (e) => {
        e.preventDefault();
        const search = document.getElementById("timk");
        if(search.style.visibility==='visible') search.style.visibility="hidden"
    }
    
    return (
        <>
        <div className="sear" style= {{visibility: "hidden", display: "flex", justifyContent: "center"}} id="timk">
                <div className="trongsuot"></div>
                <div className="timkiem">
                    <a onClick={() => {
                      window.location.reload();
                    }
                    } >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </a>
                    <input type="text" name="" id=""/>
                    <a onClick={(e)=>{closeModal(e)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Modal;