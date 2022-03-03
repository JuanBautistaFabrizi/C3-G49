import './App.css';
import Footer from '../src/components/footer/Footer';
import Product from "../src/components/product/Product";
import Form from './components/register/Form';
import Login from './components/login/Login';
import ProductList from './components/productList/ProductList';

import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
   
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="register" element={<Form />} />            
            <Route path="login" element={<Login />} />
            <Route path='producto' element={<Product />} />
            <Route path='lista' element={<ProductList />} />
          </Routes>
            <Footer />
        </BrowserRouter>
      </div>
 
  );
}

export default App;

/*
  <Routes>
          <Route path="register" element={<Form />} />            
          <Route path="login" element={<Login />} />
          <Route path='producto' element={<Product />} />
          <Route path='lista' element={<ProductList />} />
        </Routes>
        */