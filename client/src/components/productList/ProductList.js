import React, { useState, useEffect } from 'react';
import ItemsCard from './ItemsCard';

/*import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
*/

import FilterColumn from './FilterColumn';

import './productList.css'
export default function ProductList(){
        const [products, setProducts] = useState([])
    
    
        useEffect(() =>{
            fetch('http://127.0.0.1:8000/products')
            .then(response => response.json())
            .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
        },[])
    

    /*fetch (`https://127.0.0.1:8000/products`, {
        method: 'GET',
        headers: {
        "Accept": "application/json"
    }
    })*/
/*    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://127.0.0.1:8000/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                
            }
*/
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
