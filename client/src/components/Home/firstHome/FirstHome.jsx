import React from 'react';
import paymentMethods from '../img/payment-methods.png';
import paymentMethods2 from '../img/payment-methods2.png';
import paymentMethods3 from '../img/payment-methods3.png';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.png';
import slider3 from '../img/slider3.png';
import slider4 from '../img/slider4.png';
import slider5 from '../img/slider5.jpg';
import './firstHome.css';

function firstHome() {
  return (
    <div>
        <div className='sliderarrow'>
        <div className='slider'>
                <ul className='ul'>
                    <li className='li' id='item1'> <a href=""><img src={slider1} alt="" /></a> </li>
                    <li className='li' id='item2'> <a href=""><img src={slider2} alt="" /></a> </li>
                    <li className='li' id='item3'> <a href=""><img src={slider3} alt="" /></a> </li>
                    <li className='li' id='item4'> <a href=""><img src={slider4} alt="" /></a> </li>
                    <li className='li' id='item5'> <a href=""><img src={slider5} alt="" /></a> </li>
                </ul>
                <div className='arrows'>
                    <a href="#item1">
                    <i className='arrowleft'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </i>
                    </a>
                    <a href="#item5">
                    <i className='arrowright'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </i>
                    </a>
                </div>
                <div className='points'>
                    <ul>
                        <li>
                            <a href="#item1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#item2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#item3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#item4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#item5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
        <div>
            <div className='paymentdiv'>
                <div className='metodosDePago'>
                    <div className='container'>
                        <div>
                            <img className='cardicon' src={paymentMethods} style={{width: '200px', height:'28px'}} alt="Payment Methods"/>
                        </div>
                        <div>
                            <p style={{ margin: "0"}}>Pagá con crédito y débito</p>
                            <a href="">Ver promociones</a>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='container'>
                        <div>
                            <div className='iconcontainer'>
                                <img src={paymentMethods2} style={{height:'34px'}} alt="icon moneda" />
                            </div>
                        </div>
                        <div>
                            <div className='divtext'>
                                <p style={{ margin: "0"}}>Frávega Créditos.</p>
                                <a href="">Pagá Online.</a>
                            </div>
                            <div className='divtext'>
                                <a href="">Conocé más</a>
                                <p style={{ margin: "0"}}>y accedé al</p>
                                <a href="">catálogo exclusivo.</a>
                            </div>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='container'>
                        <div className='iconcontainer'>
                            <img src={paymentMethods3} style={{height: '34px'}} alt="icon" />
                        </div>
                        <div>
                            <p style={{ margin: "0"}}>Envíos a todo el país y retiro gratis</p>
                            <a href="">en más de 100 sucursales</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default firstHome;