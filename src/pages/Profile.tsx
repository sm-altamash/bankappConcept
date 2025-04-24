
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import NavBar from '@/components/navigation/nav-bar';
import { ArrowRight, Bell, CreditCard, Lock, LogOut, Settings, Shield, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

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
      action: () => toast({ title: "Coming Soon", description: "This feature is under development." }),
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Security',
      subtitle: 'Manage your security preferences',
      action: () => toast({ title: "Coming Soon", description: "This feature is under development." }),
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: 'Notifications',
      subtitle: 'Configure email and push notifications',
      action: () => toast({ title: "Coming Soon", description: "This feature is under development." }),
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
      action: () => toast({ title: "Coming Soon", description: "This feature is under development." }),
    },
  ];

  return (
    <div className="app-height bg-bank-light-gray pb-24">
      <header className="pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold mb-1">Profile</h1>
        <p className="text-muted-foreground">Manage your account</p>
      </header>

      <div className="px-6 space-y-6">
        <Card className="border-none shadow-sm bg-white overflow-hidden">
          <div className="bg-bank-blue h-20"></div>
          <div className="px-6 pb-6 -mt-12">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarFallback className="text-2xl bg-bank-black text-white">AJ</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-bold">Alex Johnson</h2>
              <p className="text-muted-foreground">alex.johnson@example.com</p>
              <Badge className="mt-2 bg-bank-beige text-bank-black hover:bg-bank-beige/80">Premium Member</Badge>
            </div>
          </div>
        </Card>

        <Card className="border-none shadow-sm bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
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
                      <Badge className="mr-2 bg-bank-blue text-white">{item.badge}</Badge>
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
          className="w-full flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          Sign Out
        </Button>
      </div>
      
      <NavBar />
    </div>
  );
};

export default Profile;
