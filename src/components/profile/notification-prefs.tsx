
import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  CreditCard, 
  Wallet, 
  ShieldAlert, 
  Megaphone,
  Settings
} from 'lucide-react';

interface NotificationPrefsProps {
  onClose: () => void;
}

export const NotificationPrefs: React.FC<NotificationPrefsProps> = ({ onClose }) => {
  const [preferences, setPreferences] = useState({
    transactions: true,
    security: true,
    marketing: false,
    updates: true,
    statements: true,
  });

  const notificationTypes = [
    {
      id: 'transactions',
      title: 'Transaction Alerts',
      description: 'Get notified about all transactions',
      icon: Wallet,
      checked: preferences.transactions,
    },
    {
      id: 'security',
      title: 'Security Alerts',
      description: 'Important security notifications',
      icon: ShieldAlert,
      checked: preferences.security,
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Receive offers and promotions',
      icon: Megaphone,
      checked: preferences.marketing,
    },
    {
      id: 'updates',
      title: 'App Updates',
      description: 'Get notified about new features',
      icon: Settings,
      checked: preferences.updates,
    },
    {
      id: 'statements',
      title: 'Statements',
      description: 'Monthly statement notifications',
      icon: CreditCard,
      checked: preferences.statements,
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
      <div className="space-y-4">
        {notificationTypes.map((type) => (
          <div 
            key={type.id}
            className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="bg-bank-blue/10 p-2 rounded-full">
                <type.icon className="h-5 w-5 text-bank-blue" />
              </div>
              <div>
                <p className="font-medium">{type.title}</p>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            </div>
            <Switch
              checked={type.checked}
              onCheckedChange={(checked) => 
                setPreferences(prev => ({ ...prev, [type.id]: checked }))
              }
            />
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button 
          className="w-full bg-bank-blue hover:bg-bank-light-blue"
          onClick={onClose}
        >
          Save Preferences
        </Button>
      </div>
    </div>
  );
};
