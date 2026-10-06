import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, AlertCircle, Sparkles, User, Phone, Briefcase, IndianRupee } from 'lucide-react';
import { CustomerType, LoanType } from '../types/loan';
import { formatEligibilityWhatsAppMessage, openWhatsAppChat, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

export const EligibilityChecker: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [customerType, setCustomerType] = useState<CustomerType>('Business Owner');
  const [loanType, setLoanType] = useState<LoanType>('Business Loan');
  const [incomeOrTurnover, setIncomeOrTurnover] = useState('');
  const [requiredAmount, setRequiredAmount] = useState('');
  const [age, setAge] = useState('31 - 45 Years');
  const [vintage, setVintage] = useState('3 - 5 Years');
  const [creditScore, setCreditScore] = useState('750+ (Excellent)');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const customerTypes: CustomerType[] = [
    'Business Owner',
    'Salaried',
    'Self Employed',
    'Professional',
    'Other'
  ];

  const loanOptions: LoanType[] = [
    'Business Loan',
    'MSME Loan',
    'CGTMSE Loan',
    'Working Capital',
    'Machinery / Equipment Finance',
    'Loan Against Property',
    'Personal Loan',
    'Home Loan',
    'Project Finance'
  ];

  const handleAssess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!mobile.trim() || !/^[6-9]\d{9}$/.test(mobile.trim())) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return;
    }
    if (!requiredAmount.trim()) {
      setError('Please specify required loan amount');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const estimatedFeasibility = creditScore.startsWith('750') 
      ? 'Favorable eligibility across leading PSU & Private Lenders'
      : 'Viable subject to banking cash-flows & secondary parameters';

    const msg = formatEligibilityWhatsAppMessage({
      name,
      mobile,
      loanType,
      customerType,
      incomeOrTurnover: incomeOrTurnover || 'Not Disclosed',
      requiredAmount,
      creditScore,
      businessVintage: `${vintage} | Age: ${age}`,
      estimatedEligibility: estimatedFeasibility
    });

    openWhatsAppChat(msg);
  };

  return (
    <section id="eligibility-checker" className="py-20 bg-white border-b border-[#DCE8EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e5041a]/10 text-xs font-bold uppercase tracking-wider text-[#e5041a] border border-[#e5041a]/20">
            Pre-Screening Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            Eligibility & Requirement Checker
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Check preliminary borrowing feasibility according to your cash flow, CIBIL range, and business vintage before formal bank file submission.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-50 rounded-2xl border border-zinc-200/90 p-6 sm:p-10 shadow-xs">
          
          <form onSubmit={handleAssess} className="space-y-6">
            
            {error && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(''); }}
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Mobile Number (WhatsApp Enabled) *
                </label>
                <div className="relative">
                  <span className="text-xs font-semibold text-zinc-500 absolute left-3.5 top-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit number"
                    value={mobile}
                    onChange={(e) => { setMobile(e.target.value.replace(/\D/g, '')); setError(''); }}
                    className="w-full pl-12 pr-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                  />
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Customer Type *
                </label>
                <select
                  value={customerType}
                  onChange={(e) => setCustomerType(e.target.value as CustomerType)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                >
                  {customerTypes.map(ct => (
                    <option key={ct} value={ct}>{ct}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Desired Loan Product *
                </label>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value as LoanType)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                >
                  {loanOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Required Loan Quantum (₹) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 50,00,000 (50 Lakhs)"
                  value={requiredAmount}
                  onChange={(e) => setRequiredAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Monthly Income / Annual Turnover
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹1.5 Cr Turnover or ₹1.2L Salary"
                  value={incomeOrTurnover}
                  onChange={(e) => setIncomeOrTurnover(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  CIBIL / Credit Score
                </label>
                <select
                  value={creditScore}
                  onChange={(e) => setCreditScore(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                >
                  <option value="750+ (Excellent)">750+ (Excellent)</option>
                  <option value="700 - 749 (Good)">700 - 749 (Good)</option>
                  <option value="650 - 699 (Average)">650 - 699 (Average)</option>
                  <option value="Below 650 / Low">Below 650 (Special Handling)</option>
                  <option value="New to Credit / No Score">No Credit History / New</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Business / Job Vintage
                </label>
                <select
                  value={vintage}
                  onChange={(e) => setVintage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                >
                  <option value="Less than 1 Year">Less than 1 Year</option>
                  <option value="1 - 3 Years">1 - 3 Years</option>
                  <option value="3 - 5 Years">3 - 5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Applicant Age Bracket
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                >
                  <option value="21 - 30 Years">21 - 30 Years</option>
                  <option value="31 - 45 Years">31 - 45 Years</option>
                  <option value="46 - 60 Years">46 - 60 Years</option>
                  <option value="Above 60 Years">Above 60 Years</option>
                </select>
              </div>

            </div>

            {!submitted ? (
              <div className="pt-2 text-left">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-xl transition-all cursor-pointer shadow-md shadow-[#e5041a]/25"
                >
                  Evaluate Requirement Feasibility
                </button>
              </div>
            ) : (
              <div className="mt-6 p-6 rounded-2xl bg-[#0d0d0d] text-white text-left space-y-4 border border-white/10 shadow-2xl">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#ff4d5a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Preliminary Assessment Generated for {name}
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                      Your profile indicating <strong>{customerType}</strong> with <strong>{creditScore}</strong> credit score fits criteria for <strong>{loanType}</strong> across multiple scheduled banks and MSME schemes.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="px-6 py-3.5 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#e5041a]/25 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Discuss My Requirement on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 rounded-xl transition-colors cursor-pointer"
                  >
                    Recalculate / Modify
                  </button>
                </div>
              </div>
            )}

            {/* MANDATORY STATUTORY DISCLAIMER */}
            <div className="mt-6 pt-4 border-t border-zinc-200 text-left">
              <p className="text-[11px] text-zinc-500 leading-normal">
                <strong>Important Notice:</strong> This is only an initial enquiry and does not represent guaranteed loan eligibility or approval. Loan approval, interest rates, eligibility, documentation requirements and disbursement are subject to the respective lender&apos;s policies, assessment and applicable regulations.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
