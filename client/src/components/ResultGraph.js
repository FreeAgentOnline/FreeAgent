import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Chart from 'chart.js';

class ResultGraph extends Component {
  render() {
    setTimeout(() => {
      let data = this.props.results.filter(one => one.event === this.props.filter);

      let labelsArr = [];
      let dataArr = [];
      let key = 'None';
      data.forEach(one => {
        labelsArr.push(one.date);
        dataArr.push(one.performance)
        key = one.measurement.slice(0, 1).toUpperCase() + one.measurement.slice(1) + ' (' + one.unit + ')';
      });

      let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);

      // Set colors manually because react-chartjs does not support chart.js v 2.0
      Chart.defaults.global.defaultColor =
      'rgba(249, 122, 44, 0.75)';
      Chart.defaults.global.elements.line.backgroundColor = 'rgba(249, 122, 44, 0.75)';
      Chart.defaults.global.elements.line.borderColor = 'rgba(249, 122, 44, 0.75)';

      let ctx = canvas.getContext('2d');
      let myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labelsArr,
          datasets: [{
            label: key,
            data: dataArr
          }]
        },
        options: {}
      });
    }, 0)
    return (
      <div id="canvasContainer" className="">
        <canvas width="400" height="100" ref="myCanvas" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
    results: state.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => dispatch(setFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultGraph);
