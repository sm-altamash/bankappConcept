
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, PiggyBank, Receipt, SendHorizontal, Wallet } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      name: 'Send Money',
      icon: <SendHorizontal className="h-5 w-5" />,
      color: 'bg-blue-100 text-bank-blue',
      link: '/transfer'
    },
    {
      name: 'Pay Bills',
      icon: <Receipt className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-700',
      link: '#'
    },
    {
      name: 'Cards',
      icon: <CreditCard className="h-5 w-5" />,
      color: 'bg-green-100 text-green-700',
      link: '#'
    },
    {
      name: 'Savings',
      icon: <PiggyBank className="h-5 w-5" />,
      color: 'bg-yellow-100 text-yellow-700',
      link: '#'
    },
  ];

  return (
    <div className="flex justify-between items-center">
      {actions.map((action) => (
        <a 
          key={action.name}
          href={action.link}
          className="flex-1 text-center group"
        >
          <div className="flex flex-col items-center">
            <div className={`${action.color} p-3 rounded-lg mb-2 group-hover:scale-105 transition-transform`}>
              {action.icon}
            </div>
            <span className="text-xs font-medium">{action.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default QuickActions;
