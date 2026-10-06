import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Building2, TrendingUp, Calculator } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface HeroProps {
  onApplyClick: () => void;
  onEmiClick: () => void;
  onOpenCallbackModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onApplyClick,
  onEmiClick,
  onOpenCallbackModal
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f11] to-[#0a0a0a] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Glowing Crimson Ambient Mesh */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e5041a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#e5041a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#e5041a_1px,transparent_1px)] [background-size:28px_28px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Copy & Direct High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag / Kicker with crimson styling */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5041a]/10 border border-[#e5041a]/30 text-xs font-semibold text-[#ff4d5a]">
              <span className="w-2 h-2 rounded-full bg-[#e5041a] animate-pulse" />
              <span>Capital Consultancy · Delhi NCR</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] text-balance">
              Where Capital Strategy Delivers Business Growth.
            </h1>

            {/* Sub-headline / Value Proposition */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              We guide business owners, manufacturers, MSMEs, and salaried professionals through bank loan matchmaking, CGTMSE collateral-free funding, working capital, and mortgage finance across 40+ scheduled lenders.
            </p>

            {/* Core Credibility Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-zinc-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#e5041a] shrink-0" />
                <span>CGTMSE Collateral-Free up to ₹5 Cr</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#e5041a] shrink-0" />
                <span>Unsecured Business Loans to ₹75 Lakhs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#e5041a] shrink-0" />
                <span>Working Capital Limits (CC / OD)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#e5041a] shrink-0" />
                <span>Direct WhatsApp Senior Advisory</span>
              </div>
            </div>

            {/* Action Buttons in signature crimson red & dark slate */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onApplyClick}
                className="px-6 py-3.5 text-sm font-extrabold text-white bg-[#e5041a] hover:bg-[#cc0316] active:bg-[#b50212] rounded-xl shadow-lg shadow-[#e5041a]/30 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Apply for a Loan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Consultancy, I would like to discuss my financing requirement with Manish Chawla / Reena Taank.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-white hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Talk on WhatsApp</span>
              </a>

              <button
                onClick={onEmiClick}
                className="px-5 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#e5041a]" />
                <span>EMI Calculator</span>
              </button>
            </div>

            {/* Non-Guaranteed Disclaimer Snippet */}
            <p className="text-[12px] text-zinc-400 pt-1 leading-normal">
              *Loan approval, tenure, and interest rates are subject to respective bank/NBFC credit policies. Zero advance processing fee charged.
            </p>
          </div>

          {/* Right Column: High-Trust Institutional Proof Card styled like the hero mockup */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#121214]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white">Advisory Snapshot</h3>
                  <p className="text-xs text-zinc-400">Delhi NCR Central Office</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white bg-[#e5041a] px-2.5 py-1 rounded-md shadow-xs">
                    Active Desk
                  </span>
                </div>
              </div>

              {/* Quantified Metrics with Crimson Accents */}
              <div className="grid grid-cols-2 gap-4 py-6 border-b border-white/10 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#ff4d5a] tabular-nums tracking-tight">
                    ₹250+ Cr
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Capital Syndicated</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                    40+
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Lending Partners</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                    13+
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Loan Categories</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#ff4d5a] tabular-nums tracking-tight">
                    ₹0
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Advance Advisory Fee</div>
                </div>
              </div>

              {/* Fast Direct Callback Trigger */}
              <div className="pt-6 space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e5041a] text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-[#e5041a]/20">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Need an Urgent Assessment?</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Request an immediate callback with Manish Chawla & Reena Taank.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={onOpenCallbackModal}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-center transition-colors cursor-pointer"
                  >
                    Request a Callback
                  </button>
                  <button
                    onClick={onApplyClick}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-lg text-center transition-colors cursor-pointer shadow-md shadow-[#e5041a]/20"
                  >
                    Start Online Enquiry
                  </button>
                </div>
              </div>

              {/* Leadership badge */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span>Manish Chawla (CEO)</span>
                <span>Reena Taank (Manager)</span>
              </div>
            </div>

            {/* Floating Experience Badge with Crimson Red Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-[#e5041a] text-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-2 border border-red-400/40">
              <span className="text-2xl font-black tabular-nums">25+</span>
              <span className="text-[11px] font-bold leading-tight block text-left">
                Years of Team<br />Banking Insight
              </span>
            </div>
          </div>

        </div>

        {/* 3 Quick Domain Feature Cards below hero */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          <div className="bg-[#121214] border border-white/10 rounded-2xl p-5 flex items-start gap-3.5 hover:border-[#e5041a]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#e5041a]/15 text-[#ff4d5a] flex items-center justify-center shrink-0 border border-[#e5041a]/30">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">MSME & CGTMSE Loans</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Collateral-free government credit guarantee facilities up to ₹5 Cr for manufacturing and services.
              </p>
            </div>
          </div>

          <div className="bg-[#121214] border border-white/10 rounded-2xl p-5 flex items-start gap-3.5 hover:border-[#e5041a]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#e5041a]/15 text-[#ff4d5a] flex items-center justify-center shrink-0 border border-[#e5041a]/30">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Working Capital Limits</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Optimized CC and OD drawing power calculated against stock & receivables to prevent cash flow traps.
              </p>
            </div>
          </div>

          <div className="bg-[#121214] border border-white/10 rounded-2xl p-5 flex items-start gap-3.5 hover:border-[#e5041a]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#e5041a]/15 text-[#ff4d5a] flex items-center justify-center shrink-0 border border-[#e5041a]/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Mortgage & Project Finance</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                High-ticket Loan Against Property and plant finance structured at the lowest institutional lending rates.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
