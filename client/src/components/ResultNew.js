import React, { Component } from 'react';

import user from '../data/user';

class ResultNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      measurement: '',
      unit: '',
      date: '',
      location: '',
      performance: '',
      source: '',
      user: user
    }
  }
  handleEvent = e => { this.setState({ event: e.target.value }) }
  handlePerformance = e => { this.setState({ performance: e.target.value }) }
  handleLocation = e => { this.setState({ location: e.target.value }) }
  handleDate = e => { this.setState({ date: e.target.value }) }
  handleSource = e => { this.setState({ source: e.target.value }) }
  handleMeasurement = e => { this.setState({ measurement: e.target.value }) }
  handleUnit = e => { this.setState({ unit: e.target.value }) }

  handleClear = () => {
    this.setState({
      event: '', date: '', location: '', performance: '', source: '', measurement: '', unit: ''
    })
  }

  handleSave = () => {
    // Post to database
    let formBody = {
      event: this.state.event,
      measurement: this.state.measurement,
      unit: this.state.unit,
      date: this.state.date,
      location: this.state.location,
      performance: this.state.performance,
      source: this.state.source
    }
    fetch(`/api/result/user/${this.state.user._id}`, {
      method: 'POST',
      body: JSON.stringify(formBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => {
      console.log(data);
      this.handleClear();
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div id="" className="">
        <input name="event" type="text" placeholder="event" onChange={this.handleEvent} value={this.state.event} />
        <select name="measurement" onChange={this.handleMeasurement}>
          <option selected disabled>Measurement:</option>
          <option value="time">Time</option>
          <option value="distance">Distance</option>
          <option value="height">Height</option>
        </select>
        <input name="value" type="number" placeholder="value" onChange={this.handlePerformance} value={this.state.performance} />
        <select name="unit" onChange={this.handleUnit} placeholder="Units:">
          <option selected disabled>Units:</option>
          <option value="m">Meters (m)</option>
          <option value="in">Inches (in)</option>
          <option value="sec">Seconds (sec)</option>
          <option value="min">Minutes (min)</option>
        </select>
        <input name="date" type="text" placeholder="date" onChange={this.handleDate} value={this.state.date} />
        <input name="location" type="text" placeholder="location" onChange={this.handleLocation} value={this.state.location} />
        <input name="source" type="text" placeholder="source" onChange={this.handleSource} value={this.state.source} />
        <button type="button" className="btn btn-outline-success btn-sm" onClick={() => this.handleSave()}>Save</button>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.handleClear()}>Clear</button>
      </div>
    );
  }
}

export default ResultNew;
