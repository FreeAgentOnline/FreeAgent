import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTeam, deleteTeam } from '../actions';


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
    this.props.updateTeam(this.props.data._id, formBody, this.props.user.username);
  }
  handleDelete = e => {
    this.props.deleteTeam(this.props.data._id, this.props.user.username);
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
          <button className="btn btn-sm btn-outline-success" onClick={() => this.handleUpdate()}>Update</button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => this.handleDelete()}>Delete</button>
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    updateTeam: (teamId, formBody, username) => dispatch(updateTeam(teamId, formBody, username)),
    deleteTeam: (teamId, username) => dispatch(deleteTeam(teamId, username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamEdit);
