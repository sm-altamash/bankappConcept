
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  amount: number;
  currency: string;
  percentChange: number;
  isPositive: boolean;
  progressValue: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  amount,
  currency,
  percentChange,
  isPositive,
  progressValue
}) => {
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">
            {formatCurrency(amount, currency)}
          </div>
          <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'} text-xs font-medium`}>
            {isPositive ? <ArrowUp size={12} className="mr-1" /> : <ArrowDown size={12} className="mr-1" />}
            {percentChange}%
          </div>
        </div>
        <div className="mt-2">
          <Progress value={progressValue} className="h-1.5" />
        </div>
      </CardContent>
    </Card>
  );
};

const FinanceSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SummaryCard 
        title="Total Income"
        amount={5240.50}
        currency="USD"
        percentChange={12.5}
        isPositive={true}
        progressValue={75}
      />
      <SummaryCard 
        title="Total Expenses"
        amount={3120.25}
        currency="USD"
        percentChange={8.2}
        isPositive={false}
        progressValue={60}
      />
    </div>
  );
};

export default FinanceSummary;
