
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface UserProfile {
  riskProfile?: 'conservative' | 'moderate' | 'aggressive';
  ageGroup?: '<30' | '30-40' | '40-50' | '50-60' | '60+';
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I can help you understand ETF diversification and asset allocation, and suggest model portfolios based on your age and risk tolerance.\n\nPlease note: This is for educational purposes only and is not financial advice. You should consult a registered advisor before investing.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [conversationStep, setConversationStep] = useState<'initial' | 'risk' | 'age' | 'complete'>('initial');

  const portfolioAllocation = {
    '<30': {
      conservative: { debt: 60, equity: 30, gold: 10 },
      moderate: { debt: 20, equity: 70, gold: 10 },
      aggressive: { debt: 0, equity: 90, gold: 10 }
    },
    '30-40': {
      conservative: { debt: 50, equity: 40, gold: 10 },
      moderate: { debt: 30, equity: 60, gold: 10 },
      aggressive: { debt: 0, equity: 85, gold: 15 }
    },
    '40-50': {
      conservative: { debt: 60, equity: 30, gold: 10 },
      moderate: { debt: 40, equity: 50, gold: 10 },
      aggressive: { debt: 25, equity: 75, gold: 0 }
    },
    '50-60': {
      conservative: { debt: 70, equity: 20, gold: 10 },
      moderate: { debt: 50, equity: 40, gold: 10 },
      aggressive: { debt: 30, equity: 60, gold: 10 }
    },
    '60+': {
      conservative: { debt: 80, equity: 10, gold: 10 },
      moderate: { debt: 60, equity: 30, gold: 10 },
      aggressive: { debt: 40, equity: 50, gold: 10 }
    }
  };

  const getPortfolioRecommendation = (ageGroup: string, riskProfile: string) => {
    const allocation = portfolioAllocation[ageGroup as keyof typeof portfolioAllocation]?.[riskProfile as keyof typeof portfolioAllocation['<30']];
    
    if (!allocation) return "Unable to generate portfolio recommendation.";

    return `Based on your inputs, here's an educational ETF portfolio idea for you (${allocation.equity}% equity, ${allocation.debt}% debt, ${allocation.gold}% gold):

✅ Equity (${allocation.equity}%)
${allocation.equity >= 30 ? `• ${Math.floor(allocation.equity * 0.5)}% in Nippon Nifty Bees` : ''}
${allocation.equity >= 15 ? `• ${Math.floor(allocation.equity * 0.25)}% in Motilal Oswal Midcap 150 ETF` : ''}
${allocation.equity >= 15 ? `• ${Math.floor(allocation.equity * 0.25)}% in Motilal Oswal Nasdaq 100 FOF` : ''}

🟨 Debt (${allocation.debt}%)
${allocation.debt >= 15 ? `• ${Math.floor(allocation.debt * 0.5)}% in Bharat Bond ETF 2033` : ''}
${allocation.debt >= 15 ? `• ${Math.floor(allocation.debt * 0.5)}% in SBI Liquid ETF` : ''}

🟫 Gold (${allocation.gold}%)
${allocation.gold > 0 ? `• ${allocation.gold}% in HDFC Gold ETF` : ''}

📝 This is just an educational model. Please consult a SEBI-registered advisor before investing.`;
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Handle risk profile selection
    if (conversationStep === 'initial' || message.includes('start') || message.includes('portfolio')) {
      setConversationStep('risk');
      return "Let's start by understanding your risk tolerance. How would you describe yourself as an investor?\n\n🔹 Conservative: I prefer stable returns and minimal risk\n🔹 Moderate: I'm okay with some ups and downs for better returns\n🔹 Aggressive: I can handle high volatility for higher potential returns\n\nPlease type 'conservative', 'moderate', or 'aggressive'.";
    }

    if (conversationStep === 'risk') {
      if (message.includes('conservative')) {
        setUserProfile(prev => ({ ...prev, riskProfile: 'conservative' }));
        setConversationStep('age');
        return "Great! You have a conservative risk profile. Now, how old are you?\n\n🔹 Below 30\n🔹 30–40\n🔹 40–50\n🔹 50–60\n🔹 60+\n\nPlease type your age range (e.g., '30-40', 'below 30', '60+').";
      } else if (message.includes('moderate')) {
        setUserProfile(prev => ({ ...prev, riskProfile: 'moderate' }));
        setConversationStep('age');
        return "Perfect! You have a moderate risk profile. Now, how old are you?\n\n🔹 Below 30\n🔹 30–40\n🔹 40–50\n🔹 50–60\n🔹 60+\n\nPlease type your age range (e.g., '30-40', 'below 30', '60+').";
      } else if (message.includes('aggressive')) {
        setUserProfile(prev => ({ ...prev, riskProfile: 'aggressive' }));
        setConversationStep('age');
        return "Excellent! You have an aggressive risk profile. Now, how old are you?\n\n🔹 Below 30\n🔹 30–40\n🔹 40–50\n🔹 50–60\n🔹 60+\n\nPlease type your age range (e.g., '30-40', 'below 30', '60+').";
      }
      return "Please choose from: conservative, moderate, or aggressive.";
    }

    if (conversationStep === 'age') {
      let ageGroup = '';
      if (message.includes('below 30') || message.includes('<30') || message.includes('under 30')) {
        ageGroup = '<30';
      } else if (message.includes('30-40') || message.includes('30 to 40')) {
        ageGroup = '30-40';
      } else if (message.includes('40-50') || message.includes('40 to 50')) {
        ageGroup = '40-50';
      } else if (message.includes('50-60') || message.includes('50 to 60')) {
        ageGroup = '50-60';
      } else if (message.includes('60+') || message.includes('above 60') || message.includes('over 60')) {
        ageGroup = '60+';
      }

      if (ageGroup) {
        setUserProfile(prev => ({ ...prev, ageGroup: ageGroup as any }));
        setConversationStep('complete');
        
        const educationText = "Thanks! Let me explain two key concepts:\n\n📊 **Diversification** means spreading your investments across different types of assets so one bad investment doesn't ruin everything.\n\n⚖️ **Asset allocation** is how much of your money goes into equity, debt, gold, or other assets. It depends on your age, goals, and risk appetite.\n\n";
        
        const portfolioRecommendation = getPortfolioRecommendation(ageGroup, userProfile.riskProfile!);
        
        return educationText + portfolioRecommendation;
      }
      return "Please specify your age range: below 30, 30-40, 40-50, 50-60, or 60+.";
    }

    // Handle general ETF questions
    if (message.includes('diversification') || message.includes('diversify')) {
      return "Diversification is a risk management strategy that mixes a wide variety of investments within a portfolio. The rationale is that a portfolio constructed of different kinds of assets will, on average, yield higher long-term returns and lower the risk of any individual holding or security.";
    }

    if (message.includes('asset allocation')) {
      return "Asset allocation involves dividing an investment portfolio among different asset categories, such as stocks, bonds, and cash. The process of determining which mix of assets to hold in your portfolio is a very personal one. The asset allocation that works best for you at any given point in your life will depend largely on your time horizon and your ability to tolerate risk.";
    }

    if (message.includes('reset') || message.includes('start over')) {
      setUserProfile({});
      setConversationStep('initial');
      return "Let's start fresh! I can help you understand ETF diversification and asset allocation, and suggest model portfolios based on your age and risk tolerance.\n\nPlease note: This is for educational purposes only and is not financial advice. You should consult a registered advisor before investing.\n\nWould you like to create a personalized ETF portfolio recommendation?";
    }

    // Default responses
    return "I can help you with:\n\n• Creating personalized ETF portfolio recommendations\n• Understanding diversification and asset allocation\n• Learning about different ETF types\n\nType 'start' to begin your portfolio assessment, or ask me about any ETF-related topic!";
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

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  const getQuickActions = () => {
    if (conversationStep === 'initial') {
      return ['Start Portfolio Assessment', 'What is diversification?', 'Explain asset allocation'];
    } else if (conversationStep === 'risk') {
      return ['Conservative', 'Moderate', 'Aggressive'];
    } else if (conversationStep === 'age') {
      return ['Below 30', '30-40', '40-50', '50-60', '60+'];
    } else {
      return ['Start Over', 'More ETF Questions'];
    }
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
          <CardHeader className="pb-3 border-b flex-shrink-0">
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

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Messages with proper ScrollArea */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
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
            </ScrollArea>

            {/* Quick Actions */}
            <div className="p-4 border-t bg-muted/30 flex-shrink-0">
              <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
              <div className="space-y-2">
                {getQuickActions().slice(0, 3).map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action)}
                    className="w-full text-left justify-start h-auto py-2 px-3 text-xs"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t flex-shrink-0">
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
