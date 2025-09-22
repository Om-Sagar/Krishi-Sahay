import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm KrishiBot, your smart farming assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'hello': "Hello! Welcome to KrishiSahay. I'm here to help you with all your farming needs.",
    'weather': "Our weather monitoring system provides real-time updates and 7-day forecasts. You can check current conditions, rainfall predictions, and temperature alerts in our Solutions section.",
    'crop': "We offer comprehensive crop management including health analysis, disease detection, and yield predictions. Would you like to know more about any specific crop?",
    'disease': "Our AI-powered disease detection can identify plant diseases early. Simply upload a photo of your crop and get instant analysis with treatment recommendations.",
    'price': "Our pricing varies based on your farm size and requirements. Contact us for a personalized quote. We offer affordable plans starting from ₹999/month.",
    'contact': "You can reach us at contact@krishisahay.com or call +91 98765 43210. Our team is available Monday-Friday, 9 AM to 6 PM.",
    'features': "KrishiSahay offers weather monitoring, crop management, smart analytics, risk assessment, community support, and mobile solutions. Which feature interests you most?",
    'help': "I can help you with information about our features, pricing, weather monitoring, crop management, disease detection, and more. What would you like to know?"
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Find matching keywords
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return "I understand you're asking about farming solutions. For specific technical questions, please contact our support team at contact@krishisahay.com or explore our Solutions page for detailed information.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    "Tell me about weather monitoring",
    "How does crop management work?",
    "What are your pricing plans?",
    "Contact information"
  ];

  const handleQuickAction = (action) => {
    setInputMessage(action);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">KrishiBot</h3>
                <p className="text-xs text-green-100">Smart Farming Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-green-100 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && (
                      <Bot className="w-4 h-4 mt-0.5 text-green-600" />
                    )}
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-green-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            {messages.length === 1 && !isTyping && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Quick actions:
                </p>
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 transition-colors duration-200"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Powered by KrishiSahay AI
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
