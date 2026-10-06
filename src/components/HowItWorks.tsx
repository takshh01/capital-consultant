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
    <section id="how-it-works" className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e5041a]/10 text-xs font-bold uppercase tracking-wider text-[#e5041a] border border-[#e5041a]/20">
            Streamlined Execution Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            How Capital Consultancy Delivers Your Financing
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            A structured 4-step roadmap engineered to eliminate bank branch bottlenecks and minimize loan rejection probability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-xs flex flex-col justify-between text-left relative hover:border-[#e5041a]/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#e5041a] tabular-nums">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e5041a] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0d0d0d] mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-bold text-[#0d0d0d]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e5041a]" />
                  <span>Guided by Senior Advisors</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onApplyClick}
            className="px-6 py-3.5 text-sm font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-xl shadow-md shadow-[#e5041a]/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Begin Step 01: Submit Your Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
