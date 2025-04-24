
import React from 'react';
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from 'lucide-react';

interface AccountCardProps {
  accountType: string;
  accountNumber: string;
  balance: number;
  currency: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  accountType,
  accountNumber,
  balance,
  currency
}) => {
  // Format account number to show only last 4 digits
  const formatAccountNumber = (number: string) => {
    return '••••' + number.slice(-4);
  };

  // Format currency based on locale
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <Card className="card-gradient text-white overflow-hidden rounded-xl p-5 relative animate-in">
      <div className="absolute top-4 right-4">
        <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>
      
      <div className="flex flex-col h-full justify-between">
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-100">{accountType}</p>
          <p className="text-sm mt-1 text-blue-200">{formatAccountNumber(accountNumber)}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-blue-100 mb-1">Available Balance</p>
          <p className="text-2xl font-bold">{formatCurrency(balance, currency)}</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mb-12"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-4 -mb-4"></div>
    </Card>
  );
};

export default AccountCard;
