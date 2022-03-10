import React, { useState, useEffect } from 'react';
import televisores from '../img/televisores.png';
import celulares from '../img/celulares.png';
import airesyventilacion from '../img/airesyventilacion.png';
import herramientasdejardin from '../img/herramientasdejardin.png';
import bebesCochecito from '../img/bebesCochecito.jpg';
import saludPesas from '../img/saludPesas.jpg';

import './secondHome.css';

function SecondHome(props) {
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

    function cashPrice (totalPrice) {
        return Math.round(totalPrice - 0.24 *totalPrice);
    }

    return (
        <div>
            <div className='divCategories center'>
                <div>
                    <div className='categories'>
                        <ul className='ulcategories'>
                            <li>
                                <div className='licategories'>
                                    <a href="">
                                        <figure>
                                            <picture>
                                                <img className='img' src={televisores} style={{ height: '150px' }} alt="categoria" />
                                            </picture>
                                        </figure>
                                        <span>TV, Audio y Video</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='licategories'>
                                    <a href="">
                                        <figure>
                                            <picture>
                                                <img className='img' src={celulares} style={{ height: '150px' }} alt="categoria" />
                                            </picture>
                                        </figure>
                                        <span>Celulares y Notebooks</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='licategories'>
                                    <a href="">
                                        <figure>
                                            <picture>
                                                <img className='img' src={airesyventilacion} style={{ height: '150px' }} alt="categoria" />
                                            </picture>
                                        </figure>
                                        <span>Electrodomésticos y AA</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='licategories'>
                                    <a href="">
                                        <figure>
                                            <picture>
                                                <img className='img' src={herramientasdejardin} style={{ height: '150px' }} alt="categoria" />
                                            </picture>
                                        </figure>
                                        <span>Hogar, Muebles y Jardín</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='licategories'>
                                    <a href="">
                                        <figure>
                                            <picture>
                                                <img className='img' src={saludPesas} style={{ height: '150px' }} alt="categoria" />
                                            </picture>
                                        </figure>
                                        <span>Salud, Belleza y Fitness</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='licategories'>
                                    <a href="">
                                        <figure>
                                            <picture>
                                                <img className='img' src={bebesCochecito} style={{ height: '150px' }} alt="categoria" />
                                            </picture>
                                        </figure>
                                        <span>Bebes y Niños</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='divCardsOfertas center'>
                <section>
                    <div className='cartelofertas'>
                        <span>OFERTAS POR TIEMPO LIMITADO</span>
                    </div>
                    <div>
                        <ul className='cards'>
                            {products.slice(0, 5).map((prod) => (
                                <li className='card' key={prod.id}>
                                    <a href="">
                                        <div className='divcard'>
                                            <img style={{ height: "18rem" }} src={`../../../asset/${prod.img}`} alt="" />
                                            <h3>{prod.name}</h3>
                                            <div className="discountPriceList">
                                                <div><h3 className="creditLists">$ {prod.price}</h3></div>
                                                <div><span className="discountList">24% OFF</span></div>
                                            </div>
                                            <strong className="realPriceList">$ {cashPrice(prod.price)}</strong>
                                            <p className="arrivingList">Retiralo YA!</p>
                                        </div>
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SecondHome;