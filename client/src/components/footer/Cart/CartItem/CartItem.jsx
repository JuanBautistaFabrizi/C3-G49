import React from 'react'
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../../ItemCount/ItemCount"

const CartItem = ({product}) => {
    const { deleteFromCart } = useCartContext();

    return (
        <div className="card w-95"> 
              <div className="col-md-3 image-cont">
                <div className="image"> 
                  <img src={product.thumbnail} className="w-30 img-fluid"  alt=""/> 
                </div>
                <h4 className="main-heading mt-0">{product.title}  </h4>
                      <div>
                        <ItemCount/>
                      </div>
                      <p> $ {product.price} </p>
                       
                      <button className="btn btn-danger" onClick={() => deleteFromCart(product)}
                        >Eliminar </button>
              </div>
        </div>            
    );
}
export default CartItem