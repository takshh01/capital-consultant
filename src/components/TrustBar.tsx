import React from 'react';
import { ShieldCheck, Award, Building, Landmark, Scale, FileCheck2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#f8f9fa] border-y border-zinc-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top summary row */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e5041a]/10 text-xs font-bold uppercase tracking-wider text-[#e5041a] border border-[#e5041a]/20">
            Institutional Lending Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d0d0d] tracking-tight">
            Syndicating Across Public, Private & Specialized Lending Institutions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            We evaluate your financial profile against multi-bank underwriting guidelines to secure the lowest cost of capital with optimal tenure.
          </p>
        </div>

        {/* 4 Trust Pillars with signature crimson top borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 border-t-4 border-t-[#e5041a] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <Landmark className="w-5 h-5 text-[#ff4d5a]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0d0d0d]">PSU & Private Banks</h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Direct liaison with scheduled commercial banks for low-rate retail & corporate borrowing.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 border-t-4 border-t-[#e5041a] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#ff4d5a]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0d0d0d]">CGTMSE Coverage</h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Assistance with collateral-free credit guarantee schemes up to ₹5 Crore for MSMEs.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 border-t-4 border-t-[#e5041a] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <Building className="w-5 h-5 text-[#ff4d5a]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0d0d0d]">Tier-1 NBFCs</h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Fast sanctions with flexible eligibility for non-standard balance sheets and bridge capital.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 border-t-4 border-t-[#e5041a] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left">
            <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-white flex items-center justify-center shrink-0 mb-4 shadow-sm">
              <FileCheck2 className="w-5 h-5 text-[#ff4d5a]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0d0d0d]">₹0 Upfront Fee</h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Transparent advisory. We never ask for unauthorized advance deposits or application fees.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory disclaimer notice */}
        <div className="mt-8 bg-zinc-100 rounded-xl p-3.5 text-center border border-zinc-200">
          <p className="text-[11px] text-zinc-600 leading-normal">
            <strong>Advisory Notice:</strong> Capital Consultancy is an independent financial consulting firm located at Pragati Tower, Rajender Place, Delhi. We do not claim government affiliation or guarantee sanction. Sanction and disbursement remain under the sole discretion of the financing institution.
          </p>
        </div>

      </div>
    </section>
  );
};
