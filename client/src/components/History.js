import React, { Component } from 'react';

class History extends Component {
  render() {
    let data = this.props.data;

    let historyRender = data.teamHistory.map((one, i) => {
      return (
        <div key={i}>
          <h6 className="mb-1">{one.name}</h6>
          <p className="my-0 font-italic">{one.dates.start} - {one.dates.end}</p>
          <p className="mb-2">{one.location}</p>
          <p>{one.details}</p>
        </div>
      )
    })
    return (
      <div id="resultContainer">
        <h4>Team history</h4>
        {historyRender}
      </div>
    );
  }
}

export default History;
