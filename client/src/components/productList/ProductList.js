import React, { useState, useEffect } from 'react';
import ItemCard from '../product/ItemCard';

/*import '../product/otherProducts/otherProducts.css';*/
import './productList.css'
export default function ProductList(){
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=10')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])


    return (
        <>
            <div className="listContainer">
            {
                products.map((prod) => (
                    <ItemCard props={prod} key= {prod.id} />
                ))
            }
            </div>
        </>
    )
}