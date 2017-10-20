import React, { Component } from 'react';

class TeamEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year_start: this.props.data.year_start,
      year_end: this.props.data.year_end,
      description: this.props.data.description,
      name: this.props.data.name,
      location: this.props.data.location,
      user
    }
  }
  handleYearStart = e => { this.setState({ year_start: e.target.value })};
  handleYearEnd = e => { this.setState({ year_end: e.target.value })};
  handleName = e => { this.setState({ name: e.target.value })};
  handleLocation = e => { this.setState({ location: e.target.value })};
  handleDescription = e => { this.setState({ description: e.target.value }) };

  handleUpdate = e => {
    // Patch request
    let formBody = {
      description: this.state.description,
      name: this.state.name,
      year_start: this.state.year_start,
      year_end: this.state.year_end,
      location: this.state.location
    }
    fetch(`/api/team/${this.props.data._id}`, {
      method: 'PATCH',
      body: JSON.stringify(formBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => {
      alert('Team updated')
    })
    .catch(err => console.log(err))
  }
  handleDelete = e => {
    fetch(`/api/team/${this.props.data._id}`, {
      method: 'DELETE'
    })
    .then(data => {
      console.log(data)
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
        <button className="btn btn-primary" onClick={this.handleUpdate}>Update</button>
        <button className="btn btn-primary" onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default TeamEdit;
