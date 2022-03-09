import {useState} from 'react' 
import './ItemCount.css'
import { useCartContext } from "../context/CartContext"
import { useAppContext } from '../context/AppContext'
import swal from 'sweetalert'


const ItemCount = ({product, onAdd}) => {

    let initial = 1
    const [cantidad, setCantidad] = useState(initial)
    
    let stock= 5

    const handleAdd=()=>{
        if (cantidad<stock) {
            setCantidad(cantidad+1)
        }
    }
    const handleRemove=()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1)
        }
    }

    const { addToCart } = useCartContext();
    const { products } = useAppContext();
    console.log(products);
    
    function handleClick(id, cantidad) {
        const findProductInDB = products.find(product => product.id === id);
    
        if (!findProductInDB) {
            swal({
                title: "Hubo un error",
                text: "El producto no pudo ser añadido",
                icon: "error",
                button: "Ok",
            })
             return;
        }
        addToCart(findProductInDB, cantidad);
        onAdd()
    }

      
    return (
        <>
            <div className="d-flex flex-column ">
                
                <div className="btns-count">
                    <button className="btn btn-block btns" onClick={handleRemove}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <label className="alert alert-white cantidad-items">
                        {cantidad}
                    </label>
                    <button className="btn btn-block btns" onClick={handleAdd}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                

                    <button className="btn bg-principal text-white btn-block btnCarrito "
                    onClick={() => handleClick(product.id, cantidad)}>
                    COMPRAR
                    </button>
            </div>
            
        </>
    )
}
export default ItemCount