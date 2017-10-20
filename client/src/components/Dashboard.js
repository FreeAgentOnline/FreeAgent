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
      // Update state with fetched data
      this.setState({ results: data });
    })
    .catch(err => console.log(err))
  }

  // Fetch saved meets for user

  render() {
    // Currently uses this.state.user,
    // but should be updated with Redux
    let resultsRender = this.state.results.map((one, i) => {
      return (
        <li key={i} className="list-group-item">
          <ResultEdit data={one} user={this.state.user} />
        </li>
      )
    })
    return (
      <div className="container">
        <h2>Dashboard</h2>
        <p>
          <Link to={`/${this.state.user.username}`} className="btn btn-secondary mr-2">Profile</Link>
          <Link to="/settings" className="btn btn-secondary">Settings</Link>
        </p>
        <h4>Scheduled events</h4>
        {/* Render Saved Meets */}
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
