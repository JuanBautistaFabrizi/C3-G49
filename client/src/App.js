import './App.css';
import Footer from '../src/components/footer/Footer';
import Product from "../src/components/product/Product";
import Form from './components/register/Form';

function App() {
  return (
    <div className="App">
        <Form />
        <Product />
        <Footer />
    </div>
  );
}

export default App;
