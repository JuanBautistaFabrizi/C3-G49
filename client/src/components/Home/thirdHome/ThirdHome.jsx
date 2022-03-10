import React, { useState, useEffect } from 'react';
import envios from '../img/envios.png';
import envios2 from '../img/envios2.png';
import telollevamos from '../img/telollevamos.png';
import './thirdHome.css';

import { Link } from "react-router-dom";

function ThirdHome() {
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

    function cashPrice(totalPrice) {
        return Math.round(totalPrice - 0.24 * totalPrice);
    }

    return (
        <div>
            <div className='divEnvios center'>
                <a className='enviosa1' href="https://www.fravega.com/l/?promociones=hasta-14999">
                    <figure>
                        <picture>
                            <source />
                            <img src={envios2} alt="promocion" style={{ heigth: '254px', width: '238px' }} />
                        </picture>
                    </figure>
                    <div>
                        <header>
                            <picture>
                                <source />
                                <img style={{ height: "32px", width: "100px" }} src={telollevamos} alt="logo de promocion" />
                            </picture>
                        </header>
                        <div>
                            <h2>Equipados para el cole y la oficina.</h2>
                        </div>
                        <p>Hasta 35% off y hasta 12 cuotas sin interés en informática y muebles de oficina seleccionados.</p>
                        <span className='vermas'>Ver más</span>
                    </div>
                </a>
                <a className='enviosa2' href="https://www.fravega.com/l/?promociones=hasta-14999">
                    <figure>
                        <picture>
                            <picture>
                                <source />
                                <img src={envios} alt="promocion" style={{ heigth: '254px', width: '238px' }} />
                            </picture>
                        </picture>
                    </figure>
                    <div>
                        <header>
                            <picture>
                                <source />
                                <img style={{ height: "32px", width: "100px", marginBottom: "13px" }} src={telollevamos} alt="logo de promocion" />
                            </picture>
                        </header>
                        <div>
                            <h2 className='sillonoff'>HASTA 40% OFF</h2>
                        </div>
                        <p className='sillonoffp'>Hasta 18 sin interés en colchones, muebles y decoración seleccionados.</p>
                        <span className='vermas'>Ver más</span>
                    </div>
                </a>
            </div>

            <div className='divOfertasDestacadas center'>
                <h2>Aprovechá las ofertas destacadas</h2>
                <ul className='cards'>
                    {products.slice(8, 12).map((prod) => (
                        <li className='cardd' key={prod.id}>
                            <Link to={`/producto/${prod.id}`}>
                                <div className='divcard'>
                                    <img style={{ height: "14rem" }} src={`../../../asset/${prod.img}`} alt="" />
                                    <h3>{prod.name}</h3>
                                    <div className="discountPriceList">
                                        <div><h3 className="creditLists">$ {prod.price}</h3></div>
                                        <div><span className="discountList">24% OFF</span></div>
                                    </div>
                                    <strong className="realPriceList">$ {cashPrice(prod.price)}</strong>
                                    <p className="arrivingList">Retiralo YA!</p>
                                </div>
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ThirdHome;