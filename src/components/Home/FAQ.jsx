// FAQsSection.jsx
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How does ScamShield protect me?',
      answer: 'ScamShield uses advanced AI algorithms to analyze URLs, emails, and blockchain transactions in real-time. Our system checks against a constantly updated database of known scams and uses machine learning to detect new threats before they can harm you. The protection happens automatically in the background, giving you peace of mind while browsing.',
    },
    {
      question: 'Is my data safe with ScamShield?',
      answer: 'Absolutely! We use end-to-end encryption for all data transmission and never store or share your personal information. Our privacy-first approach ensures that your data remains secure and confidential at all times. We adhere to strict GDPR and CCPA compliance standards and regularly undergo third-party security audits.',
    },
    {
      question: 'How accurate is ScamShield?',
      answer: 'ScamShield maintains a 99.9% accuracy rate in detecting online scams. Our AI models are continuously updated with new threat patterns, ensuring the highest level of protection against evolving scam techniques. We process millions of data points daily to improve our detection capabilities.',
    },
    {
      question: 'What types of scams can ScamShield detect?',
      answer: 'ScamShield can detect various types of scams including phishing websites, fraudulent emails, suspicious blockchain transactions, fake social media profiles, investment scams, romance scams, and malware distribution attempts. Our comprehensive protection covers both common and sophisticated online threats.',
    },
    {
      question: 'Do I need technical knowledge to use ScamShield?',
      answer: 'Not at all! ScamShield is designed to be user-friendly and works automatically once installed. Our intuitive interface requires no technical expertise, and our support team is available 24/7 to assist you with any questions or concerns.',
    },
    {
      question: 'How often is the threat database updated?',
      answer: 'Our threat database is updated in real-time, 24/7. We continuously gather intelligence from multiple sources, including our user community, security partners, and automated crawlers. This ensures that you\'re protected against the latest threats as soon as they emerge.',
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-white relative w-full">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 hover:bg-blue-200 transition-colors duration-300 cursor-default">
            FAQs
          </span>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-gray-600">
            Everything you need to know about ScamShield
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <div
                  style={{ transform: `rotate(${activeIndex === index ? 180 : 0}deg)` }}
                  className="transition-transform duration-300"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="overflow-hidden transition-all duration-300">
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8">
              Our support team is here to help you 24/7
            </p>
            <button
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-300/50 hover:-translate-y-1"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;