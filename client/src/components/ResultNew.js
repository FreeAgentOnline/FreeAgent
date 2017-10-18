import React, { Component } from 'react';

class ResultNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      measurement: '',
      units: '',
      date: '',
      location: '',
      value: '',
      source: ''
    }
  }
  handleEvent = e => { this.setState({ event: e.target.value }) }
  handleValue = e => { this.setState({ value: e.target.value }) }
  handleLocation = e => { this.setState({ location: e.target.value }) }
  handleDate = e => { this.setState({ date: e.target.value }) }
  handleSource = e => { this.setState({ source: e.target.value }) }
  handleMeasurement = e => { this.setState({ measurement: e.target.value }) }
  handleUnits = e => { this.setState({ units: e.target.value }) }

  handleSave = () => {
    // Post to database
  }
  handleClear = () => {
    this.setState({
      event: '', date: '', location: '', value: '', source: '', measurement: '', units: ''
    })
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
        <input name="value" type="number" placeholder="value" onChange={this.handleValue} value={this.state.value} />
        <select name="units" onChange={this.handleUnits} placeholder="Units:">
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
