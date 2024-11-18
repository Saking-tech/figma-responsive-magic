import React from 'react';
import { ArrowLeft, Camera, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Contact = () => {
  const navigate = useNavigate();
  
  const getProfileData = () => {
    const profileData = localStorage.getItem('profileData');
    if (profileData) {
      return JSON.parse(profileData);
    }
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      instagramLink: '',
      linkedinLink: '',
      tiktokLink: '',
      note: ''
    };
  };

  const profile = getProfileData();
  const fullName = `${profile.firstName} ${profile.lastName}`.trim();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Background */}
      <div 
        className="h-80 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop")',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <button 
            onClick={() => navigate(-1)}
            className="text-white p-4"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="relative px-6 -mt-20">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              {profile.profileImage ? (
                <AvatarImage src={profile.profileImage} alt="Profile" />
              ) : (
                <AvatarFallback>{`${profile.firstName?.[0] || ''}${profile.lastName?.[0] || ''}`}</AvatarFallback>
              )}
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
              <Camera className="h-5 w-5 text-rolodex-secondary" />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center mt-4 space-y-1">
          <h1 className="text-2xl font-semibold">{fullName || 'No Name Set'}</h1>
          <p className="text-gray-600">{profile.phoneNumber || 'No Phone Number'}</p>
          <p className="text-gray-600">{profile.email || 'No Email'}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button className="w-full bg-rolodex-secondary text-white py-4 rounded-xl flex items-center justify-center space-x-2">
            <span className="text-lg">My Profile Privacy</span>
          </button>

          {profile.instagramLink && (
            <>
              <button className="w-full bg-rolodex-secondary text-white py-4 rounded-xl flex items-center justify-center space-x-2">
                <Instagram className="h-5 w-5" />
                <span className="text-lg">View Instagram Profile</span>
              </button>

              <button className="w-full bg-rolodex-secondary text-white py-4 rounded-xl flex items-center justify-center space-x-2">
                <Instagram className="h-5 w-5" />
                <span className="text-lg">Share Your Instagram</span>
              </button>
            </>
          )}

          {profile.tiktokLink && (
            <button className="w-full bg-rolodex-secondary text-white py-4 rounded-xl flex items-center justify-center space-x-2">
              <span className="text-lg">View Tiktok Followers</span>
            </button>
          )}

          {profile.linkedinLink && (
            <button className="w-full bg-rolodex-secondary text-white py-4 rounded-xl flex items-center justify-center space-x-2">
              <Linkedin className="h-5 w-5" />
              <span className="text-lg">View LinkedIn Profile Data</span>
            </button>
          )}
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
            <button className="flex flex-col items-center text-rolodex-secondary">
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