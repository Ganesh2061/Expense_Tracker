import React, { useState } from 'react';
import { Header } from './components/Header';
import { BudgetOverview } from './components/BudgetOverview';
import { PersonalizedInsights } from './components/PersonalizedInsights';
import { ExpenseChart } from './components/ExpenseChart';
import { RecentTransactions } from './components/RecentTransactions';
import { TopCategories } from './components/TopCategories';
import { AddTransactionButton } from './components/AddTransactionButton';
import { AddTransactionModal } from './components/modals/AddTransactionModal';
import { ViewAllTransactionsModal } from './components/modals/ViewAllTransactionsModal';
import { UserProfileModal } from './components/modals/UserProfileModal';
import { LoginSignupModal } from './components/modals/LoginSignupModal';
import { Notification } from './components/Notification';
import { mockTransactions, mockUser, mockBudget } from './utils/mockData';

export function App() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(mockUser);

  // Modal states
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showLoginSignup, setShowLoginSignup] = useState(!isAuthenticated);

  // Data states
  const [transactions, setTransactions] = useState(mockTransactions);
  const [budget, setBudget] = useState(mockBudget);

  // Notification state
  const [notification, setNotification] = useState({
    show: false,
    message: ''
  });

  // Calculate total expenses for the current month
  const currentMonthExpenses = transactions
    .filter(t => new Date(t.date).getMonth() === new Date().getMonth())
    .reduce((sum, t) => sum + t.amount, 0);

  // Handle login/signup
  const handleAuth = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    setShowLoginSignup(false);
  };

  // Add new transaction
  const addTransaction = (transaction) => {
    const newTransactions = [
      ...transactions,
      {
        ...transaction,
        id: transactions.length + 1
      }
    ];
    setTransactions(newTransactions);
    setShowAddTransaction(false);

    // Check if budget threshold is reached
    const newTotal = newTransactions
      .filter(t => new Date(t.date).getMonth() === new Date().getMonth())
      .reduce((sum, t) => sum + t.amount, 0);

    if (newTotal > budget.amount * 0.8) {
      setNotification({
        show: true,
        message: `Warning: You've used more than ${Math.round(
          (newTotal / budget.amount) * 100
        )}% of your monthly budget.`
      });

      setTimeout(() => {
        setNotification({
          show: false,
          message: ''
        });
      }, 5000);
    }
  };

  // Update budget
  const updateBudget = (newAmount) => {
    setBudget({
      ...budget,
      amount: newAmount
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-[Inter]">
      {isAuthenticated ? (
        <>
          <Header
            user={currentUser}
            onProfileClick={() => setShowUserProfile(true)}
          />
          <main className="container mx-auto px-4 py-6 max-w-6xl">
            <BudgetOverview
              totalExpenses={currentMonthExpenses}
              budget={budget}
              onUpdateBudget={updateBudget}
            />
            <PersonalizedInsights transactions={transactions} />
            <div className="mt-8">
              <ExpenseChart transactions={transactions} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <RecentTransactions
                transactions={transactions.slice(0, 5)}
                onViewAll={() => setShowAllTransactions(true)}
              />
              <TopCategories transactions={transactions} />
            </div>
            <AddTransactionButton
              onClick={() => setShowAddTransaction(true)}
            />
          </main>

          {/* Modals */}
          {showAddTransaction && (
            <AddTransactionModal
              onClose={() => setShowAddTransaction(false)}
              onAdd={addTransaction}
            />
          )}
          {showAllTransactions && (
            <ViewAllTransactionsModal
              transactions={transactions}
              onClose={() => setShowAllTransactions(false)}
            />
          )}
          {showUserProfile && (
            <UserProfileModal
              user={currentUser}
              onClose={() => setShowUserProfile(false)}
              onUpdate={(updatedUser) => setCurrentUser(updatedUser)}
            />
          )}
          {notification.show && (
            <Notification message={notification.message} />
          )}
        </>
      ) : (
        <LoginSignupModal onAuth={handleAuth} onClose={() => {}} />
      )}
    </div>
  );
}
