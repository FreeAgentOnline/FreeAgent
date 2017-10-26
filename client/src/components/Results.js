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
    // Create an object with properties containing event keys and array values with result objects
    let eventsObj = {};
    data.forEach(one => {
      if (eventsObj[one.event]) {
        eventsObj[one.event].push(one);
      } else {
        eventsObj[one.event] = [one];
      }
    });
    // This will become the result links in the card header
    let linkRender = [];
    // Push a generic "view all" button
    // SUNSETTED
    // linkRender.push(
    //   <li className="nav-item">
    //     <span className="nav-link" onClick={this.changeFilter}>All</span>
    //   </li>
    // )
    // Iterate through object to create buttons for each result event category
    let tempIndex = 0;
    for (var property in eventsObj) {
      if (eventsObj.hasOwnProperty(property)) {
        linkRender.push(
          <li key={tempIndex} className="nav-item">
            <span className="nav-link button mr-2" onClick={this.changeFilter}>{property}</span>
          </li>
        )
        tempIndex++;
      }
    }
    // Change this to prevent results from rendering if none saved
    let resultRender = [];
    if (data.length > 0) {
      if (this.props.filter === 'All') {
        // Automatically set the filter to the first index's event
        this.props.setFilter(data[0].event);
        resultRender = data.map((one, i) => {
          return (
            <div key={i}>
              <ResultRow index={i} data={one} />
            </div>
          )
        })
      } else {
        resultRender = eventsObj[this.props.filter].map((one, i) => {
          return (
            <div key={i}>
              <ResultRow index={i} data={one} />
            </div>
          )
        })
      }
    }

    return (
      <div className="card mb-3">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            {linkRender}
          </ul>
        </div>
        <div className="card-body p-3">
        <h3 className="text-center">{this.props.filter}</h3>
        <ResultGraph />
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
