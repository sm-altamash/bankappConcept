
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import NavBar from '@/components/navigation/nav-bar';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Lock, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface BankCard {
  id: string;
  type: string;
  lastFour: string;
  expiryDate: string;
  cardholderName: string;
  isActive: boolean;
  isVirtual: boolean;
  isFreezed: boolean;
}

const Cards: React.FC = () => {
  const { toast } = useToast();
  
  // Mock card data
  const cards: BankCard[] = [
    {
      id: '1',
      type: 'Visa Signature',
      lastFour: '3456',
      expiryDate: '05/28',
      cardholderName: 'ALEX JOHNSON',
      isActive: true,
      isVirtual: false,
      isFreezed: false
    },
    {
      id: '2',
      type: 'MasterCard Platinum',
      lastFour: '7890',
      expiryDate: '09/26',
      cardholderName: 'ALEX JOHNSON',
      isActive: true,
      isVirtual: true,
      isFreezed: false
    }
  ];

  const handleFreezeCard = (cardId: string) => {
    toast({
      title: "Card Frozen",
      description: "Your card has been temporarily frozen",
    });
  };

  const handleAddCard = () => {
    toast({
      title: "Add New Card",
      description: "This feature is coming soon!",
    });
  };

  return (
    <div className="app-height bg-bank-light-gray pb-24">
      <header className="pt-12 pb-4 px-6">
        <h1 className="text-2xl font-bold mb-1">Your Cards</h1>
        <p className="text-muted-foreground">Manage your payment cards</p>
      </header>
      
      <div className="px-6 space-y-6">
        {cards.map((card) => (
          <div key={card.id} className="space-y-3">
            <Card className="relative overflow-hidden border-none shadow-md">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-bank-black to-bank-blue opacity-90"></div>
              <CardContent className="relative z-10 p-6">
                <div className="flex justify-between items-start mb-10 text-white">
                  <div>
                    <p className="text-xs font-medium text-white/80">{card.type}</p>
                    {card.isVirtual && (
                      <Badge className="mt-1 bg-white/20 hover:bg-white/30 text-white">Virtual</Badge>
                    )}
                  </div>
                  <CreditCard className="h-8 w-8" />
                </div>
                
                <div className="space-y-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-10 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-10 h-3 bg-white/20 rounded-full"></div>
                    <p className="font-mono">{card.lastFour}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-white/70">CARD HOLDER</p>
                      <p className="font-mono text-sm">{card.cardholderName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/70">EXPIRES</p>
                      <p className="font-mono text-sm">{card.expiryDate}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">Card Details</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs flex items-center gap-1"
                    onClick={() => handleFreezeCard(card.id)}
                  >
                    <Lock size={14} />
                    {card.isFreezed ? 'Unfreeze' : 'Freeze Card'}
                  </Button>
                </div>
                
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Status</p>
                    <p className="font-medium">{card.isActive ? 'Active' : 'Inactive'}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Card Type</p>
                    <p className="font-medium">{card.isVirtual ? 'Virtual' : 'Physical'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2 border-dashed border-2"
          onClick={handleAddCard}
        >
          <Plus size={16} />
          Add New Card
        </Button>
      </div>
      
      <NavBar />
    </div>
  );
};

export default Cards;
