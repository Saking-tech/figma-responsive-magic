import React from 'react';

const WelcomeMessage = () => {
  return (
    <div 
      className="relative bg-black text-white rounded-xl p-6 mb-6 overflow-hidden"
      style={{
        backgroundImage: 'url("/photo-1485827404703-89b55fcc595e")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 flex items-start gap-4">
        <div className="flex-shrink-0">
          <img 
            src="/robot-illustration.svg"
            alt="AI Assistant"
            className="w-12 h-12"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            👋 Hey there! I'm your AI Assistant
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I'm here to help manage your contacts and tasks. Need to schedule a meeting, 
            find someone's details, or set a reminder? Just ask away - I've got you covered!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;