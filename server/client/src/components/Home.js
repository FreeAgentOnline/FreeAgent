import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  handleQuery = e => {
    this.setState({ query: e.target.value });
  }
  handleSearch = () => {
    // search for events
    this.setState({ query: '' });
  }
  render() {
    return (
      <div className="container">
        <h2 className="display-2">Welcome to FreeAgent</h2>
        <p className="lead">FreeAgent is for professional athletes looking to make their mark in the world of track & field. FreeAgent helps you find meets in your area, provides registration information, and allows you to track and share your personal records with potential sponsors.</p>
        <div className="d-flex">
          <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery}/>
          <Link to="/search" className="btn btn-primary" id="searchButton" query= {this.state.query}>Search</Link>
        </div>
      </div>
    );
  }
}

export default Home;
