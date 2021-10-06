import React, { Component } from 'react'
import '../../css/styles.css'

export default class Login extends Component {

    constructor(){
        super();
        this.state={
            username:"Enter email",
            password:""
        }
    }
    onLogin = () =>{
     // e.preventDefault()
        alert('username'+this.state.username+" "+'password'+this.state.password)
    }

    onReset =() =>{
        this.state={
            username:"",
            password:""
        }
        
        alert('username'+this.state.username+" "+'password'+this.state.password)
    }
    onInputChange = (e,field) =>{
        this.setState({
            // key:value pair if we pass field:// then it will key of field as username /password but we have to assign value o key [username/password]:assign value
            [field]:e.target.value
        })
    }
    render() {
        return (
            <div>
            <div className="container">
                <h2>Login form:</h2>
                <hr></hr>
             
                <label>Username:
                <input type="email" className="input"  value={this.state.username} onChange={(e) => this.onInputChange(e,'username')}/>
                </label>
                <label >Password:
                <input type="password" className="input" value={this.state.password} onChange={(e) => this.onInputChange(e,'password')}/>
                </label>
                </div>
                <button className="button" onClick={this.onLogin}>Login</button>
                <button className="button" onClick={this.onReset}>Reset</button>
            </div>
        )
    }
}
