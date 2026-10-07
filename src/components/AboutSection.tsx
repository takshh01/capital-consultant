import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle, Users } from 'lucide-react';
import { BUSINESS_OFFICE, BUSINESS_PHONE_DISPLAY, BUSINESS_WHATSAPP_DISPLAY, BUSINESS_EMAIL, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface AboutSectionProps {
  onApplyClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onApplyClick }) => {
  return (
    <section id="about" className="py-20 bg-[#050607] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate profile & narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                About Capital Consultancy
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Strategic Debt Syndication & Pragmatic Financial Advisory in Delhi NCR
              </h2>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Headquartered at <strong className="text-white">Pragati Tower, Rajender Place, Delhi</strong>, Capital Consultancy was founded to demystify business borrowing. Traditional bank procedures can be opaque, time-consuming, and burdened with complex criteria.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Under the leadership of <strong className="text-white">Manish Chawla (CEO)</strong> and <strong className="text-white">Reena Taank (Manager)</strong>, our advisory team evaluates your actual cash flows, turnover velocity, and collateral profile to structure your loan file precisely for the most advantageous institutions.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#121214] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  No Hidden Advance Fees
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  We maintain full transparency with complete clarity on process timelines and statutory bank charges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  Deep Credit Underwriting Insight
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  We prepare robust CMA reports, cash flow projections, and compliance documentation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  Government Scheme Mastery
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Specialized experience with CGTMSE collateral-free limits, Mudra loans, and MSME interest subsidies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  Rapid WhatsApp Integration
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Direct digital desk connectivity for instant updates, query resolution, and document coordination.
                </p>
              </div>
            </div>

            {/* Dark callout banner matching the reference image's dark pill banner */}
            <div className="p-4 bg-[#0d0d0d] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 shadow-lg">
              <div className="text-xs sm:text-sm text-zinc-300 text-left flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Join hundreds of Delhi NCR businesses achieving structured borrowing.</span>
              </div>
              <button
                onClick={onApplyClick}
                className="px-5 py-2.5 text-xs font-bold text-[#080808] bg-white hover:bg-zinc-200 rounded-full whitespace-nowrap cursor-pointer transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Apply Now &rarr;
              </button>
            </div>

          </div>

          {/* Right Column: Office Credentials & Leadership Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0d0d0d] text-white p-7 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-white/10">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Office & Key Information
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Capital Consultancy
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Registered Financial & Debt Advisory Entity
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-zinc-400 block font-medium">Office Address:</span>
                      <span className="text-zinc-100 font-medium">{BUSINESS_OFFICE}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-zinc-400 block font-medium">Direct Telephone:</span>
                      <a href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`} className="text-zinc-100 hover:text-emerald-400 font-semibold transition-colors">
                        {BUSINESS_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-zinc-400 block font-medium">Official Email:</span>
                      <a href={`mailto:${BUSINESS_EMAIL}`} className="text-zinc-100 hover:text-emerald-400 transition-colors">
                        {BUSINESS_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Key Personnel */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-3">
                    Key Advisory Leadership
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      <div className="text-sm font-bold text-white">Manish Chawla</div>
                      <div className="text-xs text-emerald-400 font-medium">Chief Executive Officer</div>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      <div className="text-sm font-bold text-white">Reena Taank</div>
                      <div className="text-xs text-emerald-400 font-medium">Operations Manager</div>
                    </div>
                  </div>
                </div>

                {/* Regional Reach */}
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400">
                  <p>
                    Serving business owners across <strong>Delhi, Noida, Gurugram, Faridabad, Ghaziabad, Panipat, Sonipat</strong> and nationwide corporate mandates.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
