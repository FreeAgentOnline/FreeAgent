import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResultGraph from './ResultGraph';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  handleIndex = (i) => {
    this.setState({ index: i });
  }
  render() {
    // console.log('this.state', this.state);
    let data = this.props.data;
    let eventsLinks = data.events.map((one, i) => {
      return (
        <li key={i} className="nav-item">
          <span onClick={() => this.handleIndex(i)} className="nav-link sim-link">{one.title}</span>
        </li>
      )
    })
    let resultRender = data.events[this.state.index].data.results.map((one, i) => {
      return (
        <div key={i} className="row">
          <div className="col-3">{one.date}</div>
          <div className="col-4">{one.location}</div>
          <div className="col-3">{one.value}{data.events[this.state.index].data.units}</div>
          <div className="col-2"><Link to={one.source}>Link</Link></div>
        </div>
      )
    })
    return (
      <div className="card mb-3">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            {eventsLinks}
          </ul>
        </div>
        <div className="card-body p-3">
          <h4 className="card-title text-center">{data.events[this.state.index].title} progress</h4>
          <ResultGraph data={data.events[this.state.index].data.results}/>
          <div className="row font-weight-bold">
            <div className="col-3">Date</div>
            <div className="col-4">Location</div>
            <div className="col-3">Result</div>
            <div className="col-2">Source</div>
          </div>
          {resultRender}
        </div>
      </div>
    );
  }
}

export default Results;
