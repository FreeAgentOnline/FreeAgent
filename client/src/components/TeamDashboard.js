import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserTeams } from '../actions';

import user from '../data/user';

import BackToDashboard from './BackToDashboard';
import TeamEdit from './TeamEdit';
import TeamNew from './TeamNew';

class TeamDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user
    }
  }
  // Fetch teams for user
  componentDidMount() {
    this.props.fetchUserTeams(this.state.user.username);
  }

  render() {
    let teamsRender = this.props.teams.map((one, i) => {
      return (
        <TeamEdit key={i} data={one} user={this.state.user} />
      )
    })
    return (
      <div className="container py-3">
        <BackToDashboard />
        <h2>Team history</h2>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {teamsRender}
          </tbody>
        </table>
        <TeamNew />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserTeams: (username) => dispatch(fetchUserTeams(username))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDashboard);
