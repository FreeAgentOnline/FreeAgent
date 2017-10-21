import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Chart from 'chart.js';

class ResultGraph extends Component {
  componentDidMount() {
    let data = this.props.data.filter(one => one.event === this.props.filter);

    console.log('data after filter', data);

    let labelsArr = [];
    let dataArr = [];
    data.forEach(one => {
      labelsArr.push(one.date);
      dataArr.push(one.reference)
    });

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
    let data = this.props.data.filter(one => one.measurement === this.props.filter);

    console.log('data after filter', data);

    console.log('props on Graph', this.props);
    return (
      <div id="canvasContainer" className="">
        <canvas width="400" height="100" ref="myCanvas" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => dispatch(setFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultGraph);
