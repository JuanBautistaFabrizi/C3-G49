import React, { useState, useEffect } from 'react';
import Product from '../product/Product';

export default function ProductList(){
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=10')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])


    return (
        <>
            <div className="col ">
            {
                products.map((prod) => (
                    <Item data={prod} key= {prod.id} />
                ))
            }
            </div>
        </>
    )
}