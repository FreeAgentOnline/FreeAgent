import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { user, results } from '../data/mockdata';

import ResultEdit from './ResultEdit';

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
    let resultsRender = this.state.results.events[0].data.results.map((one, i) => {
      return (
        <li key={i} className="list-group-item">
          <ResultEdit data={one} />
        </li>
      )
    })
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
            {resultsRender}
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
