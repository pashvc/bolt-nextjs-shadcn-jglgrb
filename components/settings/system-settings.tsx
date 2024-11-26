'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

interface SystemConfig {
  siteName: string;
  supportEmail: string;
  maxTicketsPerUser: number;
  enableRegistration: boolean;
  enableNotifications: boolean;
  maintenanceMode: boolean;
}

const initialConfig: SystemConfig = {
  siteName: 'QR-check',
  supportEmail: 'support@qr-check.com',
  maxTicketsPerUser: 10,
  enableRegistration: true,
  enableNotifications: true,
  maintenanceMode: false,
};

export function SystemSettings() {
  const [config, setConfig] = useState<SystemConfig>(initialConfig);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>
            Configure basic system settings and defaults
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input
              id="siteName"
              value={config.siteName}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, siteName: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input
              id="supportEmail"
              type="email"
              value={config.supportEmail}
              onChange={(e) =>
                setConfig((prev) => ({ ...prev, supportEmail: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxTickets">Maximum Tickets per User</Label>
            <Input
              id="maxTickets"
              type="number"
              min="1"
              value={config.maxTicketsPerUser}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  maxTicketsPerUser: parseInt(e.target.value),
                }))
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Features</CardTitle>
          <CardDescription>
            Enable or disable system features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>User Registration</Label>
              <p className="text-sm text-muted-foreground">
                Allow new users to register
              </p>
            </div>
            <Switch
              checked={config.enableRegistration}
              onCheckedChange={(checked) =>
                setConfig((prev) => ({ ...prev, enableRegistration: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Enable system-wide push notifications
              </p>
            </div>
            <Switch
              checked={config.enableNotifications}
              onCheckedChange={(checked) =>
                setConfig((prev) => ({ ...prev, enableNotifications: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Maintenance Mode</Label>
              <p className="text-sm text-muted-foreground">
                Put the system in maintenance mode
              </p>
            </div>
            <Switch
              checked={config.maintenanceMode}
              onCheckedChange={(checked) =>
                setConfig((prev) => ({ ...prev, maintenanceMode: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
}