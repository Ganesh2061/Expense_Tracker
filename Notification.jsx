import React from 'react';
import { AlertCircleIcon } from 'lucide-react';
export function Notification({
  message
}) {
  return <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded shadow-md flex items-center max-w-md">
      <AlertCircleIcon className="w-5 h-5 mr-2" />
      <p>{message}</p>
    </div>;
}