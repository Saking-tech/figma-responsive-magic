import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationBar from '@/components/NavigationBar';
import Header from '@/components/pa/Header';
import WelcomeMessage from '@/components/pa/WelcomeMessage';
import Updates from '@/components/pa/Updates';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp?: string;
}

interface HistoryItem {
  id: number;
  icon: string;
  text: string;
  color: string;
}

const PA = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const history: HistoryItem[] = [
    {
      id: 1,
      icon: "📞",
      text: "Make a phone call to Randy at 3pm",
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: "💬",
      text: "Send a message to Jen that I can't",
      color: "bg-blue-500"
    },
    {
      id: 3,
      icon: "🔍",
      text: "Find a contact number from my favor",
      color: "bg-purple-500"
    }
  ];

  const handleBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("quit chat")) {
      return "Good bye!";
    } else if (lowerCaseMessage.includes("search")) {
      const searchQuery = userMessage.toLowerCase().replace("search", "").trim();
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
        <Header />
        <WelcomeMessage />
        <Updates />

        {/* History Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">History</h2>
            <Button variant="link" className="text-gray-500">
              See all
            </Button>
          </div>
          <div className="space-y-3">
            {history.map((item) => (
              <div key={item.id} className="bg-black text-white rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-xl`}>
                    {item.icon}
                  </div>
                  <p className="font-medium">{item.text}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
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
