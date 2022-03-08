import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import ahora24c from "./Images/ahora24c.png"
import envioGratis from "./Images/envioGratis.png"

import './otherProducts.css'

const ItemCard = ({props}) =>{
    const [products, setProducts] = useState([])

    /*useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=10')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])*/

    useEffect(() =>{
        fetch('127.0.0.1:8000/products')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])

    function cashPrice (totalPrice) {
        return Math.round(totalPrice - 0.24 *totalPrice);
    }


    return(
        <Link to={`/producto/${props.id}`} className="otherProductCard">
            <div className="otherProduct">
                <div className="othersImg">
                    <img className="freeShip"
                        src={envioGratis} 
                        alt="Envío gratis en Capital GBA" 
                        title="Envío gratis"
                    ></img>
                    <div className="otherProdudctImg">
                        <img className="mainImgOther"
                            src={props.thumbnail} 
                            alt={props.title}
                            title={props.title}
                            >
                        </img>
                    </div>
                    <img className="ahora24c"
                        src={ahora24c} 
                        alt="ahora 24" 
                        title="Pagá en 24 cuotas"
                    ></img>
                </div>
                <div className="otherTexts">
                    <h3 className="productName">{props.title}</h3>
                    <div className="discountPrice">
                        <div><h3 className="creditOthers">$ {props.price}</h3></div> 
                        <div><span className="discounOthers">24% OFF</span></div>
                    </div>
                    <strong className="realPrice">$ {cashPrice(props.price)}</strong>
                    <p className="arriving">Llega mañana</p>
                    <p className="takeProduct">Retiralo YA!</p>
                        
                    
                </div>
            </div>
        </Link>
    )
}

export default ItemCard;