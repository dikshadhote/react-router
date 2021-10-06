import React, { Component } from 'react';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Notfound from './error/NotFound';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/Home';
import Product from './layout/Product';
import DisplayProducts from './layout/DisplayProducts';
import Contact from './layout/Contact';

import { BrowserRouter,Route } from 'react-router-dom';
export default class Router extends Component {
    render() {
        return (
            <div style={{ width:"50%",margin:"auto"}}>
                <BrowserRouter>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/products" component={DisplayProducts}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/not-found" component={Notfound}/>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

