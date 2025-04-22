// FeaturesSection.jsx
import React from 'react';
import { Shield, Bot, Globe, Lock, Mail, Search, Clock, BarChart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Protection',
      description: 'Instant analysis and detection of potential threats as you browse',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Bot,
      title: 'AI-powered Detection',
      description: 'Machine learning algorithms that adapt to new threats continuously',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Web Safety Scanner',
      description: 'Comprehensive URL analysis to identify malicious websites',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email Protection',
      description: 'Advanced phishing detection for your email communications',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Search,
      title: 'Blockchain Analysis',
      description: 'Smart contract and transaction verification for crypto safety',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data is encrypted and never shared with third parties',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous protection that never sleeps',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: BarChart,
      title: 'Threat Intelligence',
      description: 'Analytics dashboard to track blocked threats',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 relative w-full overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 hover:bg-blue-200 transition-colors duration-300 cursor-default">
            Features
          </span>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Security Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to stay protected online, powered by cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                   style={{ background: `linear-gradient(to right, ${feature.color})` }}
              ></div>
              
              <div
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-blue-100 transition-all duration-300">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Why Choose ScamShield?
              </h3>
              <p className="text-gray-600">
                Compare our features with traditional security solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <span className="text-2xl font-bold text-white">10x</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Faster Detection</h4>
                <p className="text-gray-600">Real-time AI processing for instant threat identification</p>
              </div>
              
              <div className="text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <span className="text-2xl font-bold text-white">99%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Accuracy Rate</h4>
                <p className="text-gray-600">Industry-leading accuracy in scam detection</p>
              </div>
              
              <div className="text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Always On</h4>
                <p className="text-gray-600">Continuous protection round the clock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;