'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

interface SecurityConfig {
  requireMfa: boolean;
  passwordExpiration: number;
  maxLoginAttempts: number;
  sessionTimeout: number;
  enableAuditLog: boolean;
}

const initialConfig: SecurityConfig = {
  requireMfa: true,
  passwordExpiration: 90,
  maxLoginAttempts: 5,
  sessionTimeout: 30,
  enableAuditLog: true,
};

export function SecuritySettings() {
  const [config, setConfig] = useState<SecurityConfig>(initialConfig);
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
          <CardTitle>Authentication Settings</CardTitle>
          <CardDescription>
            Configure system-wide authentication and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Require Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">
                Require all users to set up 2FA
              </p>
            </div>
            <Switch
              checked={config.requireMfa}
              onCheckedChange={(checked) =>
                setConfig((prev) => ({ ...prev, requireMfa: checked }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="passwordExpiration">Password Expiration (days)</Label>
            <Input
              id="passwordExpiration"
              type="number"
              min="0"
              value={config.passwordExpiration}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  passwordExpiration: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxLoginAttempts">Maximum Login Attempts</Label>
            <Input
              id="maxLoginAttempts"
              type="number"
              min="1"
              value={config.maxLoginAttempts}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  maxLoginAttempts: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
            <Input
              id="sessionTimeout"
              type="number"
              min="5"
              value={config.sessionTimeout}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  sessionTimeout: parseInt(e.target.value),
                }))
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audit & Logging</CardTitle>
          <CardDescription>
            Configure system auditing and logging settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Audit Logging</Label>
              <p className="text-sm text-muted-foreground">
                Log all important system events and user actions
              </p>
            </div>
            <Switch
              checked={config.enableAuditLog}
              onCheckedChange={(checked) =>
                setConfig((prev) => ({ ...prev, enableAuditLog: checked }))
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