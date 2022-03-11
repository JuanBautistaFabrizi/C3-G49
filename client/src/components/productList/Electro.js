import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FilterColumn from './FilterColumn';
import ItemsCard from './ItemsCard';

import './productList.css'

const Electro = () => {
    const [data, setData] = useState([]);
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
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    const Loading = () => {
        return (<>
            Loading
        </>
        );
    };
    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category_id === cat);
        setFilter(updateList);
    }
    const orderMenorPrice=()=>{
        const menor=data.sort((a,b)=>a.price-b.price);
        setFilter(menor);
        }
     const orderMayorPrice=()=>{
         const mayor=data.sort((a,b)=>b.price-a.price);
         setFilter(mayor);
     }   

    return (
        <div className='productListSection'>

           <div className='buttonOrder'>
                <h3 className='buttonTitle'>Ordenar por</h3>
                <button className='sortButton' onClick={() => orderMenorPrice()} >Menor precio</button>
                <button className='sortButton' onClick={() => orderMayorPrice()} >Mayor precio</button>
            </div>
            <div className="listContainer">
                {
                    data.slice(18, 22).map((prod) => (
                        <ItemsCard props={prod} key={prod.id} />
                    ))
                }

            </div>
        </div>

    )
}
export default Electro;