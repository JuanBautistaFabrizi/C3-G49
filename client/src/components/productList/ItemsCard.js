import React from "react";

import ahora24c from "../product/otherProducts/Images/ahora24c.png"
import envioGratis from "../product/otherProducts/Images/envioGratis.png"

import { Link } from "react-router-dom";

import './productList.css';

const ItemsCard = ({props}) =>{
    return(
        <Link to="/producto/${props.id}" className="listCard">
            <div className="listProduct">
                <div className="listImg">
                    <img className="listFreeShip"
                        src={envioGratis} 
                        alt="Envío gratis en Capital GBA" 
                        title="Envío gratis"
                    ></img>
                    <div className="listProdudctImg">
                        <img className="mainImgList"
                            src={props.thumbnail} 
                            alt={props.title}
                            title={props.title}
                            >
                        </img>
                    </div>
                    <img className="ahora24L"
                        src={ahora24c} 
                        alt="ahora 24" 
                        title="Pagá en 24 cuotas"
                    ></img>
                </div>
                <div className="listTexts">
                    <h3 className="productNameList">{props.title}</h3>
                    <div className="discountPriceList">
                        <div><h3 className="creditLists">$ {props.price}</h3></div> 
                        <div><span className="discountList">24% OFF</span></div>
                    </div>
                    <strong className="realPriceList">$ 15.000</strong>
                    <p className="arrivingList">Retiralo YA!</p>
                        
                    
                </div>
            </div>
        </Link>
    )
}

export default ItemsCard;