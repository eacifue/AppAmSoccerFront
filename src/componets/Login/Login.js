import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleSubmit(e) {
    e.preventDefault();
    const { user, password } = this.state;
    console.log(user, password);
     fetch("http://localhost:9000/api/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        user,
        password,
      }),
    })
      .then(async (res) => await res.json())
      .then((data) => {
        console.log(data, user, password);
        if (data.status == "ok") {
          alert("login successful");
          //window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>User</label>
          <input
            type="text"
            name="user"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
