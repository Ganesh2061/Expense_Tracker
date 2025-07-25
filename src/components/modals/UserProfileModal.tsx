import React, { useState } from 'react';
import { XIcon, UserIcon } from 'lucide-react';
export function UserProfileModal({
  user,
  onClose,
  onUpdate
}) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: '********' // Placeholder for security
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onUpdate({
      ...user,
      name: formData.name,
      email: formData.email
      // In a real app, you'd handle password changes more securely
    });
    onClose();
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center mb-6">
          {user.profileImage ? <img src={user.profileImage} alt={user.name} className="w-24 h-24 rounded-full object-cover" /> : <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <UserIcon className="w-12 h-12 text-gray-500" />
            </div>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Name
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>;
}