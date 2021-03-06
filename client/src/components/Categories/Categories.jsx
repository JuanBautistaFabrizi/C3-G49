import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <div className='divcat'>
        <nav className='navcat'>
            <ol className='olcat'>
                <li className='licat'>
                    <div className='divli'>
                        <a className='acat' href=""><span className='catspan'>Tv, Audio y Video</span></a>
                    </div>
                    <ul>
                        <li className='options'><a href="">Option 1</a></li>
                        <li className='options'><a href="">Option 2</a></li>
                    </ul>
                </li>
                <li className='licat'>
                <div className='divli'>
                        <a className='acat' href=""><span className='catspan'>Celulares, Notebooks y Tecnología</span></a>
                    </div>
                    <ul>
                        <li className='options'><a href="">Option 1</a></li>
                        <li className='options'><a href="">Option 2</a></li>
                    </ul>
                </li>
                <li className='licat'>
                <div className='divli'>
                        <a className='acat' href=""><span className='catspan'>Electrodomésticos y Aires Ac.</span></a> 
                    </div>
                    <ul>
                        <li className='options'><a href="">Option 1</a></li>
                        <li className='options'><a href="">Option 2</a></li>
                    </ul>
                </li>
                <li className='licat'>
                <div className='divli'>
                        <a className='acat' href=""><span className='catspan'>Hogar, Muebles y Jardín</span></a> 
                    </div>
                    <ul>
                        <li className='options'><a href="">Option 1</a></li>
                        <li className='options'><a href="">Option 2</a></li>
                    </ul>
                </li>
                <li className='licat'>
                <div className='divli'>
                        <a className='acat' href=""><span className='catspan'>Salud, Belleza y Fitness</span></a> 
                    </div>
                    <ul>
                        <li className='options'><a href="">Option 1</a></li>
                        <li className='options'><a href="">Option 2</a></li>
                    </ul>
                </li>
                <li className='licat'>
                <div className='divli'>
                        <a className='acat' href=""><span className='catspan'>Bebés y Niños</span></a> 
                    </div>
                    <ul>
                        <li className='options'><a href="">Option 1</a></li>
                        <li className='options'><a href="">Option 2</a></li>
                    </ul>
                </li>
            </ol>
        </nav>
    </div>
  )
}

export default Categories;