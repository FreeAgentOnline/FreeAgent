import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyFancyComponent from './Map';
import { geocodeAddress , storeMeets } from '../actions'

class Search extends Component {
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
      e.preventDefault();
      this.setState({ query: '' })

      fetch('')
    }
    moveCursor = e => {
      let temp = e.target.value;
      e.target.value = '';
      e.target.value = temp;
    }
    render(){
    //   console.log('props on search', this.props);
    //   console.log('state on search', this.state);


        return (
            <div id="searchPage">
                <div id="left" className="panel panel-default">
                    <div className="panel-body"> Search Page Left.
                        <div id="searchField" className="row">
                            <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery} autoFocus onFocus={this.moveCursor}/>
                            {/* autoFocus selects the input field on page load */}
                            <button type="submit" className="btn btn-primary" id="searchButton" onSubmit={this.handleSearch}>Search</button>
                        </div>
                        <div id="mapField">
                            <MyFancyComponent/>
                        </div>
                    </div>
                </div>

                <div id="right" className="panel panel-default">
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
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  console.log('state on Search', state);
  return {
    query: state.query
  }
}

export default connect(mapStateToProps)(Search);
