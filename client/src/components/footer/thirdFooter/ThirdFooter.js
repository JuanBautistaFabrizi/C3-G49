import React from "react";

import firstStamp from "../Images/firstStamp.png"
import secondStamp from "../Images/secondStamp.jpg"
import thirdStamp from "../Images/thirdStamp.png"

export default function ThirdFooter(){
    return(
        <div className="thirdFooter">
            <div className="footerTexts">
                <p className="copyright">Copyright 2023 | Todos los derechos reservados Fravega.com. Frávega S.A.C.I. e I. Valentín Gómez 2813 (1191) | Capital Federal | Argentina</p>
                <p className="disclaimer">Las fotos son a modo ilustrativo. La venta de cualquiera de los productos publicados está sujeta a la verificación de stock. Los precios online y los planes de financiación para los productos presentados/publicados en www.fravega.com.ar y/o www.fravega.com son válidos exclusivamente para la compra vía internet en las páginas antes mencionadas. Las especificaciones técnicas y descripciones están sujetas a cambios sin previo aviso.</p>
            </div>
            <div className="footerImg">
                <img className="firstStamp" src={firstStamp}></img>
                <img className="secondStamp" src={secondStamp}></img>
                <img className="thirdStamp" src={thirdStamp}></img>
            </div>
        </div>
    )
}