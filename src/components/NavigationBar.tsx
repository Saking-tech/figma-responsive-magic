import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Keyboard, User, Settings, MessageSquare, Phone } from "lucide-react";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center h-20 px-6 max-w-md mx-auto">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/keypad')}
          className={isActive('/keypad') ? 'text-rolodex-secondary' : ''}
        >
          <Keyboard className="h-6 w-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/contact')}
          className={isActive('/contact') ? 'text-rolodex-secondary' : ''}
        >
          <Phone className="h-6 w-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/pa')}
          className={isActive('/pa') ? 'text-rolodex-secondary' : ''}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/profile')}
          className={isActive('/profile') ? 'text-rolodex-secondary' : ''}
        >
          <User className="h-6 w-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/settings')}
          className={isActive('/settings') ? 'text-rolodex-secondary' : ''}
        >
          <Settings className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;