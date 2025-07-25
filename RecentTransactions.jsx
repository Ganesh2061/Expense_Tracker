import React from 'react';
import { ShoppingBagIcon, CoffeeIcon, HomeIcon, CarIcon, ShoppingCartIcon } from 'lucide-react';
export function RecentTransactions({
  transactions,
  onViewAll
}) {
  // Function to get icon based on category
  const getCategoryIcon = category => {
    switch (category.toLowerCase()) {
      case 'shopping':
        return <ShoppingBagIcon className="w-5 h-5" />;
      case 'dining':
        return <CoffeeIcon className="w-5 h-5" />;
      case 'housing':
        return <HomeIcon className="w-5 h-5" />;
      case 'transport':
        return <CarIcon className="w-5 h-5" />;
      default:
        return <ShoppingCartIcon className="w-5 h-5" />;
    }
  };
  return <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Transactions
      </h2>
      <div className="space-y-4">
        {transactions.map(transaction => <div key={transaction.id} className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${transaction.category === 'Shopping' ? 'blue' : transaction.category === 'Dining' ? 'green' : transaction.category === 'Housing' ? 'purple' : 'orange'}-100`}>
                {getCategoryIcon(transaction.category)}
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-medium">
                  {transaction.description}
                </p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
            </div>
            <div className="text-gray-800 font-medium">
              ₹{transaction.amount.toLocaleString()}
            </div>
          </div>)}
      </div>
      <button className="w-full mt-4 py-2 text-teal-600 hover:text-teal-700 font-medium text-center border-t border-gray-200" onClick={onViewAll}>
        View All Transactions
      </button>
    </div>;
}