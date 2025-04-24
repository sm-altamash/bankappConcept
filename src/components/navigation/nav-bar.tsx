
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, BarChart2, User, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NavBar: React.FC = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [unreadNotifications] = useState(2);

  const navItems = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: 'Cards',
      icon: CreditCard,
      path: '/cards'
    },
    {
      name: 'Analytics',
      icon: BarChart2,
      path: '/analytics'
    },
    {
      name: 'Profile',
      icon: User,
      path: '/profile'
    }
  ];

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 2 unread notifications",
    });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-white/20 p-2 px-4 sm:px-6">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center py-2 px-3 animate-hover"
            >
              <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                isActive ? 'bg-gradient-to-r from-bank-blue to-bank-light-blue text-white scale-110' : 'text-gray-400 hover:text-bank-blue'
              }`}>
                <item.icon size={20} />
              </div>
              <span className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                isActive ? 'text-bank-blue' : 'text-gray-500'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}

        <Button
          variant="ghost" 
          size="sm"
          className="flex flex-col items-center py-2 px-3 relative animate-hover"
          onClick={handleNotificationClick}
        >
          <div className="p-1.5 text-gray-400 hover:text-bank-blue transition-colors duration-300">
            <Bell size={20} />
            {unreadNotifications > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                {unreadNotifications}
              </span>
            )}
          </div>
          <span className="text-xs mt-1 font-medium text-gray-500">Alerts</span>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
