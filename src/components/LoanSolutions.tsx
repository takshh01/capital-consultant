import React, { useState } from 'react';
import { LOAN_SOLUTIONS, LoanDetail } from '../data/loanSolutions';
import { LoanType } from '../types/loan';
import { ArrowRight, MessageCircle, Check, Briefcase, FileText } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface LoanSolutionsProps {
  onSelectLoanForEnquiry: (loanType: LoanType) => void;
}

export const LoanSolutions: React.FC<LoanSolutionsProps> = ({ onSelectLoanForEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Business & MSME',
    'Secured & Mortgage',
    'Retail & Personal',
    'Specialized & Structured'
  ];

  const filteredLoans = selectedCategory === 'All'
    ? LOAN_SOLUTIONS
    : LOAN_SOLUTIONS.filter(l => l.category === selectedCategory);

  const handleWhatsAppQuickInquiry = (loan: LoanDetail) => {
    const text = `Hello Capital Consultancy, I would like to inquire about ${loan.title} for my financing requirement. Please share required documentation and bank rates.`;
    window.open(`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="solutions" className="py-20 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
            Comprehensive Financing Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Loan Solutions for Every Business & Personal Need
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            From collateral-free CGTMSE government schemes to high-quantum LAP and working capital lines, select your requirement to initiate structured advisory.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/25'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLoans.map((loan) => (
            <div
              key={loan.id}
              className="bg-[#121214] rounded-2xl border border-white/10 p-6 shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                {/* Unboxed category metadata */}
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span className="font-medium text-emerald-400">{loan.category}</span>
                  <span className="text-zinc-600">·</span>
                  <span className="font-semibold text-zinc-300">{loan.tenure}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {loan.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                  {loan.shortDesc}
                </p>

                {/* Key Metrics Matrix */}
                <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-white/10">
                    <span className="text-[11px] text-zinc-400 block">Indicative Rate</span>
                    <span className="font-bold text-white">{loan.tentativeRate}</span>
                  </div>
                  <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-white/10">
                    <span className="text-[11px] text-zinc-400 block">Quantum</span>
                    <span className="font-bold text-white truncate block" title={loan.maxAmount}>
                      {loan.maxAmount}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider block">
                    Key Features
                  </span>
                  {loan.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Target profile */}
                <div className="mt-4 text-[11px] text-zinc-300 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/20">
                  <strong className="text-emerald-400">Ideal for:</strong> {loan.idealFor}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => onSelectLoanForEnquiry(loan.id)}
                  className="flex-1 py-2.5 px-3 text-xs font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsAppQuickInquiry(loan)}
                  className="p-2.5 text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-xl transition-colors cursor-pointer"
                  title="Inquire on WhatsApp"
                  aria-label={`Inquire about ${loan.title} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Section Bottom Assistance */}
        <div className="mt-12 p-6 bg-[#121214] rounded-2xl border border-white/10 text-center max-w-3xl mx-auto shadow-xs">
          <h4 className="text-base font-bold text-white">
            Uncertain Which Facility Best Fits Your Cash Flow?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Our advisory desk analyzes your balance sheet, debtor aging, and collateral profile to construct the optimal combination of term loans, overdraft, and credit guarantee schemes.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onSelectLoanForEnquiry('Business Loan')}
              className="px-5 py-2.5 text-xs font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-xl cursor-pointer shadow-md shadow-emerald-500/20 transition-all"
            >
              Open Full Enquiry Form
            </button>
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Consultancy, I need advice on choosing the best loan type for my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-xl inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
