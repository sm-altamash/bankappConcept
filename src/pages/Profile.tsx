import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import NavBar from '@/components/navigation/nav-bar';
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Settings,
  LogOut,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { PersonalInfo } from '@/components/profile/personal-info';
import { SecuritySettings } from '@/components/profile/security-settings';
import { NotificationPrefs } from '@/components/profile/notification-prefs';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been logged out successfully.",
    });
    navigate('/');
  };

  const menuItems = [
    {
      icon: <User className="h-5 w-5" />,
      title: 'Personal Information',
      subtitle: 'Update your details',
      action: () => setActiveDialog('personal'),
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Security',
      subtitle: 'Manage your security preferences',
      action: () => setActiveDialog('security'),
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: 'Notifications',
      subtitle: 'Configure email and push notifications',
      action: () => setActiveDialog('notifications'),
      badge: 'New'
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: 'Payment Methods',
      subtitle: 'Manage cards and accounts',
      action: () => navigate('/cards'),
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: 'Preferences',
      subtitle: 'Language, currency and more',
      action: () => setActiveDialog('preferences'),
    },
  ];

  return (
    <div className="app-height bg-bank-light-gray pb-24">
      <header className="pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold mb-1 animate-in slide-in-from-left">Profile</h1>
        <p className="text-muted-foreground animate-in slide-in-from-left delay-100">Manage your account</p>
      </header>

      <div className="px-6 space-y-6">
        <Card className="border-none shadow-sm bg-white overflow-hidden animate-in fade-in-50">
          <div className="bg-gradient-to-r from-bank-blue to-bank-light-blue h-20"></div>
          <div className="px-6 pb-6 -mt-12">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 border-4 border-white ring-2 ring-bank-blue/20 transition-transform hover:scale-105">
                <AvatarFallback className="text-2xl bg-bank-black text-white">AJ</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-bold">Alex Johnson</h2>
              <p className="text-muted-foreground">alex.johnson@example.com</p>
              <Badge className="mt-2 bg-gradient-to-r from-bank-blue to-bank-light-blue text-white hover:from-bank-light-blue hover:to-bank-blue transition-all duration-300">
                Premium Member
              </Badge>
            </div>
          </div>
        </Card>

        <Card className="border-none shadow-sm bg-white animate-in fade-in-50 delay-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-all duration-300 hover:scale-[0.99]"
                  onClick={item.action}
                >
                  <div className="flex items-center">
                    <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {item.badge && (
                      <Badge className="mr-2 bg-bank-blue text-white animate-pulse">
                        {item.badge}
                      </Badge>
                    )}
                    <ArrowRight size={16} className="text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2 
            border-2 border-red-200/50 
            text-red-600 
            hover:bg-red-50/80 
            hover:text-red-700 
            transition-all duration-300 
            ease-in-out 
            animate-in fade-in-50 delay-200
            backdrop-blur-sm 
            shadow-sm 
            hover:shadow-md 
            rounded-xl 
            py-3.5"
          onClick={handleLogout}
        >
          <LogOut size={18} strokeWidth={2.5} className="mr-2" />
          Sign Out
        </Button>
      </div>
      
      <Dialog open={!!activeDialog} onOpenChange={() => setActiveDialog(null)}>
        {activeDialog && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {activeDialog === 'personal' && 'Personal Information'}
                {activeDialog === 'security' && 'Security Settings'}
                {activeDialog === 'notifications' && 'Notification Preferences'}
                {activeDialog === 'preferences' && 'App Preferences'}
              </DialogTitle>
            </DialogHeader>
            {activeDialog === 'personal' && <PersonalInfo onClose={() => setActiveDialog(null)} />}
            {activeDialog === 'security' && <SecuritySettings onClose={() => setActiveDialog(null)} />}
            {activeDialog === 'notifications' && <NotificationPrefs onClose={() => setActiveDialog(null)} />}
          </DialogContent>
        )}
      </Dialog>
      
      <NavBar />
    </div>
  );
};

export default Profile;
