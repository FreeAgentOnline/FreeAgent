import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordCheck: ''
    };
  }
  handleEmail = e => {
    this.setState({ email: e.target.value });
  }
  handlePassword = e => {
    this.setState({ password: e.target.value });
  }
  handlePasswordCheck = e => {
    this.setState({ passwordCheck: e.target.value });
  }
  handleFirst = e => {
    this.setState({ firstName: e.target.value });
  }
  handleLast = e => {
    this.setState({ lastName: e.target.value });
  }
  handleUsername = e => {
    this.setState({ username: e.target.value });
  }
  handleSubmit = () => {
    if (this.state.password === this.state.passwordCheck) {
      // post to login api
      this.setState({ firstName: '', lastName: '', username: '', email: '', password: '', passwordCheck: '' });
    } else {
      this.setState({ password: '', passwordCheck: '' });
      alert('Passwords do not match');
    }
  }
  render() {
    return (
      <div className="container container-fluid">
        <div className="card p-3">
          <h2>Register</h2>
          <div className="">
            <div className="form-group">
              <input type="email" className="form-control" id="loginEmail" placeholder="Email address" value={this.state.email} onChange={this.handleEmail}/>
            </div>
            <div className="form-group">
              <input type="first" className="form-control" id="loginFirst" placeholder="First name" value={this.state.firstName} onChange={this.handleFirst}/>
            </div>
            <div className="form-group">
              <input type="last" className="form-control" id="loginLast" placeholder="Last name" value={this.state.lastName} onChange={this.handleLast}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="loginUsername" placeholder="Choose a username" value={this.state.username} onChange={this.handleUsername}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="loginPassword" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="loginPasswordCheck" placeholder="Confirm password" value={this.state.passwordCheck} onChange={this.handlePasswordCheck}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
