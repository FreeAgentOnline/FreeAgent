import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import user from '../data/user';

import '../styles/dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      saves: []
    }
  }
  // Fetch saved meets for user
  componentDidMount() {
    fetch(`/api/meet/save/user/imanioliver`)
    .then(res => res.json())
    .then(data => {
      this.setState({ saves: data })
    })
    .catch(err => console.log(err))
  }
  // componentDidMount() {
  //   fetch(`/api/team/user/${this.props.match.params.username}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({ teams: data });
  //   })
  //   .catch(err => console.log(err))
  // }
  render() {
    let savesArr = this.state.saves.map((save, i) => {
      console.log('save', save);
      return (
        <div key={i} className="row mt-2">
          <div className="col-2">{moment(save.date_start).format("ddd, M/D/YY")}</div>
          <div className="col-3">{save.name}</div>
          <div className="col-3">{save.city}, {save.state} ({save.country})</div>
          <div className="col-2">{save.cost ? `$${save.cost}.00` : 'None listed'}</div>
          <div className="col-1"><Link to={`/meet/${save.meetId}`}>Details</Link></div>
          <div className="col-1">
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </div>
        </div>
      )
    })
    return (
      <div className="container mt-3">
        <h1>Welcome back, {this.state.user.first_name}</h1>
        <p>Your dashboard is the place to keep track of your saved meets, record results to be displayed on your profile, and edit your public and private information.</p>
        <h2>Saved meets</h2>
        <div className="row font-weight-bold">
          <div className="col-2">Date</div>
          <div className="col-3">Name</div>
          <div className="col-3">City</div>
          <div className="col-2">Cost</div>
          <div className="col-1">Info</div>
          <div className="col-1">Edit</div>
        </div>
        {savesArr}
        <h2 className="mt-3">Update your information</h2>
        <div id="dashBoxContainer" className="mt-3">
          <Link to="/dashboard/info" id="dashBasic" className="dashBox">
            <div className="">
              <div className="d-flex align-items-center">
                <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                <h2 className="">Basic Info</h2>
              </div>
              <p className="">Update your name, tagline, bio, and location</p>
            </div>
          </Link>
          <Link to="/dashboard/result" id="dashResults" className="dashBox">
          <div className="">
            <div className="d-flex align-items-center">
              <i className="fa fa-line-chart fa-lg fa-fw" aria-hidden="true"></i>
              <h2 className="">Results</h2>
            </div>
            <p className="">Track your results and display them on your profile</p>
          </div>
          </Link>
          <Link to="/dashboard/team" id="dashTeam" className="dashBox">
            <div className="">
              <div className="d-flex align-items-center">
                <i className="fa fa-history fa-lg fa-fw" aria-hidden="true"></i>
                <h2 className="">History</h2>
              </div>
              <p className="">Update and add to your team history</p>
            </div>
          </Link>
          <Link to="/dashboard/settings" id="dashSettings" className="dashBox">
            <div className="">
              <div className="d-flex align-items-center">
                <i className="fa fa-cog fa-lg fa-fw" aria-hidden="true"></i>
                <h2 className="">Settings</h2>
              </div>
              <p className="">Update email, reset password, and other settings</p>
            </div>
          </Link>
        </div>
        {/*<h4>Scheduled events</h4>*/}
        {/* Render Saved Meets */}
        {/*<h4>Starred events</h4>*/}
      </div>
    );
  }
}

export default Dashboard;
