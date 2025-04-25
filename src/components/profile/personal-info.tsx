
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, MapPin } from 'lucide-react';

interface PersonalInfoProps {
  onClose: () => void;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Banking Street, NY 10001'
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="fullName"
              value={formData.fullName}
              className="pl-10"
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              value={formData.email}
              className="pl-10"
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              value={formData.phone}
              className="pl-10"
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="address"
              value={formData.address}
              className="pl-10"
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            />
          </div>
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={onClose}
          className="w-full hover:bg-muted"
        >
          Cancel
        </Button>
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
