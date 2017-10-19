import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { results } from '../data/mockdata';
import user from '../data/user';

import ResultEdit from './ResultEdit';
import ResultNew from './ResultNew';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      results: []
    }
  }
  // Fetch results for user
  componentDidMount() {
    fetch(`/api/result/user/${this.state.user._id}`)
    .then(res => res.json())
    .then(data => {
      console.log('data', data);
      this.setState({ results: data });
    })
    .catch(err => console.log(err))
  }
  render() {

    let resultsRender = this.state.results.map((one, i) => {
      return (
        <li key={i} className="list-group-item">
          <ResultEdit data={one} user={this.state.user} />
        </li>
      )
    })
    return (
      <div className="container">
        <h2>{user.first_name} {user.last_name}</h2>
        <p><Link to="/profile" className="btn btn-secondary mr-2">Profile</Link><Link to="/" className="btn btn-secondary">Settings</Link></p>
        <h4>Scheduled events</h4>
        <h4>Starred events</h4>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Results</h4>
            </li>
            {resultsRender}
            <li className="list-group-item">
              <ResultNew />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
