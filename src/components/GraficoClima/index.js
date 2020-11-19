import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: new Date().toLocaleDateString('pt-br'), uv: 590, pv: 800, amt: 1400,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 868, pv: 967, amt: 1506,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1397, pv: 1098, amt: 989,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1520, pv: 1108, amt: 1100,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1400, pv: 680, amt: 1700,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1400, pv: 680, amt: 1700,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1400, pv: 680, amt: 1700,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1400, pv: 680, amt: 1700,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1400, pv: 680, amt: 1700,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1400, pv: 680, amt: 1700,
  },
  {
    name:  new Date().toLocaleDateString('pt-br'), uv: 1400, pv: 680, amt: 1700,
  },
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={12} textAnchor="end" fill="#666" transform="rotate(-90)">{payload.value}</text>
      </g>
    );
  }
}

 class SimpleLineChart extends PureComponent {
  render() {
    return (
      <ComposedChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 80, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" tick={<CustomizedAxisTick/>}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}


export default SimpleLineChart;
