import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const ProfileComplete = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    // TODO: Implement sharing functionality
    console.log('Share button clicked');
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-20">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* Contact Card Image */}
        <img 
          src="/contact-card-complete.svg" 
          alt="Contact Card Complete" 
          className="w-64 h-64 mb-8 animate-fade-in"
        />

        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">
          Contact Card Completed
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-12">
          Your contact card is completed and<br />
          you can share your contact
        </p>

        {/* Share Button */}
        <Button 
          onClick={handleShare}
          className="w-full bg-rolodex-secondary text-white h-14 rounded-full text-lg"
        >
          Share
        </Button>
      </div>

      {/* Bottom Bar Indicator */}
      <div className="fixed bottom-8 w-16 h-1 bg-gray-300 rounded-full mx-auto" />
    </div>
  );
};

export default ProfileComplete;