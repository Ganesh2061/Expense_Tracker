import React from 'react';
import { PlusIcon } from 'lucide-react';
export function AddTransactionButton({
  onClick
}) {
  return <button onClick={onClick} className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors" aria-label="Add transaction">
      <PlusIcon className="w-6 h-6" />
    </button>;
}