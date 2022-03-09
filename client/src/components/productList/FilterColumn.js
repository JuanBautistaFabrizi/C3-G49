import React, {useState} from "react";
import styled from 'styled-components';
import ModalFilter from "./ModalFilter";

import './filterColumn.css';

const FilterColumn = () => {
    const[estadoModal, setEstadoModal] = useState(false);
    return(
        <div className="filterColumn">
            <ContenedorBotones className="ContenedorBotones">
                <Boton onClick={() => setEstadoModal(!estadoModal)}>FILTRAR</Boton>
            </ContenedorBotones>
            
            <div className="filterTop">
                    <h2 className="CategoryName">TV</h2>
                    <div className="filteredResults">
                        <strong>21</strong>
                        <p>resultados</p>
                    </div>
                    <div className="sortBy">
                        <p className="sortResults">ORDENAR POR:</p>
                        <select className="selectBy">
                            <option className="options" value="Menor precio">Menor precio</option>
                            <option className="options" value="Mayor precio">Mayor precio</option>
                        </select>
                    </div>
                    <div className="filters">
                        <h3>FILTROS APLICADOS</h3>
                        <a className="removeFilters">Borrar</a>
                    </div>  
                    <div className="filtersApplied">
                        <span className="showFilter">Philips</span>
                        <a href="">x</a>
                    </div>
                    
                </div>    
                <div className="brandFilter">
                    <h3>Marca</h3>
                    <label className="checkbox">Marca 1 (8)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                    <label className="checkbox">Marca 2 (5)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                    <label className="checkbox">Marca 3 (20)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                    <label className="checkbox">Marca 4 (7)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                </div>      
            <ModalFilter
                state={estadoModal}
                setEstadoModal={setEstadoModal}
            >
                <div className="checkTop">
                    <h2 className="CategoryName">TV</h2>
                    <div className="filteredResults">
                        <strong>21</strong>
                        <p>resultados</p>
                    </div>
                    <div className="sortBy">
                        <p className="sortResults">ORDENAR POR:</p>
                        <select className="selectBy">
                            <option className="options" value="Menor precio">Menor precio</option>
                            <option className="options" value="Mayor precio">Mayor precio</option>
                        </select>
                    </div>
                    <div className="filters">
                        <h3>FILTROS APLICADOS</h3>
                        <a className="removeFilters">Borrar</a>
                    </div>  
                    <div className="filtersApplied">
                        <span className="showFilter">Philips</span>
                        <a href="">x</a>
                    </div>
                    
                </div>    
                <div className="brandCheck">
                    <h3>Marca</h3>
                    <label className="checkbox">Marca 1 (8)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                    <label className="checkbox">Marca 2 (5)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                    <label className="checkbox">Marca 3 (20)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                    <label className="checkbox">Marca 4 (7)
                        <input type="checkbox"/>
                        <span className="check"></span>
                    </label>
                </div>      
           
            </ModalFilter>
           

        </div>
    )
}

export default FilterColumn;


const ContenedorBotones = styled.div`
	
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	gap: 2rem;
`;

const Boton = styled.button`
	display: block;
	padding: 0.5rem 3rem;
	border-radius: 5px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;