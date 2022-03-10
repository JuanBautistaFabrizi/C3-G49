import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import './carrusel.css'

export default function Carrusel (props){
    const [products, setProducts] = useState([]);

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [Images, setImages] = useState();

    const urlProducts = `http://127.0.0.1:8000/products/${id}`;

    const fetchData = async (url) => {
        try {
            const res = await fetch(urlProducts);
            const data = await res.json();

            setProduct(data);
            setImages(data.img);
            
        } catch (err) {
            console.log(err);
        }
    }

    fetchData();

    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={`../../../../asset/${product.img}`} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
            <img src={`../../../../asset/${product.img}`} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
            <img src={`../../../../asset/${product.img}`} className="d-block w-100" alt="..."></img>
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