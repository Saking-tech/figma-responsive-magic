import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Keyboard, User, Settings, MessageSquare, Phone, Instagram, Linkedin, Facebook, ArrowDownAZ } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    {
      id: 1,
      letter: 'A',
      contacts: [
        {
          name: 'Andrea Lawerence',
          phone: '778-790-3421',
          email: 'andrea123@gmail.com',
          avatar: '/placeholder.svg'
        },
        {
          name: 'Andy Tang',
          phone: '604-717-8902',
          email: 'andyft@gmail.com',
          avatar: '/placeholder.svg'
        }
      ]
    },
    {
      id: 2,
      letter: 'B',
      contacts: [
        {
          name: 'Bella Seo',
          phone: '844-231-5782',
          email: 'bell1006@gmail.com',
          avatar: '/placeholder.svg'
        },
        {
          name: 'Jenn',
          phone: '844-231-5782',
          email: 'bell1006@gmail.com',
          avatar: '/placeholder.svg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Top Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-10 w-full">
        <div className="flex items-center p-4 w-full">
          <div className="flex-1 px-4">
            <Input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="ghost" size="icon" className="ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="12" r="2" fill="#000"/>
              <circle cx="12" cy="12" r="2" fill="#000"/>
              <circle cx="20" cy="12" r="2" fill="#000"/>
            </svg>
          </Button>
        </div>

        {/* Sort Icons */}
        <div className="w-full px-4 pb-2 flex items-center space-x-6">
          <ArrowDownAZ className="h-6 w-6 text-blue-500" />
          <Instagram className="h-6 w-6 text-gray-500" />
          <Linkedin className="h-6 w-6 text-gray-500" />
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-gray-500"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
          <Facebook className="h-6 w-6 text-gray-500" />
        </div>
      </div>

      {/* Contact List */}
      <div className="pb-20 w-full">
        {contacts.map((section) => (
          <div key={section.id} className="w-full">
            <div className="bg-blue-500 text-white px-4 py-2 w-full">
              {section.letter}
            </div>
            {section.contacts.map((contact, index) => (
              <div key={index} className="bg-white p-4 border-b flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h3 className="font-medium">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="text-blue-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="12" r="2" fill="currentColor"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      <circle cx="20" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t w-full">
        <div className="flex justify-around items-center h-20 px-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/keypad')}>
            <Keyboard className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/contact')} className="text-blue-500">
            <Phone className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/pa')}>
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
            <User className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/setting')}>
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
