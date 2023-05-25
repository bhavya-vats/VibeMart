import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';


function App() {
  const productList = [
    {
      price: 999999,
      name:"Iphone 14 Pro",
      quantity:0,
    },
    {
      price: 9999,
      name:"Redmi Note 10",
      quantity:0,
    },
  ]
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList}/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
