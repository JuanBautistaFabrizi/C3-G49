import React, { useState, useEffect } from 'react';
import ItemCard from "./ItemCard";

import { Link } from "react-router-dom";

import './otherProducts.css'

 export default function OtherProducts() {
    const [products, setProducts] = useState([]);
    const [Images, setImages] = useState();

    const urlProducts = "http://127.0.0.1:8000/products";

    const fetchData = async (url) => {
        try {
            const res = await fetch(urlProducts);
            const data = await res.json();

            setProducts(data);
            setImages(data.img);
            
        } catch (err) {
            console.log(err);
        }
    }

    fetchData();

        return(
            <div className="otherProducts">
                
                <h2>Personas interesadas en este producto también vieron</h2>
                        
                    <div className="allProducts">
                        {
                            products.map((prod) => (
                                <ItemCard props={prod} key={prod.id} />
                            ))
                        }
                    
                    </div>
                       
            </div>

        )
}
