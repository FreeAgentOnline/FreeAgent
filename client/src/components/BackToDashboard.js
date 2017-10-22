import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackToDashboard extends Component {
  render() {
    return (
      <Link to="/dashboard" className="mb-3">&lt; Back to dashboard</Link>
    );
  }
}

export default BackToDashboard;
