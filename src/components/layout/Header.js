import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'; // For Navigation : import withRouter
 class Header extends Component {
    onNavigation = (path) =>{
        this.props.history.push(path); // For Navigation 
    }
    render() {
        return (
            <div>
                <h2>Welcome to Shopoholic</h2>
                <nav>
                <button class="button" onClick={()=>{this.onNavigation('/home')}}>Home</button>
                <button class="button" onClick={()=>{this.onNavigation('/contact')}}>Contact</button>
                <button class="button" onClick={()=>{this.onNavigation('/products')}}>Products</button>
                </nav>
               
                <hr></hr>
            </div>
        )
    }
}

export default withRouter(Header) // For Navigation 