import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER, BUSINESS_WHATSAPP_DISPLAY, openWhatsAppChat } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  
  // Typing animation state for the welcome message
  const welcomeTargetText = 'Hello! Welcome to Capital Consultancy.';
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const quickPrompts = [
    'I want to enquire about an Unsecured Business Loan.',
    'Is my business eligible for CGTMSE Collateral-Free funding?',
    'Need working capital (CC / OD limit) for my manufacturing unit.',
    'I want to calculate EMI and check Loan Against Property options.'
  ];

  // Trigger typing animation whenever the popup is opened
  useEffect(() => {
    if (!isOpen) {
      setDisplayedText('');
      setIsTyping(false);
      setTypingComplete(false);
      return;
    }

    setIsTyping(true);
    setDisplayedText('');
    setTypingComplete(false);

    let currentIndex = 0;
    // Initial brief 200ms pause to simulate natural human response
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        currentIndex++;
        setDisplayedText(welcomeTargetText.slice(0, currentIndex));

        if (currentIndex >= welcomeTargetText.length) {
          clearInterval(interval);
          setIsTyping(false);
          setTypingComplete(true);
        }
      }, 30); // smooth 30ms typing velocity

      return () => clearInterval(interval);
    }, 200);

    return () => clearTimeout(startDelay);
  }, [isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    openWhatsAppChat(text);
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 text-left">
          {/* Card Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                CC
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Capital Consultancy Desk</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  {isTyping ? (
                    <span className="italic font-medium text-emerald-200">typing...</span>
                  ) : (
                    <span>Online · +91 9625456835</span>
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-72 overflow-y-auto text-xs">
            {/* Animated Welcome Bubble */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs leading-relaxed">
              <div className="min-h-[22px]">
                {displayedText.includes('Capital Consultancy') ? (
                  <span>
                    Hello! Welcome to <strong className="text-slate-900 font-bold">Capital Consultancy</strong>.
                  </span>
                ) : (
                  <span>{displayedText}</span>
                )}
                
                {/* Blinking typing cursor */}
                {isTyping && (
                  <span 
                    className="inline-block w-1.5 h-3.5 bg-emerald-600 ml-1 rounded-xs animate-pulse align-middle"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Follow-up question fades in after typing finishes */}
              {typingComplete && (
                <p className="mt-1.5 text-slate-600 animate-in fade-in duration-300">
                  How can we assist you with business, MSME, or mortgage loans today?
                </p>
              )}
            </div>

            {/* Quick Prompts */}
            <div className={`space-y-1.5 pt-1 transition-opacity duration-300 ${typingComplete ? 'opacity-100' : 'opacity-40'}`}>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Quick Inquiries:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2 rounded-lg bg-white hover:bg-emerald-50 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 text-slate-700 transition-colors cursor-pointer text-[11px] block"
                >
                  &ldquo;{prompt}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your loan query..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend(customMsg);
              }}
              className="flex-1 px-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-500 text-slate-900"
            />
            <button
              onClick={() => handleSend(customMsg || 'Hello Capital Consultancy, I have a loan enquiry.')}
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer shrink-0"
              title="Send to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all cursor-pointer transform hover:scale-105"
        aria-label="Contact Capital Consultancy on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
          WhatsApp Desk
        </span>
        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
      </button>
    </div>
  );
};
