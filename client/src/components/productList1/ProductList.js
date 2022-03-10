import React, { useState, useEffect } from 'react';
import ItemsCard from './ItemsCard';

import FilterColumn from './FilterColumn';

import './productList.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [Images, setImages] = useState();

    useEffect(() => {
        const sortedList = [...products].sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
        setProducts(sortedList)
    }, [])
    
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

        return (
            <div className='productListSection'>

                <FilterColumn />
                <div className="listContainer">
                    {
                        products.map((prod) => (
                            <ItemsCard props={prod} key={prod.id} />
                        ))
                    }

                </div>
            </div>

        )
    
}

export default ProductList;