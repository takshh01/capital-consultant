import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface NavbarProps {
  onOpenCallbackModal: () => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenAdminDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCallbackModal,
  onScrollToSection,
  onOpenAdminDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10 shadow-sm text-white">
      {/* Utility Top Ribbon with Direct Contact */}
      <div className="bg-[#050505] text-zinc-300 text-xs py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#e5041a] animate-pulse" />
              Delhi NCR Advisory Desk Open
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-400">
              Pragati Tower, Rajender Place, Delhi
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e5041a]" />
              <span>{BUSINESS_PHONE_DISPLAY}</span>
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-300 hover:text-[#e5041a] transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp:</span> +91 9625456835
            </a>
            <button
              onClick={onOpenAdminDrawer}
              className="text-zinc-500 hover:text-zinc-300 transition-colors text-[11px] underline ml-2 cursor-pointer"
              title="Open internal backup lead manager"
            >
              Leads
            </button>
          </div>
        </div>
      </div>

      {/* Main Strict 3-Zone Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-lg bg-[#e5041a] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-[#e5041a]/30 group-hover:bg-[#cc0316] transition-colors">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">
              Capital Consultancy
            </span>
            <span className="text-[11px] font-semibold text-[#e5041a] tracking-wider uppercase mt-0.5">
              Loan & Financial Advisory
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-zinc-300">
          <button 
            onClick={() => handleNavClick('solutions')}
            className="hover:text-[#e5041a] transition-colors cursor-pointer py-1"
          >
            Loan Solutions
          </button>
          <button 
            onClick={() => handleNavClick('how-it-works')}
            className="hover:text-[#e5041a] transition-colors cursor-pointer py-1"
          >
            How It Works
          </button>
          <button 
            onClick={() => handleNavClick('emi-calculator')}
            className="hover:text-[#e5041a] transition-colors cursor-pointer py-1"
          >
            EMI Calculator
          </button>
          <button 
            onClick={() => handleNavClick('eligibility-checker')}
            className="hover:text-[#e5041a] transition-colors cursor-pointer py-1"
          >
            Eligibility Check
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className="hover:text-[#e5041a] transition-colors cursor-pointer py-1"
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="hover:text-[#e5041a] transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary action buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCallbackModal}
            className="px-4 py-2.5 text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Get a Callback
          </button>
          <button
            onClick={() => handleNavClick('enquiry-form')}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] active:bg-[#b50212] rounded-lg shadow-md shadow-[#e5041a]/25 hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
          >
            Apply for a Loan
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleNavClick('enquiry-form')}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#e5041a] rounded-lg sm:hidden"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-white/10 px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-zinc-200">
            <button 
              onClick={() => handleNavClick('solutions')}
              className="text-left py-2 border-b border-white/10"
            >
              Loan Solutions (13+ Categories)
            </button>
            <button 
              onClick={() => handleNavClick('how-it-works')}
              className="text-left py-2 border-b border-white/10"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavClick('emi-calculator')}
              className="text-left py-2 border-b border-white/10"
            >
              EMI Calculator
            </button>
            <button 
              onClick={() => handleNavClick('eligibility-checker')}
              className="text-left py-2 border-b border-white/10"
            >
              Eligibility Checker
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-white/10"
            >
              About Capital Consultancy
            </button>
            <button 
              onClick={() => handleNavClick('team')}
              className="text-left py-2 border-b border-white/10"
            >
              Leadership (Manish Chawla & Reena Taank)
            </button>
            <button 
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 border-b border-white/10"
            >
              FAQs
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-white/10"
            >
              Office & Contact Details
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallbackModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-center"
            >
              Request a Callback
            </button>
            <button
              onClick={() => handleNavClick('enquiry-form')}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-lg text-center"
            >
              Submit Loan Enquiry (WhatsApp)
            </button>
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-lg text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Chat Directly on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
