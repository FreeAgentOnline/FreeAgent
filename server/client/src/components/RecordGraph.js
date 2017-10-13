import React, { Component } from 'react';
import Chart from 'chart.js';
import ReactDOM from 'react-dom';

class RecordGraph extends Component {
  componentDidMount() {
    let data = this.props.data;
    let labelsArr = [];
    let dataArr = [];
    this.props.data.forEach(one => {
      labelsArr.push(one.date);
      dataArr.push(one.result.amount)
    })

    let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
    let ctx = canvas.getContext('2d');
    let myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labelsArr,
        datasets: [{
          label: 'Disance (m)',
          data: dataArr
        }],
        backgroundColor: 'red'
      },
      options: {}
    });
  }
  render() {
    return (
      <div id="canvasContainer" className="pl-3">
        <canvas width="400" height="100" ref="myCanvas" />
      </div>
    );
  }
}

export default RecordGraph;
