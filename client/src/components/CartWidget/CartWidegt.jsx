import { useState } from 'react'
import './CartWidegt.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
/*import CartItemW from './CartItemWidegt/CartItemWidegt'*/



const CartWidget = () => {
    
    const [cartClick, setCartClick] = useState(false)

    const {cart} = useCartContext();
    let itemsCartWidg = 0
    for (let i = 0; i < cart.length; i++) {
        const cant = cart[i].quantity;
        
        itemsCartWidg = itemsCartWidg + cant
    }

    return (
        <> 
            <div className="cartWidget" onClick={(e)=>setCartClick(!cartClick)}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cartCant">{itemsCartWidg}</span>
                <i className="fa fa-shopping-cart cart-style"><p></p></i>

                {cartClick ?
                
                    <div className="card-click">
                        <Link to="/cart" className="btn btn-light">Ir a mi carrito</Link>
                    </div>
                    
                                

                                
                    :
                    <></>
                }
            </div>
            
        </>
    )
}
export default CartWidget