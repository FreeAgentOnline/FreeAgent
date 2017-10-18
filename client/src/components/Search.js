import React, { Component } from 'react';
import MyFancyComponent from './Map';

export default class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            query: this.props.query
        }
    }

    handleQuery = e => {
        this.setState({ query : e.target.value})
    }

    handleSearch = e => {
      // search for events
      this.setState({ query: '' });
    }
    render(){

        return (
            <div id="searchPage">
                <div id="left" className="panel panel-default">
                    <div className="panel-body"> Search Page Left.
                        <div id="searchField" className="row">
                            <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery}/>
                            <button type="submit" className="btn btn-primary" id="searchButton" onClick={this.handleSearch}>Search</button>
                        </div>
                        <div id="mapField">
                            <MyFancyComponent/>
                        </div>
                    </div>
                </div>
                <div id="middleBar">
                </div>

                <div id="right" className="panel panel-default">
                    <div className="panel-body">
                        <h1>Available Meets</h1>
                        <div classname = "Results">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-block">
                                            <h3 className="card-title">Special title treatment</h3>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="/" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-block">
                                            <h3 className="card-title">Special title treatment</h3>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="/" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-block">
                                            <h3 className="card-title">Special title treatment</h3>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="/" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-block">
                                            <h3 className="card-title">Special title treatment</h3>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="/" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
