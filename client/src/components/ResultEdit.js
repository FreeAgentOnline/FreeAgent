import React, { Component } from 'react';

class ResultEdit extends Component {
  constructor(props) {
    super(props);
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
    fetch(`/api/result/${this.props.data._id}`, {
      method: 'PATCH',
      body: JSON.stringify(formBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => alert('Result updated'))
    .catch(err => console.log(err))
  }
  handleDelete = () => {
    // Delete in database
    fetch(`/api/result/${this.props.data._id}`, { method: 'DELETE' })
    .then()
    this.setState({
      event: '', measurement: '', unit: '', date: '', location: '', performance: '', reference: ''
    })
  }
  render() {
    return (
      <div id="" className="d-flex">
        <input name="event" type="text" placeholder="event" onChange={this.handleEvent} value={this.state.event} />
        <input name="date" type="text" placeholder="date" onChange={this.handleDate} value={this.state.date} />
        <input name="location" type="text" placeholder="location" onChange={this.handleLocation} value={this.state.location} />
        <input name="value" type="number" placeholder="value" onChange={this.handlePerformance} value={this.state.performance} />
        <input name="reference" type="text" placeholder="Reference URL" onChange={this.handleReference} value={this.state.reference} />
        <button type="button" className="btn btn-outline-success btn-sm" onClick={() => this.handleUpdate()}>Update</button>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.handleDelete()}>Delete</button>
      </div>
    );
  }
}

export default ResultEdit;
