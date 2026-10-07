import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can MSMEs really get a bank loan up to ₹5 Crore without third-party collateral under CGTMSE?',
      a: 'Yes. Under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme set up by the Ministry of MSME and SIDBI, eligible manufacturing and service enterprises can obtain credit facilities up to ₹5 Crore without having to mortgage immovable property or provide third-party personal guarantees. Capital Consultancy prepares the required CMA data, project viability reports, and coordinates with CGTMSE-registered member lending banks.'
    },
    {
      q: 'Does Capital Consultancy charge any upfront or advance consultation fee?',
      a: 'No. Capital Consultancy strictly maintains a zero advance registration or consultation fee policy. We believe in complete transparency. Any statutory charges such as bank administrative processing fees, government stamp duties, or valuation charges are payable directly to the respective lending bank against formal receipts.'
    },
    {
      q: 'What is the typical timeline from document submission to loan disbursement?',
      a: 'Timelines vary by product: Unsecured Business Loans and Personal Loans are processed in 24 to 72 hours. MSME and Working Capital limits (CC/OD) typically take 10 to 18 business days. Secured Loan Against Property (LAP) and Project Finance take 14 to 25 days due to mandatory legal title vetting and technical property valuation.'
    },
    {
      q: 'Can I secure funding if my CIBIL score has minor past delays or is between 650 and 700?',
      a: 'Yes. While top tier PSU banks prefer scores of 750+, several specialized financial institutions and Tier-1 NBFCs evaluate the underlying health of your current business turnover, monthly banking balance, and GST trends. We analyze your credit history upfront to place your file with lenders having flexible underwriting models.'
    },
    {
      q: 'What primary documents do I need to keep ready for initial assessment?',
      a: 'For business entities: Last 2–3 years Income Tax Returns with audited balance sheets, 12 months updated bank statements for all operational accounts, latest 12 months GST returns (GSTR-3B), Udyam registration certificate, and KYC documents of all partners or directors. For salaried applicants: 3 months salary slips, 6 months bank statement, Form 16, and KYC.'
    },
    {
      q: 'How does the WhatsApp Lead Automation on your website work?',
      a: 'When you complete our online enquiry form, our system converts your specific requirements, turnover figures, and loan type into a structured, professional WhatsApp message. Clicking "Submit & Continue on WhatsApp" launches WhatsApp with all details pre-filled directly to our senior advisory desk (+91 9625456835). This eliminates tedious back-and-forth and speeds up your evaluation.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-600 border border-emerald-500/20">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Clear, transparent answers regarding loan eligibility, documentation, CGTMSE coverage, and processing turnaround.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-zinc-200/90 rounded-2xl overflow-hidden transition-colors bg-zinc-50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0d0d0d] hover:text-emerald-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-left">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 bg-white text-left">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for unlisted queries */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0d0d0d] text-white border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left text-xs sm:text-sm text-zinc-300">
            <span className="font-bold text-white block">Have a specialized credit or debt scenario?</span>
            <span>Ask our senior consultants directly via WhatsApp.</span>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Capital Consultancy, I have a specific loan question regarding my business proposal.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-extrabold text-[#080808] bg-white hover:bg-zinc-200 rounded-full inline-flex items-center gap-1.5 whitespace-nowrap shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
