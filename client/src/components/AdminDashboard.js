import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { meets } from '../../data/meets';

export default class AdminDashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
             user
        }
    }
    render(){

        // let
        return(
            <div>
                <h1>Admin Dashboard</h1>
                <div class="row justify-content-md-center">
                <button  className="btn btn-primary">Search</button>
                <button  className="btn btn-primary">Search</button>
                <button  className="btn btn-primary">Search</button>

                </div>


            </div>
        )
    }
}
