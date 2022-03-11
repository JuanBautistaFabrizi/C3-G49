import React, { useState, useEffect } from 'react';
import './Categories.css';

import { Link } from "react-router-dom";

function Categories() {

const [categories, setCategories] = useState([]);
    const [Images, setImages] = useState();

    const urlProducts = "http://127.0.0.1:8000/categories";

    const fetchData = async (url) => {
        try {
            const res = await fetch(urlProducts);
            const data = await res.json();

        
            setImages(data.img);
            setCategories(data);

        } catch (err) {
            console.log(err);
        }
    }

    fetchData();

  return (

    
    <div className='divcat'>
        <nav className='navcat'>
            <ol className='olcat'>
            <div className='divli'>
                { categories.map((cat) => (
                            <li className='licat'>
                                <Link to={`/lista/${cat.id}`}>
                                    <h3>{cat.name}</h3>
                                </Link>
                            </li>
                    ))
                }
            </div>

               
              

            </ol>
        </nav>
    </div>
  )
}

export default Categories;