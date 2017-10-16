import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { user, results } from '../data/mockdata';

import Results from './Results';
import History from './History';

class Profile extends Component {
  render() {
    // let eventsRender = user.events.map((one, i) => {
    //   return (
    //     <span key={i} className="badge badge-primary mx-1">{one}</span>
    //   )
    // })
    return (
      <div className="container">
        <header className="d-flex align-items-center">
          <h2>{user.name.first} {user.name.last}</h2>
          <p className="ml-2 lead">@{user.username}</p>
        </header>
        <main>
          <h4>Biography</h4>
          <p>{user.bio}</p>
          <Results data={results}/>
          <History data={user}/>
        </main>
      </div>
    );
  }
}

// <div className="d-flex">
// <h4>Events</h4>
// <p className="ml-1">{eventsRender}</p>
// </div>

export default Profile;
