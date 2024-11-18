import React, { useState } from 'react';
import { Search, MoreVertical, ArrowUpDown } from 'lucide-react';
import NavigationBar from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  image?: string;
}

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Andrea Lawerence',
    phone: '778-790-3421',
    email: 'andrea123@gmail.com',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
  },
  {
    id: '2',
    name: 'Andy Tang',
    phone: '604-717-8902',
    email: 'andyft@gmail.com',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  {
    id: '3',
    name: 'Bella Seo',
    phone: '844-231-5782',
    email: 'bell1006@gmail.com',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952'
  },
  {
    id: '4',
    name: 'Jenn',
    phone: '844-231-5782',
    email: 'bell1006@gmail.com',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  }
];

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredContacts = mockContacts
    .filter(contact => 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-10 bg-gray-100 border-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-around py-4 bg-white border-b">
        <img src="/instagram.svg" alt="Instagram" className="h-6 w-6 opacity-50" />
        <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6 opacity-50" />
        <img src="/tiktok.svg" alt="TikTok" className="h-6 w-6 opacity-50" />
        <img src="/facebook.svg" alt="Facebook" className="h-6 w-6 opacity-50" />
      </div>

      {/* Sort Dropdown */}
      <div className="p-4">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="recent">Recent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Contact List */}
      <div className="pb-24">
        {Object.entries(groupedContacts).map(([letter, contacts]) => (
          <div key={letter}>
            <div className="bg-blue-500 text-white px-4 py-2">
              {letter}
            </div>
            {contacts.map((contact) => (
              <div key={contact.id} className="bg-white p-4 border-b flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={contact.image} alt={contact.name} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{contact.name}</h3>
                    <p className="text-sm text-gray-500">{contact.phone}</p>
                    <p className="text-sm text-gray-500">{contact.email}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <NavigationBar />
    </div>
  );
};

export default Contact;