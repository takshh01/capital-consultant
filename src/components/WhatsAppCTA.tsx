import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER, BUSINESS_WHATSAPP_DISPLAY, BUSINESS_PHONE_DISPLAY, openWhatsAppChat } from '../utils/whatsapp';

export const WhatsAppCTA: React.FC = () => {
  const handleQuickChat = (topic: string) => {
    const text = `Hello Capital Consultancy, I would like to discuss ${topic} with your senior advisory team.`;
    openWhatsAppChat(text);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#0d0d0d] via-[#170507] to-[#0d0d0d] text-white relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-2 text-[#ff4d5a] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#e5041a] animate-ping" />
              <span>Instant Advisory Response</span>
              <span className="text-zinc-600">·</span>
              <span>Direct WhatsApp Desk</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Prefer an Immediate 1-on-1 WhatsApp Consultation?
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
              Connect directly with our leadership desk. Skip tedious queue times and discuss your turnover, collateral documents, and bank eligibility in real-time.
            </p>

            {/* Quick Discussion Topic Chips */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => handleQuickChat('Unsecured Business Loan & MSME Schemes')}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white transition-colors cursor-pointer"
              >
                MSME & Business Loan
              </button>
              <button
                onClick={() => handleQuickChat('CGTMSE Collateral-Free Funding (up to ₹5 Cr)')}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white transition-colors cursor-pointer"
              >
                CGTMSE Scheme
              </button>
              <button
                onClick={() => handleQuickChat('Working Capital / CC / OD Limits')}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white transition-colors cursor-pointer"
              >
                Working Capital (CC/OD)
              </button>
              <button
                onClick={() => handleQuickChat('Loan Against Property / Commercial Mortgage')}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white transition-colors cursor-pointer"
              >
                Loan Against Property
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Consultancy, I want to discuss a loan requirement.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 bg-[#e5041a] hover:bg-[#cc0316] text-white font-extrabold text-sm rounded-xl shadow-xl shadow-[#e5041a]/30 transition-all flex items-center justify-center gap-2.5 text-center transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Talk on WhatsApp Now</span>
            </a>

            <a
              href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
              className="py-3 px-6 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs rounded-xl border border-zinc-700 transition-colors flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4 text-[#e5041a]" />
              <span>Call Us: {BUSINESS_PHONE_DISPLAY}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
