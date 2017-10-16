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
    }

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
                        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHxd9VPfDLGh5BJwhRWIJwdnL7r0my160&callback=initMap"
  type="text/javascript"></script>
                    </div>

                </div>
                <div id="middleBar">

                </div>

                <div id="right" className="panel panel-default">
                    <div className="panel-body">
                    </div>

                </div>
            </div>
        )
    }
}
