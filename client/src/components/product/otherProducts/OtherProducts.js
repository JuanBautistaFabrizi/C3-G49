import React from "react";
import ahora24c from "./Images/ahora24c.png"
import envioGratis from "./Images/envioGratis.png"
import aire from "./Images/aire.png"

import './otherProducts.css'

export default function OtherProducts(props){
    return(
        <div className="otherProducts">
            <h2>Personas interesadas en este producto tambén vieron</h2>
            <div className="allProducts">
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
                                    src={aire} 
                                    alt={props.productName}
                                    title={props.productName}
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
                            <h3 className="productName">{props.productName}</h3>
                            <div className="discountPrice">
                                <div><h3 className="creditOthers">$22.200</h3></div> 
                                <div><span className="discounOthers">24% OFF</span></div>
                            </div>
                            <strong className="realPrice">$ 15.000</strong>
                            <p className="arriving">Llega mañana</p>
                            <p className="takeit">Retiralo YA!</p>
                                
                            
                        </div>
                    </div>
                </a>

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
                                    src={aire} 
                                    alt={props.productName}
                                    title={props.productName}
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
                            <h3 className="productName">{props.productName}</h3>
                            <div className="discountPrice">
                                <div><h3 className="creditOthers">${props.fullPrice}</h3></div> 
                                <div><span className="discounOthers">24% OFF</span></div>
                            </div>
                            <strong className="realPrice">$ {props.cashPrice}</strong>
                            <p className="arriving">Llega mañana</p>
                            <p className="takeit">Retiralo YA!</p>
                                
                            
                        </div>
                    </div>
                </a>

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
                                    src=""
                                    alt={props.productName}
                                    title={props.productName}
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
                            <h3 className="productName">{props.productName}</h3>
                            <div className="discountPrice">
                                <div><h3 className="creditOthers">${props.fullPrice}</h3></div> 
                                <div><span className="discounOthers">24% OFF</span></div>
                            </div>
                            <strong className="realPrice">$ {props.cashPrice}</strong>
                            <p className="arriving">Llega mañana</p>
                            <p className="takeit">Retiralo YA!</p>
                                
                            
                        </div>
                    </div>
                </a>

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
                                    src=""
                                    alt={props.productName}
                                    title={props.productName}
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
                            <h3 className="productName">{props.productName}</h3>
                            <div className="discountPrice">
                                <div><h3 className="creditOthers">${props.fullPrice}</h3></div> 
                                <div><span className="discounOthers">24% OFF</span></div>
                            </div>
                            <strong className="realPrice">$ {props.cashPrice}</strong>
                            <p className="arriving">Llega mañana</p>
                            <p className="takeit">Retiralo YA!</p>
                                
                            
                        </div>
                    </div>
                </a>

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
                                    src=""
                                    alt={props.productName}
                                    title={props.productName}
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
                            <h3 className="productName">{props.productName}</h3>
                            <div className="discountPrice">
                                <div><h3 className="creditOthers">${props.fullPrice}</h3></div> 
                                <div><span className="discounOthers">24% OFF</span></div>
                            </div>
                            <strong className="realPrice">$ {props.cashPrice}</strong>
                            <p className="arriving">Llega mañana</p>
                            <p className="takeit">Retiralo YA!</p>
                                
                            
                        </div>
                    </div>
                </a>
            </div>
        </div>

    )
}