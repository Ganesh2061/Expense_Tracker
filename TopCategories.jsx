import React, { useState } from 'react';
export function TopCategories({
  transactions
}) {
  const [timeFilter, setTimeFilter] = useState('monthly');
  // In a real app, this would be calculated from the transactions
  // Here we're using static data for demonstration
  const categories = [{
    name: 'Groceries',
    amount: 5420,
    percentage: 32
  }, {
    name: 'Dining Out',
    amount: 3250,
    percentage: 19
  }, {
    name: 'Transportation',
    amount: 2800,
    percentage: 16
  }, {
    name: 'Entertainment',
    amount: 1950,
    percentage: 11
  }, {
    name: 'Shopping',
    amount: 1680,
    percentage: 10
  }];
  return <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Top Spending Categories
        </h2>
        <select className="border border-gray-300 rounded-md text-sm px-3 py-1" value={timeFilter} onChange={e => setTimeFilter(e.target.value)}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="space-y-4">
        {categories.map(category => <div key={category.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">{category.name}</span>
              <span className="text-gray-700">
                ₹{category.amount.toLocaleString()} ({category.percentage}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-teal-500 h-2 rounded-full" style={{
            width: `${category.percentage}%`
          }}></div>
            </div>
          </div>)}
      </div>
    </div>;
}