import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateResult, deleteResult } from '../actions';

class ResultEdit extends Component {
  constructor(props) {
    super(props);
    console.log('this.props', this.props);
    this.state = {
      event: this.props.data.event,
      date: this.props.data.date,
      location: this.props.data.location,
      performance: this.props.data.performance,
      reference: this.props.data.reference,
      measurement: this.props.data.measurement,
      unit: this.props.data.unit
    }
  }
  handleEvent = e => { this.setState({ event: e.target.value }) }
  handlePerformance = e => { this.setState({ performance: e.target.value }) }
  handleLocation = e => { this.setState({ location: e.target.value }) }
  handleDate = e => { this.setState({ date: e.target.value }) }
  handleReference = e => { this.setState({ reference: e.target.value }) }
  handleUpdate = () => {
    // Update in database
    let formBody = {
      event: this.state.event,
      measurement: this.state.measurement,
      unit: this.state.unit,
      date: this.state.date,
      performance: this.state.performance,
      location: this.state.location,
      reference: this.state.reference
    }
    this.props.updateResult(this.props.data._id, formBody, this.props.user.username);
  }
  handleDelete = () => {
    // Delete in database
    console.log('my _id', this.props.data._id);
    this.props.deleteResult(this.props.data._id, this.props.user.username);
  }
  render() {
    return (
      <div id="" className="row mt-2">
        <div className="col-2">
          <input className="border-0 bg-light" name="event" type="text" placeholder="event" onChange={this.handleEvent} value={this.state.event} />
        </div>
        <div className="col-2">
          <input className="border-0 bg-light" name="date" type="text" placeholder="date" onChange={this.handleDate} value={this.state.date} />
        </div>
        <div className="col-2">
          <input className="border-0 bg-light" name="location" type="text" placeholder="Location" onChange={this.handleLocation} value={this.state.location} />
        </div>
        <div className="col-2">
          <input className="border-0 bg-light" name="value" type="number" placeholder="value" onChange={this.handlePerformance} value={this.state.performance} />
        </div>
        <div className="col-2">
          <input className="border-0 bg-light" name="reference" type="text" placeholder="Reference URL" onChange={this.handleReference} value={this.state.reference} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-success btn-sm" onClick={() => this.handleUpdate()}>Update</button>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.handleDelete()}>Delete</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    updateResult: (resultId, formBody, username) => dispatch(updateResult(resultId, formBody, username)),
    deleteResult: (resultId, username) => dispatch(deleteResult(resultId, username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultEdit);

// export default ResultEdit;
