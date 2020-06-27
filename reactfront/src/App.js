import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import CompleteScreen from './screens/CompleteScreen';
function App() {

  const userSignin = useSelector(state => state.userSignin);
  //const { userInfo } = userSignin;
  const { userInfo } = {
    "name": "shivam",
      "email": "shivampradhan21@gmail.com",
      "password": "1234",
     "isAdmin": true
     }
    ;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
        </button>
            <Link to="/" >Sam Shop</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
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
        
          
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/complete" component={CompleteScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />


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
