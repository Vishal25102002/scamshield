// HeroSection.jsx - Modified to use React Router
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Globe, Search, Mail, ChevronDown, Shield, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeOption, setActiveOption] = useState(null);

  const dropdownOptions = [
    { 
      icon: Globe, 
      title: 'Phishing URL', 
      description: 'Check if a website is safe from phishing attacks',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Search, 
      title: 'Blockchain', 
      description: 'Analyze blockchain transactions for suspicious activity',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: Mail, 
      title: 'Email', 
      description: 'Scan emails for potential phishing attempts',
      color: 'from-pink-500 to-pink-600'
    },
  ];

  const handleStartChatbot = () => {
    navigate('/chatbot');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Static Security Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-200"
            style={{
              left: `${(i * 20) + Math.random() * 10}%`,
              top: `${(i * 15) + Math.random() * 10}%`,
              opacity: 0.1 + (Math.random() * 0.1),
            }}
          >
            <Shield className="w-8 h-8" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6 shadow-sm hover:shadow transition-shadow duration-300">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-blue-700">AI-Powered Protection</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Protect Yourself from
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Online Scams
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Advanced AI technology that shields you from phishing, fraud, and blockchain scams with real-time detection and instant alerts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1"
                onClick={handleStartChatbot}
              >
                <Bot className="mr-2 h-5 w-5" />
                Start Chatbot
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <div className="relative">
                <button
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Get Instant Updates
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showDropdown && (
                  <div
                    className="absolute mt-4 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {dropdownOptions.map((option) => (
                      <button
                        key={option.title}
                        onClick={() => {
                          setActiveOption(option);
                          setShowDropdown(false);
                        }}
                        className="w-full px-6 py-4 flex items-start hover:bg-gray-50 transition-colors duration-300"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${option.color} text-white mr-4`}>
                          <option.icon className="h-6 w-6" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">{option.title}</p>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">100% Secure</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-medium">{i}</span>
                    </div>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">10k+ Protected Users</span>
              </div>
            </div>
          </div>

          {/* Right Content - Static Browser Demo */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Browser Window */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-blue-200/30 hover:-translate-y-2">
                <div className="flex items-center px-4 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 flex-1 bg-gray-200 rounded-md px-4 py-1 text-sm text-gray-600">
                    https://scamshield.protect
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mt-6 flex items-center justify-center">
                      <Shield className="h-10 w-10 text-blue-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="h-24 bg-blue-50 rounded-lg p-4 flex flex-col justify-center border border-blue-100">
                        <p className="text-sm font-medium text-blue-800">Email Protection</p>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                          <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      <div className="h-24 bg-purple-50 rounded-lg p-4 flex flex-col justify-center border border-purple-100">
                        <p className="text-sm font-medium text-purple-800">URL Scanner</p>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                          <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-blue-200/50 hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Scam Detection Rate</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-purple-200/50 hover:translate-y-1">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Real-time Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
export default HeroSection;