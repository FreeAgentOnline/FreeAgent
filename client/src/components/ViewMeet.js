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
//either params.id or params.meetId
    render(){

        return(
            <div className="card">
                    <div className="card-block">
                    Meet Information
                          <h4 className="card-title"> Name: {this.state.currentMeet.name}</h4>

                     
                    </div>
                    <div className="card-block">
                      <blockquote className="card-blockquote">
                        <p>{this.state.currentMeet.city}</p>

                      </blockquote>

                    </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
  console.log('state on Search', state);
  return {
    meets: state.meets
  }
}


export default connect(mapStateToProps)(ViewMeet);
