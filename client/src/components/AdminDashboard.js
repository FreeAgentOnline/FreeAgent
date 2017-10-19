import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import meets from '../data/meets';
import * as moment from 'moment';

export default class AdminDashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            meets: meets
        }
    }

    render(){

        let meetData = this.state.meets.map((meet, index)=>{
            return(
                        <tr key= {index}>
                            <th scope="row">{index + 1}</th>
                            <td>{meet.name}</td>
                            <td>{moment(meet.date_start).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                            <td>{meet.country}</td>
                            <td><button  className="btn btn-primary"> <a id="adminViewMeet" href="/admin/dashboard">View Meet</a> </button></td>
                        </tr>
            )
        })

        return(
            <div className="container">
                <h1>Admin Dashboard</h1>
                <div className="row justify-content-md-center">
                    <button  className="btn btn-primary ">Dashboard</button>
                    <button  className="btn btn-primary">Meets</button>
                    <button  className="btn btn-primary">Users</button>

                </div>
                <div className="row justify-content-md-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Meet Name</th>
                            <th>Start Date</th>
                            <th>Country</th>
                            <th>Edit Meet</th>
                        </tr>
                    </thead>
                        <tbody>
                            {meetData}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
