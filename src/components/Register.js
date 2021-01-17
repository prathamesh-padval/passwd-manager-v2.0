import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { register } from "./Constants";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      // username: "",
      // password: "",
      fields: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = this.state.fields;

      if (!fields["username"] && !fields["password"]) {
        fields["username"] = "";
        fields["password"] = "";
      }

      this.setState({ fields: fields });
      //alert("Form submitted");
      this.authenticate();
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //alert("UserName:::"+fields.username);
    //alert("Password:::"+fields.password);


    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    // if (typeof fields["username"] !== "undefined") {
    //   if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
    //     formIsValid = false;
    //     errors["username"] = "*Please enter alphabet characters only.";
    //   }
    // }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!fields["userpin"]) {
        formIsValid = false;
        errors["userpin"] = "*Please enter your userpin.";
      }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  authenticate = () => {
    const authJson = {
      username: this.state.fields.username,
      password: this.state.fields.password,
      userpin: this.state.fields.userpin,
    };

    console.log(authJson)
    Axios.request({
      method: "POST",
      data: authJson,
      url: register
    })
      .then((response) => {
        alert("User Authentication Successful.")
        // localStorage.setItem("username",this.state.fields.username)
        // localStorage.setItem("token",response.data.jwttoken);
        // localStorage.setItem("logintime",response.data.loginTime);
       
        this.setState({ navigate: true });
      })
      .catch((err) => {
        console.log(err);
        alert("Error Occurred. ", err);
      });

  };

  render() {
    const { navigate } = this.state;

    // here is the important part
    if (navigate) {
      return <Redirect to="/login" push={true} />;
    }

    return (



      <div>
        <div className="login">
          <h1>Password Manager</h1>
         
            <p><input
              id="username"
              name="username"
              type="text"
              placeholder="username"
              onKeyUp={this.handleChange}
              required
              maxLength="8"
            /></p>
            <p> <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onKeyUp={this.handleChange}
              required
              maxLength="10"
              minLength="5"
            /></p>
             <p><input
              id="userpin"
              name="userpin"
              type="text"
              placeholder="userpin"
              onKeyUp={this.handleChange}
              required
              maxLength="8"
            /></p>
            
            <p className="submit"> <button
              role="button"
              className="button"
              //onClick={this.authenticate}
              onClick={this.submitLoginForm}
            >
              Login
                        </button></p>
          
        </div>



      </div>
    );
  }
}
