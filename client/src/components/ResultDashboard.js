import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchUserResults } from '../actions';

import user from '../data/user';

import ResultEdit from './ResultEdit';
import ResultNew from './ResultNew';

class ResultDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user
    }
  }
  // Fetch results for user
  componentDidMount() {
    this.props.fetchUserResults(this.state.user.username);
  }

  render() {
    let resultsRender = this.props.results.map((one, i) => {
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

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserResults: (username) => dispatch(fetchUserResults(username))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultDashboard);
