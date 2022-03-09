import React, { useState, useEffect } from 'react';
import ItemCard from "./ItemCard";

import './otherProducts.css'

 export default function OtherProducts (props) {
    const [products, setProducts] = useState([])
    const baseURL = "https://127.0.0.1:8000/products";


   useEffect(() =>{
        fetch('baseURL')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])



    return(
        <div className="otherProducts">
            <h2>Personas interesadas en este producto tambén vieron</h2>
            <div className="allProducts">
            {
                products.map((prod) => (
                    <ItemCard props={prod} key= {prod.id} />
                ))
            }
               
            </div>
        </div>

    )
}
/*
<div className="allProducts">
            {
                products.map((prod) => (
                    <ItemCard props={prod} key= {prod.id} />
                ))
            }
               
            </div>
            */