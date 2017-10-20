import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResultGraph from './ResultGraph';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      index: 0,
      data: ''
    }
  }
  handleIndex = (i) => {
    this.setState({ index: i });
  }
  handleFilter = (string) => {
    this.setState({ filter: string })
    console.log('this.state', this.state);
  }
  render() {
    // console.log('this.state', this.state);
    let data = this.props.data;
    let eventsObj = {};
    data.forEach(one => {
      if (eventsObj[one.event]) {
        eventsObj[one.event].push(one);
      } else {
        eventsObj[one.event] = [one];
      }
    });
    let linkArr = [];
    for (var property in eventsObj) {
      if (eventsObj.hasOwnProperty(property)) {
        // do stuff
        linkArr.push(
          <button className="btn btn-primary btn-sm" onClick={() => this.handleFilter(property)}>{property}</button>
        )
      }
    }
    console.log('linkArr', linkArr);
    // let eventsLinks = data.events.map((one, i) => {
    //   return (
    //     <li key={i} className="nav-item">
    //       <span onClick={() => this.handleIndex(i)} className="nav-link sim-link">{one.title}</span>
    //     </li>
    //   )
    // })
    let filter = this.state.filter;

    let resultRender = [<div>No results saved</div>];
    if (data.length > 0) {
      resultRender = eventsObj['Long Jump'].map((one, i) => {
        return (
          <tr key={i}>
            <td>{one.date}</td>
            <td>
              {one.performance}
              {one.unit}
            </td>
            <td>{one.location}</td>
            <td>{ one.reference ? <Link to={one.reference}>Link</Link> : 'None listed' }</td>
          </tr>
        )
      })
    }
    return (
      <div>
        {linkArr}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Result</th>
              <th scope="col">Location</th>
              <th scope="col">Reference</th>
            </tr>
          </thead>
          <tbody>
            {resultRender}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Results;
