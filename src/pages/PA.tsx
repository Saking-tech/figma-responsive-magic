import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Keyboard, User, Settings, MessageSquare, Phone, Send } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp?: string;
}

const PA = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: ChatMessage = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const botResponse: ChatMessage = {
      text: "Sure, I will help you with that!",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage, botResponse]);
    setInputMessage("");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Chat Section */}
      <div className="flex-1 px-6 pb-40">
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

        {/* Chat Messages */}
        <ScrollArea className="h-[calc(100vh-300px)]">
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

        {/* Input Section */}
        <div className="fixed bottom-32 left-0 right-0 px-6">
          <div className="relative">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything"
              className="w-full h-14 pl-6 pr-16 rounded-full bg-gray-100"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              size="icon"
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-rolodex-secondary text-white rounded-full"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Updates Section (Collapsible) */}
      <div className="fixed bottom-20 left-0 right-0">
        <Collapsible
          open={isUpdatesOpen}
          onOpenChange={setIsUpdatesOpen}
          className="w-full bg-white border-t shadow-lg"
        >
          <CollapsibleTrigger className="w-full p-4 flex justify-between items-center">
            <span className="font-semibold">Updates</span>
            <span className="text-sm text-gray-500">
              {isUpdatesOpen ? '▼' : '▲'}
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Recent updates will appear here...</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
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