import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Facebook, Twitter } from "lucide-react";
import { toast } from "sonner";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Here you would typically make an API call to authenticate the user
    toast.success("Sign in successful!");
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      {/* Logo - Left aligned */}
      <div className="mb-8 text-left">
        <img 
          src="/logo.svg" 
          alt="Rolodex" 
          className="w-24 h-24"
        />
        <h1 className="text-3xl font-bold mt-4">ROLODEX</h1>
      </div>

      <div className="w-full max-w-md space-y-6 mx-auto">
        <h2 className="text-3xl font-bold text-left">Sign In</h2>
        
        <form onSubmit={handleSignIn} className="space-y-4">
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
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
            </button>
          </div>

          <div className="flex justify-end">
            <Button 
              variant="link" 
              className="text-rolodex-secondary p-0 h-auto font-normal"
            >
              Forgot Password?
            </Button>
          </div>

          <Button 
            type="submit"
            className="w-full bg-rolodex-secondary text-white hover:bg-blue-500 h-14 text-lg rounded-full"
          >
            Sign in
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
            <Facebook className="w-6 h-6 mr-2" />
            Continue with Facebook
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-14 text-lg rounded-full"
          >
            <Twitter className="w-6 h-6 mr-2" />
            Continue with Twitter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;