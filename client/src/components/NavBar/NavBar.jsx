import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from './img/logo.png';
import creditos from './img/creditosFravega.png';

const NavBar = () => {
    const [name, setName] = useState([])

    useEffect(() =>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${name}`)
        .then(response => response.json())
        .then(respJSON => {console.log(respJSON.results); setName(respJSON.results)})
    },[])

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }

  return (
    <header className='headernav'>
        <div className='navPartOne'>
            <ul className='ulnav'>
                <li className='liOne'> 
                    <a className='aone' href="https://www.fravega.com/_secure/mi-cuenta/compras/"> 
                        <span className='spanone'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="20" height="20" viewBox="0 0 25 25" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="7" cy="17" r="2" />
                                <circle cx="17" cy="17" r="2" />
                                <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                                <line x1="3" y1="9" x2="7" y2="9" />
                            </svg> 
                            <span className='secondspan'>Seguí tu compra</span>
                    </span> 
                    </a> 
                </li>

                <li className='liOne'>
                    <a className='aone' href="https://www.fravega.com/_secure/mi-cuenta/compras/"> 
                        <span className='spanone'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 25 25" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg> 
                            <span className='secondspan'>Servicio técnico</span> 
                        </span> 
                    </a> 
                </li>

                <li className='liOne'> 
                    <a className='aone' href="https://www.fravega.com/_secure/mi-cuenta/compras/"> 
                        <span className='spanone'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="20" height="20" viewBox="0 0 25 25" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="3" y1="21" x2="21" y2="21" />
                                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                                <line x1="5" y1="21" x2="5" y2="10.85" />
                                <line x1="19" y1="21" x2="19" y2="10.85" />
                                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                            </svg>
                            <span className='secondspan'>Sucursales</span> 
                        </span> 
                    </a>
                </li>

                <li className='liOne'> 
                    <a className='aone' href="https://www.fravega.com/_secure/mi-cuenta/compras/"> 
                        <span className='spanone'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 25 25" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            <span className='secondspan'>Venta telefónica</span> 
                        </span> 
                    </a> 
                </li>

                <li className='liOne'> 
                    <a className='aone' href="https://www.fravega.com/_secure/mi-cuenta/compras/"> 
                    <span className='spanone'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width="20" height="20" viewBox="0 0 25 25" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="17" x2="12" y2="17.01" />
                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                        </svg>
                        <span className='secondspan'>Centro de ayuda</span> 
                    </span> 
                    </a> 
                </li>

                <li className='liTwo'> <a className='atwo' href="https://creditos.fravega.com/"> <span className='spantwo'> <img className='imgcreditos' src={creditos} alt="Créditos fravega"/> </span> </a> </li>
            </ul>
        </div>
        
        <div className='navPartTwo'>
            <a href="https://creditos.fravega.com/"> <img src={logo} style={{width: '156px', height: '24px', marginTop: '7px' }} alt="Logo fravega"/> </a>

            <form className='formnav'>
                <fieldset className='fieldsetnav'>
                    <div className='search'>
                        <input className='inputnav' onChange={e => handleInputChange(e)} type="text" placeholder="Buscar productos"/>
                        <button type='submit' className='btnnav'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 20 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </button>
                    </div>
                </fieldset>
            </form>
            <div className='extra'></div>
            <div className='user'>
                <div style={{display: 'block'}}>
                    <a className='auser' href="https://www.fravega.com/mi-cuenta">
                        <div className='divuser'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="25" height="25" viewBox="0 0 25 25" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        <span>Mi cuenta</span>
                        </div>
                    </a>
                </div>
            </div>
                <div className='carrito'>
                        <button className='btncarrito'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="25" height="25" viewBox="0 0 25 25" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                        </button>
                        <div>
                            {/* acá iría el carrito */}
                        </div>
                    </div>
        </div>

        {/* <div className='navPartThree'>
            <button className='btncode'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4a4a4a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
                <p className='pcode'>Estás en </p> <b>Capital Federal</b>
            </button>
            <div></div>
        </div> */}
        <hr />
    </header>
  )
}

export default NavBar;