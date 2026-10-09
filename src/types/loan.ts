export type CustomerType = 
  | 'Business Owner'
  | 'Salaried'
  | 'Self Employed'
  | 'Professional'
  | 'Other';

export type LoanType = 
  | 'Business Loan'
  | 'MSME Loan'
  | 'CGTMSE Loan'
  | 'Mudra Loan'
  | 'Working Capital'
  | 'Machinery / Equipment Finance'
  | 'Loan Against Property'
  | 'NPA Cases'
  | 'Home Loan'
  | 'Project Finance'
  | 'Bill Discounting'
  | 'Equity Funds'
  | 'Private Funding'
  | 'Other';

export type PreferredContactMethod = 'WhatsApp' | 'Phone Call';

export interface DynamicLoanFields {
  // Business / MSME
  businessType?: string;
  monthlyTurnover?: string;
  purposeOfFunding?: string;

  // Home Loan & LAP
  propertyType?: string;
  propertyValue?: string;
  propertyLocation?: string;

  // Personal Loan
  employmentType?: string;
  existingEmi?: string;

  // Machinery Finance
  machineryType?: string;
  machineryCost?: string;

  // Project Finance / Working Capital
  projectEstimatedCost?: string;
  existingBankingLimits?: string;

  // Bill Discounting
  averageMonthlyBilling?: string;
}

export interface LoanEnquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  city: string;
  customerType: CustomerType;
  loanType: LoanType;
  requiredLoanAmount: string;
  monthlyIncomeOrTurnover: string;
  businessName: string;
  businessVintage: string;
  purposeOfLoan: string;
  preferredContactMethod: PreferredContactMethod;
  additionalMessage: string;
  dynamicFields: DynamicLoanFields;
}

export interface CallbackFormData {
  name: string;
  mobile: string;
  loanType: LoanType;
  preferredTime: string;
  message: string;
}

export type LeadStatus = 
  | 'NEW'
  | 'CONTACTED'
  | 'FOLLOW-UP'
  | 'DOCUMENTS REQUIRED'
  | 'IN PROCESS'
  | 'APPROVED'
  | 'CLOSED';

export interface LeadRecord {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  customerType: string;
  loanType: string;
  requiredLoanAmount: string;
  incomeOrTurnover: string;
  businessName: string;
  businessVintage: string;
  purpose: string;
  preferredContact: string;
  additionalMessage: string;
  dynamicDetails: Record<string, string>;
  leadSource: string;
  status: LeadStatus;
}
