import React from "react";

import ahora24c from "./otherProducts/Images/ahora24c.png"
import envioGratis from "./otherProducts/Images/envioGratis.png"


import './otherProducts/otherProducts.css'

const ItemCard = ({props}) =>{
    return(
        <a href="" className="otherProductCard">
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
                    <strong className="realPrice">$ 15.000</strong>
                    <p className="arriving">Llega mañana</p>
                    <p className="takeit">Retiralo YA!</p>
                        
                    
                </div>
            </div>
        </a>
    )
}

export default ItemCard;