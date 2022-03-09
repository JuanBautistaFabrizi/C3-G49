import React, { useState, useEffect } from 'react';

import aire from "../Images/aire.jpg"
import aire2 from "../Images/aire2.jpg"
import aire3 from "../Images/aire3.jpg"

import './carrusel.css'

export default function Carrusel (props){
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=10')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[]);

    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={props.thumbnail} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
            <img src={aire2} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
            <img src={aire3} className="d-block w-100" alt="..."></img>
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
    )
  }