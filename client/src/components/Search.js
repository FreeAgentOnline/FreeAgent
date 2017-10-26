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
            meets: [],
            haveSearched: false

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
      this.setState({ query: e.target.value, haveSearched: true })

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
                    <td>${meet.cost}</td>
                    <td>{meet.city}</td>
                    <td>{meet.country}</td>
                    <td><button className="btn btn-secondary"> <Link to={viewMeetLink}>View Meet</Link> </button></td>
                </tr>
            )
        })

        let SearchResults = ([data]) =>{
            if (!data && this.state.haveSearched){
                return (
                    <div> No results found for <strong>{this.state.query}</strong>. Please try another search term!</div>
                )
            }

            if (!data && !this.state.haveSearched){
                return (
                    <div>

                        <main className="p-3">
                            <div className="d-flex align-items-center">
                                <i className="fa fa-map-marker fa-2x fa-fw" aria-hidden="true"></i>
                                <p>Locate the best competitions around the world to improve your marks </p>
                            </div>

                            <div className="d-flex align-items-center">
                                <i className="fa fa-money fa-2x fa-fw" aria-hidden="true"></i>
                                <p>Compare meet costs and go to meet site for payments</p>

                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-calendar-plus-o fa-2x fa-fw" aria-hidden="true"></i>
                                <p>Add meets to your personal calendar </p>

                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-car fa-2x fa-fw" aria-hidden="true"></i>
                                <p>Get quick directions to meets based on your location!</p>

                            </div>

                        </main>
                        {/*<main className="container">
                            <div className="column resultField">
                                <div id="scheduleInfo" className="col-6 col-md-4 homerowSmBox">
                                    <div>
                                    <p>Search for the best competitions around the world to improve your marks </p>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div id="scheduleInfo" className="col-6 col-md-4 homerowSmBox">
                                    <div>
                                    <p>Compare meet costs and go to meet site for payments</p>
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div id="scheduleInfo" className="col-6 col-md-4 homerowSmBox">
                                    <div>
                                    <p>Add meets to your personal calendar </p>
                                    <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div id="scheduleInfo" className="col-6 col-md-4 homerowSmBox">
                                    <div>
                                    <p>Get quick directions to meets based on your location!</p>
                                    <i className="fa fa-car" aria-hidden="true"></i>
                                </div>
                                </div>

                            </div>
                        </main> */}


                    </div>
                )
            }

            else {
                return (

                        <div className=" resultField panel-body">
                            <h1>Available Meets</h1>
                            <table className="table pr-5">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Meet Name</th>
                                        <th>Start Date</th>
                                        <th>Cost</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Meet Info</th>
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
                <div className="panel left panel-default">
                    <div className="panel-body">
                        <div id="searchField" className="row">
                            <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery} autoFocus onFocus={this.moveCursor}/>
                            {/* autoFocus selects the input field on page load */}
                            <button type="submit" className="btn searchButton   ``" id="searchButton" onClick={this.handleSearch}>Search</button>
                        </div>
                        <section className="results">
                            {SearchResults(this.state.meets)}
                        </section>
                    </div>
                </div>
                <div className="panel panel-default right">
                    <MyFancyComponent meets={this.state.meets}/>

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
