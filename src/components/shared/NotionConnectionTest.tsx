
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, RefreshCw, Info } from 'lucide-react';
import { testNotionConnection, refreshArticlesCache, getNotionConfig } from '@/services/notionService';
import { NotionConnectionStatus } from '@/types/notion';
import { Badge } from '@/components/ui/badge';

const NotionConnectionTest = () => {
  const [status, setStatus] = useState<NotionConnectionStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState<{apiKey: string; databaseId: string; version: string} | null>(null);

  const testConnection = async () => {
    setLoading(true);
    try {
      const result = await testNotionConnection();
      setStatus(result);
      setConfig(getNotionConfig());
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
    setConfig(getNotionConfig());
  }, []);

  const handleRefresh = () => {
    refreshArticlesCache();
    testConnection();
  };

  const truncateApiKey = (key: string) => {
    if (!key) return '';
    return `${key.substring(0, 8)}...${key.substring(key.length - 4)}`;
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Notion Connection Status</CardTitle>
        <CardDescription>Checking connection to your Notion database</CardDescription>
      </CardHeader>
      <CardContent>
        {config && (
          <div className="mb-4 p-3 bg-gray-50 rounded-md text-sm">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">API Key:</span>
                <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {truncateApiKey(config.apiKey)}
                </code>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Database ID:</span>
                <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {config.databaseId}
                </code>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">API Version:</span>
                <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {config.version}
                </code>
              </div>
            </div>
          </div>
        )}
      
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
              
              {status.corsError && (
                <div className="mt-2 p-2 bg-amber-50 rounded border border-amber-200">
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span className="text-sm text-amber-800">
                      CORS error detected. This usually happens when testing locally. If you're deploying this 
                      app, it may work correctly in production.
                    </span>
                  </div>
                </div>
              )}
            </Alert>
            
            {status.statusCode && (
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium">Status Code:</span>
                <Badge variant={status.success ? "default" : "destructive"}>
                  {status.statusCode}
                </Badge>
              </div>
            )}
            
            {status.details && (
              <div className="mt-4 bg-gray-50 p-4 rounded-md text-xs font-mono overflow-auto max-h-40">
                <pre>{JSON.stringify(status.details, null, 2)}</pre>
              </div>
            )}
          </>
        ) : null}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-stretch sm:flex-row sm:items-center">
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
        
        <a 
          href="https://developers.notion.com/docs/create-a-notion-integration"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors text-center sm:ml-auto"
        >
          Notion API Documentation
        </a>
      </CardFooter>
    </Card>
  );
};

export default NotionConnectionTest;
