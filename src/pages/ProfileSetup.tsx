import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    instagramLink: '',
    tiktokLink: '',
    linkedinLink: '',
    note: ''
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile data to localStorage
    localStorage.setItem('profileData', JSON.stringify({
      ...formData,
      profileImage
    }));
    toast.success("Profile updated successfully!");
    navigate('/profile-complete');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background Image with Overlay */}
      <div 
        className="h-80 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop")',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-black/30">
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
            <Avatar className="w-32 h-32 border-4 border-white">
              {profileImage ? (
                <AvatarImage src={profileImage} alt="Profile" />
              ) : (
                <AvatarFallback>AK</AvatarFallback>
              )}
            </Avatar>
            <label 
              htmlFor="profile-image" 
              className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer"
            >
              <Camera className="h-5 w-5" />
              <input
                type="file"
                id="profile-image"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4 pb-20">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500">First name</label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 h-14 rounded-xl border-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Last name</label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 h-14 rounded-xl border-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Phone Number</label>
              <Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 h-14 rounded-xl border-2"
                type="tel"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email Address</label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 h-14 rounded-xl border-2"
                type="email"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Instagram link</label>
              <Input
                name="instagramLink"
                value={formData.instagramLink}
                onChange={handleInputChange}
                className="mt-1 h-14 rounded-xl border-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">TikTok link</label>
              <Input
                name="tiktokLink"
                value={formData.tiktokLink}
                onChange={handleInputChange}
                className="mt-1 h-14 rounded-xl border-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">LinkedIn link</label>
              <Input
                name="linkedinLink"
                value={formData.linkedinLink}
                onChange={handleInputChange}
                className="mt-1 h-14 rounded-xl border-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Note</label>
              <Textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                className="mt-1 rounded-xl border-2"
                placeholder="Leave a note..."
              />
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full bg-rolodex-secondary text-white h-14 rounded-xl mt-6"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;