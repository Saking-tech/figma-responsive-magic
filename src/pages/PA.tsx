import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationBar from '@/components/NavigationBar';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp?: string;
}

interface Update {
  id: number;
  user: string;
  avatar: string;
  action: string;
  time: string;
}

const PA = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  
  const updates: Update[] = [
    {
      id: 1,
      user: "Jake",
      avatar: "/placeholder.svg",
      action: "updated new phone number",
      time: "Today at 6:45 AM"
    },
    {
      id: 2,
      user: "Lou",
      avatar: "/placeholder.svg",
      action: "updated new email address",
      time: "Yesterday at 07:00 PM"
    }
  ];

  const handleBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("quit chat")) {
      return "Good bye!";
    } else if (lowerCaseMessage.includes("search")) {
      const searchQuery = userMessage.toLowerCase().replace("search", "").trim();
      // Open Google search in a new tab
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
      return `Searching for "${searchQuery}" in Google...`;
    }
    return "Sure, I will help you with that!";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: ChatMessage = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const botResponse: ChatMessage = {
      text: handleBotResponse(inputMessage),
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage, botResponse]);
    setInputMessage("");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-6 pb-28">
        {/* Header */}
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

        {/* Robot Illustration */}
        <div className="flex justify-center my-8">
          <img 
            src="/robot-illustration.svg"
            alt="AI Assistant"
            className="w-48 h-48"
          />
        </div>

        {/* Chat Messages */}
        <ScrollArea className="h-[calc(100vh-340px)]">
          <div className="space-y-4 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`max-w-[80%] ${message.isUser ? 'bg-rolodex-secondary text-white' : 'bg-gray-100'} rounded-2xl px-4 py-2`}>
                  <p>{message.text}</p>
                  <span className="text-xs text-gray-500 mt-1">{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Updates Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Updates</h2>
            <Button variant="link" className="text-rolodex-secondary">
              See all
            </Button>
          </div>
          <div className="space-y-3">
            {updates.map((update) => (
              <div key={update.id} className="bg-black text-white rounded-xl p-4 flex items-center space-x-3">
                <img src={update.avatar} alt={update.user} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium">{update.user} {update.action}</p>
                  <p className="text-sm text-gray-400">{update.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="fixed bottom-24 left-0 right-0 px-6">
          <div className="relative flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything"
              className="w-full h-14 pl-6 pr-16 rounded-full bg-black text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              size="icon"
              className="bg-rolodex-secondary text-white rounded-full w-14 h-14 flex-shrink-0"
            >
              <Mic className="h-5 w-5" />
            </Button>
            <Button 
              size="icon"
              onClick={handleSendMessage}
              className="bg-rolodex-secondary text-white rounded-full w-14 h-14 flex-shrink-0"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
};

export default PA;