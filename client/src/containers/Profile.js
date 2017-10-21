import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserResults } from '../actions';

import { user } from '../data/mockdata';

import ProfileBasic from '../components/ProfileBasic';
import Results from '../components/Results';
import TeamProfile from '../components/TeamProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      results: [],
      teams: '',
      user
    }
  }
  // Fetch results for current profile
  componentDidMount() {
    this.props.fetchUserResults(this.props.match.params.username);
  }
  render() {

    return (
      <div className="container">
        <ProfileBasic match={this.props.match}/>
        <Results data={this.props.results}/>
        <TeamProfile match={this.props.match}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state on Profile', state);
  return {
    results: state.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserResults: (username) => dispatch(fetchUserResults(username))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
