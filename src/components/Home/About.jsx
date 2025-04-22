
import React from 'react';
import { Shield, TrendingUp, Users, Award, Check, Lock, Clock, AlertTriangle } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Protected Users' },
    { icon: Shield, number: '99.9%', label: 'Detection Rate' },
    { icon: TrendingUp, number: '500K+', label: 'Threats Blocked' },
    { icon: Award, number: '5/5', label: 'User Rating' },
  ];

  const benefits = [
    { 
      icon: AlertTriangle, 
      title: 'Threat Detection', 
      description: 'Our AI engine identifies suspicious patterns in URLs, emails, and online transactions before you become a victim.' 
    },
    { 
      icon: Clock, 
      title: 'Real-Time Protection', 
      description: 'Get instant alerts about potential scams while browsing, opening emails, or making online transactions.' 
    },
    { 
      icon: Lock, 
      title: 'Data Security', 
      description: 'Your personal information remains encrypted and secure with our zero-knowledge privacy architecture.' 
    },
    { 
      icon: Check, 
      title: 'Easy to Use', 
      description: 'No technical knowledge required. Simple setup and intuitive dashboard to monitor your protection status.' 
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative w-full overflow-hidden border-t border-gray-100">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 hover:bg-blue-200 transition-colors duration-300 cursor-default">
            About ScamShield
          </span>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Digital Guardian Against Online Threats
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ScamShield is an advanced AI-powered platform designed to protect users from 
            online scams, phishing attempts, and fraudulent activities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4 mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                <stat.icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">{stat.number}</div>
                <div className="text-sm text-gray-600 group-hover:text-blue-700 transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Content with Text and Benefits */}
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left Content - Main Text */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Protect You</h3>
            
            <p className="text-gray-600 mb-6">
              Our cutting-edge technology analyzes URLs, emails, and blockchain transactions in real-time 
              to keep you safe in the digital world. We use advanced machine learning algorithms that continuously 
              learn and adapt to new scam techniques.
            </p>
            
            <p className="text-gray-600 mb-6">
              Unlike traditional security solutions that rely on static databases, ScamShield's AI can detect 
              previously unknown threats by analyzing behavioral patterns and contextual information.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="flex items-center text-lg font-semibold text-blue-800 mb-3">
                <Shield className="h-5 w-5 mr-2" />
                Our Security Promise
              </h4>
              <p className="text-blue-700">
                We're so confident in our protection that we offer a 30-day money-back guarantee if you experience 
                any security breach while using our service.
              </p>
            </div>
          </div>
          
          {/* Right Content - Benefits */}
          <div className="md:col-span-3 grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <benefit.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Section - Redesigned */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted by Security Leaders</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1">
              <div className="h-2 bg-blue-600 w-full"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">CTO, TechSecure Inc.</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "ScamShield has revolutionized our organizational security. Since implementing their solution, phishing attempts have decreased by 95%, and our team feels more confident online."
                </blockquote>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Using since 2023</span>
                  <div className="text-blue-600 flex items-center text-sm font-medium group-hover:underline">
                    <span>Read story</span>
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1">
              <div className="h-2 bg-purple-600 w-full"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold mr-3 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    MK
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Kim</h4>
                    <p className="text-sm text-gray-600">CISO, Global Bank</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "As a financial institution, security is our top priority. ScamShield's blockchain transaction analysis has prevented numerous fraud attempts and saved us millions."
                </blockquote>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Using since 2022</span>
                  <div className="text-purple-600 flex items-center text-sm font-medium group-hover:underline">
                    <span>Read story</span>
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1">
              <div className="h-2 bg-green-600 w-full"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold mr-3 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    AP
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alicia Parker</h4>
                    <p className="text-sm text-gray-600">VP of IT, HealthNet</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "In healthcare, protecting patient data is essential. ScamShield provides peace of mind with its advanced email filtering and staff security training."
                </blockquote>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Using since 2023</span>
                  <div className="text-green-600 flex items-center text-sm font-medium group-hover:underline">
                    <span>Read story</span>
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Trusted by 500+ organizations across industries</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {/* Company logos - using placeholder boxes with company initials */}
              {['MS', 'GS', 'IBM', 'AMZN', 'META'].map((company) => (
                <div key={company} className="h-8 px-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="font-bold text-gray-400 text-xl">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;