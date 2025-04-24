
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Lock, User } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('demo@skybank.com');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to Sky Banking",
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-base">Email</Label>
        <div className="relative">
          <div className="absolute left-3 top-3 text-muted-foreground">
            <User size={16} />
          </div>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="password" className="text-base">Password</Label>
          <a href="#" className="text-sm font-medium text-bank-blue hover:text-bank-light-blue transition-colors">
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-3 text-muted-foreground">
            <Lock size={16} />
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="pl-10"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-bank-blue hover:bg-bank-light-blue text-white" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Logging in...</span>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="mr-2">Login</span>
            <ArrowRight size={16} />
          </div>
        )}
      </Button>
      
      <div className="text-center text-muted-foreground text-sm">
        Don't have an account?{" "}
        <a href="#" className="text-bank-blue font-medium hover:text-bank-light-blue transition-colors">
          Sign up now
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
