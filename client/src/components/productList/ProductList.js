import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FilterColumn from './FilterColumn';
import ItemsCard from '../productList/ItemsCard';

const ProductList = () => {
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
   /* const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category_id === cat);
        setFilter(updateList);
    }*/
    const orderMenorPrice=()=>{
        const menor=data.sort((a,b)=>a.price-b.price);
        setFilter(menor);
        }
     const orderMayorPrice=()=>{
         const mayor=data.sort((a,b)=>b.price-a.price);
         setFilter(mayor);
     }   
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                   {/*} <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>Todos los productos</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronica")}>Pañales niños</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Pañales adultos</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")} >Accesorios</button>
        <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")} >Varios</button> */}
                    <button className='btn btn-outline-dark me-2' onClick={() => orderMenorPrice()} >menor precio</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => orderMayorPrice()} >mayor precio</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="listProdudctImg" key={product.id}>
                                        <img src={`../../../asset/${product.img}`} className="mainImgList" alt={product.name}/> {/*{`../../assets/${product.img}`}*/} 
                                        <div className="card-body">
                                            <h5 className="card-title mb-0 fw-bold">{product.name.substring(0, 12)}</h5>
                                            <p className="card-text">$ {product.price} </p>
                                            <NavLink to={`/paniales/${product.id}`} className="btn btn-outline-dark">Agregar al carrito</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        );
    };
    return (
        <div className='productListSection'>

           <div className='buttonOrder'>
                <button className='btn btn-outline-dark me-2' onClick={() => orderMenorPrice()} >menor precio</button>
                <button className='btn btn-outline-dark me-2' onClick={() => orderMayorPrice()} >mayor precio</button>
            </div>
            <div className="listContainer">
                {
                    data.map((prod) => (
                        <ItemsCard props={prod} key={prod.id} />
                    ))
                }

            </div>
        </div>

    )
}
export default ProductList;