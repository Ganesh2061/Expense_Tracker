import React, { useState } from 'react';
import { PencilIcon, CheckIcon } from 'lucide-react';
export function BudgetOverview({
  totalExpenses,
  budget,
  onUpdateBudget
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(budget.amount);
  const remainingBudget = budget.amount - totalExpenses;
  const percentageUsed = Math.min(totalExpenses / budget.amount * 100, 100);
  const handleSave = () => {
    onUpdateBudget(parseFloat(newBudget));
    setIsEditing(false);
  };
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700 font-medium">Total Expenses</h2>
          <span className="text-2xl font-semibold text-gray-800">
            ₹{totalExpenses.toLocaleString()}
          </span>
        </div>
        <div className="mt-4 bg-gray-200 h-2 rounded-full">
          <div className="bg-teal-500 h-2 rounded-full" style={{
          width: `${percentageUsed}%`
        }}></div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {percentageUsed.toFixed(0)}% of monthly budget used
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700 font-medium">Remaining Budget</h2>
          {isEditing ? <div className="flex items-center">
              <span className="text-gray-700 mr-1">₹</span>
              <input type="number" value={newBudget} onChange={e => setNewBudget(e.target.value)} className="w-24 p-1 border border-gray-300 rounded" />
              <button onClick={handleSave} className="ml-2 p-1 bg-teal-500 text-white rounded hover:bg-teal-600">
                <CheckIcon size={16} />
              </button>
            </div> : <div className="flex items-center">
              <span className="text-2xl font-semibold text-gray-800">
                ₹{remainingBudget.toLocaleString()}
              </span>
              <button onClick={() => setIsEditing(true)} className="ml-2 p-1 text-gray-500 hover:text-teal-600">
                <PencilIcon size={16} />
              </button>
            </div>}
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Monthly budget: ₹{budget.amount.toLocaleString()}
        </div>
      </div>
    </div>;
}