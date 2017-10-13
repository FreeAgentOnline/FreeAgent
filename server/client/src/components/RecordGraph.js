import React, { Component } from 'react';
import Chart from 'chart.js';
import ReactDOM from 'react-dom';

class RecordGraph extends Component {
  componentDidMount() {
    let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
    let ctx = canvas.getContext('2d');
    let myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["9/14/2017","9/30/2017","10/13/17", "10/27./17", "11/3/17"],
        datasets: [{
          label: 'Disance (m)',
          data: [13.34, 13.37, 13.36, 13.38, 13.39]
        }]
      },
      options: {}
    });
  }
  render() {
    // let newCanvas = document.createElement('canvas');
    // newCanvas.setAttribute('width', '400');
    // newCanvas.setAttribute('height', '400');

    // console.log('newCanvas', newCanvas);
    return (
      <div id="canvasContainer">
      <canvas width="400" height="100" ref="myCanvas" />

      </div>
    );
  }
}

export default RecordGraph;
