
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import LoginForm from '@/components/auth/login-form';

const Login: React.FC = () => {
  return (
    <div className="app-height bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="bg-bank-blue text-white p-3 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m9 14 3-3 3 3" />
                <path d="M12 11v6" />
                <path d="M4 18h16c1 0 2 .8 2 2H2c0-1.2 1-2 2-2Z" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        
        <Card className="border-none shadow-sm">
          <CardContent className="pt-6">
            <LoginForm />
          </CardContent>
        </Card>
        
        <div className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our <a href="#" className="text-bank-blue hover:underline">Terms of Service</a> and <a href="#" className="text-bank-blue hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;
