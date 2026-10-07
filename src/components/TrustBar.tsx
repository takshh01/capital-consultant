import React from 'react';
import { ShieldCheck, Award, Building, Landmark, Scale, FileCheck2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] border-y border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top summary row */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
            Institutional Lending Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Syndicating Across Public, Private & Specialized Lending Institutions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            We evaluate your financial profile against multi-bank underwriting guidelines to secure the lowest cost of capital with optimal tenure.
          </p>
        </div>

        {/* 4 Trust Pillars with signature emerald top borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#121214] p-6 rounded-2xl border border-white/10 border-t-4 border-t-emerald-500 shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <Landmark className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">PSU & Private Banks</h4>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Direct liaison with scheduled commercial banks for low-rate retail & corporate borrowing.
              </p>
            </div>
          </div>

          <div className="bg-[#121214] p-6 rounded-2xl border border-white/10 border-t-4 border-t-emerald-500 shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">CGTMSE Coverage</h4>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Assistance with collateral-free credit guarantee schemes up to ₹5 Crore for MSMEs.
              </p>
            </div>
          </div>

          <div className="bg-[#121214] p-6 rounded-2xl border border-white/10 border-t-4 border-t-emerald-500 shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <Building className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Tier-1 NBFCs</h4>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Fast sanctions with flexible eligibility for non-standard balance sheets and bridge capital.
              </p>
            </div>
          </div>

          <div className="bg-[#121214] p-6 rounded-2xl border border-white/10 border-t-4 border-t-emerald-500 shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <FileCheck2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">₹0 Upfront Fee</h4>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Transparent advisory. We never ask for unauthorized advance deposits or application fees.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory disclaimer notice */}
        <div className="mt-8 bg-[#121214] rounded-xl p-3.5 text-center border border-white/10">
          <p className="text-[11px] text-zinc-400 leading-normal">
            <strong className="text-zinc-200">Advisory Notice:</strong> Capital Consultancy is an independent financial consulting firm located at Pragati Tower, Rajender Place, Delhi. We do not claim government affiliation or guarantee sanction. Sanction and disbursement remain under the sole discretion of the financing institution.
          </p>
        </div>

      </div>
    </section>
  );
};
