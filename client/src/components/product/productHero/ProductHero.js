import React from "react";

import './productHero.css'
import ahora12 from "../Images/ahora12.png"
import ahora18 from "../Images/ahora18.png"
import ahora24 from "../Images/ahora24.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Carrusel from "./Carrusel";

export default function ProductHero(props){
    return(
        <div className="cardHero">
            <div className="leftColumn">
                <Carrusel />
               
            </div>
            <div className="rightColumn">
                <div className="heroTitle">
                    <h2 className="productBrand">{props.brand}</h2>
                    <h1 className="productNameHero">{props.title}</h1>
                    <div className="pricesWrapped">
                        <div className="creditPrice">
                            <div><h3 className="creditHero">{props.price}</h3></div> 
                            <div><span className="discountHero">24% OFF</span></div>
                            
                        </div>
                        <h3 className="cashPrice">$ 40.000</h3>
                    </div>
                </div>
                <div className="payBank">
                    <h3>¡Aprovechá nuestras promociones bancarias!</h3>
                    <div href="" className="specialOferts">
                        <div className="paymentOptions">
                            <img 
                                src={ahora24} 
                                alt="ahora 24" 
                                title="Pagá en 24 cuotas">
                            </img>
                            <div className="paymentInfo">
                                <p>24 cuotas fijas de </p>
                                <small>Precio financiado: </small>
                                <small>CFT: - TEA:</small>
                            </div>
                        </div>
                        <div className="paymentOptions">
                            <img 
                                src={ahora18} 
                                alt="ahora 18" 
                                title="Pagá en 18 cuotas">
                            </img>
                            <div className="paymentInfo">
                                <p>18 cuotas fijas de </p>
                                <small>Precio financiado: </small>
                                <small>CFT: - TEA:</small>
                                </div>
                        </div>
                        <div className="paymentOptions">
                            <img 
                                src={ahora12} 
                                alt="ahora 12" 
                                title="Pagá en 12 cuotas">
                            </img>
                            <div className="paymentInfo">
                                <p>12 cuotas fijas de </p>
                                <small>Precio financiado: </small>
                                <small>CFT: - TEA:</small>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div className="buyButton">
                    <button className="buyProduct">COMPRAR</button>
                </div>
                <div className="shippingHeroe">
                    <div className="sendHeroe">
                        <svg className="truckIcon" aria-hidden="true" focusable="false" 
                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 512">
                            <path fill="#000"  
                            d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 
                            512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 
                            384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 
                            384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5
                            0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 
                            368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 
                            208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 
                            506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/>
                        </svg>
                        <div className="deliveryProduct">
                            <p className="blackText">Envío a <span>XXX (CPxxx)</span>: <strong className="deliveryPrice">$799</strong></p>
                            <p className="greenText">Llega en 48hs</p>
                            <a className="blueText">Consultar otro código postal 
                            <svg className="rightArrow" xmlns="http://www.w3.org/2000/svg"  width="10" height="10" viewBox="0 0 256 512">
                                <path fill="rgb(0, 106, 253)" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 
                                0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 
                                160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                                </svg>
                            </a>
                        </div>    
                    </div>
                    <div className="withdraw">
                        <svg className="storeIcon" width="30" height="30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="#000" d="M495.5 223.2C491.6 223.7 487.6 224 483.4 224C457.4 224 
                            434.2 212.6 418.3 195C402.4 212.6 379.2 224 353.1 224C327 224 
                            303.8 212.6 287.9 195C272 212.6 248.9 224 222.7 224C196.7 224
                            173.5 212.6 157.6 195C141.7 212.6 118.5 224 92.36 224C88.3 224 
                            84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 
                            13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 
                            13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2H495.5zM499.7 
                            254.9C503.1 254.4 508 253.6 512 252.6V448C512 483.3 483.3 512 448 
                            512H128C92.66 512 64 483.3 64 448V252.6C67.87 253.6 71.86 254.4 75.97 
                            254.9L76.09 254.9C81.35 255.6 86.83 256 92.36 256C104.8 256 116.8 254.1 
                            128 250.6V384H448V250.7C459.2 254.1 471.1 256 483.4 256C489 256 494.4 
                            255.6 499.7 254.9L499.7 254.9z"/>
                        </svg>
                        <div className="withdrawProduct">
                            <p className="blackText">Retiro GRATIS en sucursal</p>
                            <p className="greenText">Retiralo YA!</p>
                            <a className="blueText">Ver sucrusales disponibles 
                            <svg className="rightArrow" xmlns="http://www.w3.org/2000/svg"  width="10" height="10" viewBox="0 0 256 512">
                                <path fill="rgb(0, 106, 253)" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 
                                0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 
                                160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    )
    }
