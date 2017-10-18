import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      error: ''
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
    this.setState({ first: e.target.value });
  }
  handleLast = e => {
    this.setState({ last: e.target.value });
  }
  handleUsername = e => {
    this.setState({ username: e.target.value });
  }
  handleSubmit = () => {
    if (this.state.first && this.state.last && this.state.username && this.state.email && this.state.password === this.state.passwordCheck) {
      // post to login api
      let formBody = {
        first: this.state.first,
        last: this.state.last,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      fetch('/api/auth/register', {
        method: 'POST',
        // Form body needs to be turned into a string before sent to the server
        body: JSON.stringify(formBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))

      this.setState({ first: '', last: '', username: '', email: '', password: '', passwordCheck: '', error: '' });
      this.props.history.push('/login');
    } else {
      this.setState({ password: '', passwordCheck: '', error: 'Passwords do not match' });
      // Do more with error flashing:
      // https://getbootstrap.com/docs/4.0/components/forms/#server-side
    }
  }
  render() {
    return (
      <div className="container">
        <div className="card p-3">
          <h2 className="text-center">Register</h2>
          <div className="">
            <div className="form-group">
              <input type="email" className="form-control" id="loginEmail" placeholder="Email address" value={this.state.email} onChange={this.handleEmail}/>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="first" className="form-control" id="loginFirst" placeholder="First name" value={this.state.first} onChange={this.handleFirst}/>
              </div>
              <div className="col">
                <input type="last" className="form-control" id="loginLast" placeholder="Last name" value={this.state.last} onChange={this.handleLast}/>
              </div>
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
            <div className="text-center">
              <p>{this.state.error}</p>
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
              <p className="mt-3 mb-0">Already have an account? <Link to="/login">Login here!</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
