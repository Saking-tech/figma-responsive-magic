import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-start pt-10 mb-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Hi, Becka</h1>
        <p className="text-gray-600">How can I help you today?</p>
      </div>
      <img 
        src="/placeholder.svg"
        alt="Profile"
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
};

export default Header;