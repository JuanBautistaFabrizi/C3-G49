import './App.css';
import Footer from '../src/components/footer/Footer';
import Product from "../src/components/product/Product";
import Form from './components/register/Form';
import Login from './components/login/Login';
import ProductList from './components/productList/ProductList';

import { Router, Routes, Route, Switch, Link } from "react-router-dom";


function App() {
  return (
   
      <div className="App">
        <Routes>
          <Route path="register" element={<Form />} />            
          <Route path="login" element={<Login />} />
          <Route path='producto' element={<Product />} />
          <Route path='lista' element={<ProductList />} />
        </Routes>

          <Footer />
      </div>
 
  );
}

export default App;
