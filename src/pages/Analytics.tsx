
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from '@/components/navigation/nav-bar';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExpenseData {
  category: string;
  amount: number;
  color: string;
}

interface MonthlyData {
  name: string;
  expenses: number;
  income: number;
}

const Analytics: React.FC = () => {
  // Mock expense data for pie chart
  const expenseData: ExpenseData[] = [
    { category: 'Housing', amount: 1200, color: '#0052CC' },
    { category: 'Food', amount: 450, color: '#4C9AFF' },
    { category: 'Transportation', amount: 350, color: '#6B7280' },
    { category: 'Entertainment', amount: 250, color: '#F5F2EA' },
    { category: 'Utilities', amount: 200, color: '#121212' },
    { category: 'Other', amount: 300, color: '#E8E8E8' },
  ];

  // Mock data for bar chart
  const monthlyData: MonthlyData[] = [
    { name: 'Jan', expenses: 2300, income: 3000 },
    { name: 'Feb', expenses: 2100, income: 3200 },
    { name: 'Mar', expenses: 2400, income: 3100 },
    { name: 'Apr', expenses: 2000, income: 3400 },
    { name: 'May', expenses: 2700, income: 3300 },
    { name: 'Jun', expenses: 2500, income: 3700 },
  ];

  const totalExpenses = expenseData.reduce((sum, item) => sum + item.amount, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="app-height bg-bank-light-gray pb-24">
      <header className="pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold mb-1">Financial Analytics</h1>
        <p className="text-muted-foreground">Track your spending habits</p>
      </header>

      <Tabs defaultValue="spending" className="px-6">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="spending">Spending</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="spending" className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Monthly Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="amount"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={() => ''}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {expenseData.map((item) => (
                  <div key={item.category} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <div className="flex justify-between w-full">
                      <span className="text-xs">{item.category}</span>
                      <span className="text-xs font-medium">
                        {formatCurrency(item.amount)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="font-medium">Total Expenses</span>
                  <span className="font-bold">{formatCurrency(totalExpenses)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Expense Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="pl-0">
              <div className="space-y-4">
                {expenseData.slice(0, 4).map((item) => (
                  <div key={item.category} className="flex items-center">
                    <div className="w-1 h-12 rounded-r-full" style={{ backgroundColor: item.color }}></div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.category}</span>
                        <span className="text-sm font-bold">{formatCurrency(item.amount)}</span>
                      </div>
                      <div className="h-2 bg-bank-medium-gray rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ width: `${(item.amount / totalExpenses) * 100}%`, backgroundColor: item.color }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Income vs Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyData}
                    margin={{
                      top: 10,
                      right: 0,
                      left: -20,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${value}`} />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    <Bar dataKey="income" fill="#0052CC" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#6B7280" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 flex justify-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-bank-blue mr-2"></div>
                  <span className="text-xs">Income</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-bank-dark-gray mr-2"></div>
                  <span className="text-xs">Expenses</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <NavBar />
    </div>
  );
};

export default Analytics;
