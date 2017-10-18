import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleEmail = e => {
    this.setState({ email: e.target.value });
  }
  handlePassword = e => {
    this.setState({ password: e.target.value });
  }
  handleSubmit = () => {
    // Check if form is completed
    if (this.state.email && this.state.password) {
      // Create object to stringify
      let formBody = {
        email: this.state.email,
        password: this.state.password
      }
      // post to login api
      fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(formBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
      this.props.history.push('/dashboard');
    }
    this.setState({ email: '', password: '' });
  }
  render() {
    return (
      <div className="container">
        <div className="card p-3">
          <h2 className="text-center">Login</h2>
          <div className="">
            <div className="form-group">
              <input type="email" className="form-control" id="loginEmail" placeholder="Email address" value={this.state.email} onChange={this.handleEmail}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="loginPassword" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
              <p className="mt-3 mb-0">Don't have an account? <Link to="/register">Register here!</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
