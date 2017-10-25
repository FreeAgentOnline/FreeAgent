import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ''
    }
  }
  componentDidMount() {
    fetch(`/api/user/${this.props.match.params.username}`)
    .then(res => res.json())
    .then(data => {
      // Update state with fetched data
      this.setState({ profile: data });
    })
    .catch(err => console.log(err))
  }
  render() {
    let profile = this.state.profile;

    return (
      <div className="">
        <div className="text-center">
          <h1>{profile.first_name} {profile.last_name}</h1>
          <p className="lead">{profile.tagline}</p>
        </div>
        <h4>Biography</h4>
        <p>{profile.bio}</p>
      </div>
    );
  }
}

export default Profile;
