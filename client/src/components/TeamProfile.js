import React, { Component } from 'react';

class TeamProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: ''
    }
  }
  componentDidMount() {
    fetch(`/api/team/user/${this.props.match.params.username}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ teams: data });
    })
    .catch(err => console.log(err))
  }
  render() {
    let teamsRender = null;
    if (this.state.teams) {
      teamsRender = this.state.teams.map((one, i) => {
        return (
          <div key={i}>
          <h6 className="mb-1">{one.name}</h6>
          <p className="my-0 font-italic">{one.year_start} - {one.year_end ? one.year_end : 'Present'}</p>
          <p className="mb-2">{one.location}</p>
          <p>{one.description}</p>
          </div>
        )
      })
    }
    return (
      <div id="resultContainer">
        <h4>Team history</h4>
        {teamsRender}
      </div>
    );
  }
}

export default TeamProfile;
