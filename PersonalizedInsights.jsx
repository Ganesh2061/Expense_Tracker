import React from 'react';
import { LightbulbIcon } from 'lucide-react';
export function PersonalizedInsights({
  transactions
}) {
  // In a real app, these insights would be generated based on actual transaction data analysis
  // Here we're using static insights for demonstration
  const insights = ['Your dining expenses are 40% higher than your past 3-month average.', "You've spent ₹300 less on transportation this month compared to last.", 'Your average grocery spending has remained consistent for the last quarter.', 'You spent ₹799 on electronics, a new type of large expense for you.'];
  return <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Your Personalized Insights
      </h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <ul className="space-y-4">
          {insights.map((insight, index) => <li key={index} className="flex items-start">
              <div className="bg-teal-100 p-2 rounded-full mr-3">
                <LightbulbIcon className="w-5 h-5 text-teal-600" />
              </div>
              <p className="text-gray-700">{insight}</p>
            </li>)}
        </ul>
      </div>
    </div>;
}