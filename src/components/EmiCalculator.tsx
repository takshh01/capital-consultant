import React, { useState, useMemo } from 'react';
import { Calculator, MessageCircle, ArrowRight, IndianRupee, PieChart, Percent, Calendar } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER, formatEmiWhatsAppMessage, openWhatsAppChat } from '../utils/whatsapp';

export const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(2500000); // 25 Lakhs
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5%
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years
  const [customerName, setCustomerName] = useState<string>('');

  // Indian currency formatter
  const formatINR = (val: number) => {
    return val.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  };

  // Convert number to Lakhs / Crores string helper
  const getIndianLabel = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crore`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  // Mathematical EMI calculation
  const { monthlyEmi, totalInterest, totalPayable, interestPercent, principalPercent } = useMemo(() => {
    const P = loanAmount;
    const r = (interestRate / 12) / 100;
    const n = tenureYears * 12;

    if (P <= 0 || interestRate <= 0 || n <= 0) {
      return { monthlyEmi: 0, totalInterest: 0, totalPayable: 0, interestPercent: 0, principalPercent: 0 };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const roundedEmi = Math.round(emi);
    const payable = roundedEmi * n;
    const interest = payable - P;

    const pRatio = Math.round((P / payable) * 100);
    const iRatio = 100 - pRatio;

    return {
      monthlyEmi: roundedEmi,
      totalInterest: interest,
      totalPayable: payable,
      principalPercent: pRatio,
      interestPercent: iRatio
    };
  }, [loanAmount, interestRate, tenureYears]);

  const handleDiscussOnWhatsApp = () => {
    const message = formatEmiWhatsAppMessage({
      customerName,
      loanAmount,
      interestRate,
      tenureYears,
      monthlyEmi,
      totalInterest,
      totalPayable
    });
    openWhatsAppChat(message);
  };

  const amountPresets = [
    { label: '₹10 L', val: 1000000 },
    { label: '₹25 L', val: 2500000 },
    { label: '₹50 L', val: 5000000 },
    { label: '₹1 Cr', val: 10000000 },
    { label: '₹2.5 Cr', val: 25000000 },
    { label: '₹5 Cr', val: 50000000 }
  ];

  return (
    <section id="emi-calculator" className="py-20 bg-[#050607] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
            Interactive Financial Planning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loan EMI Calculator
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Simulate your monthly repayment installments, total interest cost, and tenure suitability before submitting an enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#121214] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
            
            {/* Loan Amount Control */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-1.5">
                  <IndianRupee className="w-4 h-4 text-emerald-400" />
                  Loan Amount
                </label>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-white tabular-nums">
                    ₹{formatINR(loanAmount)}
                  </span>
                  <span className="text-xs text-zinc-400 block">
                    ({getIndianLabel(loanAmount)})
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={100000}
                max={50000000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />

              {/* Presets */}
              <div className="flex flex-wrap gap-2 pt-1">
                {amountPresets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setLoanAmount(preset.val)}
                    className={`px-3 py-1 text-xs rounded-lg font-bold border transition-colors cursor-pointer ${
                      loanAmount === preset.val
                        ? 'bg-emerald-500 text-black border-emerald-500 shadow-xs'
                        : 'bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate Control */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-emerald-400" />
                  Annual Interest Rate
                </label>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-white tabular-nums">
                    {interestRate.toFixed(2)}%
                  </span>
                  <span className="text-xs text-zinc-400 block">p.a.</span>
                </div>
              </div>

              <input
                type="range"
                min={6.5}
                max={24.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>6.5% (Prime Home Loan)</span>
                <span>12.5% (MSME / Business)</span>
                <span>24.0% (Unsecured High-Risk)</span>
              </div>
            </div>

            {/* Tenure Control */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  Loan Tenure
                </label>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-white tabular-nums">
                    {tenureYears} Years
                  </span>
                  <span className="text-xs text-zinc-400 block">
                    ({tenureYears * 12} Months)
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>1 Year</span>
                <span>5 Years (Typical Term Loan)</span>
                <span>25 Years</span>
              </div>
            </div>

            {/* Optional Customer Name */}
            <div className="pt-2 border-t border-white/10">
              <label className="block text-xs font-bold text-white mb-1">
                Your Name (Optional, included in your WhatsApp query)
              </label>
              <input
                type="text"
                placeholder="e.g. Rajesh Sharma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-zinc-900 border border-white/10 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-white placeholder:text-zinc-500"
              />
            </div>

          </div>

          {/* Result Card Column in onyx dark with emerald accents */}
          <div className="lg:col-span-5 bg-[#0d0d0d] text-white rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between border border-white/10">
            
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Calculation Summary
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Estimated Repayment Breakdown
                </h3>
              </div>

              {/* Monthly EMI Big Display with vibrant emerald */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                <span className="text-xs text-zinc-400 block font-medium">
                  Monthly Installment (Estimated EMI)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 tabular-nums">
                  ₹{formatINR(monthlyEmi)}
                  <span className="text-xs text-zinc-400 font-normal"> / month</span>
                </div>
              </div>

              {/* Key numbers grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <span className="text-xs text-zinc-400 block">Total Interest</span>
                  <div className="text-lg font-bold text-white mt-1 tabular-nums">
                    ₹{formatINR(totalInterest)}
                  </div>
                </div>

                <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                  <span className="text-xs text-zinc-400 block">Total Payable</span>
                  <div className="text-lg font-bold text-white mt-1 tabular-nums">
                    ₹{formatINR(totalPayable)}
                  </div>
                </div>
              </div>

              {/* Principal vs Interest Visual Proportion */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-zinc-400">
                  <span>Principal: {principalPercent}%</span>
                  <span>Interest: {interestPercent}%</span>
                </div>
                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${principalPercent}%` }} 
                  />
                  <div 
                    className="bg-zinc-600 h-full transition-all duration-300"
                    style={{ width: `${interestPercent}%` }} 
                  />
                </div>
              </div>

            </div>

            {/* MANDATORY WHATSAPP CONVERSION CTA */}
            <div className="pt-8 mt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={handleDiscussOnWhatsApp}
                className="w-full py-4 px-4 bg-white hover:bg-zinc-200 active:bg-zinc-300 text-[#080808] font-extrabold text-sm rounded-full transition-all shadow-xl flex items-center justify-center gap-2.5 cursor-pointer transform hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Discuss This Loan on WhatsApp</span>
              </button>

              <p className="text-[11px] text-zinc-400 text-center leading-normal">
                Transfers calculation to +91 9625456835 with exact figures for bank rate comparison.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
