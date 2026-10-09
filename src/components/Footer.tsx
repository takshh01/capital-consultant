import React from 'react';
import { 
  BUSINESS_OFFICE, 
  BUSINESS_PHONE_DISPLAY, 
  BUSINESS_WHATSAPP_DISPLAY, 
  BUSINESS_EMAIL, 
  BUSINESS_WHATSAPP_NUMBER 
} from '../utils/whatsapp';
import { ShieldCheck, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { LoanType } from '../types/loan';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectLoan: (loanType: LoanType) => void;
  onOpenCallbackModal: () => void;
  onOpenAdminDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectLoan,
  onOpenCallbackModal,
  onOpenAdminDrawer
}) => {
  const currentYear = new Date().getFullYear();

  const loanLinks: LoanType[] = [
    'Business Loan',
    'MSME Loan',
    'CGTMSE Loan',
    'Mudra Loan',
    'Working Capital',
    'Machinery / Equipment Finance',
    'Loan Against Property',
    'Home Loan',
    'Project Finance',
    'Bill Discounting',
    'Private Funding'
  ];

  return (
    <footer className="bg-[#0a0a0a] text-zinc-400 pt-16 pb-12 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" subtitle="Pragati Tower, Rajender Place, Delhi" />
            
            <p className="text-xs text-zinc-400 leading-relaxed">
              Professional loan and debt financial consultancy headquartered at Pragati Tower, Rajender Place, Delhi. Specializing in MSME credit, CGTMSE collateral-free limits, working capital, machinery funding, and structured corporate finance.
            </p>

            <div className="pt-2 text-xs text-zinc-400 space-y-1">
              <div>Management: <strong className="text-white">Reena Taank</strong> (Manager)</div>
              <div>Office: Pragati Tower, Rajender Place, Delhi 110008</div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-zinc-900 border border-zinc-700/80 text-white hover:text-emerald-400 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 9625456835</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="px-3.5 py-2 bg-zinc-900 border border-zinc-700/80 text-zinc-300 hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Col 2: Loan Solutions (Grid of clean text links) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Financing Facilities
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {loanLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => onSelectLoan(link)}
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors py-0.5 truncate cursor-pointer"
                  title={`Apply for ${link}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Navigation & Quick Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Pragati Tower, Rajender Place, Delhi 110008</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">
                  {BUSINESS_WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCallbackModal}
                className="w-full py-2.5 px-3 text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 cursor-pointer text-center"
              >
                Request a Callback
              </button>
            </div>
          </div>

        </div>

        {/* MANDATORY REGULATORY COMPLIANCE DISCLAIMER */}
        <div className="py-8 border-b border-white/10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 sm:p-5 text-zinc-400 text-xs leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>STATUTORY COMPLIANCE & FINANCIAL REGULATORY DISCLAIMER</span>
            </div>
            <p>
              Capital Consultancy is a loan/financial consultancy and does not itself guarantee loan approval or sanction. Loan approval, interest rates, eligibility, documentation requirements and disbursement are subject to the respective lender&apos;s policies, assessment and applicable regulations.
            </p>
            <p className="text-[11px] text-zinc-500">
              Capital Consultancy acts strictly as a debt syndication and financial advisory intermediary. We do not engage in unauthorized deposit taking or charge advance registration/application fees. All lending decisions, interest rate determinations, and disbursements are executed directly between the borrower and the scheduled financial institution or registered NBFC.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {currentYear} Capital Consultancy. All Rights Reserved. Pragati Tower, Rajender Place, Delhi.
          </p>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <span aria-hidden="true">&middot;</span>
            <a href="#solutions" className="hover:text-emerald-400 transition-colors">Services</a>
            <span aria-hidden="true">&middot;</span>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQs</a>
            <span aria-hidden="true">&middot;</span>
            <button
              onClick={onOpenAdminDrawer}
              className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
              title="Internal Backup Leads (Advisors only)"
            >
              Lead Admin Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
