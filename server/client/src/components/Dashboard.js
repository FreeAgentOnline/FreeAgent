import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { user, results } from '../data/mockdata';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      results
    }
  }
  render() {
    let user = this.state.user;
    return (
      <div className="container">
        <h2>{user.name.first} {user.name.last}</h2>
        <p><Link to="/profile" className="btn btn-secondary mr-2">Profile</Link><Link to="/" className="btn btn-secondary">Settings</Link></p>
        <h4>Scheduled events</h4>
        <h4>Starred events</h4>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Results</h4>
            </li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
