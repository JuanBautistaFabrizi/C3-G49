import './App.css';
import Footer from '../src/components/footer/Footer';
import Product from "../src/components/product/Product";
import Form from './components/register/Form';
import Login from './components/login/Login';
import ProductList from './components/productList/ProductList';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Tv from './components/productList/Tv';
import Celulares from './components/productList/Celulares';

import React, { useState, useEffect } from 'react';


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
          <NavBar />
          <Routes>
          { /*<Route path="/" element={<Layout />}>*/}
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Form />} />            
            <Route path="login" element={<Login />} />
            <Route path="/producto/:id" element={<Product />} />
            <Route path="/lista" element={<ProductList />} />
            <Route path="/Tv" element={<Tv />} />
            <Route path="/Celulares" element={<Celulares />} />
            {/* </Route> */}
          </Routes>
            <Footer />
        </BrowserRouter>
      </div>
 
  );
}

export default App;
