import React from "react";
import styled from 'styled-components';

const ModalFilter = ({children, state, setEstadoModal}) => {
    return(
        <>
            {state && 
                <Overlay>
                    <ContenedorModal>
                        <ButtonContainer>
                            <EncabezadoModal>
                                <h3>FILTRAR</h3>
                            </EncabezadoModal>

                            <BotonLimpiar>
                                <h3>LIMPIAR</h3>
                            </BotonLimpiar>

                            <BotonCerrar onClick={() => setEstadoModal(false)}>
                                <h3>CERRAR</h3>
                            </BotonCerrar>

                        </ButtonContainer>
                            
                            {children}    
                        </ContenedorModal>
                </Overlay>
            }
        </>   
    )}

export default ModalFilter;

const Overlay = styled.div`
        z-index: 100;
        width: 110vw;
        height: 110vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        max-height: 110vh;
        overflow-y: auto;
        
`;

const ContenedorModal = styled.div`
width: 360px;
min-height: 100px;
position: relative;
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px; 
padding: 2rem;
background: #fff;
max-height: 110vh;
overflow-y: auto;
`;

const ButtonContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
`

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    border-bottom: 1px solild #e8e8e8;
    border: none;
    background: none;
    pointer: cursor;
    transition: all 0.3s;
    height: 2rem;

    h3{
        font-weight: 600;
        font-size: 1.6rem;
        color: #1766dc;
    }
    &:hover{
        background: #f2f2f2;
        color: #000;

    }
`;

 const BotonLimpiar = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solild #e8e8e8;
    border: none;
    background: none;
    pointer: cursor;
    transition: all 0.3s;
    height: 3rem;

    h3{
        font-weight: 600;
        font-size: 1.6rem;
        color: #1766dc;
    }
    &:hover{
        background: #f2f2f2;
        color: #000;
    
    }
`;


const BotonCerrar = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 2rem;
padding-bottom: 2rem;
border-bottom: 1px solild #e8e8e8;
border: none;
background: none;
pointer: cursor;
transition: all 0.3s;
height: 3rem;

h3{
    font-weight: 600;
    font-size: 1.6rem;
    color: #1766dc;
}
&:hover{
    background: #f2f2f2;
    color: #000;

}
`;

/*
import swal from '@sweetalert/with-react';

function openModal(){

}


const ModalFilter = ({props}) => {
    return(
            <div className="modalFilter">
                <button>FILTRAR</button>
                <div className="alertModal">
                    swal(
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
                </div>
                
            </div>
        )

}

export default ModalFilter;
*/