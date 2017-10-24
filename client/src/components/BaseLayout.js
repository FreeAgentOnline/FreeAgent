import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class BaseLayout extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div id="siteWrapper" className="">
        <Header />
        <div id="contentWrapper" className="">
          {this.props.children}

        </div>
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
