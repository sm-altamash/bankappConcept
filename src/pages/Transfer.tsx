
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import TransferForm from '@/components/transfer/transfer-form';
import NavBar from '@/components/navigation/nav-bar';

const Transfer: React.FC = () => {
  return (
    <div className="app-height bg-gradient-to-b from-bank-light-gray to-white pb-24">
      <header className="pt-12 pb-4 px-6 slide-in">
        <div className="flex items-center mb-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="mr-2 hover-scale">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-bank-blue to-bank-light-blue bg-clip-text text-transparent">
            Send Money
          </h1>
        </div>
      </header>
      
      <div className="px-6 max-w-2xl mx-auto animate-in">
        <Card className="glass-effect shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-bank-blue">Transfer Details</CardTitle>
          </CardHeader>
          <CardContent>
            <TransferForm />
          </CardContent>
        </Card>
      </div>

      <NavBar />
    </div>
  );
};

export default Transfer;
