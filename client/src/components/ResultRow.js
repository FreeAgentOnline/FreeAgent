import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultRow extends Component {
  render() {
    return (
      <div key={this.props.key} className="row py-2">
        <div className="col">{this.props.data.event}</div>
        <div className="col">{this.props.data.date}</div>
        <div className="col">
          {this.props.data.performance}
          {this.props.data.unit}
        </div>
        <div className="col">{this.props.data.location}</div>
        <div className="col">{ this.props.data.reference ? <Link to={this.props.data.reference}>Link</Link> : 'None listed' }</div>
      </div>
    );
  }
}

export default ResultRow;
