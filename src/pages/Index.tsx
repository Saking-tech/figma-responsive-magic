import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!agreed) {
      toast.error("Please agree to the Terms and Privacy Policy");
      return;
    }
    navigate('/signup');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-rolodex-background flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-between px-6 py-8">
        <div className="w-full max-w-md flex flex-col items-center justify-center flex-1 gap-8">
          {/* Logo */}
          <div className="animate-fade-in mb-8">
            <img 
              src="/logo.svg" 
              alt="Rolodex" 
              className="w-32 h-32 md:w-40 md:h-40"
            />
            <h1 className="text-3xl font-bold mt-4">ROLODEX</h1>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-2 animate-slide-up">
            <Checkbox 
              id="terms" 
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm leading-tight"
            >
              I agree to Rolodex Terms of Use & Conditions and Privacy Policy.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-4 animate-slide-up">
            <Button 
              className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg rounded-full"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Button 
              className="w-full bg-rolodex-secondary text-white hover:bg-blue-500 h-14 text-lg rounded-full"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="w-32 h-1 bg-gray-200 rounded-full mt-8" />
      </main>
    </div>
  );
};

export default Index;