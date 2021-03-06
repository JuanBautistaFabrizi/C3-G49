import React, { useState, useEffect} from 'react';
import envios from '../img/envios.png';
import envios2 from '../img/envios2.png';
import telollevamos from '../img/telollevamos.png';
import './thirdHome.css';

function ThirdHome() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=5')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])

  return (
    <div>
        <div className='divEnvios center'>
        <a  className='enviosa1' href="https://www.fravega.com/l/?promociones=hasta-14999">
        <figure>
            <picture>
                <source />
                <img src={envios2} alt="promocion" style={{ heigth:'254px', width:'238px'}} />
            </picture>
        </figure>
        <div>
            <header>
                <picture>
                    <source />
                    <img style={{ height: "32px", width:"100px"}} src={telollevamos} alt="logo de promocion" />
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
                    <img src={envios} alt="promocion" style={{ heigth:'254px', width:'238px'}} />
                </picture>
            </picture>
        </figure>
        <div>
            <header>
                <picture>
                    <source />
                    <img style={{ height: "32px", width:"100px", marginBottom: "13px"}} src={telollevamos} alt="logo de promocion" />
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
            { products.map((prod) => (
                        <li className='cardd' key={prod.id}>
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
    </div>
  )
}

export default ThirdHome;