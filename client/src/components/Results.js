import React, { Component } from 'react';
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
    this.props.setFilter(e.target.textContent);
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
      <li className="nav-item">
        <span className="nav-link" onClick={this.changeFilter}>All</span>
      </li>
    )
    for (var property in eventsObj) {
      if (eventsObj.hasOwnProperty(property)) {
        linkRender.push(
          <li className="nav-item">
            <span className="nav-link" onClick={this.changeFilter}>{property}</span>
          </li>
        )

      }
    }

    let resultRender = [<div>No results saved</div>];
    if (data.length > 0) {
      if (this.props.filter === 'All') {
        resultRender = data.map((one, i) => {
          return (
            <ResultRow index={i} data={one} />
          )
        })
      } else {
        resultRender = eventsObj[this.props.filter].map((one, i) => {
          return (
            <ResultRow index={i} data={one} />
          )
        })
      }
    }

    return (
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            {linkRender}
          </ul>
        </div>
        <div className="card-body p-3">
        <h4 className="text-center">{this.props.filter}</h4>
        <ResultGraph data={data}/>
          <div className="">
            <div className="row font-weight-bold p-2">
              <div className="col">Event</div>
              <div className="col">Date</div>
              <div className="col">Performance</div>
              <div className="col">Location</div>
              <div className="col">Reference</div>
            </div>
            {resultRender}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => dispatch(setFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
