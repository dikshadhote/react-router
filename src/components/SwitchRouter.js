import React, { Component } from "react";
import Login from "./auth/Login";
//import Logout from "./auth/Logout";
import Notfound from "./error/NotFound";
//import Header from "./layout/Header";
//import Footer from "./layout/Footer";
import Home from "./layout/Home";
//import Product from "./layout/Product";
import DisplayProducts from "./layout/DisplayProducts";
import Contact from "./layout/Contact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class SwitchRouter extends Component {
  render() {
    return (
      <Router>
          <h2>I am in Switch Router</h2>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/unknown">Random link</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/products">
              <DisplayProducts />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
