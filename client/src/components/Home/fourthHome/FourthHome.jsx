import React, { useState, useEffect } from 'react';
import off from '../img/35off.png';
import off2 from '../img/40off.jpg';
import off3 from '../img/30off.jpg';
import off4 from '../img/offabajo.jpg';
import rollerm from '../img/rollermarket.png';
import './fourthHome.css';

function FourthHome() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=5')
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    },[])

  return (
    <div>
        <div className='divOff center'>
            <a href="">
            <figure>
                <div className='figdiv1' style={{ backgroundImage: `url(${off})`}}>
                <div className='figdiv2'>
                    <span className='hasta'>hasta</span>
                    <span className='descuento'>35
                        <span className='porcentaje'>% <small style={{ fontSize: "10px" }}>OFF</small> </span>
                    </span>
                </div>
                </div>
            </figure>
            <div className='rebajas'>
                <span>REBAJAS ÚLTIMAS UNIDADES Aprovechalas con envío gratis en Capital y GBA en seleccionados.</span>
            </div>
            </a>
            <a style={{ marginLeft: "28px" }} href="">
            <figure>
                <div className='figdiv1' style={{ backgroundImage: `url(${off2})`}}>
                <div className='figdiv2'>
                    <span className='hasta'>hasta</span>
                    <span className='descuento'>40
                        <span className='porcentaje'>% <small style={{ fontSize: "10px" }}>OFF</small> </span>
                    </span>
                </div>
                </div>
            </figure>
            <div className='rebajas'>
                <span>FRÁVEGA HERRAMIENTAS hasta 6 sin interés y envío gratis en Capital y GBA en seleccionados.</span>
            </div>
            </a>
            <a style={{ marginLeft: "28px" }} href="">
            <figure>
                <div className='figdiv1' style={{ backgroundImage: `url(${off3})`}}>
                <div className='figdiv2'>
                    <span className='hasta'>hasta</span>
                    <span className='descuento'>30
                        <span className='porcentaje'>% <small style={{ fontSize: "10px" }}>OFF</small> </span>
                    </span>
                </div>
                </div>
            </figure>
            <div className='rebajas'>
                <span>Hasta 18 sin interés en heladeras, lavarropas, cocinas y purificadores seleccionados.</span>
            </div>
            </a>
        </div>

        <div className='divOfertasDestacadas2 center'>
            <h2>Todo lo Nuevo en Frávega. Hasta 40% OFF!</h2>
            <ul className='cards'>
            { products.map((prod) => (
                        <li className='cardd' key={prod.id}>
                            <div className='divcard'>
                                <img src={prod.thumbnail} style={{ height: "200px" }} alt="" />
                                <h3>{prod.title}</h3>
                                <h5>$ {prod.price}</h5>
                            </div>
                        </li>
                ))
            }
            </ul>
        </div>

        <div className='divOff2 center'>
            <a href="">
            <div className='div11'>
                <figure style={{ margin: "0px", padding: "0px"}}>
                    <picture>
                        <source />
                        <img src={off4} style={{ height:'194px', width:'298px'}} alt="HASTA 50% OFF" />
                    </picture>
                </figure>
            </div>
            <div className='divoff22'>
                <h2>HASTA 50% OFF</h2>
                <p style={{ fontSize: "19px" }}>Hasta 6 cuotas sin interés en productos de FITNESS seleccionados.</p>
                <div>Ver más</div>
            </div>
            </a>
            <a href="">
            <div className='divoff11'>
                <figure style={{ margin: "0px", padding: "0px"}}>
                    <picture>
                        <source />
                        <img src={rollerm} style={{ height:'194px', width:'298px'}} alt="LLEGÓ ROLLER MARKET" />
                    </picture>
                </figure>
            </div>
            <div className='divoff22'>
                <h2>LLEGÓ ROLLER MARKET</h2>
                <p style={{ fontSize: "17px" }}>Cortinas traslúcidas y black out con 30% off en todo, 6 cuotas sin interés y envío gratis en seleccionados.</p>
                <div>Ver más</div>
            </div>
            </a>
        </div>
    </div>
  )
}

export default FourthHome;