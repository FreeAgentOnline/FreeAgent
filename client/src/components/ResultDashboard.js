import React, { Component } from 'react';
import user from '../data/user';

import ResultEdit from './ResultEdit';
import ResultNew from './ResultNew';

class ResultDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      results: []
    }
  }
  // Fetch results for user
  componentDidMount() {
    fetch(`/api/result/user/${this.state.user.username}`)
    .then(res => res.json())
    .then(data => {
      // Update state with fetched data
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
    );
  }
}

export default ResultDashboard;
