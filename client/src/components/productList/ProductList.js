import React, { useState, useEffect } from 'react';
import ItemsCard from './ItemsCard';

import FilterColumn from './FilterColumn';

import './productList.css'
export default function ProductList(){
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=10')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])


    return (
        <div className='productListSection'>

            <FilterColumn />
            <div className="listContainer">
    
            {
                products.map((prod) => (
                    <ItemsCard props={prod} key= {prod.id} />
                ))
            }
            
            </div>
        </div>
    )
}