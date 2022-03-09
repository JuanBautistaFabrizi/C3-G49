import {Link} from 'react-router-dom'
import  CartWidget  from '../CartWidget/CartWidegt'
import './Nav.css'


const NavBar = () => {

    return (
        <>
        <nav className="container navbar navbar-expand-xl ">
            <div className="container"> 
                <div className="collapse navbar-collapse show m-auto flex-navbar" id="navbarBasic">
                    <div className="">
                        <ul className="flex-navbar navbar-nav me-auto mb-2 mb-xl-0">

                            <Link to="/" className="nav-link nav-link-p" >Home</Link>

                        </ul>
                    </div>
                </div>
                 
                <CartWidget />

            </div>
            
        </nav>

        </>
    )
}
export default NavBar