import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/product-card";

export default function Products(){
    const [products,setProducts]=useState([]);
    const navigate=useNavigate();

    return (
        <div className="container">
            <button className="btn" onClick={()=>navigate(-1)}>Go Back</button>
            <div className="title">
                <h1>Cocktails</h1>
            </div>
            <div className="cocktail-container">
                {products.map((product)=>(
                    <ProductCard product={product}/>
                ))}
            </div>
            <button className="btn" onClick={()=>navigate("order-summary")}>Place Order</button>
        </div>
    );
}