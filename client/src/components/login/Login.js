import React, { useEffect, useState } from "react";
import validation from "./validation";

import './login.css'

export default function Login({ submitForm }){
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
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
      <div className="loginForm">
        <div className="appWrapper">
          <div>
            <h2 className="loginTitle">Ingresá con tu cuenta</h2>
          </div>
          <form className="formWrapper">
            

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
            <div className="submitButton">
              <button className="submit" onClick={handleFormSubmit}>Ingresá</button>
            </div>
          </form>
          <div className="noRegistered">
            <a href="" className="enter">¿No tenés una cuenta? Ingresá aquí
            </a>
          </div>
        </div>      
      </div>      
    )
};