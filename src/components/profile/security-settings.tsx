
import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fingerprint, Key, Smartphone } from 'lucide-react';

interface SecuritySettingsProps {
  onClose: () => void;
}

export const SecuritySettings: React.FC<SecuritySettingsProps> = ({ onClose }) => {
  const [settings, setSettings] = useState({
    twoFactor: true,
    biometric: true,
    loginNotifications: true,
    deviceManagement: true,
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-bank-blue/10 p-2 rounded-full">
              <Smartphone className="h-5 w-5 text-bank-blue" />
            </div>
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
          </div>
          <Switch
            checked={settings.twoFactor}
            onCheckedChange={(checked) => setSettings(prev => ({ ...prev, twoFactor: checked }))}
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-bank-blue/10 p-2 rounded-full">
              <Fingerprint className="h-5 w-5 text-bank-blue" />
            </div>
            <div>
              <p className="font-medium">Biometric Login</p>
              <p className="text-sm text-muted-foreground">Use fingerprint or face ID</p>
            </div>
          </div>
          <Switch
            checked={settings.biometric}
            onCheckedChange={(checked) => setSettings(prev => ({ ...prev, biometric: checked }))}
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-bank-blue/10 p-2 rounded-full">
              <Key className="h-5 w-5 text-bank-blue" />
            </div>
            <div>
              <p className="font-medium">Login Notifications</p>
              <p className="text-sm text-muted-foreground">Get alerts for new device logins</p>
            </div>
          </div>
          <Switch
            checked={settings.loginNotifications}
            onCheckedChange={(checked) => setSettings(prev => ({ ...prev, loginNotifications: checked }))}
          />
        </div>
      </div>

      <div className="pt-4">
        <Button 
          className="w-full bg-bank-blue hover:bg-bank-light-blue"
          onClick={onClose}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};
