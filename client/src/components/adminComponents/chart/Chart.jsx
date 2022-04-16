import React from 'react'
import './Chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({aspect,title}) => {
  const data = [
    {name:"January",Total: 1200},
    {name:"February",Total: 2100},
    {name:"March",Total: 1000},
    {name:"April",Total: 900},
    {name:"May",Total: 1500},
    {name:"June",Total: 1700},
    
  ];
  return (
    <div className='chart'>
      <div className="title">{title} </div>
      <ResponsiveContainer width="100%"  aspect={aspect}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#f55f4e" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#f55f4e" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
  <XAxis dataKey="name" stroke='gray' />
  
  <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
  <Tooltip />
  <Area 
  type="monotone" dataKey="Total" stroke="#f55f4e" fillOpacity={1} fill="url(#total)" />
  
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart