import axios from "axios";
import {useState, useEffect} from "react";
import Product from "./ProductItem";
import './ListOfProduct.css'
function ProductsList({categoryId,sortBy}) {
    const [bookData,setBook] = useState([]);
    const [sortData, setSortData] = useState([])
    function DataProccess(s) {
      let newArr = bookData.slice();
      switch (s) {
      

        case "1":
          console.log(s)

          newArr.sort((a,b)=>(Date.parse(b.createAt) - Date.parse(a.createAt)));
          setSortData(newArr)
          console.log(newArr)
          break;
        case "2":
          console.log(s)
          newArr.sort((a,b)=>(b?.price - a?.price));
          setSortData(newArr)
          console.log(newArr)
          break;
        case "3":
          console.log(s)
          console.log(s)
          newArr.sort((a,b)=>(a?.price - b?.price));
          setSortData(newArr)
          console.log(newArr)
          break;
        default:
          newArr = bookData;
          setSortData(newArr)
          console.log(newArr)
          break;
      }
    }
    useEffect(()=>{
        axios.get('http://localhost:8085/product/read/')
        .then(response => {
          setBook(response.data.data.Products);
          setSortData(response.data.data.Products)
        })
        .catch(error => {
          console.error(error);
        });
    },[])

   useEffect(() => {
    // console.log(sortBy)
    DataProccess(sortBy)
   },[sortBy,categoryId]
   )

    return (
        <div className="row">
            {
              sortData.slice(0, 8).map((product, index) => {
                  if (typeof categoryId !== 'undefined' ) {
                    if (product.categoryId._id===categoryId) {
                      return (

                        <Product
                            key={index}
                            data = {product}
                          />
                    ) 
                    }
                  } else {
                    return (

                      <Product
                          key={index}
                          data = {product}
                        />
                  ) 
                  }
                
          
              })
            }
        </div>


    )
}
export default ProductsList;