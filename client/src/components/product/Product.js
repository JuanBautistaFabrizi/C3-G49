import React from "react";
import ProductHero from "./productHero/ProductHero";
import OtherProducts from "./otherProducts/OtherProducts";
import ProductDescription from "./productDescription/ProductDescription";

import './product.css'


export default function Product(){
    return(
        <div className="productView">
            <ProductHero />
            
            
        </div>
    )
}

/* <OtherProducts />
<ProductDescription />
*/