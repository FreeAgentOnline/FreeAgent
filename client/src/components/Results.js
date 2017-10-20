import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFilter } from '../actions';

import ResultRow from './ResultRow';
import ResultGraph from './ResultGraph';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
      data: ''
    }
  }
  changeFilter = (e) => {
    this.setState({ filter: e.target.textContent })
  }
  render() {
    let data = this.props.data;
    let eventsObj = {};
    data.forEach(one => {
      if (eventsObj[one.event]) {
        eventsObj[one.event].push(one);
      } else {
        eventsObj[one.event] = [one];
      }
    });
    let linkRender = [];
    linkRender.push(
      <button className="btn btn-primary btn-sm" onClick={this.changeFilter}>All</button>
    )
    for (var property in eventsObj) {
      if (eventsObj.hasOwnProperty(property)) {
        linkRender.push(
          <button className="btn btn-primary btn-sm" onClick={this.changeFilter}>{property}</button>
        )
      }
    }
    // let eventsLinks = data.events.map((one, i) => {
    //   return (
    //     <li key={i} className="nav-item">
    //       <span onClick={() => this.handleIndex(i)} className="nav-link sim-link">{one.title}</span>
    //     </li>
    //   )
    // })

    let resultRender = [<div>No results saved</div>];
    if (data.length > 0) {
      if (this.state.filter === 'All') {
        resultRender = data.map((one, i) => {
          return (
            <ResultRow key={i} data={one} />
          )
        })
      } else {
        resultRender = eventsObj[this.state.filter].map((one, i) => {
          return (
            <ResultRow key={i} data={one} />
          )
        })
      }
    }

    return (
      <div>
        {linkRender}
        <h4 className="text-center">{this.state.filter}</h4>
        <div className="">
          <div className="row font-weight-bold py-2">
            <div className="col">Event</div>
            <div className="col">Date</div>
            <div className="col">Performance</div>
            <div className="col">Location</div>
            <div className="col">Reference</div>
          </div>
          {resultRender}
        </div>
      </div>
    );
  }
}

export default Results;
