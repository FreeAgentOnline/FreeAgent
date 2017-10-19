import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyFancyComponent from './Map';

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
      this.setState({ query: '' });
    }
    moveCursor = e => {
      let temp = e.target.value;
      e.target.value = '';
      e.target.value = temp;
    }
    render(){
      console.log('props on search', this.props);
      console.log('state on search', this.state);
        return (
            <div id="searchPage">
                <div id="left" className="panel panel-default">
                    <div className="panel-body"> Search Page Left.
                        <div id="searchField" className="row">
                            <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery} autoFocus onFocus={this.moveCursor}/>
                            {/* autoFocus makes the input field already selected WORLD WORLDS WORDS */}
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
                        <div className = "Results">
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

function mapStateToProps(state) {
  console.log('state on Search', state);
  return {
    query: state.query
  }
}

export default connect(mapStateToProps)(Search);
