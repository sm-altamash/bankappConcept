
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown, ArrowUp } from 'lucide-react';

export interface Transaction {
  id: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  date: string;
  type: 'income' | 'expense';
  category: string;
  logo?: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <ScrollArea className="h-[350px] pr-4 -mr-4">
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id} 
            className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-10 w-10 border bg-white">
                  {transaction.logo ? (
                    <AvatarImage src={transaction.logo} alt={transaction.name} />
                  ) : (
                    <AvatarFallback className="bg-muted text-bank-dark-gray">
                      {transaction.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center ${transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {transaction.type === 'income' ? 
                    <ArrowDown size={12} className="text-white" /> :
                    <ArrowUp size={12} className="text-white" />
                  }
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium">{transaction.name}</p>
                <p className="text-xs text-muted-foreground">{transaction.description}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`text-sm font-medium ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount, transaction.currency)}
              </p>
              <p className="text-xs text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default TransactionList;
