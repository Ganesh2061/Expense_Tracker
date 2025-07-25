import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
export function AddTransactionModal({
  onClose,
  onAdd
}) {
  const [transaction, setTransaction] = useState({
    description: '',
    amount: '',
    category: 'Groceries',
    date: new Date().toISOString().split('T')[0]
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setTransaction(prev => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) || '' : value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onAdd({
      ...transaction,
      id: Date.now()
    });
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Add Transaction
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Description
              </label>
              <input type="text" name="description" value={transaction.description} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Amount (₹)
              </label>
              <input type="number" name="amount" value={transaction.amount} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" min="0" step="0.01" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Category
              </label>
              <select name="category" value={transaction.category} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" required>
                <option value="Groceries">Groceries</option>
                <option value="Dining">Dining</option>
                <option value="Transport">Transport</option>
                <option value="Housing">Housing</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Shopping">Shopping</option>
                <option value="Utilities">Utilities</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Date
              </label>
              <input type="date" name="date" value={transaction.date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>;
}