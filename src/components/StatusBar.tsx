import React from 'react';

const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  return (
    <div className="flex justify-between items-center px-4 py-2 text-black text-sm font-medium">
      <span>{currentTime}</span>
      <div className="flex items-center gap-1">
        <div className="h-3 w-3">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 21C16.43 21 20.01 17.42 20.01 13C20.01 8.58 16.43 5 12.01 5C7.59 5 4.01 8.58 4.01 13C4.01 17.42 7.59 21 12.01 21Z" fill="black"/>
          </svg>
        </div>
        <div className="h-3 w-3">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 5.58V4C17 3.45 16.55 3 16 3C15.45 3 15 3.45 15 4V5.58C16.16 5.91 17 6.96 17 8.22V11.78C17 13.04 16.16 14.09 15 14.42V16C15 16.55 15.45 17 16 17C16.55 17 17 16.55 17 16V14.42C18.16 14.09 19 13.04 19 11.78V8.22C19 6.96 18.16 5.91 17 5.58Z" fill="black"/>
          </svg>
        </div>
        <div className="h-3 w-5">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 5.58V4C17 3.45 16.55 3 16 3H8C7.45 3 7 3.45 7 4V5.58C5.84 5.91 5 6.96 5 8.22V11.78C5 13.04 5.84 14.09 7 14.42V16C7 16.55 7.45 17 8 17H16C16.55 17 17 16.55 17 16V14.42C18.16 14.09 19 13.04 19 11.78V8.22C19 6.96 18.16 5.91 17 5.58Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;