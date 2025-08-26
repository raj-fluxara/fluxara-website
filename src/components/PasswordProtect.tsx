import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from 'lucide-react';

// Get the password from environment variables with fallback
const CORRECT_PASSWORD = import.meta.env.VITE_PROTOTYPE_PASSWORD || 'SAI123';
const SESSION_STORAGE_KEY = 'fluxara-prototype-access';

interface PasswordProtectProps {
  children: React.ReactNode;
}

const PasswordProtect = ({ children }: PasswordProtectProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true'
  );
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Protected Area</CardTitle>
          <CardDescription>
            Please enter the password to view the platform demo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              className="!border-gray-300 focus-visible:!border-orange-500 focus-visible:!ring-orange-500 focus:!border-orange-500 focus:!ring-orange-500 !ring-orange-500"
              style={{
                borderColor: '#d1d5db',
                '--tw-ring-color': '#f97316'
              } as React.CSSProperties}
            />
            {error && (
              <Alert variant="destructive">
                <ShieldAlert className="h-4 w-4" />
                <AlertTitle>Access Denied</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
           <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors duration-200">
               Unlock
             </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordProtect;