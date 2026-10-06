import React from 'react';
import { UserCheck, Shield, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_WHATSAPP_NUMBER, BUSINESS_EMAIL, BUSINESS_OFFICE } from '../utils/whatsapp';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e5041a]/10 text-xs font-bold uppercase tracking-wider text-[#e5041a] border border-[#e5041a]/20">
            Advisory Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            Meet the Senior Consulting Team
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Your financing proposals are evaluated and steered personally by seasoned industry professionals with decades of corporate banking insight.
          </p>
        </div>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Manish Chawla - CEO */}
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between text-left hover:border-[#e5041a]/40 hover:shadow-lg transition-all">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0d0d0d]">Manish Chawla</h3>
                  <p className="text-xs font-bold text-[#e5041a] tracking-wide uppercase mt-0.5">
                    Chief Executive Officer (CEO)
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#0d0d0d] text-white font-black text-xl flex items-center justify-center shadow-md">
                  MC
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 mt-4 leading-relaxed">
                Manish heads debt structuring, banking consortium relations, and large-ticket corporate mandates at Capital Consultancy. He brings extensive expertise in MSME credit, CGTMSE credit guarantee parameters, and project finance syndication across North India.
              </p>

              <div className="mt-4 pt-4 border-t border-zinc-200 space-y-2 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#e5041a]" />
                  <span>Specialization: Corporate Debt, CGTMSE & Working Capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#e5041a]" />
                  <span>Base: Pragati Tower, Rajender Place, Delhi</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-2">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Manish Chawla ji, I would like to consult on my financing requirement.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-[#e5041a]/20"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                <span>Message Manish Chawla</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="p-2.5 text-zinc-700 hover:bg-zinc-200 bg-white border border-zinc-200 rounded-xl transition-colors"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Reena Taank - Operations Manager */}
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between text-left hover:border-[#e5041a]/40 hover:shadow-lg transition-all">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0d0d0d]">Reena Taank</h3>
                  <p className="text-xs font-bold text-[#e5041a] tracking-wide uppercase mt-0.5">
                    Operations & Processing Manager
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#0d0d0d] text-white font-black text-xl flex items-center justify-center shadow-md">
                  RT
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 mt-4 leading-relaxed">
                Reena oversees loan underwriting documentation, client file verification, banker liaison, and compliance tracking. She ensures files are processed smoothly without documentation hurdles, expediting formal sanction and disbursement.
              </p>

              <div className="mt-4 pt-4 border-t border-zinc-200 space-y-2 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#e5041a]" />
                  <span>Specialization: Document Compliance & Underwriting Liaison</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#e5041a]" />
                  <span>Email: {BUSINESS_EMAIL}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-2">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Reena Taank ji, I would like to check documentation and status for my loan requirement.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#0d0d0d] hover:bg-zinc-800 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Contact Operations Desk</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="p-2.5 text-zinc-700 hover:bg-zinc-200 bg-white border border-zinc-200 rounded-xl transition-colors"
                title="Call Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
