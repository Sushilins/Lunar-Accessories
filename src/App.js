import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Comp/Header';
import Footer from './Comp/Footer'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from './Pages/Posts'
import Privacy from './Pages/Privacy'
import Shipping from './Pages/Shipping'
import Support from './Pages/Support'
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/posts">
          <Posts/>
        </Route>
        <Route path="/privacy">
          <Privacy/>
        </Route>
        <Route path="/shipping">
          <Shipping/>
        </Route>
        <Route path="/support">
          <Support/>
        </Route>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
