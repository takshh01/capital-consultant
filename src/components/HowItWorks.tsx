import React from 'react';
import { ArrowRight, CheckCircle2, FileSearch, ShieldCheck, Banknote, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onApplyClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onApplyClick }) => {
  const steps = [
    {
      step: '01',
      title: 'Requirement & Cash-Flow Profiling',
      desc: 'Submit your requirement via our website or WhatsApp. We evaluate your monthly turnover, vintage, tax filings, and specific financing purpose.',
      icon: FileSearch
    },
    {
      step: '02',
      title: 'Document & Credit Structuring',
      desc: 'Our team assesses ITRs, GST returns, and bank statements to prepare financial ratios, CMA data, and mitigate potential banking queries.',
      icon: ShieldCheck
    },
    {
      step: '03',
      title: 'Multi-Bank Matchmaking & Negotiation',
      desc: 'We place your application before lenders offering the most competitive pricing, lowest processing charges, and optimal repayment tenures.',
      icon: Sparkles
    },
    {
      step: '04',
      title: 'Sanction Letter & Disbursement',
      desc: 'Lender issues the formal sanction letter. We assist with legal verification, loan agreement signing, and swift disbursement to your bank account.',
      icon: Banknote
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
            Streamlined Execution Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Capital Consultancy Delivers Your Financing
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A structured 4-step roadmap engineered to eliminate bank branch bottlenecks and minimize loan rejection probability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-[#121214] rounded-2xl border border-white/10 p-6 shadow-xs flex flex-col justify-between text-left relative hover:border-emerald-500/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-emerald-400 tabular-nums">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guided by Senior Advisors</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onApplyClick}
            className="px-8 py-3.5 text-sm font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Begin Step 01: Submit Your Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
