import React from 'react';
import { Scale, FileSpreadsheet, ShieldAlert, Sparkles, Clock, Headset, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Neutral Multi-Lender Syndication',
      description: 'Unlike bank branch officers tied to single targets, we evaluate your proposal across 40+ scheduled banks and NBFCs to secure the most favorable interest rate and tenure terms.',
      icon: Scale
    },
    {
      title: 'CMA Data & Financial Structuring',
      description: 'Poorly drafted CMA data and unbalanced DSCR ratios cause over 60% of MSME rejections. We structure your financials professionally prior to bank submission.',
      icon: FileSpreadsheet
    },
    {
      title: 'CGTMSE & Collateral-Free Mastery',
      description: 'Specialized experience securing up to ₹5 Crore collateral-free debt under the Credit Guarantee Fund Scheme for micro and small manufacturing and services.',
      icon: Sparkles
    },
    {
      title: 'Zero Upfront Consultation Fee',
      description: 'Complete transparency. We do not demand illicit advance processing deposits or application fees. Our interest is strictly aligned with your loan sanction.',
      icon: ShieldAlert
    },
    {
      title: 'Fast Track Processing & Liaison',
      description: 'Dedicated follow-up with bank credit underwriters, valuation engineers, and legal advocates to compress disbursement turnaround times.',
      icon: Clock
    },
    {
      title: 'Direct WhatsApp Advisory Desk',
      description: 'Receive real-time updates and documentation support directly over WhatsApp with our leadership team (Manish Chawla & Reena Taank).',
      icon: Headset
    }
  ];

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e5041a]/10 text-xs font-bold uppercase tracking-wider text-[#e5041a] border border-[#e5041a]/20">
            Strategic Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            Why Delhi NCR Businesses Trust Capital Consultancy
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Professional debt advisory that bridges the gap between your balance sheet and bank underwriting mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-[#e5041a]/40 hover:shadow-md transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white group-hover:bg-[#e5041a] transition-colors flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5 text-zinc-200 group-hover:text-white" />
                </div>
                <h3 className="text-base font-bold text-[#0d0d0d] group-hover:text-[#e5041a] transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quantitative summary banner */}
        <div className="mt-12 bg-[#0d0d0d] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white">
              Over <span className="text-[#ff4d5a]">₹250+ Crore</span> Debt Advisory Facilitated
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              From ₹10 Lakh retail personal needs to ₹50 Crore industrial machinery lines, our client-centric approach ensures minimal friction and maximum sanction success.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#enquiry-form"
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-xl transition-all shadow-md shadow-[#e5041a]/25 whitespace-nowrap"
            >
              Check Loan Feasibility
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
