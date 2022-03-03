import React from "react";

import './filterColumn.css'

const FilterColumn = () => {
    return(
        <div className="filterColumn">
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
        </div>
    )
}

export default FilterColumn;