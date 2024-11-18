import React from 'react';
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

interface Update {
  id: number;
  user: string;
  avatar: string;
  action: string;
  time: string;
}

const updates: Update[] = [
  {
    id: 1,
    user: "Jake",
    avatar: "/placeholder.svg",
    action: "updated new phone number",
    time: "Today at 6:45 AM"
  },
  {
    id: 2,
    user: "Lou",
    avatar: "/placeholder.svg",
    action: "updated new email address",
    time: "Yesterday at 07:00 PM"
  },
  {
    id: 3,
    user: "Lou",
    avatar: "/placeholder.svg",
    action: "updated new memo",
    time: "Yesterday at 07:00 PM"
  },
  {
    id: 4,
    user: "Lou",
    avatar: "/placeholder.svg",
    action: "updated new phone number",
    time: "Yesterday at 07:00 PM"
  }
];

const Updates = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Updates</h2>
        <Button variant="link" className="text-gray-500">
          See all
        </Button>
      </div>
      <div className="space-y-3">
        {updates.map((update) => (
          <div key={update.id} className="bg-black text-white rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={update.avatar} alt={update.user} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">{update.user} {update.action}</p>
                <p className="text-sm text-gray-400">{update.time}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;