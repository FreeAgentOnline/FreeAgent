import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveQuery } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  handleQuery = e => {
    this.setState({ query: e.target.value });

    // setTimeout required to preserve query on redirect
    setTimeout(() => {
      this.props.saveQuery(this.state.query);
      this.props.history.push('/search');
    }, 0);

  }
  handleSearch = () => {
    // Set store.query based on input
    this.props.saveQuery(this.state.query);
    this.setState({ query: '' });
    // search for events

    // this.props.history.push() redirects to a new endpoint in React w/ Redux
    this.props.history.push('/search');
  }
  render() {
    console.log('props on Home', this.props);
    return (
      <div className="container">
        <h2 className="display-2">Welcome to FreeAgent</h2>
        <p className="lead">FreeAgent is for professional athletes looking to make their mark in the world of track & field. FreeAgent helps you find meets in your area, provides registration information, and allows you to track and share your personal records with potential sponsors.</p>
        <div className="d-flex">
          <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery}/>
          <Link to="/search" className="btn btn-primary" id="searchButton" onClick={this.handleSearch}>Search</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state on Home', state);
  return {
    query: state.query
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveQuery
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
