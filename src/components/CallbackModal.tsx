import React, { useState } from 'react';
import { X, Phone, MessageCircle, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { LoanType, CallbackFormData } from '../types/loan';
import { formatCallbackWhatsAppMessage, openWhatsAppChat, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [loanType, setLoanType] = useState<LoanType>('Business Loan');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const cleanPhone = mobile.replace(/\D/g, '');
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please provide a valid 10-digit Indian mobile number.');
      return;
    }

    const data: CallbackFormData = {
      name: name.trim(),
      mobile: cleanPhone,
      loanType,
      preferredTime,
      message: message.trim()
    };

    const waMsg = formatCallbackWhatsAppMessage(data);
    openWhatsAppChat(waMsg);

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setMobile('');
    setMessage('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="bg-[#0d0d0d] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#e5041a] text-white flex items-center justify-center font-bold shadow-sm shadow-[#e5041a]/30">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">Request a Callback</h3>
              <p className="text-xs text-zinc-400">Capital Consultancy Senior Advisory Team</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-zinc-400 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-red-50 text-[#e5041a] rounded-full flex items-center justify-center mx-auto border border-red-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#0d0d0d]">
                Callback Request Prepared!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto">
                WhatsApp has been launched with your preferred callback details. Please send the message to initiate scheduling with +91 9625456835.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#e5041a] hover:bg-[#cc0316] rounded-xl transition-colors cursor-pointer shadow-md shadow-[#e5041a]/20"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#0d0d0d] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Manish Chawla"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(''); }}
                  className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-xs font-bold text-[#0d0d0d] mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <span className="text-xs font-semibold text-zinc-500 absolute left-3.5 top-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile"
                    value={mobile}
                    onChange={(e) => { setMobile(e.target.value.replace(/\D/g, '')); setError(''); }}
                    className="w-full pl-12 pr-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Loan Type */}
              <div>
                <label className="block text-xs font-bold text-[#0d0d0d] mb-1">
                  Loan Requirement
                </label>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value as LoanType)}
                  className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                >
                  <option value="Business Loan">Business Loan</option>
                  <option value="MSME Loan">MSME Loan</option>
                  <option value="CGTMSE Loan">CGTMSE Loan (Collateral Free)</option>
                  <option value="Mudra Loan">Mudra Loan</option>
                  <option value="Working Capital">Working Capital (CC / OD)</option>
                  <option value="Machinery / Equipment Finance">Machinery Finance</option>
                  <option value="Loan Against Property">Loan Against Property</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Project Finance">Project Finance</option>
                  <option value="Bill Discounting">Bill Discounting</option>
                  <option value="Private Funding">Private Funding</option>
                </select>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-bold text-[#0d0d0d] mb-1">
                  Preferred Callback Time
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  <option value="Urgent / Anytime Today">Urgent / Anytime Today</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#0d0d0d] mb-1">
                  Brief Requirement / Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need discussion on CGTMSE eligibility for Delhi manufacturing plant..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#e5041a] focus:outline-hidden"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#e5041a] hover:bg-[#cc0316] text-white font-extrabold text-xs rounded-xl shadow-md shadow-[#e5041a]/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Request Callback on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 text-center">
                Dispatches directly to business phone: +91 9625456835
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
