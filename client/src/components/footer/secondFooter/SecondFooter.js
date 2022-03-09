import React, { useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SecondFooter = () => {
    const [formSent, setFormSent] = useState(false);
  
    return (
        <div className="secondFooter">
            <div className="formFooter">
                <h3>Recibí ofertas y promociones</h3>
                <Formik 
                    initialValues={{ email: '' }}

                    validate={(values) => {
                        let errors = {};

                        if(!values.email){
                            errors.email = 'Por favor, ingresa tu mail'
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            errors.email = 'Dirección de mail inválida.'
                        }

                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {
                        resetForm();
                        setFormSent(true);
                        setTimeout(() => setFormSent(false), 1000);
                    }}
                >
                
                    {( {errors} ) => (
                        <Form className="myForm">
                            <div className="emailForm">
                                <label htmlFor="email"></label>
                                <Field className="enterEmail"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Ingresá tu email"                        
                                />
                                <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />                        
                            </div>
                            <button type="submit" 
                                className="suscribe">SUSCRIBIRME</button>
                            {formSent && <p className="success"></p>}
                        </Form>
                    )}
                                
                </Formik>
            </div>
               
                    <div  className="footerLists1">
                        <h3>Comprar en Fravega.com</h3>
                        <ol>
                            <li><a href=""></a>Servicio técnico</li>
                            <li><a href=""></a>Información legal</li>
                            <li><a href=""></a>Botón de arrepentimiento</li>
                        </ol>
                    </div>

                    <div  className="footerLists2">
                        <h3>Frávega Créditos</h3>
                        <ol>
                            <li><a href=""></a>Pagá Online</li>
                            <li><a href=""></a>Catálogo exclusivo</li>
                            <li><a href=""></a>Condiciones</li>
                        </ol>
                    </div>

                    <div className="footerLists3">
                        <h3>Recomendados</h3>
                        <ol>
                            <li><a href=""></a>Smart TV</li>
                            <li><a href=""></a>Celulares</li>
                            <li><a href=""></a>Aire acondicionado</li>
                            <li><a href=""></a>Novedades</li>
                        </ol>
                    </div>

                    <div  className="footerLists4">
                        <h3>Ayuda</h3>
                        <ol>
                            <li><a href=""></a>Centro de ayuda</li>
                            <li><a href=""></a>Contactanos</li>
                            <li><a href=""></a>Sucursales</li>
                            <li><a href=""></a>Trabajá con nosotros</li>
                        </ol>
                    </div>

                    <div className="footerLists5">
                        <h3>Beneficios</h3>
                        <ol>
                            <li><a href=""></a>Club Personal</li>
                            <li><a href=""></a>YPF</li>
                            <li><a href=""></a>365</li>
                            <li><a href=""></a>club Movistar</li>
                        </ol>
                    </div>
              
        </div>
        
    );
    
}

export default SecondFooter;