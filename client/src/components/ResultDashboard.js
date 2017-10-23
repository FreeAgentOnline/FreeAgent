import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchUserResults } from '../actions';

import user from '../data/user';

import BackToDashboard from './BackToDashboard';
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
        <ResultEdit data={one} user={this.state.user} />
      )
    })
    return (
      <div className="container my-3">
        <BackToDashboard />
        <h1>Results</h1>
        <p>Results are records of your performances that are displayed on your public profile.</p>
        <div className="card">
          <h2 className="card-header">Create a new result</h2>
          <div className="card-body m-3">
            <ResultNew />
          </div>
        </div>
        <h2>Saved results</h2>
        <p>To update any of these events, edit the desired field and click <span className="btn btn-outline-success btn-sm">Update</span> at the end of the row.</p>
        <div className="row font-weight-bold">
          <div className="col-2">Event</div>
          <div className="col-2">Date</div>
          <div className="col-2">Location</div>
          <div className="col-2">Performance</div>
          <div className="col-2">Reference</div>
          <div className="col-2">Edit</div>
        </div>
        {resultsRender}
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
