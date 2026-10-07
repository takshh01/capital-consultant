import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Search, 
  Phone, 
  MessageCircle, 
  Filter, 
  CheckCircle, 
  Clock, 
  Building2, 
  User, 
  ShieldCheck, 
  Trash2,
  Lock
} from 'lucide-react';
import { LeadRecord, LeadStatus } from '../types/loan';
import { getStoredLeads, updateLeadStatus, exportLeadsToCsv, saveLead } from '../services/leadStorage';
import { openWhatsAppChat } from '../utils/whatsapp';

interface AdminLeadDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadDrawer: React.FC<AdminLeadDrawerProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    let stored = getStoredLeads();
    // Seed with initial realistic records if empty so team can see the UI layout immediately
    if (stored.length === 0) {
      const demo1: any = {
        fullName: 'Vikram Singhal',
        mobileNumber: '9811234567',
        email: 'vikram@singhalenterprises.in',
        city: 'Mayapuri, Delhi',
        customerType: 'Business Owner',
        loanType: 'CGTMSE Loan',
        requiredLoanAmount: '2,50,00,000 (2.5 Cr)',
        monthlyIncomeOrTurnover: '₹40 Lakhs/mo',
        businessName: 'Singhal Precision Tools',
        businessVintage: '4 Years',
        purposeOfLoan: 'CNC machine addition & working capital expansion',
        preferredContactMethod: 'WhatsApp',
        additionalMessage: 'Please verify if our 3 years ITR qualify for complete collateral-free under CGTMSE.',
        dynamicFields: {
          businessType: 'Private Limited',
          monthlyTurnover: '₹40 Lakhs'
        }
      };
      saveLead(demo1, 'Sample Demo Record');
      stored = getStoredLeads();
    }
    setLeads(stored);
  };

  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    updateLeadStatus(id, newStatus);
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all stored backup leads?')) {
      localStorage.removeItem('capital_consultancy_leads_v1');
      setLeads([]);
      setSelectedLead(null);
    }
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch = 
      l.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.phone.includes(searchTerm) ||
      l.loanType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (l.businessName && l.businessName.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-4xl h-full shadow-2xl flex flex-col justify-between text-left relative animate-in slide-in-from-right duration-200">
        
        {/* Top Header */}
        <div className="bg-[#0d0d0d] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-base font-bold text-white leading-tight">
                Capital Consultancy · Lead Management
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Secure internal records desk for Manish Chawla & Reena Taank
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportLeadsToCsv}
              className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-emerald-500/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1.5 rounded-lg"
              aria-label="Close lead manager"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <div className="relative w-full">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by name, phone, business or loan type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 font-medium"
            >
              <option value="ALL">All Statuses ({leads.length})</option>
              <option value="NEW">NEW</option>
              <option value="CONTACTED">CONTACTED</option>
              <option value="FOLLOW-UP">FOLLOW-UP</option>
              <option value="DOCUMENTS REQUIRED">DOCUMENTS REQUIRED</option>
              <option value="IN PROCESS">IN PROCESS</option>
              <option value="APPROVED">APPROVED</option>
              <option value="CLOSED">CLOSED</option>
            </select>

            <button
              onClick={handleClearAll}
              className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
              title="Clear all leads"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Leads Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-2">
              <p className="text-sm font-semibold">No enquiries found matching criteria.</p>
              <p className="text-xs text-slate-400">
                Any loan enquiry submitted on the website is automatically mirrored here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs hover:border-blue-400 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{lead.fullName}</span>
                        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {lead.id}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-2">
                        <span>{lead.phone}</span>
                        <span>&middot;</span>
                        <span>{lead.city || 'Delhi NCR'}</span>
                        <span>&middot;</span>
                        <span>{new Date(lead.createdAt).toLocaleDateString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>

                    {/* Status Pill & Selector */}
                    <div className="flex items-center gap-2">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                        className={`text-xs font-semibold px-2 py-1 rounded-md border ${
                          lead.status === 'NEW' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : lead.status === 'APPROVED'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : lead.status === 'IN PROCESS'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                        }`}
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="FOLLOW-UP">FOLLOW-UP</option>
                        <option value="DOCUMENTS REQUIRED">DOCUMENTS REQUIRED</option>
                        <option value="IN PROCESS">IN PROCESS</option>
                        <option value="APPROVED">APPROVED</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </div>
                  </div>

                  {/* Lead Parameters */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-zinc-400 font-bold block">Facility</span>
                      <span className="font-bold text-emerald-600">{lead.loanType}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-bold block">Required Amount</span>
                      <span className="font-bold text-slate-900">₹{lead.requiredLoanAmount}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-bold block">Customer Type</span>
                      <span className="text-slate-800">{lead.customerType}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-bold block">Income / Turnover</span>
                      <span className="text-slate-800">₹{lead.incomeOrTurnover || 'N/A'}</span>
                    </div>
                  </div>

                  {/* Business & Purpose Details */}
                  {(lead.businessName || lead.purpose || lead.additionalMessage) && (
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-600 space-y-1 mt-1">
                      {lead.businessName && (
                        <div>
                          <strong>Business:</strong> {lead.businessName} ({lead.businessVintage || 'Vintage not stated'})
                        </div>
                      )}
                      {lead.purpose && (
                        <div>
                          <strong>Purpose:</strong> {lead.purpose}
                        </div>
                      )}
                      {lead.additionalMessage && (
                        <div className="italic text-slate-500">
                          &ldquo;{lead.additionalMessage}&rdquo;
                        </div>
                      )}
                      {lead.dynamicDetails && Object.keys(lead.dynamicDetails).length > 0 && (
                        <div className="pt-1 text-[11px] text-slate-500 border-t border-slate-200">
                          <strong>Dynamic Fields:</strong> {Object.entries(lead.dynamicDetails).map(([k, v]) => `${k}: ${v}`).join(' | ')}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">
                      Source: {lead.leadSource}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/91${lead.phone}?text=${encodeURIComponent(`Hello ${lead.fullName}, this is Manish Chawla / Reena Taank from Capital Consultancy following up on your ${lead.loanType} enquiry.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded font-medium flex items-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Client</span>
                      </a>
                      <a
                        href={`tel:${lead.phone}`}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded font-medium flex items-center gap-1 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Total Records: {leads.length}</span>
          <span>Capital Consultancy · Rajender Place, Delhi</span>
        </div>

      </div>
    </div>
  );
};
