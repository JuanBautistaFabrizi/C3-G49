import React from "react";

import './productDescription.css'

export default function ProductDescription(props){
    return(
        <div className="productDescription">
            <div className="descriptionTitles">
                <a href="" className="connectBrand"><h2 className="productBrandB">Alaska</h2></a>
                <h2 className="productNameD">Aire Acondicionado Split Frío/Calor Alaska 2700W 2300F AS26WCCS</h2>
                <p className="productId">Artículo: 20761</p>
            </div> 
            {/*<div className="descriptionTitles">
            <h2 className="productBrand">{props.productBrand}</h2>
            <h2 className="productName">{props.productName}</h2>
            <p className="productId">{props.productId}</p>
            </div> */}

            <div className="technical">
                <h3 className="technicalDescription">Características Técnicas</h3>
                <div className="descriptionFeatures">
                    <div className="descriptionG">
                    <h4>Descripción</h4>
                    <p>Consumo energético
                        El aire acondicionado Alaska AS26WCCS brinda un mayor ahorro con un máximo confort. Posee una capacidad de 2700 watts, 2300 frigorías y su eficiencia energética es clase A. Además, utiliza el gas refrigerante ecológico R410A, que te permite cuidar el medio ambiente al mismo tiempo que ahorras energía. 
                        Funciones
                        Enfriamiento Rápido: enfría en menor tiempo tus ambientes gracias a los deflectores de aire y al ventilador que operan en sus máximas capacidades.
                        Tu Clima: Define un modo, temperatura y velocidad. Luego guarda tu configuración como favorita y activala cuando lo desees.
                        Función Turbo: Alcanzá rápidamente la temperatura seleccionada mediante esta función, ya que el motor ventilador opera a máxima velocidad.
                        Función Sueño
                        Función deshumidificación
                        Función ventilación</p> 
                    </div>
                    <div className="features">
                    <h4>Características especiales</h4>
                    <p>Autolimpiante
                    Deflector de aire móvil
                    Control de flujo vertical
                    Arranque en calor
                    Control remoto
                    Display LCD en control remoto
                    Timer</p> 
                    </div>
                </div>
            </div>

        </div>
    )
}