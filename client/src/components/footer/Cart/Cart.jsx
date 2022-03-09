import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
import { useCartContext } from "../context/CartContext"
import  CartResume  from './CartResume/CartResume'



const Cart = () => {
    
    const {cart, deleteCart} = useCartContext()
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const price = cart[i].price * cart[i].quantity;
        
        total += price
    }

    

    return (
       
        <div className="container">
            <h1 className="p-3 mt-2 text-center">Mi carrito</h1>
            <hr />
            
            <div className="row">
                <div className="col-md-8 ">
                    {cart.length !== 0 &&(
                    <>
                        {cart.map(product =>(
                            <CartItem key={product.id} product={product}/>
                        ))}
                        <div className="d-grid gap-2">
                            <button className="btn btn-success">
                                <Link to='/' className="btn bg-principal text-white ">Seguir Comprando </Link>
                            </button>
                            <button className="btn btn-danger text-white" onClick={deleteCart}><Link to='/'className="btn btn-danger text-white">Vaciar Carrito y volver a la tienda </Link></button>
                        </div>
                    </>
                    )}
                </div>
                <div className="col-md-4">
                        {cart.length !== 0 &&(
                        <>
                            <div className="card container">
                                <h2 className="mt-3 ">Resumen Carrito</h2>
                            
                                {cart.map(prod => <CartResume key={prod.id} prod={prod}/>)}
                                
                                <table class="table">
                                    <tbody>
                                        <tr>
                                        <th>Total a pagar:</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <th className="text-end fs-3"> $ {total}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <p>Completa con tus datos para finalizar la compra</p>
                               
                                <button className="btn btn-success d-block mt-2">Enviar orden</button>
                            </div>
                        </>
                        )}
                </div>
            </div>
            

        </div>
    )
}

export default Cart