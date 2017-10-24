import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyFancyComponent from './Map';
import { geocodeAddress , storeMeets } from '../actions'
import * as moment from 'moment';
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            query: this.props.query,
            meets: []

        }
        console.log("this.state before fetch: ", this.state);
    }

    handleQuery = e => {
        this.setState({ query : e.target.value})
        this.props.storeMeets(this.state.meets)
    }

    handleSearch = e => {
      // search for events
      e.preventDefault();
      this.setState({ query: e.target.value })

      fetch(`/api/search/meet/`+ this.state.query)
      .then(res => res.json())
      .then(data => {
          // Return fetched data
          this.setState({ meets: data });
          console.log("state after fetch: ", this.state);

          // return data
      })
      .catch(err => console.log(err))

    }

    moveCursor = e => {
      let temp = e.target.value;
      e.target.value = '';
      e.target.value = temp;
    }


    render(){
        let filteredMeets = this.state.meets.map((meet, index)=>{
            let viewMeetLink = "/meet/" + meet._id;
            return(
                <tr key= {index}>
                    <td scope="row">{index + 1}</td>
                    <td>{meet.name}</td>
                    <td>{moment(meet.date_start).format("ddd, MMMM D, YYYY")}</td>
                    <td>{meet.country}</td>
                    <td><button  className="btn btn-secondary"> <Link to={viewMeetLink}>View Meet</Link> </button></td>
                </tr>
            )
        })

        function SearchResults([data]){
            if (!data){
                return (
                    <div> No results found for  your query. Try searching by city or country!{/*this.state.query*/}</div>
                )
            }
            //
            // if (!data && !this.state.query){
            //     return (
            //         <div> Search for meets by city, state, country, and name!</div>
            //     )
            // }

            if (data) {
                return (

                        <div className="panel-body">
                            <h1>Available Meets</h1>
                            <table id="searchResults" className="table">
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
                                        {filteredMeets}
                                    </tbody>
                                </table>
                        </div>

                )
            }

        }

        return (
            <div id="searchPage">
                <div id="left" className="panel panel-default">
                    <div className="panel-body"> Search Page Left.
                        <div id="searchField" className="row">
                            <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery} autoFocus onFocus={this.moveCursor}/>
                            {/* autoFocus selects the input field on page load */}
                            <button type="submit" className="btn btn-primary" id="searchButton" onClick={this.handleSearch}>Search</button>
                        </div>
                        <div id="mapField">
                            <MyFancyComponent meets={this.state.meets}/>
                        </div>
                    </div>
                </div>
                <div id="right" className="panel panel-default">
                {SearchResults(this.state.meets)}
                {/* From here
                    <div className="panel-body">
                        <h1>Available Meets</h1>
                        <table id="searchResults" className="table">
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
                                    {filteredMeets}
                                </tbody>
                            </table>
                    </div>
                    To here */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  // console.log('state on Search', state);
  return {
    query: state.query
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    storeMeets
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
