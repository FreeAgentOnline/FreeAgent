import React, { Component } from 'react';

class TeamEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year_start: this.props.data.year_start,
      year_end: this.props.data.year_end,
      description: this.props.data.description,
      name: this.props.data.name,
      location: this.props.data.location
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
      <tr>
        <th scope="row">
          <input className="" type="text" name="name" placeholder="Team name" value={this.state.name} onChange={this.handleName} />
        </th>
        <td>
          <input className="" type="text" name="location" placeholder="City, State" value={this.state.location} onChange={this.handleLocation} />
        </td>
        <td>
          <input className="" type="number" name="year_start" placeholder="From" value={this.state.year_start} onChange={this.handleYearStart} />
        </td>
        <td>
          <input className="" type="number" name="year_end" placeholder="To (if applicable)" value={this.state.year_end} onChange={this.handleYearEnd} />
        </td>
        <td>
          <textarea className="" name="description" aria-describedby="descriptionHelp" value={this.state.description} onChange={this.handleDescription}></textarea>
        </td>
        <td>
          <button className="btn btn-sm btn-outline-success" onClick={this.handleUpdate}>Update</button>
          <button className="btn btn-sm btn-outline-danger" onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TeamEdit;
