import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveQuery } from '../actions';

// Import styltes
import '../styles/home.css';

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
      <div id="home">
          <header id="homeHeader" className="container-fluid">
            <div className="container">
              <h2 className="display-2">Welcome to <span className="orange"><span className="fw300">Free</span>Agent</span></h2>
              <p className="lead mb-0">FreeAgent is for professional athletes looking to make their mark in the world of track & field. FreeAgent helps you find meets in your area, provides registration information, and allows you to track and share your personal records with potential sponsors.</p>
            </div>
        </header>
        <section id="homeSearchBanner" className="container-fluid">
          <input type="text" className="form-control" id="searchQuery" placeholder="Search for meets" value={this.state.query} onChange={this.handleQuery}/>
          <Link to="/search" className="btn btn-primary" id="searchButton" onClick={this.handleSearch}>Search</Link>
        </section>
        <main className="container">
          <div class="row mt-3">
            <div className="col m-3">
              <p className="text-center orange"><i className="fa fa-search fa-4x" aria-hidden="true"></i></p>
              <h2 className="text-center">Find meets</h2>
              <p>Search for the best competitions around the world to improve your marks</p>
            </div>
            <div className="col m-3">
              <p className="text-center orange"><i className="fa fa-calendar fa-4x" aria-hidden="true"></i></p>
              <h2 className="text-center">Plan your season</h2>
              <p>Prepare for your year of competition by saving meets to your dashboard</p>
            </div>
            <div className="col m-3">
              <p className="text-center orange"><i className="fa fa-line-chart fa-4x" aria-hidden="true"></i></p>
              <h2 className="text-center">Display your talent</h2>
              <p>Keep track of your history and results; then graph them for potential sponsors</p>
            </div>
          </div>
            {/*<div id="homeTop" className="row homerow">
              <div id="scheduleImg" className="col col-md-8 homerowLgBox">
                <i className="fa fa-search fa-4x" aria-hidden="true"></i>
              </div>
              <div id="scheduleInfo" className="col-6 col-md-4 homerowSmBox">
                <h2>Find meets</h2>
                <p>Search for the best competitions around the world to improve your marks</p>
              </div>
            </div>
            <div id="homeMiddle" className="row homerow">
              <div id="profileInfo" className="col-6 col-md-4 homerowSmBox">
                <h2>Plan your season</h2>
                <p>Prepare for your year of competition by saving meets to your dashboard</p>
              </div>
              <div id="raceStart" className="col col-md-8 homerowLgBox">
                <i className="fa fa-calendar fa-4x" aria-hidden="true"></i>
              </div>
            </div>
            <div id="homeBottom" className="row homerow">
              <div id="MoUsain" className="col col-md-8 homerowLgBox">
                <i className="fa fa-line-chart fa-4x" aria-hidden="true"></i>
              </div>
              <div id="searchMeetsInfo" className="col-6 col-md-4 homerowSmBox">
              <h2>Display your talent</h2>
              <p>Keep track of your history and results; then graph them for potential sponsors</p></div>
            </div>*/}
        </main>

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
