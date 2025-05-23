
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { testNotionConnection, refreshArticlesCache } from '@/services/notionService';
import { NotionConnectionStatus } from '@/types/notion';

const NotionConnectionTest = () => {
  const [status, setStatus] = useState<NotionConnectionStatus | null>(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const result = await testNotionConnection();
      setStatus(result);
    } catch (error) {
      console.error('Error testing connection:', error);
      setStatus({
        success: false,
        message: 'Error running connection test',
        details: error,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  const handleRefresh = () => {
    refreshArticlesCache();
    testConnection();
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Notion Connection Status</CardTitle>
        <CardDescription>Checking connection to your Notion database</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center space-x-2 py-4">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span>Testing connection...</span>
          </div>
        ) : status ? (
          <>
            <Alert variant={status.success ? "default" : "destructive"} className="mb-4">
              <div className="flex items-center space-x-2">
                {status.success ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                <AlertTitle>
                  {status.success ? "Connected" : "Connection Failed"}
                </AlertTitle>
              </div>
              <AlertDescription className="mt-2">{status.message}</AlertDescription>
            </Alert>
            
            {status.details && (
              <div className="mt-4 bg-gray-50 p-4 rounded-md text-xs font-mono overflow-auto max-h-40">
                <pre>{JSON.stringify(status.details, null, 2)}</pre>
              </div>
            )}
          </>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleRefresh} 
          disabled={loading}
          className="flex items-center space-x-2"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          <span>Test Connection</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NotionConnectionTest;
