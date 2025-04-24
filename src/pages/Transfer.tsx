
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import TransferForm from '@/components/transfer/transfer-form';
import NavBar from '@/components/navigation/nav-bar';

const Transfer: React.FC = () => {
  return (
    <div className="app-height bg-bank-light-gray pb-24">
      <header className="pt-12 pb-4 px-6">
        <div className="flex items-center mb-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Send Money</h1>
        </div>
      </header>
      
      <div className="px-6">
        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Transfer Details</CardTitle>
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
