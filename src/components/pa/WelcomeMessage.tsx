import React from 'react';

const WelcomeMessage = () => {
  return (
    <div 
      className="relative bg-black text-white rounded-xl p-6 mb-6 overflow-hidden min-h-[300px]"
      style={{
        backgroundImage: 'url("/photo-1485827404703-89b55fcc595e")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay with reduced opacity for better readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Initial greeting */}
        <div className="flex items-start gap-4 mb-6">
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

        {/* Chat messages container */}
        <div className="flex-1 space-y-4 overflow-y-auto max-h-[200px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/20 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-white">Can you help me schedule a meeting?</p>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-white">Of course! I'd be happy to help you schedule a meeting. What date and time would you prefer?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/20 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-white">Tomorrow at 2 PM with the design team</p>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-white">I'll schedule a meeting with the design team for tomorrow at 2 PM. Would you like me to send out calendar invites?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;