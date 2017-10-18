import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            query: this.props.query
        }
    }

    handleQuery = e => {
        this.setState({ query : ''})
    }fgf

    handleSearch = () => {
        // search for events
        this.setState({ query: '' });
    }
    render(){




        return (
            <div id="searchPage">
                <div id="left" className="panel panel-default">
                    <div className="panel-body"> Search Page Left.
                        <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery}/>
                        <button type="submit" className="btn btn-primary" id="searchButton" onClick={this.handleSearch}>Search</button>
                        {/*<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHxd9VPfDLGh5BJwhRWIJwdnL7r0my160&callback=initMap"
                        type="text/javascript"></script>*/}
                        <div id="map">
                            <script>
                            function initMap() {
                                var uluru = {lat: -25.363, lng: 131.044};
                                var map = new google.maps.Map(document.getElementById('map'), {
                                    zoom: 4,
                                    center: uluru
                                });
                                var marker = new google.maps.Marker({
                                    position: uluru,
                                    map: map
                                });
                            }
                            </script>
                        </div>
                    </div>
                </div>
                <div id="middleBar">
                </div>

                <div id="right" className="panel panel-default">
                    <div className="panel-body">
                        <h1>Available Meets</h1>
                        <div classname = "Results">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-block">
                                            <h3 class="card-title">Special title treatment</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-block">
                                            <h3 class="card-title">Special title treatment</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-block">
                                            <h3 class="card-title">Special title treatment</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-block">
                                            <h3 class="card-title">Special title treatment</h3>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
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
