import React from "react"
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../../ItemCount/ItemCount"





export default function CartItemW({product}) {
    const { deleteFromCart } = useCartContext();

    return (
        <> 
            <div className="image"> 
                <img src={product.img} className="w-30 img-fluid"  alt="imagen"/> 
            </div>
            <div>
                <h4 className="main-heading mt-0 "> "{product.title}" </h4>
                <p>"{`$ ${product.price}`}"</p>
                <div className="containerShip">
                <p className="shipping">Llega gratis en 48hs</p>
                <p className="shipping">Retiralo Ya!</p>
                </div>

                < ItemCount />

            </div>
            <div>
            <button className="btn btn-danger" onClick={() => deleteFromCart(product)}>
            <i className="fa fa-trash"></i></button>
            
            </div>
            
        </>)
}