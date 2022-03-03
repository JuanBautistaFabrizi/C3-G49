import React, { useState, useEffect } from 'react';
import ItemCard from "../ItemCard";

export default function OtherCarrusel (props){
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=10')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])

    return(
        <div className="otherCarrusel">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="allProducts">
            {
                products.map((prod) => (
                    <ItemCard props={prod} key= {prod.id} />
                ))
            }
            
               
            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

