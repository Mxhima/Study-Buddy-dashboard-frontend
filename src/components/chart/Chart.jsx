import React from 'react'
import './Chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: 'Tuesday',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: 'Wednesday',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: 'Thursday',
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: 'Friday',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: 'Saturday',
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: 'Sunday',
    uv: 349,
    pv: 430,
    amt: 210,
  },
];


const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Study Progress</div>
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart