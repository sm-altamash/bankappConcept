
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SendHorizontal } from 'lucide-react';
import AccountCard from '@/components/dashboard/account-card';
import QuickActions from '@/components/dashboard/quick-actions';
import TransactionList, { Transaction } from '@/components/dashboard/transaction-list';
import FinanceSummary from '@/components/dashboard/finance-summary';
import NavBar from '@/components/navigation/nav-bar';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock transaction data
  const transactions: Transaction[] = [
    {
      id: '1',
      name: 'Netflix',
      description: 'Subscription',
      amount: 15.99,
      currency: 'USD',
      date: 'Today, 12:30 PM',
      type: 'expense',
      category: 'Entertainment',
      logo: '',
    },
    {
      id: '2',
      name: 'Starbucks',
      description: 'Coffee Shop',
      amount: 5.75,
      currency: 'USD',
      date: 'Today, 09:15 AM',
      type: 'expense',
      category: 'Food & Drink',
      logo: '',
    },
    {
      id: '3',
      name: 'Paycheck',
      description: 'Salary',
      amount: 2500,
      currency: 'USD',
      date: 'Apr 15, 2025',
      type: 'income',
      category: 'Income',
      logo: '',
    },
    {
      id: '4',
      name: 'Amazon',
      description: 'Shopping',
      amount: 49.99,
      currency: 'USD',
      date: 'Apr 14, 2025',
      type: 'expense',
      category: 'Shopping',
      logo: '',
    },
    {
      id: '5',
      name: 'Gas Station',
      description: 'Fuel',
      amount: 45.50,
      currency: 'USD',
      date: 'Apr 13, 2025',
      type: 'expense',
      category: 'Transportation',
      logo: '',
    },
    {
      id: '6',
      name: 'Rent',
      description: 'Housing',
      amount: 1200,
      currency: 'USD',
      date: 'Apr 10, 2025',
      type: 'expense',
      category: 'Housing',
      logo: '',
    },
    {
      id: '7',
      name: 'Freelance Work',
      description: 'Client Payment',
      amount: 750,
      currency: 'USD',
      date: 'Apr 08, 2025',
      type: 'income',
      category: 'Income',
      logo: '',
    },
  ];

  const handleTransferClick = () => {
    navigate('/transfer');
  };

  return (
    <div className="app-height bg-bank-light-gray pb-24">
      <header className="pt-12 pb-4 px-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">Alex Johnson</p>
          </div>
          <Button 
            className="bg-bank-blue hover:bg-bank-light-blue flex items-center space-x-2"
            onClick={handleTransferClick}
          >
            <SendHorizontal size={16} />
            <span>Transfer</span>
          </Button>
        </div>
        
        <div className="mt-4">
          <AccountCard 
            accountType="Main Account"
            accountNumber="1234567890123456"
            balance={4850.75}
            currency="USD"
          />
        </div>
      </header>
      
      <div className="px-6 space-y-8">
        <QuickActions />
        
        <div className="space-y-2">
          <FinanceSummary />
        </div>
        
        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionList transactions={transactions} />
          </CardContent>
        </Card>
      </div>
      
      <NavBar />
    </div>
  );
};

export default Dashboard;
