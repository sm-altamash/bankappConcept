
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const features = [
    {
      title: 'Secure Banking',
      description: 'Military-grade encryption for your financial data',
    },
    {
      title: 'Easy Transfers',
      description: 'Send money to anyone, anywhere, anytime',
    },
    {
      title: 'Smart Analytics',
      description: 'Understand your spending with detailed insights',
    },
    {
      title: 'Instant Notifications',
      description: 'Real-time alerts for all account activities',
    },
  ];

  return (
    <div className="app-height bg-white flex flex-col">
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="bg-bank-blue text-white px-6 py-12 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sky Banking</h1>
            <p className="text-blue-100 text-lg mb-6">Banking made simple</p>
            <p className="text-blue-100 mb-8">
              Experience seamless, secure, and smart banking at your fingertips. Manage your money with confidence.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -bottom-6 -right-20 w-64 h-64 rounded-full bg-bank-light-blue opacity-20"></div>
            <div className="absolute -top-40 -left-20 w-40 h-40 rounded-full bg-bank-light-blue opacity-20"></div>
            
            <div className="relative z-10 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <p className="font-medium">Current Balance</p>
                  <div className="bg-white/20 px-2 py-1 rounded text-xs">Main Account</div>
                </div>
                <p className="text-3xl font-bold mb-1">$4,850.75</p>
                <p className="text-blue-200 text-sm">Available to spend</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6 py-8">
          <h2 className="text-xl font-bold mb-6">Why Choose Sky Banking?</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 border border-bank-medium-gray rounded-lg">
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <Button 
            className="w-full mt-8 bg-bank-blue hover:bg-bank-light-blue flex items-center justify-center gap-2"
            onClick={handleGetStarted}
          >
            Get Started
            <ArrowRight size={16} />
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            By continuing, you agree to our Terms & Conditions and Privacy Policy.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
