import React from 'react';
import { UserCircleIcon } from 'lucide-react';
export function Header({
  user,
  onProfileClick
}) {
  return <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-6xl flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-teal-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <h1 className="ml-2 text-xl font-semibold text-gray-800">
            ExpenseFlow
          </h1>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md transition-colors" onClick={onProfileClick}>
          {user.profileImage ? <img src={user.profileImage} alt={user.name} className="w-8 h-8 rounded-full object-cover" /> : <UserCircleIcon className="w-8 h-8 text-gray-700" />}
          <span className="ml-2 text-gray-700">{user.name}</span>
        </div>
      </div>
    </header>;
}