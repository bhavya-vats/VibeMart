import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';


function App() {
  const productList = [
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
    <ProductList productList={productList}/>
    <Footer/>
    </>
  );
}

export default App;
