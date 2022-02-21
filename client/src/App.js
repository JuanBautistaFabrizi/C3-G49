import './App.css';
import Footer from '../src/components/footer/Footer';
import Product from "../src/components/product/Product";
import Form from './components/register/Form';
import Login from './components/login/Login';

import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Form />
        <Login />
        <Product />
        <Footer />
    </div>
  );
}

export default App;
