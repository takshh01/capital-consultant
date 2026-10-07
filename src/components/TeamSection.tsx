import React from 'react';
import { UserCheck, Shield, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_WHATSAPP_NUMBER, BUSINESS_EMAIL, BUSINESS_OFFICE } from '../utils/whatsapp';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
            Advisory Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet the Senior Consulting Team
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Your financing proposals are evaluated and steered personally by seasoned industry professionals with decades of corporate banking insight.
          </p>
        </div>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Manish Chawla - CEO */}
          <div className="bg-[#121214] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xs flex flex-col justify-between text-left hover:border-emerald-500/40 hover:shadow-lg transition-all">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Manish Chawla</h3>
                  <p className="text-xs font-bold text-emerald-400 tracking-wide uppercase mt-0.5">
                    Chief Executive Officer (CEO)
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 text-white font-black text-xl flex items-center justify-center shadow-md">
                  MC
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">
                Manish heads debt structuring, banking consortium relations, and large-ticket corporate mandates at Capital Consultancy. He brings extensive expertise in MSME credit, CGTMSE credit guarantee parameters, and project finance syndication across North India.
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Specialization: Corporate Debt, CGTMSE & Working Capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Base: Pragati Tower, Rajender Place, Delhi</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Manish Chawla ji, I would like to consult on my financing requirement.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 text-xs font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-black" />
                <span>Message Manish Chawla</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="p-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 bg-zinc-900 border border-white/10 rounded-xl transition-colors"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Reena Taank - Operations Manager */}
          <div className="bg-[#121214] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xs flex flex-col justify-between text-left hover:border-emerald-500/40 hover:shadow-lg transition-all">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Reena Taank</h3>
                  <p className="text-xs font-bold text-emerald-400 tracking-wide uppercase mt-0.5">
                    Operations & Processing Manager
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 text-white font-black text-xl flex items-center justify-center shadow-md">
                  RT
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">
                Reena oversees loan underwriting documentation, client file verification, banker liaison, and compliance tracking. She ensures files are processed smoothly without documentation hurdles, expediting formal sanction and disbursement.
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Specialization: Document Compliance & Underwriting Liaison</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Email: {BUSINESS_EMAIL}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Reena Taank ji, I would like to check documentation and status for my loan requirement.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 text-xs font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-black" />
                <span>Contact Operations Desk</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="p-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 bg-zinc-900 border border-white/10 rounded-xl transition-colors"
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
