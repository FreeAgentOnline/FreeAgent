import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import user from '../data/user';

class TeamNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year_start: '',
      year_end: '',
      description: '',
      name: '',
      location: '',
      user
    }
  }
  handleYearStart = e => { this.setState({ year_start: e.target.value })};
  handleYearEnd = e => { this.setState({ year_end: e.target.value })};
  handleName = e => { this.setState({ name: e.target.value })};
  handleLocation = e => { this.setState({ location: e.target.value })};
  handleDescription = e => { this.setState({ description: e.target.value }) };

  handleAdd = e => {
    // Patch request
    let formBody = {
      username: this.state.user.username,
      description: this.state.description,
      name: this.state.name,
      year_start: this.state.year_start,
      year_end: this.state.year_end,
      location: this.state.location
    }
    fetch(`/api/team/user/${this.state.user.username}`, {
      method: 'POST',
      body: JSON.stringify(formBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => {
      alert('Team added')
      this.setState({
        year_start: '',
        year_end: '',
        description: '',
        name: '',
        location: ''
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="">
        <h4>Team history</h4>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label className="mr-2" htmlFor="name">Name</label>
              <input className="form-control" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleName} />
            </div>
            <div className="col">
              <label className="mr-2" htmlFor="name">Location</label>
              <input className="form-control" type="text" name="location" placeholder="City and state" value={this.state.location} onChange={this.handleLocation} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex">
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="year_start" className="">From</label>
              <input className="form-control" type="number" name="year_start" placeholder="Year" value={this.state.year_start} onChange={this.handleYearStart} />
            </div>
            <div className="col">
              <label htmlFor="year_end" className="">To</label>
              <input className="form-control" type="number" name="year_end" placeholder="Year (if applicable)" value={this.state.year_end} onChange={this.handleYearEnd} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="mr-2" htmlFor="description">Description</label>
          <textarea className="form-control" name="description" aria-describedby="descriptionHelp" value={this.state.description} onChange={this.handleDescription}></textarea>
        </div>
        <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default TeamNew;
