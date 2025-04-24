
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface Account {
  id: string;
  name: string;
  accountNumber: string;
  balance: number;
  currency: string;
}

interface Contact {
  id: string;
  name: string;
  accountNumber: string;
  bankName: string;
  avatar?: string;
}

const TransferForm: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [selectedContact, setSelectedContact] = useState<string>('');
  const [note, setNote] = useState('');

  // Mock data
  const accounts: Account[] = [
    {
      id: '1',
      name: 'Main Account',
      accountNumber: '1234 5678 9012 3456',
      balance: 4850.75,
      currency: 'USD'
    },
    {
      id: '2',
      name: 'Savings Account',
      accountNumber: '9876 5432 1098 7654',
      balance: 12500.00,
      currency: 'USD'
    }
  ];

  const contacts: Contact[] = [
    {
      id: '1',
      name: 'John Smith',
      accountNumber: '1234 5678 9012 3456',
      bankName: 'Bank of America',
      avatar: ''
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      accountNumber: '9876 5432 1098 7654',
      bankName: 'Chase Bank',
      avatar: ''
    },
    {
      id: '3',
      name: 'Michael Brown',
      accountNumber: '5678 9012 3456 7890',
      bankName: 'Wells Fargo',
      avatar: ''
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedAccount || !selectedContact || !amount || parseFloat(amount) <= 0) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields with valid values.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Transfer Successful",
        description: `$${amount} has been sent successfully.`,
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="from-account">From Account</Label>
          <Select value={selectedAccount} onValueChange={setSelectedAccount}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              {accounts.map((account) => (
                <SelectItem key={account.id} value={account.id}>
                  <div className="flex justify-between w-full">
                    <span>{account.name}</span>
                    <span className="text-muted-foreground">
                      ${account.balance.toLocaleString()}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="to-contact">To</Label>
          <Select value={selectedContact} onValueChange={setSelectedContact}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select recipient" />
            </SelectTrigger>
            <SelectContent>
              {contacts.map((contact) => (
                <SelectItem key={contact.id} value={contact.id} className="flex items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      {contact.avatar ? (
                        <AvatarImage src={contact.avatar} />
                      ) : (
                        <AvatarFallback>
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="text-sm">
                      <p>{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.bankName}</p>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <div className="relative">
            <div className="absolute left-3 top-2.5 text-bank-dark-gray">$</div>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="pl-7"
              min="0.01"
              step="0.01"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="note">Note (Optional)</Label>
          <Textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note for the recipient"
            rows={3}
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-bank-blue hover:bg-bank-light-blue" 
        disabled={isLoading || !amount || !selectedAccount || !selectedContact}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : (
          'Send Money'
        )}
      </Button>
    </form>
  );
};

export default TransferForm;
