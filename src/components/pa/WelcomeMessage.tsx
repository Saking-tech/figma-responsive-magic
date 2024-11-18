import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="bg-black text-white rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Welcome to Your Personal Assistant</h2>
      <p className="text-gray-300">
        I'm here to help you manage your contacts and tasks efficiently. Feel free to ask me anything!
      </p>
    </div>
  );
};

export default WelcomeMessage;