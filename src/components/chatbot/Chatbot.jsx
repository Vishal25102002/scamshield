// Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react';
import ChatbotSidebar from './ChatbotSidebar';
import UrlAnalysis from './UrlAnalysis';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm ScamShield AI. I can help you check if a URL is safe or potentially malicious. Paste any suspicious link to get started.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Check if the screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const DUMMY_API_URL = 'https://dummy-scamshield-api.com/detect'; // Replace with your real API

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [
      ...prev, 
      {
        type: 'user',
        content: input,
        timestamp: new Date()
      }
    ]);
    setInput('');

    // Call dummy API to detect if input is a URL or message
    try {
      // Simulate API call
      const response = await fetch(DUMMY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      });
      // Simulate API response
      // Example: { isUrl: true/false }
      const data = await response.json();

      if (data.isUrl) {
        setIsAnalyzing(true);
        setCurrentUrl(input);
      } else {
        handleBotTyping("It looks like you didn't enter a URL. Please paste a link you'd like me to analyze for potential scams.");
      }
    } catch (error) {
      handleBotTyping("Sorry, something went wrong. Please try again.");
    }
  };

  // Typing effect for bot replies
  const handleBotTyping = (fullText) => {
    let index = 0;
    setMessages(prev => [
      ...prev,
      {
        type: 'bot',
        content: '',
        timestamp: new Date()
      }
    ]);
    const typingInterval = setInterval(() => {
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg.type === 'bot') {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...lastMsg,
            content: fullText.slice(0, index + 1)
          };
          return updated;
        }
        return prev;
      });
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 30); // Typing speed
  };

  const handleAnalysisComplete = (result) => {
    setIsAnalyzing(false);
    
    setMessages(prev => [
      ...prev,
      {
        type: 'result',
        content: result,
        timestamp: new Date()
      }
    ]);
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div 
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-0'
        } ${isMobile ? 'absolute z-30 h-full shadow-lg' : 'relative'}`}
      >
        <ChatbotSidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          isMobile={isMobile}
        />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center">
          {!sidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <ChevronRight />
            </button>
          )}
          <h1 className="text-lg font-medium">ScamShield AI Chatbot</h1>
        </header>
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.type === 'result' ? (
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden w-full max-w-xl">
                    <div className={`px-4 py-3 flex items-center ${message.content.safe ? 'bg-green-50' : 'bg-red-50'}`}>
                      {message.content.safe ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className={`font-medium ${message.content.safe ? 'text-green-700' : 'text-red-700'}`}>
                        {message.content.safe ? 'Safe URL' : 'Potential Threat Detected'}
                      </span>
                      <span className="ml-auto text-sm text-gray-500">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-1">URL analyzed:</p>
                        <p className="font-medium break-all">{message.content.url}</p>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-sm text-gray-500">Safety Score:</p>
                          <p className="text-sm font-medium">{message.content.score}/100</p>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                          <div 
                            className={`h-2 rounded-full ${
                              message.content.score > 70 ? 'bg-green-500' : 
                              message.content.score > 40 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${message.content.score}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {message.content.threats.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 mb-2">Potential threats:</p>
                          <ul className="space-y-1">
                            {message.content.threats.map((threat, idx) => (
                              <li key={idx} className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                                <span className="text-sm">{threat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Additional details:</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-gray-500">Domain Age:</p>
                            <p className="font-medium">{message.content.details.domainAge}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">SSL Certificate:</p>
                            <p className="font-medium">{message.content.details.sslCertificate}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <p className="text-sm font-medium">
                          {message.content.safe 
                            ? "This URL appears to be safe, but always be cautious when sharing personal information online."
                            : "This URL shows signs of being unsafe. We recommend avoiding this website to protect your data."}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div 
                    className={`max-w-xs sm:max-w-md md:max-w-lg rounded-2xl px-4 py-3 ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {message.type === 'user' ? (
                        <span className="text-xs text-blue-200">You</span>
                      ) : (
                        <div className="flex items-center">
                          <Bot className="h-4 w-4 text-blue-600 mr-1" />
                          <span className="text-xs text-gray-500">ScamShield AI</span>
                        </div>
                      )}
                      <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                    </div>
                    <p className={message.type === 'user' ? 'text-white' : 'text-gray-800'}>
                      {message.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
            
            {/* URL Analysis Animation */}
            {isAnalyzing && (
              <UrlAnalysis url={currentUrl} onComplete={handleAnalysisComplete} />
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message or paste a URL to check..."
                className="w-full border-2 border-gray-300 rounded-full py-3 px-5 pr-12 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by ScamShield AI • Your data is processed securely
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;