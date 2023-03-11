 
import './App.css';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import ProDetails from './Components/ProDetails';
import CartBtn from './bottons/CartBtn';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
    <CartProvider>
    <Router>
        
         <Header/>

        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Products/:id' element={<ProDetails/>} /> 
            <Route path='/Products/products/:id' element={<ProDetails/>} /> 
            <Route/>

            <Route path='/Contact' element={<Contact/>} />
           

        </Routes>
     
        <Footer/>

    </Router>
    </CartProvider>

    </>
  );
}

export default App;
