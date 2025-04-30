// ChatbotSidebar.jsx
import React from 'react';
import { 
  Bot, 
  Shield, 
  X, 
  BarChart3, 
  History, 
  Link2, 
  AlertCircle, 
  Lock, 
  Settings,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const ChatbotSidebar = ({ sidebarOpen, setSidebarOpen, isMobile }) => {
  const historyItems = [
    { url: 'paypa1.com/login', safe: false, date: '2 hours ago' },
    { url: 'amazon.com/orders', safe: true, date: 'Yesterday' },
    { url: 'facebook-verify.net', safe: false, date: '3 days ago' },
    { url: 'linkedin.com/jobs', safe: true, date: 'Last week' }
  ];

  if (!sidebarOpen) return null;

  return (
    <div className="h-full flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <h2 className="font-bold text-lg">ScamShield</h2>
        </div>
        {isMobile && (
          <button 
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        )}
      </div>
      
      {/* Scan Stats */}
      <div className="p-4 bg-blue-50 m-3 rounded-lg">
        <h3 className="font-medium text-blue-800 mb-2 flex items-center">
          <BarChart3 size={16} className="mr-2" />
          Your Protection Status
        </h3>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Threats Blocked</span>
              <span className="font-medium">24</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>URLs Checked</span>
              <span className="font-medium">57</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* History */}
      <div className="p-4">
        <h3 className="font-medium text-gray-700 mb-3 flex items-center">
          <History size={16} className="mr-2" />
          Recent Checks
        </h3>
        <div className="space-y-2">
          {historyItems.map((item, index) => (
            <div 
              key={index}
              className="p-2 hover:bg-gray-50 rounded-md cursor-pointer group flex items-center justify-between"
            >
              <div className="flex items-center space-x-2 overflow-hidden">
                {item.safe ? (
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                ) : (
                  <AlertTriangle size={16} className="text-red-500 flex-shrink-0" />
                )}
                <span className="text-sm truncate">{item.url}</span>
              </div>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="mt-4 flex-1">
        <nav className="px-2">
          <ul className="space-y-1">
            {[
              { icon: Bot, label: 'AI Chat', active: true },
              { icon: Link2, label: 'Bulk URL Check' },
              { icon: AlertCircle, label: 'Threat Database' },
              { icon: Lock, label: 'Password Checker' },
              { icon: Settings, label: 'Settings' },
            ].map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
                    item.active ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* User */}
      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="font-medium text-blue-800">U</span>
          </div>
          <div>
            <p className="text-sm font-medium">User</p>
            <p className="text-xs text-gray-500">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSidebar;