import React, { useEffect, useState } from "react";
import validation from "./validation";

import './register.css'

export default function Register({ submitForm }){
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    status: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() =>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    }
  })

    return(
      <div className="registerForm">
        <div className="appWrapper">
          <div>
            <h2 className="registerTitle">Crea tu cuenta</h2>
          </div>
          <form className="formWrapper">
            <div className="name">
              <label className="label"></label>
              <input className="input" 
              placeholder="Nombre"
              type="text" 
              name="name" 
              value={values.name}
              onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="email">
              <label className="label"></label>
              <input className="input" 
              placeholder="Email"
              type="email" 
              name="email"
              value={values.email}
              onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="password">
              <label className="label"></label>
              <input className="input" 
              placeholder="Contraseña"
              type="password" 
              name="password"
              value={values.password}
              onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <button className="submit" onClick={handleFormSubmit}>Registrarse</button>
            </div>
          </form>
          <div className="registered">
            <a href="" className="linkLog">
              ¿Ya tenés una cuenta? Ingresá aquí
            </a>
          </div>
        </div>      
      </div>      
    )
};