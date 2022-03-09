import {useState, useEffect} from 'react'
import  Item  from './item'


const ItemList = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch ('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=5')
        .then(response => response.json())
        .then(resp => setProducts(resp.results))
    },[])


    return (
        <>
        {
            products.map((product) => (
                <Item data={product} key= {product.id} />
                
            ))
        }
        </>
    )
}
export default ItemList