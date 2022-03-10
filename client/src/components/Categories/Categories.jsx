import React, { useState, useEffect } from 'react';
import './Categories.css';

import { Link } from "react-router-dom";

function Categories() {
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

  return (
    <div className='divcat'>
        <nav className='navcat'>
            <ol className='olcat'>
                <li className='licat'>
                    <div className='divli'>
                        <Link to={"./Tv"} className='acat' href=""><span className='catspan'>Tv, Audio y Video</span></Link>
                    </div>
                    
                </li>
                <li className='licat'>
                <div className='divli'>
                        <Link to={"./Celulares"} className='acat' href=""><span className='catspan'>Celulares, Notebooks y Tecnología</span></Link>
                    </div>
                    
                </li>
                <li className='licat'>
                <div className='divli'>
                        <Link to="" className='acat' href=""><span className='catspan'>Electrodomésticos y Aires Ac.</span></Link> 
                    </div>
                    
                </li>
                <li className='licat'>
                <div className='divli'>
                        <Link to="" className='acat' href=""><span className='catspan'>Hogar, Muebles y Jardín</span></Link> 
                    </div>
                    
                </li>
                <li className='licat'>
                <div className='divli'>
                        <Link to="" className='acat' href=""><span className='catspan'>Salud, Belleza y Fitness</span></Link> 
                    </div>
                    
                </li>
                <li className='licat'>
                <div className='divli'>
                        <Link to="" className='acat' href=""><span className='catspan'>Bebés y Niños</span></Link> 
                    </div>
                    
                </li>
            </ol>
        </nav>
    </div>
  )
}

export default Categories;