/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { LoanSolutions } from './components/LoanSolutions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { EmiCalculator } from './components/EmiCalculator';
import { EligibilityChecker } from './components/EligibilityChecker';
import { LoanEnquiryForm } from './components/LoanEnquiryForm';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CallbackModal } from './components/CallbackModal';
import { AdminLeadDrawer } from './components/AdminLeadDrawer';
import { LoanType } from './types/loan';

export default function App() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [adminDrawerOpen, setAdminDrawerOpen] = useState(false);
  const [selectedLoanForEnquiry, setSelectedLoanForEnquiry] = useState<LoanType>('Business Loan');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLoanForEnquiry = (loanType: LoanType) => {
    setSelectedLoanForEnquiry(loanType);
    scrollToSection('enquiry-form');
  };

  return (
    <div className="min-h-screen bg-[#050607] text-white flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenCallbackModal={() => setCallbackModalOpen(true)}
        onScrollToSection={scrollToSection}
        onOpenAdminDrawer={() => setAdminDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onApplyClick={() => scrollToSection('enquiry-form')}
          onEmiClick={() => scrollToSection('emi-calculator')}
          onOpenCallbackModal={() => setCallbackModalOpen(true)}
        />

        {/* 2. Trust / Credibility */}
        <TrustBar />

        {/* 3. About Capital Consultancy */}
        <AboutSection
          onApplyClick={() => scrollToSection('enquiry-form')}
        />

        {/* 4. Loan Solutions */}
        <LoanSolutions
          onSelectLoanForEnquiry={handleSelectLoanForEnquiry}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. How It Works */}
        <HowItWorks
          onApplyClick={() => scrollToSection('enquiry-form')}
        />

        {/* 7. EMI Calculator */}
        <EmiCalculator />

        {/* 8. Eligibility / Requirement Checker */}
        <EligibilityChecker />

        {/* 9. Centralized Loan Enquiry Form (WhatsApp Automation Engine) */}
        <LoanEnquiryForm
          initialLoanType={selectedLoanForEnquiry}
        />

        {/* 10. WhatsApp High-Conversion CTA */}
        <WhatsAppCTA />

        {/* 11. Leadership & Team (Reena Taank) */}
        <TeamSection />

        {/* 12. Testimonials / Genuine Client Outcomes */}
        <TestimonialsSection />

        {/* 13. FAQ */}
        <FaqSection />

        {/* 14. Office & Contact Details */}
        <ContactSection />
      </main>

      {/* 15. Footer (with mandatory compliance disclaimer) */}
      <Footer
        onSelectLoan={handleSelectLoanForEnquiry}
        onOpenCallbackModal={() => setCallbackModalOpen(true)}
        onOpenAdminDrawer={() => setAdminDrawerOpen(true)}
      />

      {/* Always-visible Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Request Callback Modal */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />

      {/* Internal Advisor CRM / Lead Drawer */}
      <AdminLeadDrawer
        isOpen={adminDrawerOpen}
        onClose={() => setAdminDrawerOpen(false)}
      />
    </div>
  );
}
