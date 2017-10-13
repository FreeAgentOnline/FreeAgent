import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { user, results } from '../data/mockdata';

import ResultGraph from './ResultGraph';

class Profile extends Component {
  render() {
    let eventsRender = user.events.map((one, i) => {
      return (
        <span key={i} className="badge badge-primary mx-1">{one}</span>
      )
    })
    let historyRender = user.teamHistory.map((one, i) => {
      return (
        <div key={i}>
          <h6 className="mb-1">{one.name}</h6>
          <p className="my-0 font-italic">{one.dates.start} - {one.dates.end}</p>
          <p className="mb-2">{one.location}</p>
          <p>{one.details}</p>
        </div>
      )
    })
    let recordRender = results.map((one, i) => {
      return (
        <div key={i} className="row">
          <div className="col-3">{one.date}</div>
          <div className="col-4">{one.location}</div>
          <div className="col-3">{one.result.amount}{one.result.measurement}</div>
          <div className="col-2"><Link to={one.source}>Link</Link></div>
        </div>
      )
    })
    return (
      <div className="container">
        <header className="d-flex align-items-center">
          <h2>{user.name.first} {user.name.last}</h2>
          <p className="ml-2 lead">@{user.username}</p>
        </header>
        <main>
          <h4>Biography</h4>
          <p>{user.bio}</p>
          <div className="d-flex">
            <h4>Events</h4>
            <p className="ml-1">{eventsRender}</p>
          </div>
          <div className="jumbotron p-3 mb-3">
            <h4>Result</h4>
            <ResultGraph data={results}/>
            <div className="row font-weight-bold">
              <div className="col-3">Date</div>
              <div className="col-4">Location</div>
              <div className="col-3">Result</div>
              <div className="col-2">Source</div>
            </div>
            {recordRender}
          </div>
          <h4>Team history</h4>
          {historyRender}
        </main>
      </div>
    );
  }
}

export default Profile;
