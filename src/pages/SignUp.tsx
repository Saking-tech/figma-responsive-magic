import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Here you would typically make an API call to register the user
    toast.success("Sign up successful!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-8">
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/logo.svg" 
          alt="Rolodex" 
          className="w-24 h-24"
        />
        <h1 className="text-3xl font-bold mt-4">ROLODEX</h1>
      </div>

      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold">Sign Up</h2>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Phone number or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-lg rounded-full border-2"
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 text-lg rounded-full border-2"
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-14 text-lg rounded-full border-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
            </button>
          </div>

          <Button 
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg rounded-full"
          >
            Sign Up
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full h-14 text-lg rounded-full"
          >
            <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" className="w-6 h-6 mr-2" />
            Continue with Google
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-14 text-lg rounded-full"
          >
            <img src="https://cdn.cdnlogo.com/logos/f/83/facebook.svg" alt="Facebook" className="w-6 h-6 mr-2" />
            Continue with Facebook
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-14 text-lg rounded-full"
          >
            <img src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg" alt="Twitter" className="w-6 h-6 mr-2" />
            Continue with Twitter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;