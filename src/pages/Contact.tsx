import React from 'react';
import NavigationBar from '@/components/NavigationBar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Contacts</h1>
        {/* Add your contact list or other content here */}
        <p className="text-gray-600">No contacts yet</p>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Contact;
