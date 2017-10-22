import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { createResult } from '../actions';

import user from '../data/user';

class ResultNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      measurement: '',
      unit: '',
      date: '',
      performance: '',
      location: '',
      reference: '',
      user: user
    }
  }
  handleEvent = e => { this.setState({ event: e.target.value }) }
  handleMeasurement = e => { this.setState({ measurement: e.target.value }) }
  handleUnit = e => { this.setState({ unit: e.target.value }) }
  handleDate = e => { this.setState({ date: e.target.value }) }
  handlePerformance = e => { this.setState({ performance: e.target.value }) }
  handleLocation = e => { this.setState({ location: e.target.value }) }
  handleReference = e => { this.setState({ reference: e.target.value }) }

  handleClear = () => {
    this.setState({
      event: '', date: '', location: '', performance: '', reference: '', measurement: '', unit: ''
    })
  }

  handleSave = () => {
    // Post to database
    let formBody = {
      event: this.state.event,
      measurement: this.state.measurement,
      unit: this.state.unit,
      date: this.state.date,
      performance: this.state.performance,
      location: this.state.location,
      reference: this.state.reference
    }
    this.props.createResult(this.state.user.username, formBody);
  }
  render() {
    return (
      <div id="" className="">
        <div className="d-flex input-group-sm">
          <input className="form-control" name="event" type="text" placeholder="Event" onChange={this.handleEvent} value={this.state.event} />
          <select className="form-control" name="measurement" onChange={this.handleMeasurement} defaultValue="Measurement:">
            <option disabled>Measurement:</option>
            <option value="time">Time</option>
            <option value="distance">Distance</option>
            <option value="height">Height</option>
            <option value="points">Points</option>
          </select>
          <input className="form-control" name="performance" type="number" placeholder="Performance" onChange={this.handlePerformance} value={this.state.performance} />
          <select className="form-control" name="unit" onChange={this.handleUnit} placeholder="Units:" defaultValue="Units:">
            <option disabled>Units:</option>
            <option value="m">Meters (m)</option>
            <option value="in">Inches (in)</option>
            <option value="sec">Seconds (sec)</option>
            <option value="min">Minutes (min)</option>
            <option value="pts">Points (pts)</option>
          </select>
          <input className="form-control" name="date" type="text" placeholder="Date (mm/dd/yyyy)" onChange={this.handleDate} value={this.state.date} />
          <input className="form-control" name="location" type="text" placeholder="Location (City, State)" onChange={this.handleLocation} value={this.state.location} />
          <input className="form-control" name="reference" type="text" placeholder="Reference URL" onChange={this.handleReference} value={this.state.reference} />
        </div>
        <div className="text-center mt-2">
          <button type="button" className="btn btn-outline-success btn-sm" onClick={() => this.handleSave()}>Save</button>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.handleClear()}>Clear</button>
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
    createResult: (username, formBody) => dispatch(createResult(username, formBody))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultNew);
