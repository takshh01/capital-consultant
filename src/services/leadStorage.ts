import { LeadRecord, LeadStatus, LoanEnquiryFormData } from '../types/loan';

const STORAGE_KEY = 'capital_consultancy_leads_v1';

export function getStoredLeads(): LeadRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to read stored leads', e);
  }
  return [];
}

export function saveLead(data: LoanEnquiryFormData, leadSource = 'Website Enquiry Form'): LeadRecord {
  const currentLeads = getStoredLeads();
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const id = `CC-${year}-${randomSuffix}`;

  const dynamicClean: Record<string, string> = {};
  if (data.dynamicFields) {
    Object.entries(data.dynamicFields).forEach(([k, v]) => {
      if (v) dynamicClean[k] = String(v);
    });
  }

  const newRecord: LeadRecord = {
    id,
    createdAt: new Date().toISOString(),
    fullName: data.fullName,
    phone: data.mobileNumber,
    email: data.email,
    city: data.city,
    customerType: data.customerType,
    loanType: data.loanType,
    requiredLoanAmount: data.requiredLoanAmount,
    incomeOrTurnover: data.monthlyIncomeOrTurnover,
    businessName: data.businessName,
    businessVintage: data.businessVintage,
    purpose: data.purposeOfLoan,
    preferredContact: data.preferredContactMethod,
    additionalMessage: data.additionalMessage,
    dynamicDetails: dynamicClean,
    leadSource,
    status: 'NEW'
  };

  const updated = [newRecord, ...currentLeads];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to store lead record', e);
  }

  return newRecord;
}

export function updateLeadStatus(id: string, status: LeadStatus): void {
  const currentLeads = getStoredLeads();
  const updated = currentLeads.map(l => l.id === id ? { ...l, status } : l);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update lead status', e);
  }
}

export function exportLeadsToCsv(): void {
  const leads = getStoredLeads();
  if (leads.length === 0) {
    alert('No enquiries recorded yet.');
    return;
  }

  const headers = [
    'Lead ID',
    'Date & Time',
    'Customer Name',
    'Phone',
    'Email',
    'City',
    'Customer Type',
    'Loan Type',
    'Loan Amount',
    'Income / Turnover',
    'Business Name',
    'Business Vintage',
    'Purpose',
    'Contact Method',
    'Additional Message',
    'Lead Source',
    'Status'
  ];

  const rows = leads.map(l => [
    `"${l.id}"`,
    `"${new Date(l.createdAt).toLocaleString('en-IN')}"`,
    `"${l.fullName.replace(/"/g, '""')}"`,
    `"${l.phone}"`,
    `"${l.email.replace(/"/g, '""')}"`,
    `"${l.city.replace(/"/g, '""')}"`,
    `"${l.customerType}"`,
    `"${l.loanType}"`,
    `"₹${l.requiredLoanAmount}"`,
    `"₹${l.incomeOrTurnover}"`,
    `"${(l.businessName || '').replace(/"/g, '""')}"`,
    `"${(l.businessVintage || '').replace(/"/g, '""')}"`,
    `"${(l.purpose || '').replace(/"/g, '""')}"`,
    `"${l.preferredContact}"`,
    `"${(l.additionalMessage || '').replace(/"/g, '""')}"`,
    `"${l.leadSource}"`,
    `"${l.status}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Capital_Consultancy_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
