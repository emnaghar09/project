import React, { Component } from 'react'
import Chart from 'react-google-charts'
const pieData = [
  ['course', 'per month'],
  ['GRIT', 7],
  ['RPM', 10],
  ['BODY ATTAQUE', 12],
  ['AQUAGYM', 2],

]
const pieOptions = {
  title: 'My Daily Activities',
  pieHole: 0.4,
}
class PieChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Your attended courses</h2>
        <Chart
          width={'800px'}
          height={'450px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    )
  }
}
export default PieChart