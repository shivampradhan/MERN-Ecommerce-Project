import React from 'react';
//import data from './data';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import {BrowserRouter, Route,Link} from 'react-router-dom'
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import ProductsScreen from './screens/ProductsScreen';
import OrdersScreen from './screens/OrdersScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';


function App(){
const openMenu=()=> {
 
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=> {
    document.querySelector(".sidebar").classList.remove("open")
  }


  return (
<BrowserRouter>

    <div className="grid-container">
    <header className="header">
      <div className="heads">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to ="/"> Sam Shop </Link>
       
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <link to ='/'>Sign In</link>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3 className="side-heading" >Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
      
          <div className="side"><a href="">All Categories</a></div>
        </li>

        <li>
          <div className="side"><a href="index.html">Bread</a></div>
          
        </li>

        <li>
          <div className="side"><a href="index.html">Dairy</a></div>
        </li>
        
        <li>
          <div className="side"><a href="index.html">Fruits</a></div>
        </li>

        <li>
          <div className="side"><a href="index.html"> Species</a></div>
        </li>

        <li>
          <div className="side"><a href="index.html">Vegetables</a></div>
        </li>

      </ul>
    </aside>


    <main className="main">
      <div className="content">
        <Route path ="/product/:id" component={ProductScreen}/>
        <Route path ="/cart/:id" component={CartScreen}/>
        <Route path="/" exact= {true} component={HomeScreen}/>
        
        <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
      
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />

      

      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
