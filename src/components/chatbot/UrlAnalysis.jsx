// UrlAnalysis.jsx
import React, { useEffect, useState } from 'react';
import { Shield, Loader, Lock, Search } from 'lucide-react';

const UrlAnalysis = ({ url, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing scan...');
  
  useEffect(() => {
    const steps = [
      { progress: 20, text: 'Checking domain reputation...' },
      { progress: 40, text: 'Analyzing URL structure...' },
      { progress: 60, text: 'Verifying SSL certificates...' },
      { progress: 80, text: 'Cross-referencing with threat database...' },
      { progress: 95, text: 'Finalizing security assessment...' },
      { progress: 100, text: 'Analysis complete!' }
    ];
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].progress);
        setStatusText(steps[currentStep].text);
        currentStep++;
        
        // Complete the analysis when we reach 100%
        if (steps[currentStep-1].progress === 100) {
          setTimeout(() => {
            if (onComplete) {
              // Generate a random result for demo
              const isSafe = Math.random() > 0.5;
              const result = {
                url: url,
                safe: isSafe,
                score: isSafe ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 40) + 10,
                threats: isSafe ? [] : [
                  'Phishing attempt detected',
                  'Domain registered recently',
                  'Similar to known scam sites'
                ].slice(0, Math.floor(Math.random() * 3) + 1),
                details: {
                  registrationDate: '2023-11-15',
                  sslCertificate: isSafe ? 'Valid' : 'Invalid or Missing',
                  domainAge: isSafe ? '3 years' : '2 days'
                }
              };
              onComplete(result);
            }
          }, 700);
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, [url, onComplete]);
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden w-full max-w-xl">
      {/* Top Loading Bar */}
      <div className="h-1 bg-gray-100 w-full relative overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-700 ease-out absolute inset-0"
          style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)' }}
        ></div>
        
        {/* Loading Dot Animation */}
        <div className="absolute inset-0 flex items-center">
          <div 
            className="h-3 w-3 bg-blue-600 rounded-full absolute"
            style={{ 
              left: `${progress}%`, 
              top: '-1px',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.9)' 
            }}
          ></div>
        </div>
      </div>
      
      <div className="px-4 py-3 bg-blue-50 flex items-center">
        <Loader className="h-5 w-5 text-blue-500 mr-2 animate-spin" />
        <span className="font-medium text-blue-700">Analyzing URL: {url}</span>
        <span className="ml-auto text-sm text-blue-600">{progress}%</span>
      </div>
      
      <div className="p-6">
        {/* Analysis Animation */}
        <div className="relative h-64 flex flex-col items-center justify-center overflow-hidden">
          {/* Scanning Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.5) 25%, rgba(59, 130, 246, 0.5) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.5) 75%, rgba(59, 130, 246, 0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.5) 25%, rgba(59, 130, 246, 0.5) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.5) 75%, rgba(59, 130, 246, 0.5) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Scanning Lines Animation */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-0.5 bg-blue-400 opacity-70 animate-scan-horizontal"></div>
            <div className="absolute h-full w-0.5 bg-blue-400 opacity-70 animate-scan-vertical"></div>
          </div>
          
          {/* Circular Scan Effect */}
          <div className="relative z-10">
            <div className="absolute -inset-8 rounded-full border-2 border-blue-500 opacity-20 animate-pulse-ring"></div>
            <div className="absolute -inset-16 rounded-full border-2 border-blue-400 opacity-10 animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -inset-24 rounded-full border-2 border-blue-300 opacity-5 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Shield className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          
          {/* Binary/Code Animation in Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute text-blue-800 text-xs font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `fall ${2 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.7
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
            
            {/* Security Icons */}
            {[Lock, Search, Shield].map((Icon, i) => (
              <div 
                key={i}
                className="absolute text-blue-300"
                style={{
                  left: `${Math.random() * 85 + 5}%`,
                  top: `${Math.random() * 85 + 5}%`,
                  opacity: 0.15,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `fall ${4 + Math.random() * 4}s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                <Icon className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-2 text-center">
          <p className="text-blue-800 font-medium text-lg">{statusText}</p>
          
          {/* Progress Bar */}
          <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-gray-500 text-sm mt-2">
            Scan {progress}% complete...
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrlAnalysis;