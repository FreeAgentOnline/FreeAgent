import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import meets from '../data/meets';
import * as moment from 'moment';
import { connect } from 'react-redux';

class ViewMeet extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentMeet: {}
        }
    }


    // handleSaveMeet = e => {
    //     e.preventDefault();
    //     let savedMeetBody = {
    //         //I'll need a solution for the userId here since we aren't pulling from current users.
    //         // userId: req.params.userId,
    //         // //
    //         // meetId: req.params.meetId,
    //         isScheduled: false,
    //         name: this.state.currentMeet.name,
    //         date_start: this.state.currentMeet.date_start,
    //         date_end: this.state.currentMeet.date_end,
    //         country: this.state.currentMeet.country,
    //         venue: this.state.currentMeet.venue || '',
    //         city: this.state.currentMeet.city || '',
    //         state: this.state.currentMeet.state || '',
    //         lat: this.state.currentMeet.lat || '',
    //         lng: this.state.currentMeet.lng || '',
    //     }
    //     fetch(`/api/meet/`+ this.state.currentMeet.meetId + `/save/user/` + this.props.user, {
    //       method: 'POST',
    //       body: JSON.stringify(savedMeetBody),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     .then(data => alert('Meet Saved'))
    //     .catch(err => console.log("error posting saved meet to database: ", err))
    //
    // }
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
                          <h3> Meet Information</h3>
                          <h4 className="card-title"> <strong>Name: </strong> {meet.name}</h4>

                          <p className="card-text"><strong>Date Start: </strong>{moment(meet.date_start).format("ddd, MMMM D YYYY")}</p>
                          <p className="card-text"><strong>Date End: </strong>{moment(meet.date_end).format("ddd, MMMM D YYYY")}</p>
                          <p><strong>Cost: </strong>${meet.cost}</p>
                          <p><strong>Venue: </strong>{meet.venue}</p>

                          <button onClick="handleSaveMeet" className="btn">Save Meet</button>
                          <button className="btn"> <a href={meetLink} target="_blank"> Get Directions</a></button>
                    </div>
                    <div className="card-block">
                      <blockquote className="card-blockquote">
                        <p>{meet.city}, {meet.country}</p>


                      </blockquote>

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
