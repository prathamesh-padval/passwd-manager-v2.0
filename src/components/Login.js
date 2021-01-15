import axios from 'axios';
import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { loginUrl } from '../Constants';


export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            navigate : false,
            userName : "",
            password : ""
        }
    }


    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    authenticate = () =>{
        const authJson = {
            userName: this.state.userName,
            password: this.state.password
        };
        
        console.log(authJson)

        axios.request({
            method:"POST",
            data:authJson,
            url:loginUrl
        }).then((response)=>{
           
                if(response.data===true){
                    this.setState({
                        navigate:true
                    })
                    console.log(this.state.navigate)
                }
                else{
                    console.error("Login Failed")
                }    
        })
        .catch((response)=>{
            console.log(response)
        }
        )
    }


    render(){
        const { navigate } = this.state;

        console.log(navigate)

        if (navigate) {
            return <Redirect to="/dash" push={true} />;
        }

        return (
            <center>
                <div className="Login" ><h3>Login</h3>
                    <div>
                        <label htmlFor="UserName">User Name</label>
                        <input
                          id="userName"
                          name="userName"
                          type="text"
                          onKeyUp={this.handleChange}
                          required
                        />
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onKeyUp={this.handleChange}
                          required
                        />
                      </div>
                      <div>
                        <button
                          role="button"
                          className="button"
                          onClick={this.authenticate}
                        >
                          Login
                        </button>
                      </div>
                    </div>
            </center>
          );
    }

}