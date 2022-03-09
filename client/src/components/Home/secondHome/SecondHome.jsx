import React, { useState, useEffect } from 'react';
import televisores from '../img/televisores.png';
import celulares from '../img/celulares.png';
import airesyventilacion from '../img/airesyventilacion.png';
import herrdejardin from '../img/herramientasdejardin.png';
import heladeras from '../img/heladeras.png';
import notebooks from '../img/notebooks.png';
import './secondHome.css';

function SecondHome() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=4')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])

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
                                    <img className='img' src={televisores} style={{height:'150px'}} alt="categoria" />
                                </picture>
                            </figure>
                            <span>Televisores</span>
                            </a>
                        </div>
                    </li>
                    <li>
                    <div className='licategories'>
                            <a href="">
                            <figure>
                                <picture>
                                    <img className='img' src={celulares} style={{height:'150px'}} alt="categoria" />
                                </picture>
                            </figure>
                            <span>Celulares</span>
                            </a>
                        </div>
                    </li>
                    <li>
                    <div className='licategories'>
                            <a href="">
                            <figure>
                                <picture>
                                    <img className='img' src={airesyventilacion} style={{height:'150px'}} alt="categoria" />
                                </picture>
                            </figure>
                            <span>Aires y ventilación</span>
                            </a>
                        </div>
                    </li>
                    <li>
                    <div className='licategories'>
                            <a href="">
                            <figure>
                                <picture>
                                    <img className='img'src={heladeras} style={{height:'150px'}} alt="categoria" />
                                </picture>
                            </figure>
                            <span>Heladeras, Freezers y Cavas</span>
                            </a>
                        </div>
                    </li>
                    <li>
                    <div className='licategories'>
                            <a href="">
                            <figure>
                                <picture>
                                    <img className='img' src={notebooks} style={{height:'150px'}} alt="categoria" />
                                </picture>
                            </figure>
                            <span>Notebooks</span>
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
            { products.map((prod) => (
                        <li className='card' key={prod.id}>
                            <a href="">
                                <div className='divcard'>
                                    <img style={{ height: "200px" }} src={prod.thumbnail} alt="" />
                                    <h3>{prod.title}</h3>
                                    <h5>$ {prod.price}</h5>
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