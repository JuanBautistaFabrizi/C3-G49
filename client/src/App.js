import './App.css';
import Footer from '../src/components/footer/Footer';
import Product from "../src/components/product/Product";
import Form from './components/register/Form';
import Login from './components/login/Login';
import ProductList from './components/productList/ProductList';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Routes, Route, BrowserRouter } from "react-router-dom";


function App(props) {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      fetch('127.0.0.1:8000/products')
      .then(response => response.json())
      .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
  },[])

  return (
   
      <div className="App">
        <BrowserRouter>
          <Routes>
          { /*<Route path="/" element={<Layout />}>*/}
            <Route path="register" element={<Form />} />            
            <Route path="login" element={<Login />} />
            <Route path="/producto/:id" element={<Product />} />
            <Route path="/lista" element={<ProductList />} />
            {/* </Route> */}
          </Routes>
            <Footer />
        </BrowserRouter>
      </div>
 
  );
}

export default App;
