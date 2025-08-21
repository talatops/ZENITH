import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [accentGlow, setAccentGlow] = useState(true);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedAccentGlow = localStorage.getItem('accentGlow');
    
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    }
    if (savedAccentGlow !== null) {
      setAccentGlow(savedAccentGlow === 'true');
    }
  }, []);

  // Handle dark mode toggle
  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem('darkMode', checked.toString());
    
    // Apply theme to document
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Handle accent glow toggle
  const handleAccentGlowToggle = (checked: boolean) => {
    setAccentGlow(checked);
    localStorage.setItem('accentGlow', checked.toString());
    
    // Apply glow effects to document
    if (checked) {
      document.documentElement.classList.add('glow-enabled');
    } else {
      document.documentElement.classList.remove('glow-enabled');
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full space-y-6">
      {/* Profile */}
      <Card className="bg-card-gradient border border-border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" className="mt-1 bg-card border-border" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="mt-1 bg-card border-border" />
          </div>
        </CardContent>
      </Card>

      {/* Appearance & Theme */}
      <Card className="bg-card-gradient border border-border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Dark Mode</div>
              <div className="text-sm text-muted-foreground">Toggle dark/light theme</div>
            </div>
            <Switch checked={darkMode} onCheckedChange={handleDarkModeToggle} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Accent Glow</div>
              <div className="text-sm text-muted-foreground">Enable neon glow effects</div>
            </div>
            <Switch checked={accentGlow} onCheckedChange={handleAccentGlowToggle} />
          </div>
          <Separator className="my-4" />
          <div className="text-center">
            <div className="text-sm font-medium mb-2">Theme Preview</div>
            <div className="bg-card border border-border rounded-xl p-4 max-w-xs mx-auto">
              <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-hero-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">Your theme preview</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-card-gradient border border-border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Email notifications</div>
              <div className="text-sm text-muted-foreground">Mentions, assignments, and reminders</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">In-app notifications</div>
              <div className="text-sm text-muted-foreground">Show toasts and alerts</div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Account & Security */}
      <Card className="bg-card-gradient border border-border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Account & Security</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" className="mt-1 bg-card border-border" />
          </div>
          <div>
            <Label>Two-factor authentication</Label>
            <div className="flex items-center justify-between mt-1">
              <div className="text-sm text-muted-foreground">Protect your account with 2FA</div>
              <Switch />
            </div>
          </div>
          <div className="md:col-span-2">
            <Separator className="my-2" />
            <div className="flex gap-2">
              <Button variant="destructive">Deactivate account</Button>
              <Button variant="outline">Export data</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="px-8">Save changes</Button>
      </div>
    </div>
  );
};

export default Settings;
