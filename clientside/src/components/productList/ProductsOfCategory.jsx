import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ProductsList from "./ProductsList";
function ProductsOfCategory() {
    const {cateId} = useParams();
    const [sortBy,setSortBy] = useState(0);

    function handleChange(value) {
        setSortBy(value)
    }
    return (
        <>
            <article className="listOfProducts">
                <select name="" id="" value={sortBy} onChange={(e)=>handleChange(e.target.value)}>
                    <option value="0">Sắp xếp theo</option>
                    <option value="1">Mới nhất</option>
                    <option value="2">Giá: Cao - Thấp</option>
                    <option value="3">Giá: Thấp - Cao</option>
                </select>

                <ProductsList 
                    categoryId={cateId}
                    sortBy={sortBy}
                />
            </article>
  
        </> 
    )
}
export default ProductsOfCategory;