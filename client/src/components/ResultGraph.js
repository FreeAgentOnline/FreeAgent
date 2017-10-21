import React, { Component } from 'react';
import Chart from 'chart.js';
import ReactDOM from 'react-dom';

class ResultGraph extends Component {
  componentDidMount() {
    let data = this.props.data;
    // console.log('data on ResultGraph', data);
    let labelsArr = [];
    let dataArr = [];
    data.forEach(one => {
      labelsArr.push(one.date);
      dataArr.push(one.value)
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
      <div id="canvasContainer" className="">
        <canvas width="400" height="100" ref="myCanvas" />
      </div>
    );
  }
}

export default ResultGraph;
