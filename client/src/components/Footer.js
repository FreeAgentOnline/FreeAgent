import React, { Component } from 'react';

// Import styles
import "../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="site-footer" className="container-fluid py-2">
        <div className="d-flex justify-content-between">
          <p className="mb-0">&copy; FreeAgent 2017</p>
          <p className="mb-0"><a href="https://github.com/FreeAgentOnline/FreeAgent"><i className="fa fa-github" aria-hidden="true"></i>Project Repo</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;
