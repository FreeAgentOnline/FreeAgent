import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import user from '../data/user';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: user.first_name,
      last_name: user.last_name,
      bio: user.bio,
      tagline: user.tagline,
      user
    }
  }
  handleFirstName = e => { this.setState({ first_name: e.target.value })};
  handleLastName = e => { this.setState({ last_name: e.target.value })};
  handleTagline = e => { this.setState({ tagline: e.target.value })};
  handleBio = e => { this.setState({ bio: e.target.value }) };

  handleUpdate = e => {
    // Patch request
    let formBody = {
      bio: this.state.bio,
      tagline: this.state.tagline,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }
    fetch(`/api/user/${user._id}`, {
      method: 'PATCH',
      body: JSON.stringify(formBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => alert('Profile updated'))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <h2>Edit profile</h2>
        <h4>Basic information</h4>
        <div className="form-group">
          <div className="d-flex">
            <label className="mr-2">Full name</label>
            <small id="taglineHelp" className="form-text text-muted">This will be displayed on your public profile</small>
          </div>
          <div className="row">
            <div className="col">
              <input className="form-control" type="text" name="firstName" placeholder="First name(s)" value={this.state.first_name} onChange={this.handleFirstName} />
            </div>
            <div className="col">
              <input className="form-control" type="text" name="lastName" placeholder="Last name(s)" value={this.state.last_name} onChange={this.handleLastName} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex">
            <label className="mr-2" htmlFor="tagline">Tagline</label>
            <small id="taglineHelp" className="form-text text-muted">Describe yourself in a few short words (e.g. "Triple jumper with drive and ambition")</small>
          </div>
          <input className="form-control" type="text" name="tagline" aria-describedby="taglineHelp" placeholder="Tagline" value={this.state.tagline} onChange={this.handleTagline} />
        </div>
        <div className="form-group">
          <div className="d-flex">
            <label className="mr-2" htmlFor="bio">Biography</label>
            <small id="bioHelp" className="form-text text-muted">Give some details about who you are and what you hope to achieve</small>
          </div>
          <textarea className="form-control" name="bio" aria-describedby="bioHelp" value={this.state.bio} onChange={this.handleBio}></textarea>
        </div>
        <button className="btn btn-primary" onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

export default ProfileEdit;
