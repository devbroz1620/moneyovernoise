
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I'm your ETF assistant. Ask me about ETFs, portfolio suggestions, or investment strategies!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestedQuestions = [
    "Suggest a low-risk ETF basket",
    "What ETFs are good for inflation protection?",
    "Create a diversified ETF portfolio for 10 years"
  ];

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('low-risk') || message.includes('low risk')) {
      return "If you're looking for a low-risk diversified ETF basket:\n\n1. **ICICI Liquid ETF** - For stability and liquidity\n2. **GoldBeES** - Hedge against inflation\n3. **Bharat Bond ETF 2025** - Government bond exposure\n\nThese ETFs offer capital preservation with modest returns. Would you like to explore any of these ETFs?";
    }
    
    if (message.includes('inflation') || message.includes('hedge')) {
      return "For inflation protection, consider these ETFs:\n\n1. **GoldBeES** - Physical gold exposure\n2. **ICICI GSEC ETF** - Government securities\n3. **HDFC REIT ETF** - Real estate exposure\n\nGold traditionally performs well during inflationary periods. Want to learn more about any specific ETF?";
    }
    
    if (message.includes('diversified') || message.includes('portfolio') || message.includes('10 years')) {
      return "For a 10-year diversified ETF portfolio:\n\n**Core Holdings (60%)**\n• NiftyBees - 30%\n• JuniorBees - 30%\n\n**Diversification (40%)**\n• GoldBeES - 15%\n• HDFC Smallcap 250 ETF - 15%\n• International ETF - 10%\n\nThis balances growth with stability. Rebalance annually for best results!";
    }
    
    return "I can help you with ETF recommendations, portfolio strategies, and investment guidance. Try asking about:\n\n• Low-risk ETF options\n• Inflation hedging strategies\n• Diversified portfolio creation\n• Specific ETF analysis\n\nWhat would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: getAIResponse(inputValue),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInputValue('');
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 p-0"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="pb-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">ETF Assistant</CardTitle>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t bg-muted/30">
                <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left justify-start h-auto py-2 px-3 text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about ETFs..."
                  className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="h-10 w-10"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChatbot;
