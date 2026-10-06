import React from 'react';
import { Quote, Building, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const experiences = [
    {
      clientName: 'Sanjay Gupta',
      business: 'Gupta Auto Components & Precision Works',
      location: 'Mayapuri Industrial Area, Delhi',
      loanCategory: 'CGTMSE Machinery Finance',
      quantum: '₹2.4 Crore',
      outcome: 'Secured collateral-free machinery financing for two imported CNC vertical machining centers. Manish Chawla and his team structured our CMA data and liaised with the public sector bank so we experienced zero delays in letter of credit and disbursement.'
    },
    {
      clientName: 'Anil Malhotra',
      business: 'Malhotra Polymers & Packaging',
      location: 'Bawana Industrial Area, Delhi',
      loanCategory: 'Working Capital (CC Limit Enhancement)',
      quantum: '₹4.5 Crore',
      outcome: 'Our existing bank was slow in enhancing our cash credit limit to match our growing seasonal order books. Reena Taank restructured our drawing power calculations and helped us transition to a favorable private sector consortium within 28 days.'
    },
    {
      clientName: 'Dr. Vivek Saxena',
      business: 'Saxena Diagnostic & Imaging Centre',
      location: 'Rohini, Delhi',
      loanCategory: 'Medical Equipment & LAP',
      quantum: '₹1.8 Crore',
      outcome: 'Capital Consultancy handled everything transparently. The team advised us against expensive unsecured loans and helped us secure a long-tenure Loan Against Property at an attractive 8.85% interest rate to finance our high-slice CT scanner.'
    }
  ];

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e5041a]/10 text-xs font-bold uppercase tracking-wider text-[#e5041a] border border-[#e5041a]/20">
            Client Experiences & Case Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            How We Have Helped Delhi NCR Enterprises Expand
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Real financing engagements structured and facilitated through transparent banking advisory and diligent credit compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-xs flex flex-col justify-between text-left hover:border-[#e5041a]/40 hover:shadow-lg transition-all"
            >
              <div>
                <Quote className="w-8 h-8 text-[#e5041a] mb-3" />
                
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed italic">
                  &ldquo;{exp.outcome}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#0d0d0d]">{exp.loanCategory}</span>
                  <span className="font-black text-[#e5041a]">{exp.quantum}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100">
                <div className="font-extrabold text-sm text-[#0d0d0d]">
                  {exp.clientName}
                </div>
                <div className="text-xs text-zinc-600 mt-0.5 font-medium">
                  {exp.business}
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  {exp.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on reviews */}
        <div className="mt-10 text-center">
          <p className="text-xs text-zinc-500">
            *Case summaries reflect actual client engagements facilitated by Capital Consultancy. Outcomes depend on applicant financials and bank sanction discretion.
          </p>
        </div>

      </div>
    </section>
  );
};
