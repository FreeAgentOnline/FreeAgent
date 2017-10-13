import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RecordGraph from './RecordGraph';

let user = {
  name: {
    first: 'Imani',
    last: 'Oliver'
  },
  username: 'imanio',
  bio: 'Born in a car in Brooklyn, NY, Imani climbed the competitive ranks for Track & Field to earn a spot on Princeton University\'s Athletics team. Imani is looking to qualify for the 2020 Summer Olympics in the triple jump.',
  events: ['Triple jump', 'High jump', 'Leap frog'],
  teamHistory: [
    {
      name: 'Princeton University',
      dates: {
        start: '2010',
        end: '2014'
      },
      location: 'Princeton, NJ',
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'Crystal Palace Track Club',
      dates: {
        start: '2013',
        end: '2015'
      },
      location: 'New York, NY',
      details: 'Imani ran real good and jumped even better at the Crystal Palace Track Club.'
    }
  ]
};
let records = [
  {
    date: '11/3/2017',
    location: 'Atlanta, GA',
    result: {
      amount: 13.39,
      measurement: 'm'
    },
    source: 'http://google.com'
  },
  {
    date: '10/17/2017',
    location: 'Nashville, TN',
    result: {
      amount: 13.36,
      measurement: 'm'
    },
    source: 'http://google.com'
  },
  {
    date: '10/5/2017',
    location: 'New York, NY',
    result: {
      amount: 13.37,
      measurement: 'm',
    },
    source: 'http://google.com'
  },
  {
    date: '9/30/2017',
    location: 'Princeton, NJ',
    result: {
      amount: 13.35,
      measurement: 'm',
    },
    source: 'http://google.com'
  },
  {
    date: '9/21/2017',
    location: 'Brooklyn, NY',
    result: {
      amount: 13.34,
      measurement: 'm',
    },
    source: 'http://google.com'
  }
]

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
    let recordRender = records.map((one, i) => {
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
            <h4>Records</h4>
            <RecordGraph />
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
