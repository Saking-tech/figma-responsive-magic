import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Keyboard, User, Settings, MessageSquare, Phone } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const PA = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Section */}
      <div className="flex-1 px-6 pt-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Hi,Becka</h1>
            <p className="text-gray-600">How can I help you today?</p>
          </div>
          <img 
            src="/placeholder.svg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Robot Illustration */}
        <div className="flex justify-center my-8">
          <img 
            src="/robot-illustration.svg" 
            alt="AI Assistant"
            className="w-48 h-48"
          />
        </div>

        {/* Input Section */}
        <div className="relative mb-6">
          <Input
            placeholder="Ask me anything"
            className="w-full h-14 pl-6 pr-16 rounded-full bg-gray-100"
          />
          <Button 
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-rolodex-secondary text-white rounded-full"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>

        {/* Updates Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Updates</h2>
            <Button variant="link" className="text-rolodex-secondary">
              See all
            </Button>
          </div>
          
          {/* Update Cards */}
          <div className="space-y-3">
            <div className="bg-black text-white p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800" />
                <div>
                  <p className="font-medium">Jake updated new phone number</p>
                  <p className="text-sm text-gray-400">Today at 6:45 AM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800" />
                <div>
                  <p className="font-medium">Lou updated new email address</p>
                  <p className="text-sm text-gray-400">Yesterday at 07:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around items-center h-20 px-6 max-w-md mx-auto">
          <Button variant="ghost" size="icon" onClick={() => navigate('/keypad')}>
            <Keyboard className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/contact')}>
            <Phone className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-rolodex-secondary">
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
            <User className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PA;