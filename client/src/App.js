import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Footer from '../src/components/footer/Footer';
<<<<<<< HEAD
import './App.css';
=======
import Product from "../src/components/product/Product";
import Form from './components/register/Form';
import Login from './components/login/Login';
import ProductList from './components/productList/ProductList';

import React from 'react';

import styled from 'styled-components';

import { Routes, Route, BrowserRouter } from "react-router-dom";
>>>>>>> nicoBonder


function App() {
  
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
=======
   
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="register" element={<Form />} />            
            <Route path="login" element={<Login />} />
            <Route exact path='/producto/' element={<Product />} />
            <Route path='lista/' element={<ProductList />} />
            
          </Routes>
            <Footer />
        </BrowserRouter>
      </div>
 
>>>>>>> nicoBonder
  );
}

export default App;
