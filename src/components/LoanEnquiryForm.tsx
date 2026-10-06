import React, { useState, useEffect } from 'react';
import { CustomerType, LoanType, PreferredContactMethod, LoanEnquiryFormData, DynamicLoanFields } from '../types/loan';
import { formatLoanEnquiryWhatsAppMessage, openWhatsAppChat, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { saveLead } from '../services/leadStorage';
import { 
  Send, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle2, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  IndianRupee, 
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

interface LoanEnquiryFormProps {
  initialLoanType?: LoanType;
}

export const LoanEnquiryForm: React.FC<LoanEnquiryFormProps> = ({ initialLoanType = 'Business Loan' }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [customerType, setCustomerType] = useState<CustomerType>('Business Owner');
  const [loanType, setLoanType] = useState<LoanType>(initialLoanType);
  const [requiredLoanAmount, setRequiredLoanAmount] = useState('');
  const [monthlyIncomeOrTurnover, setMonthlyIncomeOrTurnover] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessVintage, setBusinessVintage] = useState('');
  const [purposeOfLoan, setPurposeOfLoan] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<PreferredContactMethod>('WhatsApp');
  const [additionalMessage, setAdditionalMessage] = useState('');

  // Dynamic loan-specific questions state
  const [dynamicFields, setDynamicFields] = useState<DynamicLoanFields>({
    businessType: 'Private Limited',
    monthlyTurnover: '',
    purposeOfFunding: '',
    propertyType: 'Residential',
    propertyValue: '',
    propertyLocation: '',
    employmentType: 'Salaried MNC',
    existingEmi: '',
    machineryType: '',
    machineryCost: '',
    projectEstimatedCost: '',
    existingBankingLimits: '',
    averageMonthlyBilling: ''
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Confirmation state
  const [isPrepared, setIsPrepared] = useState(false);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');

  // Update loan type if prop changes
  useEffect(() => {
    if (initialLoanType) {
      setLoanType(initialLoanType);
    }
  }, [initialLoanType]);

  const handleDynamicChange = (field: keyof DynamicLoanFields, val: string) => {
    setDynamicFields(prev => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.mobileNumber = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.mobileNumber = 'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!loanType) {
      errs.loanType = 'Please select a loan type.';
    }

    if (!requiredLoanAmount.trim()) {
      errs.requiredLoanAmount = 'Required loan amount is required.';
    }

    // Dynamic field specific validations
    if (isBusinessCategory(loanType)) {
      if (!businessName.trim()) {
        errs.businessName = 'Business name is required for Business & MSME financing.';
      }
    }

    if (loanType === 'Home Loan' || loanType === 'Loan Against Property') {
      if (!dynamicFields.propertyValue?.trim()) {
        errs.propertyValue = 'Approximate property value is required for mortgage assessment.';
      }
    }

    if (loanType === 'Machinery / Equipment Finance') {
      if (!dynamicFields.machineryType?.trim()) {
        errs.machineryType = 'Please specify the machinery type or name.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const isBusinessCategory = (type: LoanType) => {
    return [
      'Business Loan',
      'MSME Loan',
      'CGTMSE Loan',
      'Mudra Loan',
      'Working Capital',
      'Project Finance',
      'Bill Discounting',
      'Equity Funds',
      'Private Funding'
    ].includes(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const formData: LoanEnquiryFormData = {
      fullName: fullName.trim(),
      mobileNumber: mobileNumber.replace(/\D/g, ''),
      email: email.trim(),
      city: city.trim(),
      customerType,
      loanType,
      requiredLoanAmount: requiredLoanAmount.trim(),
      monthlyIncomeOrTurnover: monthlyIncomeOrTurnover.trim(),
      businessName: businessName.trim(),
      businessVintage: businessVintage.trim(),
      purposeOfLoan: purposeOfLoan.trim(),
      preferredContactMethod,
      additionalMessage: additionalMessage.trim(),
      dynamicFields
    };

    // 1. Secure backup lead storage
    saveLead(formData, 'Website Main Enquiry Form');

    // 2. Prepare structured WhatsApp message
    const formattedMsg = formatLoanEnquiryWhatsAppMessage(formData);
    const waUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMsg)}`;
    setPreparedWhatsAppUrl(waUrl);

    // 3. Show confirmation state per prompt requirement
    setIsPrepared(true);

    // 4. Trigger direct WhatsApp open
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry-form" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e5041a]/10 text-xs font-bold uppercase tracking-wider text-[#e5041a] border border-[#e5041a]/20">
            Automated WhatsApp Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight">
            Apply for a Loan & Connect on WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Submit your complete requirements below. Our automated system generates an official structured WhatsApp enquiry for our senior advisory team at <strong>+91 9625456835</strong>.
          </p>
        </div>

        {/* Confirmation Modal / Screen */}
        {isPrepared ? (
          <div className="bg-[#0d0d0d] text-white border-2 border-[#e5041a] rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl space-y-6">
            <div className="w-16 h-16 bg-[#e5041a] text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#e5041a]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Enquiry Prepared Successfully
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto">
                Your enquiry has been prepared successfully. Please send the WhatsApp message to connect with our team at Capital Consultancy.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300 space-y-1 text-left max-w-md mx-auto">
              <div className="font-bold text-white">Summary:</div>
              <div>Customer: <strong className="text-white">{fullName}</strong> ({mobileNumber})</div>
              <div>Facility: <strong className="text-[#ff4d5a]">{loanType}</strong> (₹{requiredLoanAmount})</div>
              <div>Destination Desk: <strong className="text-white">+91 9625456835</strong></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={preparedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-extrabold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#e5041a]/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Open WhatsApp Now</span>
              </a>

              <button
                type="button"
                onClick={() => setIsPrepared(false)}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 rounded-xl transition-all cursor-pointer"
              >
                Back to Website
              </button>
            </div>

            <p className="text-[11px] text-zinc-400">
              Note: Clicking &apos;Open WhatsApp Now&apos; opens the WhatsApp app or web window with all your parameters pre-filled.
            </p>
          </div>
        ) : (
          /* Main Comprehensive Enquiry Form */
          <form 
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#F4F9FA] border border-[#DCE8EA] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8"
          >
            {/* Step 1: Core Applicant Identification */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  01. Applicant Information
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {/* Full Name */}
                <div className="lg:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Chandra Verma"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
                      }}
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-rose-600 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                {/* Mobile Number */}
                <div className="lg:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Mobile Number (WhatsApp) <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="text-xs font-semibold text-slate-500 absolute left-3.5 top-3">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit mobile"
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value.replace(/\D/g, ''));
                        if (errors.mobileNumber) setErrors(prev => ({ ...prev, mobileNumber: '' }));
                      }}
                      className={`w-full pl-12 pr-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                        errors.mobileNumber ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && <p className="text-rose-600 text-[11px] mt-1">{errors.mobileNumber}</p>}
                </div>

                {/* Email Address */}
                <div className="lg:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="e.g. business@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                      }}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  {errors.email && <p className="text-rose-600 text-[11px] mt-1">{errors.email}</p>}
                </div>

                {/* City */}
                <div className="lg:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    City / Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Delhi, Gurugram, Noida"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Loan Category & Profile Classification */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  02. Loan Requirement & Customer Profile
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {/* Customer Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Customer Type <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={customerType}
                    onChange={(e) => setCustomerType(e.target.value as CustomerType)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Business Owner">Business Owner</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Professional">Professional (CA / Doctor / Consultant)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Loan Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Loan Type <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={loanType}
                    onChange={(e) => {
                      setLoanType(e.target.value as LoanType);
                      if (errors.loanType) setErrors(prev => ({ ...prev, loanType: '' }));
                    }}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg font-semibold text-blue-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Business Loan">Business Loan (Unsecured)</option>
                    <option value="MSME Loan">MSME Loan</option>
                    <option value="CGTMSE Loan">CGTMSE Loan (Collateral-Free up to ₹5Cr)</option>
                    <option value="Mudra Loan">Mudra Loan (PMMY)</option>
                    <option value="Working Capital">Working Capital (CC / OD)</option>
                    <option value="Machinery / Equipment Finance">Machinery / Equipment Finance</option>
                    <option value="Loan Against Property">Loan Against Property (LAP)</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Project Finance">Project Finance</option>
                    <option value="Bill Discounting">Bill Discounting / Factoring</option>
                    <option value="Equity Funds">Equity Funds</option>
                    <option value="Private Funding">Private Funding / Bridge Debt</option>
                    <option value="Other">Other Structured Loan</option>
                  </select>
                </div>

                {/* Required Loan Amount */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Required Loan Amount (₹) <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. 50 Lakhs / 2.5 Crore"
                      value={requiredLoanAmount}
                      onChange={(e) => {
                        setRequiredLoanAmount(e.target.value);
                        if (errors.requiredLoanAmount) setErrors(prev => ({ ...prev, requiredLoanAmount: '' }));
                      }}
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                        errors.requiredLoanAmount ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.requiredLoanAmount && <p className="text-rose-600 text-[11px] mt-1">{errors.requiredLoanAmount}</p>}
                </div>

                {/* Monthly Income / Business Turnover */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Monthly Income / Annual Turnover
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹2 Cr Annual or ₹1.5L Monthly"
                    value={monthlyIncomeOrTurnover}
                    onChange={(e) => setMonthlyIncomeOrTurnover(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Business / Employer Name {isBusinessCategory(loanType) && <span className="text-rose-600">*</span>}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Engineering Pvt Ltd"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      if (errors.businessName) setErrors(prev => ({ ...prev, businessName: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                      errors.businessName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.businessName && <p className="text-rose-600 text-[11px] mt-1">{errors.businessName}</p>}
                </div>

                {/* Business Vintage / Experience */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Years in Business / Work Experience
                  </label>
                  <select
                    value={businessVintage}
                    onChange={(e) => setBusinessVintage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select Vintage</option>
                    <option value="Less than 1 Year">Less than 1 Year</option>
                    <option value="1 to 3 Years">1 to 3 Years</option>
                    <option value="3 to 5 Years">3 to 5 Years</option>
                    <option value="5 to 10 Years">5 to 10 Years</option>
                    <option value="Over 10 Years">Over 10 Years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: DYNAMIC LOAN-SPECIFIC QUESTIONS */}
            <div className="space-y-4 bg-red-50/50 p-5 rounded-2xl border border-red-100">
              <div className="flex items-center justify-between border-b border-red-100 pb-2">
                <span className="text-xs font-bold text-[#0d0d0d] uppercase tracking-wider flex items-center gap-1.5">
                  <span>03. Dynamic Questions for:</span>
                  <span className="text-white bg-[#e5041a] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {loanType}
                  </span>
                </span>
                <span className="text-[11px] text-zinc-500 font-medium">
                  Tailored parameters
                </span>
              </div>

              {/* DYNAMIC CASE: BUSINESS / MSME / CGTMSE */}
              {(loanType === 'Business Loan' || loanType === 'MSME Loan' || loanType === 'CGTMSE Loan' || loanType === 'Mudra Loan') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Business Constitution
                    </label>
                    <select
                      value={dynamicFields.businessType}
                      onChange={(e) => handleDynamicChange('businessType', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    >
                      <option value="Proprietorship">Proprietorship</option>
                      <option value="Partnership Firm">Partnership Firm</option>
                      <option value="Private Limited">Private Limited</option>
                      <option value="LLP">LLP</option>
                      <option value="Public Limited">Public Limited</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Average Monthly Turnover
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹25 Lakhs / month"
                      value={dynamicFields.monthlyTurnover}
                      onChange={(e) => handleDynamicChange('monthlyTurnover', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Primary Purpose of Funding
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Raw material purchase / New outlet"
                      value={dynamicFields.purposeOfFunding}
                      onChange={(e) => handleDynamicChange('purposeOfFunding', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* DYNAMIC CASE: HOME LOAN */}
              {loanType === 'Home Loan' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Property Type
                    </label>
                    <select
                      value={dynamicFields.propertyType}
                      onChange={(e) => handleDynamicChange('propertyType', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    >
                      <option value="Ready to Move Flat">Ready to Move Flat</option>
                      <option value="Under Construction Builder Floor">Under Construction Builder Floor</option>
                      <option value="Plot + Construction">Plot + Construction</option>
                      <option value="Resale Apartment">Resale Apartment</option>
                      <option value="Home Extension / Renovation">Home Extension / Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Estimated Property Value (₹) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1.2 Crore"
                      value={dynamicFields.propertyValue}
                      onChange={(e) => handleDynamicChange('propertyValue', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                    {errors.propertyValue && <p className="text-rose-600 text-[11px] mt-1">{errors.propertyValue}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Property Location (City / Area)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dwarka Expressway / Sector 62 Noida"
                      value={dynamicFields.propertyLocation}
                      onChange={(e) => handleDynamicChange('propertyLocation', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* DYNAMIC CASE: LOAN AGAINST PROPERTY */}
              {loanType === 'Loan Against Property' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Collateral Property Type
                    </label>
                    <select
                      value={dynamicFields.propertyType}
                      onChange={(e) => handleDynamicChange('propertyType', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    >
                      <option value="Self-Occupied Residential House">Self-Occupied Residential House</option>
                      <option value="Commercial Shop / Office">Commercial Shop / Office</option>
                      <option value="Industrial Shed / Factory Plot">Industrial Shed / Factory Plot</option>
                      <option value="Rented Property">Rented Property</option>
                      <option value="Freehold Approved Land">Freehold Approved Land</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Approximate Property Value (₹) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3.5 Crore"
                      value={dynamicFields.propertyValue}
                      onChange={(e) => handleDynamicChange('propertyValue', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                    {errors.propertyValue && <p className="text-rose-600 text-[11px] mt-1">{errors.propertyValue}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Location & Title Status
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. West Delhi, Clear Chain Deeds"
                      value={dynamicFields.propertyLocation}
                      onChange={(e) => handleDynamicChange('propertyLocation', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* DYNAMIC CASE: PERSONAL LOAN */}
              {loanType === 'Personal Loan' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Employment Details
                    </label>
                    <select
                      value={dynamicFields.employmentType}
                      onChange={(e) => handleDynamicChange('employmentType', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    >
                      <option value="Salaried Corporate / MNC">Salaried Corporate / MNC</option>
                      <option value="Central / State Govt Employee">Central / State Govt Employee</option>
                      <option value="Doctor / CA / Practicing Professional">Doctor / CA / Practicing Professional</option>
                      <option value="Self Employed Freelancer">Self Employed Freelancer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Existing Monthly EMIs (₹)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹22,000 / month (or 0)"
                      value={dynamicFields.existingEmi}
                      onChange={(e) => handleDynamicChange('existingEmi', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* DYNAMIC CASE: MACHINERY / EQUIPMENT FINANCE */}
              {loanType === 'Machinery / Equipment Finance' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Machinery Type / Brand <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CNC 5-Axis Milling, Heidelberg Offset Press"
                      value={dynamicFields.machineryType}
                      onChange={(e) => handleDynamicChange('machineryType', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                    {errors.machineryType && <p className="text-rose-600 text-[11px] mt-1">{errors.machineryType}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Quoted Machinery Cost (₹)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹85 Lakhs (as per Proforma)"
                      value={dynamicFields.machineryCost}
                      onChange={(e) => handleDynamicChange('machineryCost', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* DYNAMIC CASE: WORKING CAPITAL / BILL DISCOUNTING / PROJECT FINANCE */}
              {(loanType === 'Working Capital' || loanType === 'Bill Discounting' || loanType === 'Project Finance' || loanType === 'Equity Funds' || loanType === 'Private Funding' || loanType === 'Other') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Existing Banking Limits / Facility
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Current OD limit ₹50L with Bank of Baroda"
                      value={dynamicFields.existingBankingLimits}
                      onChange={(e) => handleDynamicChange('existingBankingLimits', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Average Monthly Billing / Invoicing
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹40-60 Lakhs monthly GST billing"
                      value={dynamicFields.averageMonthlyBilling}
                      onChange={(e) => handleDynamicChange('averageMonthlyBilling', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Purpose, Contact Method & Additional Message */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  04. Contact Preference & Details
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {/* Purpose of Loan */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Purpose of Loan
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Working capital expansion, factory upgrade"
                    value={purposeOfLoan}
                    onChange={(e) => setPurposeOfLoan(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex items-center gap-4 pt-2">
                    <label className="flex items-center gap-2 text-xs font-medium text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="WhatsApp"
                        checked={preferredContactMethod === 'WhatsApp'}
                        onChange={() => setPreferredContactMethod('WhatsApp')}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>WhatsApp (Fastest)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="Phone Call"
                        checked={preferredContactMethod === 'Phone Call'}
                        onChange={() => setPreferredContactMethod('Phone Call')}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>Phone Call</span>
                    </label>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Additional Message / Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Please include any additional details regarding your loan history, required timelines, or preferred banks..."
                    value={additionalMessage}
                    onChange={(e) => setAdditionalMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left text-xs text-zinc-500">
                <span className="block font-bold text-[#0d0d0d]">Official WhatsApp Desk:</span>
                <span>+91 9625456835 · Capital Consultancy</span>
              </div>

              {/* Exact CTA in signature crimson red */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-white bg-[#e5041a] hover:bg-[#cc0316] active:bg-[#b50212] rounded-xl shadow-lg shadow-[#e5041a]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>SUBMIT & CONTINUE ON WHATSAPP</span>
              </button>
            </div>

            {/* Compliance footnote */}
            <p className="text-[11px] text-zinc-500 text-center leading-normal">
              By submitting this form, your enquiry data is securely compiled and opened in WhatsApp for direct review by Capital Consultancy senior advisory desk. No advance charges required.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
