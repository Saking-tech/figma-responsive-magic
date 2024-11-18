import React from 'react';
import { ArrowLeft, Camera, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Contact = () => {
  const navigate = useNavigate();
  
  // This would typically come from your user context/state
  const profile = {
    name: 'Angela Kim',
    phone: '(+1) 778-798-7901',
    email: 'angela123@gmail.com',
    instagram: 'https://instagram.com/angela',
    linkedin: 'https://linkedin.com/in/angela',
    tiktok: 'https://tiktok.com/@angela'
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section with Background */}
      <div className="relative h-64 bg-gradient-to-b from-black/50 to-transparent bg-cover bg-center"
           style={{ backgroundImage: 'url("/lovable-uploads/101ce581-b49a-4216-a3f6-3f349b4d5da8.png")' }}>
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-white p-2"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      </div>

      {/* Profile Content */}
      <div className="relative px-6 -mt-20">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-white">
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
              <Camera className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center mt-4 space-y-1">
          <h1 className="text-2xl font-semibold">{profile.name}</h1>
          <p className="text-gray-600">{profile.phone}</p>
          <p className="text-gray-600">{profile.email}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button className="w-full bg-blue-500 text-white py-4 rounded-xl flex items-center justify-center space-x-2">
            <span className="text-lg">My Profile Privacy</span>
          </button>

          <button className="w-full bg-blue-500 text-white py-4 rounded-xl flex items-center justify-center space-x-2">
            <Instagram className="h-5 w-5" />
            <span className="text-lg">View Instagram Profile</span>
          </button>

          <button className="w-full bg-blue-500 text-white py-4 rounded-xl flex items-center justify-center space-x-2">
            <Instagram className="h-5 w-5" />
            <span className="text-lg">Share Your Instagram</span>
          </button>

          <button className="w-full bg-blue-500 text-white py-4 rounded-xl flex items-center justify-center space-x-2">
            <span className="text-lg">View Tiktok Followers</span>
          </button>

          <button className="w-full bg-blue-500 text-white py-4 rounded-xl flex items-center justify-center space-x-2">
            <Linkedin className="h-5 w-5" />
            <span className="text-lg">View LinkedIn Profile Data</span>
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-4">
          <div className="flex justify-around items-center px-6">
            <button className="flex flex-col items-center text-gray-500">
              <span className="text-xs">Keypad</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
              <span className="text-xs">Contact</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
              <span className="text-xs">PA</span>
            </button>
            <button className="flex flex-col items-center text-blue-500">
              <span className="text-xs">Profile</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
              <span className="text-xs">Setting</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;