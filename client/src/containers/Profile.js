import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserResults } from '../actions';

import '../styles/profile.css';
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
      <div className="">
        <div className="container-fluid" id="profileBackground"></div>
        <div className="container mt-3">
          <ProfileBasic match={this.props.match}/>
          <Results data={this.props.results}/>
          <TeamProfile match={this.props.match}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
