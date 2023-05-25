import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';


function App() {
  const product = [
    {
      price: 9999,
      name:"Iphone 12",
      quantity:0,
    },
    {
      price: 99999,
      name:"Redmi Note 10",
      quantity:0,
    },
  ]
  return (
    <>
    <Navbar/>
    <ProductList/>
    <Footer/>
    </>
  );
}

export default App;
