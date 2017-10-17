import React, { Component } from 'react';

class ResultEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      date: this.props.data.date,
      location: this.props.data.location,
      value: this.props.data.value,
      source: this.props.data.source
    }
  }
  handleEvent = e => {
    this.setState({ event: e.target.value });
  }
  handleValue = e => {
    this.setState({ value: e.target.value });
  }
  handleLocation = e => {
    this.setState({ location: e.target.value });
  }
  handleDate = e => {
    this.setState({ date: e.target.value });
  }
  handleSource = e => {
    this.setState({ source: e.target.value });
  }
  handleUpdate = () => {
    // Update in database
  }
  handleDelete = () => {
    // Delete in database
    this.setState({
      date: '', location: '', value: '', source: ''
    })
  }
  render() {
    console.log('this.props on ResultEdit', this.props);
    return (
      <div id="" className="d-flex">
        <input name="event" type="text" placeholder="event" onChange={this.handleEvent} value={this.state.event} />
        <input name="date" type="text" placeholder="date" onChange={this.handleDate} value={this.state.date} />
        <input name="location" type="text" placeholder="location" onChange={this.handleLocation} value={this.state.location} />
        <input name="value" type="number" placeholder="value" onChange={this.handleValue} value={this.state.value} />
        <input name="source" type="text" placeholder="source" onChange={this.handleSource} value={this.state.source} />
        <button type="button" className="btn btn-outline-success btn-sm" onClick={() => this.handleUpdate()}>Update</button>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => this.handleDelete()}>Delete</button>
      </div>
    );
  }
}

export default ResultEdit;
