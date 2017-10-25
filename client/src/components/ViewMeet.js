import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../data/user';
import * as moment from 'moment';
import { connect } from 'react-redux';

class ViewMeet extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentMeet: {},
            alreadySaved: false,
            user
        }
    }


    handleSaveMeet = e => {
        e.preventDefault();
        let savedMeetBody = {
            username: this.state.user.username,
            meetId: this.props.match.params.meetId,
            isScheduled: false,
            name: this.state.currentMeet.name,
            date_start: this.state.currentMeet.date_start,
            date_end: this.state.currentMeet.date_end,
            country: this.state.currentMeet.country,
            venue: this.state.currentMeet.venue || '',
            city: this.state.currentMeet.city || '',
            state: this.state.currentMeet.state || '',
            lat: this.state.currentMeet.lat || '',
            lng: this.state.currentMeet.lng || '',
        }
        fetch(`/api/meet/`+ this.state.currentMeet.meetId + `/save/user/` + this.state.user.username, {
          method: 'POST',
          body: JSON.stringify(savedMeetBody),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(data => {
          this.setState({ alreadySaved: true });
          alert('Meet Saved');
        })
        .catch(err => console.log("error posting saved meet to database: ", err))

    }
    //
    // handleScheduleMeet = e => {
    //     e.preventDefault();
    //
    //
    //     fetch(`/api/meet/save/`+ this.state.currentMeet.meetId , {
    //
    //       method: 'POST',
    //       body: JSON.stringify(savedMeetBody),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     .then(data => alert('Meet Saved'))
    //     .catch(err => console.log("error posting saved meet to database: ", err))
    // }

    componentDidMount(){
        const URL= `/api/meet/${this.props.match.params.meetId}`;

        fetch(URL)
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({currentMeet: data})
            console.log('this.state.currentMeet: ', this.state.currentMeet);
        })
        .catch(err => {
            console.log("error fetching! : ", err);
        })

    }

    render(){
      let meet = this.state.currentMeet;
      let meetLink = "https://www.google.com/maps/dir/?api=1&origin=" + "Atlanta" +","+ "USA" + "&destination=" + meet.city + "," + meet.country + "&travelmode=driving"

        return(
          <div className="container">
            <div className="card m-3">
                  <div className="card-block">
                        <h3>Meet Information</h3>
                        <h2 className="card-title">{meet.name}</h2>

                        <p className="card-text"><strong>Date Start: </strong>{moment(meet.date_start).format("ddd, MMMM D YYYY")}</p>
                        <p className="card-text"><strong>Date End: </strong>{moment(meet.date_end).format("ddd, MMMM D YYYY")}</p>
                        <p><strong>Venue: </strong>{meet.venue ? meet.venue : 'TBD'}</p>
                        <p><strong>Location: </strong>{meet.city}, {meet.state} ({meet.country})</p>
                        <p><strong>Cost: </strong>{meet.cost ? '$' + meet.cost : 'Not listed'}</p>

                        <button onClick={this.handleSaveMeet} className="btn btn-outline-success"><i className="fa fa-calendar-plus-o mr-1" aria-hidden="true"></i>Save Meet</button>
                        <a className="btn btn-outline-primary ml-3" href={meetLink} target="_blank"><i className="fa fa-location-arrow mr-1" aria-hidden="true"></i>Get Directions</a>
                  </div>
            </div>
          </div>
        )
    }
}


function mapStateToProps(state) {
  console.log('state on ViewMeet', state);
  return {
    meets: state.meets
  }
}


export default connect(mapStateToProps)(ViewMeet);
