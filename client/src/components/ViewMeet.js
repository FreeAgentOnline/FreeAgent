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
    handleSave = () => {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(`/api/meet/${this.state.currentMeet._id}/save/user/59e7c5d6a9b1777678172aff`, options)
    }
//either params.id or params.meetId
    render(){
      let meet = this.state.currentMeet;
        return(
          <div className="container">
            <div className="card m-3">
                    <div className="card-block">
                      <h4 className="card-title"> {this.state.currentMeet.name}</h4>
                      <p className="card-text">
                        <strong>Start date: </strong>
                        {moment(meet.date_start).format("ddd. MMM D, YYYY h:mm a")}
                      </p>
                      <p className="card-text">
                        <strong>End date: </strong>
                        {moment(meet.date_end).format("ddd. MMM D, YYYY h:mm a")}
                      </p>
                      <p className="card-text">
                        <strong>Location: </strong>
                        {this.state.currentMeet.city}, {meet.state}{meet.country ? ` (${meet.country})` : ''}
                      </p>
                      <p className="text-right mb-0">
                        <button className="btn btn-primary" onClick={this.handleSave}>Save Meet</button>
                      </p>
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
