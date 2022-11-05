import React from 'react';
import './App.css';
import Navs from './components/Navs';
import  ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Products from './components/Products';
import { BrowserRouter, Routes,Router,Route,Switch } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
   
      <Navs />  
         
        <Routes>
          <Route exact path='/' component={<Home />}/>
          <Route exact  path="/Product" element = {<Products />} />       
          <Route exact path="/cart" element = {<Cart />} /> 
          <Route exact path="/checkout" element = {<Checkout />} /> 
         
          <Route exact path="/login" element = {<Login />} /> 
          <Route exact path="/Register" element = {<Register />} /> 
          <Route  path="/ProductDetails/:id" element = {<ProductDetails />} /> 
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
