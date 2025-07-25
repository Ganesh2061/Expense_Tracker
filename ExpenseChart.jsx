import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
export function ExpenseChart({
  transactions
}) {
  const [timeRange, setTimeRange] = useState('monthly');
  const [chartType, setChartType] = useState('time'); // 'time' or 'category'
  // This would be calculated from actual transaction data in a real app
  // Here we're using mock data for demonstration
  const timeData = [{
    name: 'Jan',
    amount: 4000
  }, {
    name: 'Feb',
    amount: 3000
  }, {
    name: 'Mar',
    amount: 5000
  }, {
    name: 'Apr',
    amount: 2780
  }, {
    name: 'May',
    amount: 1890
  }, {
    name: 'Jun',
    amount: 2390
  }];
  const categoryData = [{
    name: 'Groceries',
    amount: 4000
  }, {
    name: 'Dining',
    amount: 3000
  }, {
    name: 'Utilities',
    amount: 2000
  }, {
    name: 'Transport',
    amount: 2780
  }, {
    name: 'Shopping',
    amount: 1890
  }, {
    name: 'Health',
    amount: 2390
  }];
  const data = chartType === 'time' ? timeData : categoryData;
  return <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Expense Trends</h2>
        <div className="flex space-x-3">
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <button className={`px-3 py-1 text-sm ${chartType === 'time' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setChartType('time')}>
              Time
            </button>
            <button className={`px-3 py-1 text-sm ${chartType === 'category' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setChartType('category')}>
              Category
            </button>
          </div>
          {chartType === 'time' && <select className="border border-gray-300 rounded-md text-sm px-3 py-1" value={timeRange} onChange={e => setTimeRange(e.target.value)}>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>}
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'time' ? <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={value => `₹${value}`} />
              <Line type="monotone" dataKey="amount" stroke="#0d9488" strokeWidth={2} />
            </LineChart> : <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={value => `₹${value}`} />
              <Bar dataKey="amount" fill="#0d9488" />
            </BarChart>}
        </ResponsiveContainer>
      </div>
    </div>;
}